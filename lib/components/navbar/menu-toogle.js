export default class MenuToggle extends HTMLElement {
  connectedCallback() {
    this.button.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.expanded = this.button.getAttribute("aria-expanded") !== "true";
  }

  set expanded(expand) {
    this.button.setAttribute("aria-expanded", expand.toString());
    if (expand) {
      this.target.classList.add("is-open");
    } else {
      this.target.classList.remove("is-open");
    }
  }

  get button() {
    return this.querySelector("button");
  }

  get target() {
    return document.getElementById(this.button.getAttribute("aria-controls"));
  }
}
