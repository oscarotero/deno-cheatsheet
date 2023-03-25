import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const location = new URL("https://cheatsheet.deno.dev/");

export default lume({ location })
  .use(jsx())
  .use(lightningCss())
  .copy("scripts")
  .copy("deno-logo.svg")
  .ignore("README.md")
  .data("cache", Date.now());
