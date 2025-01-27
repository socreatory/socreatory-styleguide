export default class MenuToggle extends HTMLElement {
  connectedCallback() {
    this.button.addEventListener("click", this.toggle.bind(this));

    if (this.hasAttribute("show-if")) {
      this.showIfQuery = window.matchMedia(this.getAttribute("show-if"));
      this.showIfQuery.addEventListener("change", this.checkVisibility.bind(this));
      this.checkVisibility();

      if (this.showIfQuery.matches) {
        this.expanded = false;
      }
    } else {
      this.expanded = false;
    }
  }

  checkVisibility() {
    if (this.showIfQuery.matches) {
      this.removeAttribute("hidden");
      this.expanded = false;
    } else {
      this.setAttribute("hidden", "");
      this.expanded = true;
    }
  }

  toggle() {
    this.expanded = this.button.getAttribute("aria-expanded") !== "true";
  }

  set expanded(expand) {
    this.button.setAttribute("aria-expanded", expand.toString());
    if (expand) {
      this.target.removeAttribute("hidden");
    } else {
      this.target.setAttribute("hidden", "");
    }
  }

  get button() {
    return this.querySelector("button");
  }

  get target() {
    return document.getElementById(this.button.getAttribute("aria-controls"));
  }
}
