export default class ScrollNav extends HTMLElement {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }

  connectedCallback() {
    this.currentScrollTop = 0;
    this.currentPosition = 0;
    this.setClientHeight();
    addEventListener("resize", this.setClientHeight);
    addEventListener("scroll", this.onScroll, { passive: true });
  }

  disconnectedCallback() {
    this.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.currentScrollTop = this.scrollY;

    if (this.currentPosition < this.currentScrollTop && this.scrollY > 2 * this._clientHeight) {
      this.navbar.classList.add("scroll-down");
      this.navbar.classList.remove("scroll-up");
    } else if (this.currentPosition > this.currentScrollTop && this.scrollY > this._clientHeight) {
      this.navbar.classList.add("scroll-up");
      this.navbar.classList.remove("scroll-down");
    }

    this.currentPosition = this.currentScrollTop;
  }

  setClientHeight() {
    this._clientHeight = this.navbar.clientHeight;
  }

  get scrollY() {
    return window.scrollY;
  }

  get navbar() {
    return this.querySelector("nav");
  }
}
