using HotChocolate.Execution.Configuration;

namespace Microsoft.Extensions.DependencyInjection;

public static class MutationRequestExecutorBuilderExtensions
{
    /// <summary>
    /// Enables mutation conventions which will simplify creating GraphQL mutations.
    /// </summary>
    /// <param name="builder">
    /// The request executor builder
    /// </param>
    /// <param name="applyToAllMutations">
    /// Defines if the mutation convention defaults shall be applied to all mutations.
    /// </param>
    /// <returns>
    /// The request executor builder
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// The <paramref name="builder"/> is null.
    /// </exception>
    public static IRequestExecutorBuilder AddMutationConventions(
        this IRequestExecutorBuilder builder,
        bool applyToAllMutations = false)
        => AddMutationConventions(
            builder,
            new MutationConventionOptions
            {
                ApplyToAllMutations = applyToAllMutations
            });

    /// <summary>
    /// Enables mutation conventions which will simplify creating GraphQL mutations.
    /// </summary>
    /// <param name="builder">
    /// The request executor builder
    /// </param>
    /// <param name="options">
    /// The mutation convention options.
    /// </param>
    /// <returns>
    /// The request executor builder
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// The <paramref name="builder"/> is null.
    /// </exception>
    public static IRequestExecutorBuilder AddMutationConventions(
        this IRequestExecutorBuilder builder,
        MutationConventionOptions options)
    {
        if (builder is null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder
            .ConfigureSchema(c => c.ContextData[MutationContextDataKeys.Options] = options)
            .TryAddTypeInterceptor<ErrorTypeInterceptor>()
            .TryAddTypeInterceptor<MutationConventionTypeInterceptor>();

        return builder;
    }

    /// <summary>
    /// Defines the common interface that all errors implement.
    /// To specify the interface you can either provide a interface runtime type or a HotChocolate
    /// interface schema type.
    ///
    /// This has to be used together with <see cref="ErrorAttribute"/>  or
    /// <see cref="ErrorObjectFieldDescriptorExtensions.Error"/>
    /// </summary>
    /// <param name="builder">
    /// The request executor builder
    /// </param>
    /// <typeparam name="T">
    /// The type that is used as the common interface
    /// </typeparam>
    /// <returns>
    /// The schema builder
    /// </returns>
    public static IRequestExecutorBuilder AddErrorInterfaceType<T>(
        this IRequestExecutorBuilder builder) =>
        builder.ConfigureSchema(x => x.AddErrorInterfaceType<T>());

    /// <summary>
    /// Defines the common interface that all errors implement.
    /// To specify the interface you can either provide a interface runtime type or a HotChocolate
    /// interface schema type.
    ///
    /// This has to be used together with <see cref="ErrorAttribute"/>  or
    /// <see cref="ErrorObjectFieldDescriptorExtensions.Error"/>
    /// </summary>
    /// <param name="builder">
    /// The request executor builder
    /// </param>
    /// <param name="type">
    /// The type that is used as the common interface
    /// </param>
    /// <returns>
    /// The request executor builder
    /// </returns>
    public static IRequestExecutorBuilder AddErrorInterfaceType(
        this IRequestExecutorBuilder builder,
        Type type) =>
        builder.ConfigureSchema(x => x.AddErrorInterfaceType(type));
}