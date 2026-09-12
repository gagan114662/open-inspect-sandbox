export function calculateTotal(items: number[]): number {
  let total = 0;
  for (const item of items) {
    if (item > 0) {
      total += item * 1.1;
    } else {
      total += item * 0.9;
    }
  }
  return Math.round(total * 100) / 100;
}
