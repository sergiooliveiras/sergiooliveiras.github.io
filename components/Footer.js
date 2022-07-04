class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer is-100">
      <div class="mail-me">
        <a href="mailt:to">
          <i class='bx bx-envelope'></i>
        </a>
      </div>
      <span class="footer-copy">&#169; Sérgio Oliveira. 2022.</span>
    </footer>
    `;
  }
}

customElements.define('main-footer', Footer);


