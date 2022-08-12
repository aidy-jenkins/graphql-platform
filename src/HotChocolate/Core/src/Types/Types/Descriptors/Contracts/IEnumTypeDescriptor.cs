using System;
using System.Collections.Generic;
using HotChocolate.Language;
using HotChocolate.Types.Descriptors.Definitions;

namespace HotChocolate.Types;

/// <summary>
/// A fluent configuration API for GraphQL enum types.
/// </summary>
public interface IEnumTypeDescriptor
    : IDescriptor<EnumTypeDefinition>
    , IFluent
{
    /// <summary>
    /// Associates the enum type with a syntax node
    /// of the parsed GraphQL SDL.
    /// </summary>
    /// <param name="enumTypeDefinition">
    /// The the type definition node.
    /// </param>
    IEnumTypeDescriptor SyntaxNode(
        EnumTypeDefinitionNode enumTypeDefinition);

    /// <summary>
    /// Defines the name the enum type shall have.
    /// </summary>
    /// <param name="value">
    /// The name value.
    /// </param>
    IEnumTypeDescriptor Name(NameString value);

    /// <summary>
    /// Defines the description that the enum type shall have.
    /// </summary>
    /// <param name="value">
    /// The description value.
    /// </param>
    IEnumTypeDescriptor Description(string value);

    /// <summary>
    /// Defines a value that should be included on the enum type.
    /// </summary>
    /// <param name="value">
    /// The value to include.
    /// </param>
    [Obsolete("Use `Value`.")]
    IEnumValueDescriptor Item<T>(T value);

    /// <summary>
    /// Defines a value that should be included on the enum type.
    /// </summary>
    /// <param name="value">
    /// The value to include.
    /// </param>
    IEnumValueDescriptor Value<T>(T value);

    /// <summary>
    /// Specifies if the enum values shall be inferred or explicitly specfied.
    /// </summary>
    /// <param name="behavior">
    /// The binding behavior.
    /// </param>
    [Obsolete("Use `BindValues`.")]
    IEnumTypeDescriptor BindItems(BindingBehavior behavior);

    /// <summary>
    /// Specifies if the enum values shall be inferred or explicitly specfied.
    /// </summary>
    /// <param name="behavior">
    /// The binding behavior.
    /// </param>
    IEnumTypeDescriptor BindValues(BindingBehavior behavior);

    /// <summary>
    /// Defines that all enum values have to be specified explicitly.
    /// </summary>
    IEnumTypeDescriptor BindValuesExplicitly();

    /// <summary>
    /// Defines that all enum values shall be inferred
    /// from the associated .Net type,
    /// </summary>
    IEnumTypeDescriptor BindValuesImplicitly();

    /// <summary>
    /// Specifies the enum name comparer that will be used to validate
    /// if an enum name represents an enum value of this type.
    /// </summary>
    /// <param name="comparer">
    /// The equality comparer for enum names.
    /// </param>
    IEnumTypeDescriptor NameComparer(IEqualityComparer<NameString> comparer);

    /// <summary>
    /// Specifies the runtime value comparer that will be used to validate
    /// if a runtime value represents a GraphQL enum value of this type.
    /// </summary>
    /// <param name="comparer">
    /// The equality comparer for enum names.
    /// </param>
    IEnumTypeDescriptor ValueComparer(IEqualityComparer<object> comparer);

    /// <summary>
    /// Annotates a directive to this type.
    /// </summary>
    /// <param name="directiveInstance">
    /// The directive that shall be annotated to this type.
    /// </param>
    /// <typeparam name="T">
    /// The type of the directive instance.
    /// </typeparam>
    IEnumTypeDescriptor Directive<T>(
        T directiveInstance)
        where T : class;

    /// <summary>
    /// Annotates a directive to this type.
    /// </summary>
    /// <typeparam name="T">
    /// The type of the directive instance.
    /// </typeparam>
    IEnumTypeDescriptor Directive<T>()
        where T : class, new();

    /// <summary>
    /// Annotates a directive to this type.
    /// </summary>
    /// <param name="name">
    /// The name of the directive.
    /// </param>
    /// <param name="arguments">
    /// The argument values that the directive instance shall have.
    /// </param>
    IEnumTypeDescriptor Directive(
        NameString name,
        params ArgumentNode[] arguments);
}
