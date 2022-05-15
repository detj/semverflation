import { DateTime, Interval } from "luxon";

export function calculateYears(first, latest) {
  const firstDate = DateTime.fromISO(first);
  const latestDate = DateTime.fromISO(latest);
  const interval = Interval.fromDateTimes(firstDate, latestDate);
  return interval.length("years");
}
