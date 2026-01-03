/**
 * Extract Type
 */
type stringOnly = Extract<string | boolean | number, string>;

type fnctionOnly = Extract<string | (() => void), Function>;
