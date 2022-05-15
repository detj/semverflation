import semver from "semver";

function prepareVersions(pkg) {
  delete pkg.time.created;
  delete pkg.time.modified;

  let versions = Object.keys(pkg.time).filter((v) => !semver.prerelease(v));
  versions = versions.map((v) => semver.clean(v, { loose: true }));
  return versions.sort(semver.compare);
}

export function getVersions(pkg) {
  let versions = prepareVersions(pkg);
  let first = semver.minSatisfying(versions, ">=1.0.0");
  if (!first) {
    first = versions[0];
  }
  const latest = versions[versions.length - 1];
  return [first, latest];
}

export function calculateFlation(latest, years) {
  return (semver.major(latest) / years) * 10;
}
