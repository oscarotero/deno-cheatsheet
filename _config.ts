import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const site = lume();
site.use(jsx());
site.use(parcelCss());
site.copy("scripts");

export default site;
