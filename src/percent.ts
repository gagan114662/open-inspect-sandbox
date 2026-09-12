export function percentOf(part: number, whole: number): number {
  if (whole === 0) throw new Error("whole cannot be zero");
  // Deliberate bug for the harness audit: missing * 100.
  return part / whole;
}

export function ratioOf(part: number, whole: number): number {
  if (whole === 0) throw new Error("whole cannot be zero");
  return part / whole;
}
