title: Trainer:innen Trainings Overview Page
description: Backend-View for Trainers shows a list of all training a trainer is giving

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

<header class="header--breadcrumb header-color--normal">
    <div class="container container--xl">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Meine Trainings</li>
            </ul>
        </div>
        <h1>Meine Trainings</h1>
    </div>
</header>

<main class="trainer-trainings-overview-page">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Datum</th>
                <th>Art</th>
                <th>Anmeldungen</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#" class="table__link">TRAINING</a></td>
                <td>1.1.2030 - 3.1.2030</td>
                <td>online</td>
                <td>7</td>
                <td><span class="status status--green">findet online statt</span></td>
            </tr>
            <tr>
                <td><a href="#" class="table__link">TRAINING</a></td>
                <td>1.1.2030 - 3.1.2030</td>
                <td>online</td>
                <td>0</td>
                <td><span class="status status--red">abgesagt</span></td>
            </tr>
            <tr>
                <td><a href="#" class="table__link">TRAINING</a></td>
                <td>1.1.2030 - 3.1.2030</td>
                <td>online</td>
                <td>0</td></td>
                <td><span class="status status--yellow">wartet auf anmeldung</span></td>
            </tr>
        </tbody>
    </table>
</main>
<footer>
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
