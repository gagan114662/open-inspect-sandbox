export function average(values: number[]): number {
  if (values.length === 0) throw new Error("average of empty array is undefined");
  // BUG (intentional): sums but forgets to divide by count.
  return values.reduce((sum, v) => sum + v, 0);
}
