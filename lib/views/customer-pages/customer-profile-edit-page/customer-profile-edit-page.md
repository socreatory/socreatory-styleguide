title: Customer Proflie Edit Page
description: Customer Proflie Edit Page

## Alerts

See [All available alert styles](https://styleguide.socreatory.com/molecules/alert)

```html
<scroll-nav>
    <div class="navbar-wrapper">
        <div class="announcement">
            <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
        </div>
        <nav class="main-navigation" aria-label="Webseite Navigation">
            <a href="#" class="brand-link">
                <img class="brand-logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            </a>
            <menu-toggle hidden show-if="(max-width: 66rem)">
                <button class="burgertime" aria-controls="main-navigation" aria-expanded="true" aria-label="Toggle navigation"></button>
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
</scroll-nav>

<header class="header">
    <div class="header__wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Profil bearbeiten</li>
            </ul>
        </div>
        <h1 class="header__heading--medium header__heading--centered">Profil bearbeiten</h1>
    </div>
</header>

<main class="customer-profile-page">
        <div class="alert alert--info">
            <p class="alert__text"><strong>Erfolg!</strong> Vielen Dank.</p>
            <button class="alert__btn" type="button">
                <span class="icon--close"></span>
                <span class="sr-only">Schließen</span>
            </button>
        </div>
        <div class="login-form">
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
        <h2 class="section__title--normal m-t-2xl">Profil löschen</h2>
        <p>
            Du kannst dein Profil bei uns ganz einfach löschen. Natürlich hast du danach keinen Zugriff mehr auf bereits absolvierte Trainings und die dazu gehörigen Zertifikate. Diese kannst du aber
            weiterhin auch anfordern unter kontakt@socreatory.com
        </p>
        <button type="reset" class="btn btn-type--primary">Profil löschen</button>
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
