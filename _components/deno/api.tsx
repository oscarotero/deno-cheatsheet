interface Props {
  name: string;
  stable: boolean;
  deprecated?: boolean;
  deploy?: boolean;
  sync: boolean;
  type: "function" | "class" | "variable" | "type";
  mdn?: string;
  contains?: {
    name: string;
    mdn?: string;
  };
}

export default function api(
  { name, stable, deprecated, deploy, sync, type, mdn, contains }: Props,
) {
  const syncName = sync ? `${name}Sync` : undefined;

  return (
    <p>
      <Link
        text={name}
        name={contains?.name ?? name}
        stable={stable}
        type={type}
        mdn={mdn}
      />{" "}
      {!stable && <span className="badge is-unstable">unstable</span>}
      {deprecated && <span className="badge is-deprecated">deprecated</span>}
      {deploy && <span className="badge is-deploy">deploy</span>}
      {syncName && (
        <>
          {" / "}
          <Link name={syncName} text="sync" stable={stable} type="variable" />
        </>
      )}
    </p>
  );
}

interface LinkProps {
  name: string;
  text?: string;
  stable: boolean;
  mdn?: string;
  type: "function" | "class" | "variable" | "type";
}

function Link({ name, text, stable, type, mdn }: LinkProps) {
  const suffix = type === "function" ? "()" : "";
  const href = `https://doc.deno.land/deno/${
    stable ? "stable" : "unstable"
  }/~/${name}`;

  const mdnHref = mdn ? `https://developer.mozilla.org/en-US/docs${mdn}` : null;

  return (
    <a href={href} data-modal data-mdn={mdnHref}>{(text || name) + suffix}</a>
  );
}
