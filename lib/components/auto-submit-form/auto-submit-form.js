/**
 * A form that submits itself on every input change
 */
export default class AutoSubmitForm extends HTMLElement {
  connectedCallback() {
    this.classList.add("is-enhanced");
    this.submit = this.submit.bind(this);

    this.inputs.forEach((input) => {
      input.removeEventListener("change", this.submit);
      input.addEventListener("change", this.submit);
    });
  }

  submit() {
    this.form.requestSubmit();
  }

  get form() {
    return this.querySelector("form");
  }

  get inputs() {
    return this.querySelectorAll("input, select, textarea");
  }
}
