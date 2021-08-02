class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Martin Peña Anzaldo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
