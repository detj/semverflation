import fetch from "node-fetch";

export const lookup = async (
  name,
  opts = { host: "https://registry.npmjs.org" }
) => {
  const response = await fetch(new URL(`${opts.host}/${name}`));
  return response.json();
};
