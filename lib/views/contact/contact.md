title: Contact
description: Description

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Kontakt</li>
            </ul>
        </div>
        <h1 class="header__heading header__heading--centered">Nimm Kontakt zu uns auf</h1>
    </div>
</header>

<main>
    <section class="container container--md container-vertical-spacing-lg">
        <p>
            Du hast Fragen zu unseren Leistungen oder bist auf der Suche nach einer individuellen Unterstützung? Für Fragen oder Wünsche nutze den direkten Kontakt über unser Kontaktformular.
            Wir melden uns bei dir!
        </p>

        <h2 class="paragraph__h2">Deine Nachricht an uns</h2>
        <form class="form" id="new_contact_form" novalidate="novalidate" action="/contact_forms" accept-charset="UTF-8" method="post">
            <input type="hidden" name="authenticity_token" value="tPXLZMbkf1Q1ql0crdbMM0sWjRiEePOcopgX4Uxd4ekO70UI7Mn4dAhL_lp7Uwx_VXPL_g9j7iOWZQcuRmqrlw" />

            <div class="form__field field__size--half form__field--is-invalid">
                <label class="form__label form__label--required" for="contact_form_name">Name <abbr title="Pflichtfeld">*</abbr></label>
                <input class="form__input" type="text" name="contact_form[name]" id="contact_form_name" />
                <small class="form__text">Dieses Feld darf nicht leer sein</small>
            </div>

            <div class="form__field field__size--half">
                <label class="form__label form__label--required" for="contact_form_email">Email <abbr title="Pflichtfeld">*</abbr></label>
                <input class="form__input" type="email" name="contact_form[email]" id="contact_form_email" />
            </div>

            <div class="form__field field__size--full">
                <label class="form__label form__label--optional" for="contact_form_subject">Betreff</label>
                <input class="form__input" type="text" name="contact_form[subject]" id="contact_form_subject" />
            </div>

            <div class="form__field field__size--full">
                <label class="form__label form__label--required" for="contact_form_message">Nachricht <abbr title="Pflichtfeld">*</abbr></label>
                <textarea rows="8" class="form__input form__textarea" type="text" name="contact_form[message]" id="contact_form_message"></textarea>
            </div>

            <div class="form__field form__field--invisible field__size--full ">
                <label class="form__label form__label--optional" for="contact_form_nickname">Nickname</label>
                <input class="form__input" type="text" name="contact_form[nickname]" id="contact_form_nickname" />
            </div>

            <input type="submit" name="commit" value="Nachricht abschicken" class="btn btn-type--primary " data-disable-with="Contact form erstellen" />
        </form>
    </section>
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
