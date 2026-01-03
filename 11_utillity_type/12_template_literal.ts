/**
 * Template Literal
 */
type CodeFactory = "Code Factory";

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize 첫번째 글자 대문자
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;
