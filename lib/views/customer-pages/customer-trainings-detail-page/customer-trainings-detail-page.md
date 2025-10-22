title: Customer Trainings Detail Page
description: Customer Trainings Detail Page

```html
<div class="navbar-wrapper">
    <div class="announcement">
        <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
    </div>
    <nav class="main-navigation" aria-label="Webseite Navigation">
        <a href="#" class="brand-link">
            <img class="brand-logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <menu-toggle>
            <button class="burgertime" aria-controls="main-navigation" aria-expanded="false" aria-label="Toggle navigation"></button>
        </menu-toggle>
        <div class="navigations menu-toggle-target" id="main-navigation">
            <ul class="navigation-links" role="list" aria-label="Seitennavigation">
                <li class="navigation-link">
                    <a href="#">Trainings</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Themen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">Trainer:innen</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Leistungen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">News</a>
                </li>
                <li class="navigation-link">
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li>
                    <a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" aria-current="true">de</a>
                </li>
                <li>
                    <a lang="en" href="#" title="Switch to English" aria-label="Switch to English">en</a>
                </li>
            </ul>
            <details class="navigation-profile" name="navigation-detail">
                <summary>Profil</summary>
                <ul class="navigation-profile-links" role="list" aria-label="Magazin Untermenü">
                    <li class="navigation-profile-link">
                        <a href="#">Profil verwalten</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">Trainings</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">logout</a>
                    </li>
                </ul>
            </details>
        </div>
    </nav>
</div>

<header class="header-color--highlighted-1">
    <div class="header__wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> <a
                        href="#"> Trainingsname</a></li>
            </ul>
        </div>
        <h1 class="header__heading">Ich bin eine Headline</h1>
        <p class="header__subheading">Ich bin eine Subheadline</p>
        <p class="header__date">1.1. bis 12.2. 2024</p>
        <div class="header__logogrid">
            <div class="logogrid__left">
                <div class="pills">
                    <div class="pill"><span class="pill__label">Pill</span><span class="pill__number">20</div>
                    <div class="pill"><span class="pill__label">Pill</span><span class="pill__number">—</div>
                    <div class="pill"><span class="pill__label">Pill</span><span class="pill__number">10</div>
                </div>
            </div>
            <div class="logogrid__right">
                <div class="header__logos">
                    <img class="header__logo" src="/snippet/images/logos/embarc_logo.svg">
                    <img class="header__logo" src="/snippet/images/logos/innoq_logo.svg">
                </div>
            </div>
        </div>
    </div>
</header>
<main class="container container--xl container-vertical-spacing-lg">
    <h2 class="section__title--sub">Vorab-Checkliste</h2>
    <ol class="tile-grid--sm tile-grid-gap--base training-checklist">
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
                <div class="training-checklist__item__body">
                    <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                    <p class="training-checklist__item__caption">Wichtiger Hinweis-Text</p>
                    <a href="#" class="training-checklist__item__link">Link</a>
                </div>
            </div>
        </li>
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
                <div class="training-checklist__item__body">
                    <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                    <p>Wichtiger Hinweis-Text</p>
                    <ul>
                        <li>Node</li>
                        <li>Git</li>
                        <li>kaffee</li>
                    </ul>
                </div>
            </div>
        </li>
    </ol>
    <h2 class='section__title--sub'>Nachrichten</h2>
    <ul class='message-list tile-grid--sm tile-grid-gap--base'>
        <li class='message-list__item'>
            <h3 class='message-list__item__title'>Dein Gutscheincode für deine iSAQB® CPSA-F®-Prüfung</h3>
            <div class='message-list__item__text'>
                <p>Mit diesem Code kannst du dir unter <a href="https://www.certible.com/de/Anmeldung">https://www.certible.com/de/Anmeldung</a> deinen iSAQB® CPSA-F®-Prüfungstermin buchen: <b>[CODE]</b></p>
            </div>
        </li>
        <li class='message-list__item'>
            <h3 class='message-list__item__title'>Deine Begleitlektüre zum Training</h3>
            <div class='message-list__item__text'>
                <p>Hier bekommst du dein kostenloses Buch zum Training: https://leanpub.com/redeem/[TOKEN].
                Viel Spaß beim Stöbern!
                </p>
            </div>
        </li>
        <li class='message-list__item'>
            <h3 class='message-list__item__title'>CPSA-F® Voucher</h3>
            <div class='message-list__item__text'>
                <p>Dies ist eine lustige Nachricht
                    </p>
            </div>
        </li>
    </ul>
    <section class="tile-grid--sm tile-grid-gap--base m-t-lg">
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zeitplan</h2>
            <ul class="tuple-list">
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">MO 22.12.</span>
                    <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">DI 14.9</span>
                    <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">Mi 15.9.</span>
                    <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
            </ul>
            <p class="info-text"> Dieser Zeitplan ist unverbindlich und kann sich noch ändern. </p>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Wichtige Links</h2>
            <ul class="resource-list">
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Hinweise</h2>
            <div class="markdown-text--medium">
                <p>Hier steht ein Freitext, der weitere Hinweise enthält, die man ausfüllen kann. Oder auch nicht.</p>
            </div>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zoom Link</h2>
            <a href="">Linkslinkrechts</a>
        </div>
    </section>
    <h2 class="section__title--sub m-t-lg">Deiner Trainer:innen</h2>
    <ul class="profiles">
        <li class="profile">
            <img class="profile__image" src="/snippet/images/profiles/Arne_Landwehr.jpg">
            <h3 class="profile__name"><a href="#" class="profile__link">Arne Landwehr</a></h3>
            <p class="profile__focus">Java & Flexible Architekturen</p>
        <li class="profile">
            <img class="profile__image" src="/snippet/images/profiles/Arne_Landwehr.jpg">
            <h3 class="profile__name"><a href="#" class="profile__link">Arne Landwehr</a></h3>
            <p class="profile__focus">Java & Flexible Architekturen</p>
    </ul>
</main>
<footer>
    <div class="footer__top">
        <div class="footer__top__content">
            <div class="footer__top__content__right">
                <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg"
                    alt="Software Creators Academy Logo" />
                <h2 class="footer__headline">Folge uns auf</h2>
                <ul class="social-media-bar">
                    <li class="social-media-bar__item">
                        <a href="#" class="social-media-bar__link" title="Twitter">
                            <span class="icon icon--twitter icon--brand-primary"></span>
                            <span class="sr-only">Twitter</span>
                        </a>
                    </li>
                    <li class="social-media-bar__item">
                        <a href="#" class="social-media-bar__link" title="Mastodon">
                            <span class="icon icon--mastodon icon--brand-primary"></span>
                            <span class="sr-only">Mastodon/span>
                        </a>
                    </li>
                    <li class="social-media-bar__item">
                        <a href="#" class="social-media-bar__link" title="Linkedin">
                            <span class="icon icon--linkedin icon--brand-primary"></span>
                            <span class="sr-only">Linkedin</span>
                        </a>
                    </li>
                    <li class="social-media-bar__item">
                        <a href="#" class="social-media-bar__link" title="Bsky">
                            <span class="icon icon--bsky icon--brand-primary"></span>
                            <span class="sr-only">Bluesky</span>
                        </a>
                    </li>
                </ul>
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
            <div class="footer__top__content__left">
                <h2 class="footer__headline">Newsletter</h2>
                <p>Frische Architektur direkt in deinem Postfach. Melde dich jetzt an und erfahre alle zwei Monate als
                    erste(r) von neuen Angeboten und Themen</p>
                <form class="form" action="#" method="post" target="_blank">
                    <div class="form__field">
                        <label class="form__label" for="cr_form-input--text8475472">Wie heißt Du? <abbr
                                title="required">*</abbr></label>
                        <input class="form__input" type="text" name="1121423" id="cr_form-input--text8475472" />
                    </div>
                    <div class="form__field">
                        <label class="form__label" for="text8475487">E-Mail <abbr title="required">*</abbr></label>
                        <input class="form__input" type="email" name="email" id="text8475487" />
                    </div>
                </form>
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
