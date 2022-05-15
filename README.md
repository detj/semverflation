> Semverflation is a software metric to track how frequently semver major of a package is bumped throughout the lifetime of the package's releases. Read the [blog post](https://www.zachleat.com/web/semverflation/).

This package is an implementation to calculate semverflation in modern JavaScript environments. It only concerns itself with npm packages that follow semver. It can run in your terminal. Or you can consume it as a library inside a JavaScript environment like a webpage or nodejs.

[Few questions that may come to your mind.](#questions)

## Installation

**Using package managers**

```sh
# npm
npm install semverflation

# yarn
yarn add semverflation

# globally
npm install -g semverflation
```

**Using CDNs like [Skypack](https://skypack.dev) in HTML**

```html
<script type="module">
  import semverflation from "https://skypack.dev/semverflation";

  // more code ensues
</script>
```

## Usage

This is a [pure ECMAScript Modules package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

### Evergreen browser

```js
import semverflation from "semverflation";

// grab the npm package
const url = new URL(`https://registry.npmjs.org/react`);
const pkg = await (await fetch(url)).json();

// pass the package, get unrounded score
const score = semverflation(pkg);

// or round to 2 decimal places
const roundScore = semverflation(pkg, { decimal: 2 });
```

### Node with [node-fetch](https://github.com/node-fetch/node-fetch)

```js
import fetch from "node-fetch";

const url = new URL(`https://registry.npmjs.org/react`);
const pkg = await (await fetch(url)).json();

const score = semverflation(pkg);
const roundScore = semverflation(pkg, { decimal: 2 });
```

### Terminal

**With npx**

```sh
npx semverflation react
29.742389879279973
```

**Globally**

```sh
semverflation react
```

**See help**

```sh
npx semverflation --help

Usage
  $ semverflation <name>

  Options
  --decimal, -d     Number of decimal places to round to
  --help, -h        Show help
  --version, -v     Show version

  Examples
  $ semverflation react --decimal 2
  29.74
```

## Questions

If you haven't read the [post written by Zach](https://www.zachleat.com/web/semverflation/), you should read it first.

### Q. What is semver?

It's a software versioning specification. [Read more](https://semver.org/).

### Q. How is semverflation useful?

Semverflation is not a metric that concludes anything in of itself. A project with high or low semverflation may have multiple different reasons. Treat it as another metric along with various other ways of gauging the quality of a software package.

### Q. What about browsers and other applications?

The scope of this utility is only limited to npm packages that are maintained following semver. Applications like browsers are out of scope and you would have to calculate semverflation of those manually using the formula.

### Q. Why do I get `not enough major versions to calculate semverfaltion` error?

Semverflation looks at how many years has passed between the latest version and v1.0.0. If number of years elapsed is less than 1, it would bail out with the above error.

### Q. What about packages that are yet to reach 1.0.0?

For such packages, semverflation would be calculated as `0`. Try running `npx semverflation axios` as an example.

## Issues or Questions?

Feel free to ask a question or report an issue. [Open an issue](https://github.com/detj/semverflation/issues/new)

## License

Code and documentation in this project are released under the [MIT License](LICENSE).
