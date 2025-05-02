title: Training Overview
description: Description

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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

<header class="hero">
    <div class="hero_grid-wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Trainings</li>
            </ul>
        </div>
        <h1 class="hero__heading m-t-lg">Trainings für <span class="marker-highlight">Softwarearchitektur</span> und <span class="marker-highlight">-entwicklung</span>, Präsenz und Online.</h1>
        <p class="hero__text">
            Hier findest Du unser komplettes Angebot. Wenn Du speziell an iSAQB®-Trainings interessiert bist, hilft Dir <a href="#">unser praktischer Modulbaukasten:</a> Mit wenigen Klicks stellst Du Dir dort Dein individuelles Trainingsprogramm zusammen.
        </p>
        <div class="hero__isaqb__wrapper">
            <a href="#"><img class="hero__isaqb" src="/snippet/images/logos/isaqb.svg" /></a>
            <span class="hero__logos__caption">akkreditierter Partner</span>
        </div>
        <div class="m-t-sm">
            <h3 class="textcolumn__heading">
                Unser aktueller Schulungskatalog
            </h3>
            <a href="#" class="btn btn--cta m-t-sm">PDF herunterladen</a>
        </div>
    </div>
    <div class="hero_grid-wrapper">
        <img class="hero__image" src="/snippet/images/illustrations/Schulunguebersicht.png" alt="" />
    </div>
</header>

<main>
    <section class="container container--xl container-vertical-spacing-xl container--centered">
        <auto-submit-form>
            <form class="filter-dropdown">
                <label class="filter-dropdown-label" for="filter">Thema wählen:</label>
                <select name="filter-dropdown" id="filter" class="filter-dropdown-select">
                    <option value="all">Alles</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
                <button type="submit" class="btn btn--xsmall">Filtern</button>
            </form>
        </auto-submit-form>
        <ul class="filters__list">
            <li class="filters__item filters__item--active">Alle</li>
            <li class="filters__item filters__item--socreatory">Socreatory Training</li>
            <li class="filters__item filters__item--isaqb">iSAQB Trainings</li>
            <li class="filters__item filters__item--power">Powerworkshop</li>
        </ul>
        <ul class="cards m-t-lg">
            <li class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                        <div>
                            <p class="card__label">iSAQB® Modul ARC</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                        <div>
                            <p class="card__label">iSAQB® Modul ARC</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Evolution und Verbesserung von Softwarearchitekturen</a></h3>
                        <p class="card__text">Mit Domain-driven Design, Event Storming und ML Design Canvas AI-Produkte entwerfen.</p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                        <div>
                            <p class="card__label">iSAQB® Modul ARC</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                        </div>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">ab 2.100 €</p>
                        </div>
                        <div>
                            <p class="card__label">iSAQB® Modul ARC</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card card--power">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Leichtgewichtige Architekturdokumentation</a></h3>
                        <p class="card__text">Softwarearchitekturen festhalten und kommunizieren</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">700 €</p>
                        </div>
                        <div>
                            <p class="card__label">Powerworkshop</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card">
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Evolution und Verbesserung von Softwarearchitekturen</a></h3>
                        <p class="card__text">Mit Domain-driven Design, Event Storming und ML Design Canvas AI-Produkte entwerfen.</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card">
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Docker und Kubernetes Hands-On</a></h3>
                        <p class="card__text">Technische Hintergründe und Konzepte hinter Docker und Kubernetes</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card">
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Data Mesh: Einführung</a></h3>
                        <p class="card__text">Training für Softwarearchitekt:innen und Datenexpert:innen</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">auf Anfrage</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card">
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Advanced Product Owner</a></h3>
                        <p class="card__text">Verantwortung für den vollen Produktzyklus</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <h2 class="section__title--normal m-t-xl">Unsere Themen in der Übersicht</h2>
        <ul class="topic-list">
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Archotekturdokumentation
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Data & AI
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Doman-Driven Design
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Softwarearchitektur: Grundlagen
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">

                    Security
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Security
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Security
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Security
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Security
                    </a>
                </li>
            <li class="topic-list__item">
                <a href="#">
                    <img class="" src="/snippet/images/illustrations/iconfernglas.svg" />
                    Security
                    </a>
                </li>
        </ul>
        <div class="teaser m-t-2xl">
            <div class="teaser__column">
                <h2 class="section__title--normal">Deine Trainer:innen</h2>
                <p class="teaser__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                </p>
                <a href="#" class="btn btn--cta">Alle Trainer:innen ansehen</a>
            </div>
            <div class="teaser__column">
                <a href="#">
                    <img class="" src="/snippet/images/trainerinnenkachel.webp" />
                </a>
            </div>
        </div>
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
