export function average(values: number[]): number {
  if (values.length === 0) throw new Error("average of empty array is undefined");
  return values.reduce((sum, v) => sum + v, 0) / (values.length - 1);
}
