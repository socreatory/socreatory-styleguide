title: Login Page Successs
description: This view shows how the login page should look like after sending the magic link

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="announcement">
            <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
        </div>
        <div class="navbar">
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
        </div>
    </nav>
</scroll-nav>

<header class="header ">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Login</li>
            </ul>
        </div>
    </div>
</header>

<main class="login-page">
    <div class="container container--centered">
        <div class="login-form">
            <img class="login-form__image" src="/snippet/images/illustrations/iconteamrabatt.png" alt="" />
            <h1 class="login-form__headline">Socreatory Login</h1>
            <p class="login-form__text--success">Vielen Dank, wir haben eine email an deine Adresse geschickt.</p>
        </div>
    </div>
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
