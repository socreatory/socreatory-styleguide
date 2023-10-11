title: Customer Proflie Edit Page
description: Customer Proflie Edit Page

## Alerts

See [All available alert styles](https://styleguide.socreatory.com/molecules/alert)

```html
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            </a>
            <input type="checkbox" id="profile__checkbox" />
            <ul role="list" aria-label="Profilbereich" class="navigation-profile">
                <li><a href="#">Profil</a></li>
                <li><a href="#">Meine Trainings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
            <label class="profile-label" for="profile__checkbox">Mein Name</label>
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
        </div>
    </nav>
</scroll-nav>

<div class="announcement">
    <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
</div>

<header class="header--breadcrumb header-color--normal">
    <div class="container container--xl">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Profil bearbeiten</li>
            </ul>
        </div>
    </div>
</header>

<main class="customer-profile-edit-page">
    <section class="container container--md container--centered">
        <div class="alert alert--info">
            <p class="alert__text"><strong>Erfolg!</strong> Vielen Dank.</p>
            <button class="alert__btn" type="button">
                <span class="icon--close"></span>
                <span class="sr-only">Schließen</span>
            </button>
        </div>
        <div class="login-form">
            <h1 class="login-form__headline">Profil bearbeiten</h1>
            <form class="form" id="#" novalidate="novalidate" action="/contact_forms" accept-charset="UTF-8" method="post">
                <input type="hidden" name="authenticity_token" value="" />
                <div class="form__field field__size--full">
                    <label class="form__label for="contact_form_name">Email</label>
                    <input class="form__input" type="text" name="contact_form[email]" id="contact_form_email" />
                </div>
                <div class="form__field field__size--full">
                    <label class="form__label" for="contact_form_name">Firmenname</label>
                    <input class="form__input" type="text" name="contact_form[email]" id="contact_form_email" />
                </div>
                <div class="form__field field__size--full">
                    <label class="form__label" for="contact_form_name">Vorname</label>
                    <input class="form__input" type="text" name="contact_form[email]" id="contact_form_email" />
                </div>
                <div class="form__field field__size--full">
                    <label class="form__label" for="contact_form_name">Nachname</label>
                    <input class="form__input" type="text" name="contact_form[email]" id="contact_form_email" />
                </div>
                <div class="button-group">
                    <input type="submit" name="commit" value="Speichern" class="btn btn-type--primary" data-disable-with="Contact form erstellen" />
                    <button type="reset" class="btn btn-type--secondary">Abbrechen</button>
                </div>
            </form>
        </div>
    </section>
    <div class="container container--md container--centered">
        <h2 class="login-form__headline">Profil löschen</h2>
        <p>
            Du kannst dein Profil bei uns ganz einfach löschen. Natürlich hast du danach keinen Zugriff mehr auf bereits absolvierte Trainings und die dazu gehörigen Zertifikate. Diese kannst du aber
            weiterhin auch anfordern unter kontakt@socreatory.com
        </p>
        <button type="reset" class="btn btn-type--primary">Profil löschen</button>
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
