title: Customer Profile Page
description: Customer Profile Page

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
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Msin Profil</li>
            </ul>
        </div>
    </div>
</header>

<main class="customer-profile-page">
    <section class="container container--md container--centered">
        <div class="alert alert--info">
            <p class="alert__text"><strong>Erfolg!</strong> Vielen Dank.</p>
            <button class="alert__btn" type="button">
                <span class="icon--close"></span>
                <span class="sr-only">Schließen</span>
            </button>
        </div>
        <dl>
            <dt>Name</dt>
            <dd>Mareike Müller</dd>

            <dt>Firma</dt>
            <dd>Superfirma</dd>

            <dt>Email</dt>
            <dd>mareike.mueller@versicherung.de</dd>
        </dl>
        <a href="#" class="btn btn-type--primary">Profil bearbeiten</a>
    </section>
</main>
<footer>
    <div class="footer__top">
        <div class="footer__top__content">
            <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            <h2>Frische Architektur direkt in deinem Postfach. Melde dich jetzt an und erfahre alle zwei Monate als erste(r) von neuen Angeboten und Themen.</h2>
            <form class="form" action="#" method="post" target="_blank">
                <div class="form__field">
                    <label class="form__label" for="cr_form-input--text8475472">Wie heißt Du? <abbr title="required">*</abbr></label>
                    <input class="form__input" type="text" name="1121423" id="cr_form-input--text8475472" />
                </div>
                <div class="form__field">
                    <label class="form__label" for="text8475487">E-Mail <abbr title="required">*</abbr></label>
                    <input class="form__input" type="email" name="email" id="text8475487" />
                </div>
            </form>
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
    <div class="footer__bottom">
        <div class="footer__bottom__content">
            <span class="footer__company">socreatory — The Software Creators’ Academy</span>
            <span class="footer__copyright">©2023</span>
        </div>
    </div>
</footer>
```
