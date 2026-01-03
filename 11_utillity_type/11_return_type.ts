/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<() => string>;

type FunctionSign = (x: number, y: number) => number;

type SignFunctionType = ReturnType<FunctionSign>;
