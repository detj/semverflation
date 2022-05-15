#! /usr/bin/env node

import meow from "meow";
import semverflation from "../lib/semverflation.js";
import { lookup } from "./registry.js";

const cli = meow(
  `
  Usage
  $ semverflation <name>

  Options
  --decimal, -d     Number of decimal places to round to
  --help, -h        Show help
  --version, -v     Show version

  Examples
  $ semverflation react --decimal 2
  29.74
  `,
  {
    importMeta: import.meta,
    flags: {
      decimal: { type: "number", alias: "d" },
      version: { type: "boolean", alias: "v" },
      help: { type: "boolean", alias: "h" },
    },
  }
);

const stuffToDo = !!cli.input.length;

if (cli.flags.help) {
  cli.showHelp();
  exit();
}

if (cli.flags.version) {
  cli.showVersion();
  exit();
}

if (!stuffToDo) {
  cli.showHelp();
  exit();
}

if (stuffToDo) {
  const name = cli.input[0];
  const pkg = await lookup(name);
  const opts = cli.flags.decimal ? { decimal: cli.flags.decimal } : {};
  const flation = semverflation(pkg, opts);
  console.log(flation);
  exit();
}

function exit() {
  process.exit(0);
}
