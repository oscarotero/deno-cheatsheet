interface Props {
  title: string;
  cli?: string;
  api?: string;
  stable?: boolean;
  config?: string;
}

interface Helpers {
  md: (content: string) => string;
}

export default function doc(
  { cli, api, config, stable }: Props,
  { md }: Helpers,
) {
  const configHtml = config ? md(config) : null;

  return (
    <>
      {cli && (
        <pre>
          <code>{cli}</code>
        </pre>
      )}
      {api && <Api name={api} stable={stable} />}{" "}
      {configHtml && <Config content={configHtml} />}
    </>
  );
}

interface ApiProps {
  name: string;
  stable?: boolean;
}

function Api({ name, stable }: ApiProps) {
  const href = `https://doc.deno.land/deno/${
    stable ? "stable" : "unstable"
  }/~/${name}`;

  return <a className="button" href={href} data-modal>{name}()</a>;
}

interface ConfigProps {
  content: string;
}
function Config({ content }: ConfigProps) {
  return (
    <>
      <button data-dialog className="button config-button">Config</button>
      <dialog className="config-dialog">
        <nav>
          <button arial-label="Close">✕</button>
        </nav>
        <div className="config-content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </dialog>
    </>
  );
}
