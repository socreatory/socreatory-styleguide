title: Login Page Successs
description: This view shows how the login page should look like after sending the magic link

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<scroll-nav>
    <nav class="navbar">
        <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Socreatory Logo" />
        <input type="checkbox" id="navbar__checkbox" />
        <ul class="navbar__items">
            <li><a href="#" class="navbar__item">Trainings</a></li>
            <li><a href="#" class="navbar__item">Trainer:innen</a></li>
            <li><a href="#" class="navbar__item">Preise</a></li>
            <li><a href="#" class="navbar__item">iSAQB</a></li>
            <ul class="language__items">
                <li><a href="#" class="language__item">DE</a></li>
                <li><a href="#" class="language__item">EN</a></li>
            </ul>
        </ul>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>

<main>
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
            <p class="login-form__text--success">Vielen Dank, wir haben eine email an deine Adresse geschickt.</p>
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
