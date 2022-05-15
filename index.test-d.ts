import semverflation from "./index.js";

semverflation({ time: { foo: "bar" } });
semverflation({ time: { foo: "bar" }, version: "1.0.0", name: "foobar" });
semverflation({ time: { foo: "bar" } }, { decimal: 2 });
