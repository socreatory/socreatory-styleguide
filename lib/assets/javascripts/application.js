class ScrollNav extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    let c = 0;
    let currentScrollTop = 0;
    const navbar = this.querySelector("nav");

    window.addEventListener("scroll", () => {
      const a = window.scrollY;
      const b = navbar.clientHeight;

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        navbar.classList.add("scrollUp");
        console.log("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.classList.remove("scrollUp");
        console.log("scrollDown");
      }
      c = currentScrollTop;
    });
    // Element functionality written in here
  }
}
customElements.define("scroll-nav", ScrollNav);
