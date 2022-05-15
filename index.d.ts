export type SemverflationOpts = {
  decimal: number;
};

interface Package {
  time: { [key: string]: string };
  [x: string]: unknown;
}

/**
 * Calculate semverflation score of an npm package
 *
 * @param pkg   - npm registry package object
 * @param opts  - options to control the calculation
 * @returns semverflation score of the package
 */
export default function semverflation(
  pkg: Package,
  opts?: SemverflationOpts
): number;
