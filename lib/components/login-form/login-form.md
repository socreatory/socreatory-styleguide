title: Login Form
description: Login Form

```html
<div class="login-form">
    <img class="login-form__image" src="/snippet/images/illustrations/iconteamrabatt.png" alt="" />
    <h1 class="login-form__headline">Socreatory Login</h1>
    <p class="login-form__text">Logge dich mit deiner E-Mail-Adresse ein.</p>

    <form class="form" id="#" novalidate="novalidate" action="/contact_forms" accept-charset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token" value="tPXLZMbkf1Q1ql0crdbMM0sWjRiEePOcopgX4Uxd4ekO70UI7Mn4dAhL_lp7Uwx_VXPL_g9j7iOWZQcuRmqrlw" />
        <div class="form__field field__size--full form__field--is-invalid">
            <label class="form__label form__label--required" for="contact_form_name">Email <abbr title="Pflichtfeld">*</abbr></label>
            <input class="form__input" type="text" name="contact_form[email]" id="contact_form_email" />
            <small class="form__text">Dieses Feld darf nicht leer sein</small>
        </div>
        <input type="submit" name="commit" value="Fortfahren mit Email" class="btn btn-type--primary " data-disable-with="Contact form erstellen" />
    </form>
</div>
```
