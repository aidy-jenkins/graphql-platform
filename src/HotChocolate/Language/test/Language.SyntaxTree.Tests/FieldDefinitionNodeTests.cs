using Xunit;
using static HotChocolate.Language.Utf8GraphQLParser.Syntax;

namespace HotChocolate.Language.SyntaxTree;

public class FieldDefinitionNodeTests
{
    [Fact]
    public void Equals_FieldDefinitionNode_When_Both_Are_Equal()
    {
        // arrange
        FieldDefinitionNode a = ParseFieldDefinition("foo(a: String): String @bar");
        FieldDefinitionNode b = ParseFieldDefinition("foo(a: String): String @bar");

        // act
        var success = SyntaxComparer.BySyntax.Equals(a, b);

        // assert
        Assert.True(success);
    }

    [Fact]
    public void Equals_With_Same_Location()
    {
        var a = ParseFieldDefinition("foo(a: String): String @bar");
        var b = ParseFieldDefinition("foo(a: String): String @bar");
        var c = ParseFieldDefinition("bar(a: String): String @bar");

        // act
        var abResult = SyntaxComparer.BySyntax.Equals(a, b);
        var aaResult = SyntaxComparer.BySyntax.Equals(a, a);
        var acResult = SyntaxComparer.BySyntax.Equals(a, c);
        var aNullResult = SyntaxComparer.BySyntax.Equals(a, default);

        // assert
        Assert.True(abResult);
        Assert.True(aaResult);
        Assert.False(acResult);
        Assert.False(aNullResult);
    }

    [Fact]
    public void Equals_With_Different_Location()
    {
        // arrange
        var a = ParseFieldDefinition("foo(a: String): String @bar");
        var b = ParseFieldDefinition("   foo  (a : String): String @bar");
        var c = ParseFieldDefinition("bar(a: String): String @bar");

        // act
        var abResult = SyntaxComparer.BySyntax.Equals(a, b);
        var aaResult = SyntaxComparer.BySyntax.Equals(a, a);
        var acResult = SyntaxComparer.BySyntax.Equals(a, c);
        var aNullResult = SyntaxComparer.BySyntax.Equals(a, default);

        // assert
        Assert.True(abResult);
        Assert.True(aaResult);
        Assert.False(acResult);
        Assert.False(aNullResult);
    }

    [Fact]
    public void GetHashCode_With_Location()
    {
        // arrange
        var a = ParseFieldDefinition("foo(a: String): String @bar");
        var b = ParseFieldDefinition("   foo  (a : String): String @bar");
        var c = ParseFieldDefinition("bar(a: String): String @bar");
        var d = ParseFieldDefinition("   bar  (a : String): String @bar");

        // act
        var aHash = SyntaxComparer.BySyntax.GetHashCode(a);
        var bHash = SyntaxComparer.BySyntax.GetHashCode(b);
        var cHash = SyntaxComparer.BySyntax.GetHashCode(c);
        var dHash = SyntaxComparer.BySyntax.GetHashCode(d);

        // assert
        Assert.Equal(aHash, bHash);
        Assert.NotEqual(aHash, cHash);
        Assert.Equal(cHash, dHash);
        Assert.NotEqual(aHash, dHash);
    }
}
