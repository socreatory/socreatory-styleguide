export default class ScrollNav extends HTMLElement {
  connectedCallback() {
    this.currentScrollTop = 0;
    this.currentPosition = 0;
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll() {
    this.currentScrollTop = this.scrollY;

    if (this.currentPosition < this.currentScrollTop && this.scrollY > 2 * this.clientHeight) {
      this.navbar.classList.add("scroll-down");
      this.navbar.classList.remove("scroll-up");
    } else if (this.currentPosition > this.currentScrollTop && this.scrollY > this.clientHeight) {
      this.navbar.classList.add("scroll-up");
      this.navbar.classList.remove("scroll-down");
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
