import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const location = new URL("https://oscarotero.com/deno/");

export default lume({ location })
  .use(jsx())
  .use(parcelCss())
  .copy("scripts")
  .copy("deno-logo.svg")
  .ignore("README.md")
  .data("cache", Date.now())
  .script(
    "deploy",
    "lume",
    "rsync -r _site/ oscarotero@oscarotero.com:~/www/deno",
  );
