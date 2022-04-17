import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const site = lume({
  location: new URL("https://oscarotero.com/deno/")
});

site.use(jsx());
site.use(parcelCss());
site.copy("scripts");
site.copy("deno-logo.svg");
site.ignore("README.md");

site.script(
  "deploy",
  "lume",
  "rsync -r _site/ oscarotero@oscarotero.com:~/www/deno",
);

export default site;
