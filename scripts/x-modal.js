class XModal extends HTMLElement {
  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
    <style>
    dialog[open] {
      width: min(1600px, calc(100vw - 20px));
      height: calc(100vh - 20px);
      padding: 0;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 1em 1em .5em .5em;
      border: none;
    }
    ::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    iframe {
      border: none;
      display: block;
      width: 100%;
      height: 100%;
    }
    nav {
      display: flex;
      align-items: center;
      background: var(--color-nav-bg);
      color: var(--color-nav);
      column-gap: 1em;
      padding: .5em 1.5em;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    a {
      color: inherit;
    }
    a:hover {
      text-decoration: none;
    }
    button {
      width: 2em;
      height: 2em;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      color: inherit;
      font-size: 1em;
      cursor: pointer;
      border-radius: 50%;
      margin-left: auto;
    }
    button:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    </style>
    <dialog>
      <nav>
        <ul></ul>
        <button arial-label="Close">✕</button>
      </nav>
      <iframe></iframe>
    </dialog>
    `;

    const dialog = this.shadow.querySelector("dialog");
    const close = this.shadow.querySelector("button");

    close.addEventListener("click", () => dialog.close());
  }

  open(url, tabs = {}) {
    const iframe = this.shadow.querySelector("iframe");
    const dialog = this.shadow.querySelector("dialog");

    iframe.setAttribute("src", url);

    const ul = this.shadow.querySelector("ul");
    const code = [];

    for (const [name, url] of Object.entries(tabs)) {
      code.push(`<li><a href="${url}" target="_blank">${name}</a></li>`);
    }

    ul.innerHTML = code.join("");

    dialog.showModal();
  }
}

customElements.define("x-modal", XModal);
