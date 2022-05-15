export function round(flation, places) {
  const factor = 10 ** places;
  return Math.round(flation * factor) / factor;
}
