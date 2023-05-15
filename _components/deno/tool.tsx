interface Props {
  cli: string;
  links?: {
    text: string;
    url: string;
  }[];
}

export default function doc({ cli, links }: Props) {
  return (
    <>
      <pre>
        <code>{cli}</code>
      </pre>
      {
        links?.map((link) => 
          <a href={link.url} data-modal>{link.text}</a>
        )
      }
    </>
  );
}
