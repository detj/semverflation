import test from "ava";
import semverflation from "../lib/semverflation.js";
import { readFile } from "node:fs/promises";

const data = JSON.parse(
  await readFile(new URL("./data.json", import.meta.url), {
    encoding: "utf-8",
  })
);

test("calculates semverflation", (t) => {
  t.is(semverflation(data.react), 29.742389879279973);
  t.is(semverflation(data.lodash), 5.35104721256331);
});

test("rounds up to decimal places", (t) => {
  t.is(semverflation(data.react, { decimal: 2 }), 29.74);
});

test("fails on insufficient major versions", (t) => {
  const error = t.throws(() => semverflation(data.mkdirp));
  t.true(error.message.includes("not enough major versions"));
});

test("handles <1.0.0 cases appropriately", (t) => {
  t.is(semverflation(data.axios), 0);
});
