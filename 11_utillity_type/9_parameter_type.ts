/**
 * Parameter Type
 */
function sampleFunction(x: number, y: SVGStringList, z: boolean) {}

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one: number) => void>;
