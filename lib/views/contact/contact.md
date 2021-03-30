title: Kontakt
description: Description

example view

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<scroll-nav>
    <nav class="navbar">
        <img class ="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo">
        <input type="checkbox" id="navbar__checkbox">
        <ul class="navbar__items">
            <li><a href="#" class="navbar__item">Schulungen</a></li>
            <li><a href="#" class="navbar__item">Trainer:innen</a></li>
            <li><a href="#" class="navbar__item">Preise</a></li>
            <li><a href="#" class="navbar__item">iSAQB</a></li>
        </ul>
        <label class="navbar__burger" for="navbar__checkbox"></label>
</nav>
</scroll-nav>

<header class="header header-color--normal">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item">Kontakt</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <!-- <img class="header__image" src="/snippet/images/illustrations/softwarearchitektur.png" alt=""> -->
        <h1 class="header__heading header__heading--centered">Nimm Kontakt zu uns auf</h1>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section">
            <div class="section__1col markdown">
                <p>Du hast Fragen zu unseren Leistungen oder bist auf der Suche nach einer individuellen Unterstützung? Für Fragen oder Wünsche nutze den direkten Kontakt per Mail oder über unser Kontaktformular. Wir melden uns bei dir!</p>
            </div>
        </section>
    </div>
    <div class="container__centered">
        <section class="section">
            <h2 class="paragraph__h2">Deine Nachricht an uns</h2>
            <form class="form" id="new_contact_form" novalidate="novalidate" action="/contact_forms" accept-charset="UTF-8" method="post">
                <input type="hidden" name="authenticity_token" value="tPXLZMbkf1Q1ql0crdbMM0sWjRiEePOcopgX4Uxd4ekO70UI7Mn4dAhL_lp7Uwx_VXPL_g9j7iOWZQcuRmqrlw">

                <div class="form__field field__size--half form__field--is-invalid">
                  <label class="form__label form__label--required" for="contact_form_name">Name <abbr title="Pflichtfeld">*</abbr></label>
                  <input class="form__input" type="text" name="contact_form[name]" id="contact_form_name">
                  <small class="form__text">Dieses Feld darf nicht leer sein</small>
                </div>

                <div class="form__field field__size--half">
                  <label class="form__label form__label--required" for="contact_form_email">Email <abbr title="Pflichtfeld">*</abbr></label>
                  <input class="form__input" type="email" name="contact_form[email]" id="contact_form_email">
                </div>

                <div class="form__field field__size--full">
                  <label class="form__label form__label--optional" for="contact_form_subject">Betreff</label>
                  <input class="form__input" type="text" name="contact_form[subject]" id="contact_form_subject">
                </div>

                <div class="form__field field__size--full">
                  <label class="form__label form__label--required" for="contact_form_message">Nachricht <abbr title="Pflichtfeld">*</abbr></label>
                  <textarea rows="8" class="form__input form__textarea" type="text" name="contact_form[message]" id="contact_form_message"></textarea>
                </div>

                <div class="form__field form__field--invisible field__size--full ">
                  <label class="form__label form__label--optional" for="contact_form_nickname">Nickname</label>
                  <input class="form__input" type="text" name="contact_form[nickname]" id="contact_form_nickname">
                </div>

                <input type="submit" name="commit" value="Nachricht abschicken" class="btn btn-type--primary btn-size--fit" data-disable-with="Contact form erstellen">
              </form>
        </section>
    </div>
</main>

<footer class="footer">
    <div class="footer__top">
        <div class="container__fullwidth">
            <div class="footer__content">
                <img class ="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo">
                <div class="footer__linkarea">
                    <ul class="footer__links">
                        <li class="footer__link"><a href="#">Trainer:innen</a></li>
                        <li class="footer__link"><a href="#">Trainings</a></li>
                        <li class="footer__link"><a href="#">Über uns</a></li>
                    </ul>
                    <ul class="footer__links">
                        <li class="footer__link"><a href="#">Kontakt</a></li>
                        <li class="footer__link"><a href="#">Impressum</a></li>
                        <li class="footer__link"><a href="#">Datenschutz</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container__fullwidth">
            <div class="footer__content">
                <div class="footer__company">SOCREATORY — The Software Creators’ Academy</div>
                <div class="footer__copyright">©2021</div>
            </div>
        </div>
    </div>
</footer>

```
