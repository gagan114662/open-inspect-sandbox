export function percentOf(part: number, whole: number): number {
  if (whole === 0) throw new Error("whole cannot be zero");
  return (part / whole) * 100;
}

export function ratioOf(part: number, whole: number): number {
  if (whole === 0) throw new Error("whole cannot be zero");
  return part / whole;
}
