class ScrollNav extends HTMLElement {
  connectedCallback() {
    this.currentScrollTop = 0;
    this.currentPosition = 0;
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll() {
    this.currentScrollTop = this.scrollY;

    if (this.currentPosition < this.currentScrollTop && this.scrollY > (2 * this.clientHeight)) {
      this.navbar.classList.add("scrollUp");
    } else if (this.currentPosition > this.currentScrollTop && this.scrollY > this.clientHeight) {
      this.navbar.classList.remove("scrollUp");
    }

    this.currentPosition = this.currentScrollTop;
  }

  get scrollY() {
    return window.scrollY;
  }

  get clientHeight() {
    return this.navbar.clientHeight;
  }

  get navbar() {
    return this.querySelector("nav");
  }
}

customElements.define("scroll-nav", ScrollNav);
