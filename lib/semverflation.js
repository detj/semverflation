import { getVersions, calculateFlation } from "./version.js";
import { round } from "./math.js";
import { calculateYears } from "./time.js";

export default function semverflation(pkg, opts = { decimal: 0 }) {
  const [first, latest] = getVersions(pkg);
  const years = calculateYears(pkg.time[first], pkg.time[latest]);

  if (years < 1) {
    throw new Error(
      `not enough major versions to calculate semverflation for "${pkg.name}".`
    );
  }

  let flation = calculateFlation(latest, years);

  if (opts.decimal > 0) {
    flation = round(flation, opts.decimal);
  }

  return flation;
}
