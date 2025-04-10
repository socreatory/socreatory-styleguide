title: Training Detail
description: Show Training Detail

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
<header class="header header-color--highlighted-2">
    <div class="header__wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> <a
                        href="#">Schulungen</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>
                    JavaScript</li>
            </ul>
        </div>
        <h1 class="header__heading">JavaScript verstehen und anwenden</h1>
        <p class="header__subheading">Accusantium doloremque Saepe quidem</p>
    </div>
</header>

<main class="container container--xl container-vertical-spacing-xl">
    <div class="layout-main-with-sidebar">
        <div class="layout-main-with-sidebar__main">
            <a href="#booking" class="btn btn-type--secondary  btn-anchor">Termine und Buchung</a>

            <h2 class="section__title--small"><span aria-hidden>-- </span>Beschreibung</h2>
            <h3>Evolution und Verbesserung von Software&shy;architekturen – systematisch und
                nachhaltig</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloribus laborum nisi
                non, <a href="#">lorem ipsum</a> cupiditate quo accusantium doloremque saepe quidem
                illum!
            </p>
            <img class="article__image"
                src="https://www.innoq.com/de/trainings/blockchain-verteilter-konsens/lars-hupel.jpg"
                alt="Dr. Lars Hupel im Einsatz" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid, <strong>lorem
                    ipsum</strong> reiciendis error fugit dicta tempora necessitatibus maiores nesciunt
                et, porro ipsa incidunt <em>lorem ipsum</em> asperiores perspiciatis, dolor explicabo quia
                aliquam eos nam.
            </p>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Agenda</h2>
            <ul>
                <li>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                    atque?</li>
                <li>
                    Lorem reiciendis error fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Et distinctio voluptatem fugit est beatae nisi possimus ratione, obcaecati quod
                    veniam, numquam architecto voluptate.
                </li>
                <li><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>
            </ul>
            <ol>
                <li>Lorem, ipsum dolor</li>
                <li>Lorem reiciendis error fugit</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Ihr Nutzen</h2>
            <div class="texttable">
                <p class="texttable__cell">
                    Die Kenntnis flexibler Architektur&shy;modelle ist essenziell bei
                    Moderni&shy;sierung&shy;svor&shy;haben gewachsener Systeme als auch beim Design neuer
                    Systeme auf der
                    »grünen Wiese«
                </p>
                <p class="texttable__cell">»Full-Stack«-&shy;Architektur&shy;kompetenz: vom iterativen Entwerfen
                    bis zur konti&shy;nuier&shy;lichen Auslieferung</p>
                <p class="texttable__cell">Anwendbar in allen Auf&shy;gabenfeldern der Softwarearchitektur
                    unabhängig von Technologien und Sprachen</p>
            </div>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Zielgruppe</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, magnam corrupti, enim,
                ratione id quisquam quas explicabo magni maxime commodi facilis? Illum, in ipsa?
                Ipsum dolorem dolor pariatur provident esse?
            </p>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Lernziele</h2>
            <div class="texttable">
                <p class="texttable__cell">Motivation: Schnelle IT als Wettbewerbsfaktor</p>
                <p class="texttable__cell">Gesetz von Conway: Software-Architekturen und Organisation</p>
                <p class="texttable__cell">Microservices und Self-contained Systems</p>
                <p class="texttable__cell">Domain-driven Design für Modularisierung: Bounded Context und Context
                    Maps</p>
                <p class="texttable__cell">Selbstorganisation und Architektur: Mikro- und Makro-Architekturen
                </p>
                <p class="texttable__cell">Kommunikation: REST und Messaging</p>
                <p class="texttable__cell">Event-driven Front-End-Integration</p>
                <p class="texttable__cell">Datenreplikation</p>
                <p class="texttable__cell">Verteilte Sicherheitsmechanismen</p>
                <p class="texttable__cell">Moderne Infrastrukturen mit IaaS, PaaS und Container</p>
                <p class="texttable__cell">Continuous Delivery, Delivery Pipelines und Software-Architektur</p>
                <p class="texttable__cell">Metriken und Logging</p>
                <p class="texttable__cell">Ausblick: Konsistenzmodelle und Resilience</p>
            </div>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Ihre Trainer:innen</h2>
            <div class="trainer-profile">
                <a href="#"><img class="trainer-profile__image"
                        src="/snippet/images/profiles/kim_Duggen.jpg" /></a>
                <div class="trainer-profile__content">
                    <h3 class="trainer-profile__heading"><a href="#" class="heading__link">Kim Nena Duggen</a></h3>
                    <p class="profile__company">embarc</p>
                    <p class="profile__role">Rolle</p>
                    <p class="trainer-profile__text">Kim Nena Duggen ist als Organisationsentwicklerin im Bereich
                        New Work, Selbstorganisation
                        und (IT-)Strategie in ihrem Element. Erfahrungen im Prozessmanagement und ihr Einsatz
                        als Trainerin im Bereich EAM, RE, Soft Skills, New Work sind ihr Fundament.</p>
                </div>
            </div>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Unsere Kund:innen sagen</h2>
            <div class="quote">
                <blockquote class="quote__blockquote">»Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum possimus corrupti amet.«</blockquote>
                <div class="quote__name">Alexander Trapp</div>
                <div class="quote__role">Developer IoT & Cloud bei GIB mbH</div>
            </div>

            <h2 class="section__title--small m-t-xl"><span aria-hidden>-- </span>Fachinfos und Bücher von Michael Plöd</h2>
            <div class="img-text">
                <img class="img-text__image" src="https://m.media-amazon.com/images/I/51J0mwxcCWL.jpg" />
                <div class="img-text__content">
                    <h3 class="img-text__heading">Vorgehensmuster für Softwarearchitektur</h3>
                    <p class="img-text__text">Grundlage für das Seminar ist das Buch »Vorgehensmuster für
                        Softwarearchitektur: Kombinierbare
                        Praktiken in Zeiten von Agile und Lean« (Hanser Verlag, 2019) deines Trainers Stefan Toth.
                        Das
                        Buch ist für jeden Teilnehmer im Seminarpreis enthalten (Gebundene Ausgabe und eBook).</p>
                </div>
            </div>
        </div>
        <div id="booking" class="layout-main-with-sidebar__sidebar sidebar">
            <div class="layout-main-with-sidebar__sidebar">
                <h3>Termine</h3>
                <!-- Pretix Widget -->
                <div class="pretix-widget-wrapper" event="https://pretix.eu/socreatory/adoc/">
                    <div class="pretix-widget pretix-widget-mobile">
                        <div data-v-b329ee4c="" tabindex="-1" class="resize-observer"><object aria-hidden="true"
                                tabindex="-1" type="text/html" data="about:blank"></object></div>
                        <div class="pretix-widget-loading" style="display: none;">
                            <svg width="128" height="128" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"
                                    class="pretix-widget-primary-color"></path>
                            </svg>
                        </div>
                        <!---->
                        <!---->
                        <div class="pretix-widget-event-list">
                            <!---->
                            <!---->
                            <!----><a
                                class="pretix-widget-event-list-entry pretix-widget-event-availability-green pretix-widget-event-availability-ok">
                                <div class="pretix-widget-event-list-entry-name">ADOC - Stefan Zörner</div>
                                <div class="pretix-widget-event-list-entry-date">26.–27. Juli 2021 09:30</div>
                                <div class="pretix-widget-event-list-entry-location">Online</div>
                                <div class="pretix-widget-event-list-entry-availability"><span>Jetzt buchen</span>
                                </div>
                            </a><a
                                class="pretix-widget-event-list-entry pretix-widget-event-availability-green pretix-widget-event-availability-ok">
                                <div class="pretix-widget-event-list-entry-name">ADOC</div>
                                <div class="pretix-widget-event-list-entry-date">3.–4. November 2021 09:30</div>
                                <div class="pretix-widget-event-list-entry-location">Online</div>
                                <div class="pretix-widget-event-list-entry-availability"><span>Jetzt buchen</span>
                                </div>
                            </a>
                        </div>
                        <!---->
                        <!---->
                        <div class="pretix-widget-clear"></div>
                        <div class="pretix-widget-attribution"><a href="https://pretix.eu" target="_blank"
                                rel="noopener">Event-Ticketing-Software von pretix</a></div>
                    </div>
                </div>
            </div>
            <div class="layout-main-with-sidebar__sidebar">
                <h3>Inhouse Training</h3>
                <p>Du kannst diese Training auch als inhouse-Training exklusiv bei Dir buchen. Bitte nutze dafür
                    unser Anfrage-Formular.</p>
                <a href="#" class="btn btn-type--secondary ">Jetzt anfragen</a>
            </div>
        </div>
    </div>
</main>
<aside class="container container--xl container-vertical-spacing-xl">
    <h2 class="section__title--small"><span aria-hidden>-- </span>Relevante weitere Schulungen</h2>
    <ul class="cards">
        <li>
            <div class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.
                        </p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20
                            </div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—
                            </div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span
                                    class="pill__number">10
                            </div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB® Modul ARC</p>
                    </div>
                </div>
            </div>
            <div class="card__appendix">
                <span class="icon icon--idea" role="presentation"></span>
                <p class="card__appendix__text"><b>TIPP</b> Dieser Worksho bitete dir: Fachliche Strukturierung und
                    Kundenabgleich
                    in
                    der
                    Tiefe. Teilweise Überschneidungen.
                </p>
            </div>
        </li>
        <li>
            <div class="card card--power">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.
                        </p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20
                            </div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—
                            </div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span
                                    class="pill__number">10
                            </div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB® Modul ARC</p>
                    </div>
                </div>
            </div>
            <div class="card__appendix">
                <span class="icon icon--idea" role="presentation"></span>
                <p class="card__appendix__text"><b>TIPP</b> Dieser Worksho bitete dir: Fachliche Strukturierung und
                    Kundenabgleich
                    in
                    der
                    Tiefe. Teilweise Überschneidungen.
                </p>
            </div>
        </li>
        <li>
            <div class="card card--power">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.
                        </p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20
                            </div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—
                            </div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span
                                    class="pill__number">10
                            </div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB® Modul ARC</p>
                    </div>
                </div>
            </div>
            <div class="card__appendix">
                <span class="icon icon--idea" role="presentation"></span>
                <p class="card__appendix__text"><b>TIPP</b> Dieser Worksho bitete dir: Fachliche Strukturierung und
                    Kundenabgleich
                    in
                    der
                    Tiefe. Teilweise Überschneidungen.
                </p>
            </div>
        </li>
    </ul>
</aside>
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
