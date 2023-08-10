title: Login Page
description: This view shows how the login page should look like

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<scroll-nav>
    <nav class="navbar">
        <a href="#" class="navbar__brand-link">
            <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <a href="#" class="navigation-login">Login</a>
        <input type="checkbox" id="navbar__checkbox" />
        <div class="navigation-main">
            <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                <li><a href="#" class="navbar__item">Trainings</a></li>
                <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">iSAQB</a></li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
            </ul>
        </div>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>

<main class="login-page">
    <header class="header header-color--normal">
        <div class="container__fullwidth">
            <div class="breadcrumb">
                <ul class="breadcrumb__list">
                    <li class="breadcrumb__item"><a href="#">Home</a></li>
                    <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Login</li>
                </ul>
            </div>
        </div>
    </header>
    <div class="container">
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
                <input type="submit" name="commit" value="Fortfahren mit Email" class="btn btn-type--primary btn-size--full" data-disable-with="Contact form erstellen" />
            </form>
        </div>
    </div>
</main>

<footer class="footer">
    <div class="footer__top">
        <div class="container__fullwidth">
            <div class="footer__content">
                <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
                <div class="footer__linkarea">
                    <ul class="footer__links">
                        <li class="footer__link"><a href="#">Trainings</a></li>
                        <li class="footer__link"><a href="#">Trainer:innen</a></li>
                        <li class="footer__link"><a href="#">Modulbaukasten</a></li>
                        <li class="footer__link"><a href="#">News</a></li>
                    </ul>
                    <ul class="footer__links">
                        <li class="footer__link"><a href="#">Impressum</a></li>
                        <li class="footer__link"><a href="#">Datenschutz</a></li>
                        <li class="footer__link"><a href="#">AGB</a></li>
                        <li class="footer__link"><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container__fullwidth">
            <div class="footer__content">
                <div class="footer__company">socreatory — The Software Creators’ Academy</div>
                <div class="footer__copyright">©2023</div>
            </div>
        </div>
    </div>
</footer>
```
