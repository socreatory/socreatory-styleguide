title: Form
description: Form

```html
<form class="form" id="new_contact_form" novalidate="novalidate" action="/contact_forms" accept-charset="UTF-8" method="post">
    <input type="hidden" name="authenticity_token" value="tPXLZMbkf1Q1ql0crdbMM0sWjRiEePOcopgX4Uxd4ekO70UI7Mn4dAhL_lp7Uwx_VXPL_g9j7iOWZQcuRmqrlw" />

    <div class="form__field field__size--half form__field--is-invalid">
        <label class="form__label form__label--required" for="contact_form_name">Name <abbr title="Pflichtfeld">*</abbr></label>
        <input class="form__input" type="text" name="contact_form[name]" id="contact_form_name" />
        <small class="form__text">Dieses Feld darf nicht leer sein</small>
    </div>

    <div class="form__field field__size--half">
        <label class="form__label form__label--required" for="contact_form_email">Email <abbr title="Pflichtfeld">*</abbr></label>
        <input class="form__input" type="email" name="contact_form[email]" id="contact_form_email" />
    </div>

    <div class="form__field field__size--full">
        <label class="form__label form__label--optional" for="contact_form_subject">Betreff</label>
        <input class="form__input" type="text" name="contact_form[subject]" id="contact_form_subject" />
    </div>

    <div class="form__field field__size--full">
        <label class="form__label form__label--required" for="contact_form_message">Nachricht <abbr title="Pflichtfeld">*</abbr></label>
        <textarea rows="8" class="form__input form__textarea" type="text" name="contact_form[message]" id="contact_form_message"></textarea>
    </div>

    <div class="form__field form__field--invisible field__size--full ">
        <label class="form__label form__label--optional" for="contact_form_nickname">Nickname</label>
        <input class="form__input" type="text" name="contact_form[nickname]" id="contact_form_nickname" />
    </div>

    <input type="submit" name="commit" value="Nachricht abschicken" class="btn btn-type--primary btn-size--fit" data-disable-with="Contact form erstellen" />
</form>
```
