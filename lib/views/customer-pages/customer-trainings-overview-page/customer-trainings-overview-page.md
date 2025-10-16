title: Customer Trainings Overview Page
description: Customer Trainings Overview Page

```html
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

<header class="header">
    <div class="header__wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Meine Trainings</li>
            </ul>
        </div>
        <h1 class="header__heading header__heading--centered">Deine Trainings</h1>
    </div>
</header>


<main class="customer-profile-page">
<ul class="event-stripe__list">
    <li class="event-stripe event-stripe--isaqb">
        <h3 class="event-stripe__title"><a href="#">Ein tolles Training mit einem schönen langen Titel</a></h3>
        <div class="event-stripe__body">
            <div class="event-stripe__date">12. - 14.3.2022</div>
            <div class="event-stripe__avatar">
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
            </div>
            <span class="event-stripe__location">In Wursthausen mit Hans Wurst und Wurst Hans</span>
        </div>
    </li>
    <li class="event-stripe">
        <h3 class="event-stripe__title"><a class="card__link" href="#">Ein tolles Training mit einem schönen langen Titel 123</a></h3>
        <p class="event-stripe__subtitle">iSAQB® ARC</p>
        <div class="pills pills--sm">
            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--sm">20
            </div>
            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--sm">—
            </div>
            <div class="pill"><span class="pill__label">K</span><span
                    class="pill__number pill__number--sm">10
            </div>
        </div>
        <p class="event-stripe__label event-stripe__label--info">Termingarantie</p>
        <div class="event-stripe__body">
            <div class="event-stripe__date">
                <time datetime="2024-03-12">12.</time> -
                <time datetime="2024-03-14">14.3.2024</time>
            </div>
            <div class="event-stripe__avatar">
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
            </div>
            <span class="event-stripe__location">In Wursthausen mit Hans Wurst und Wurst Hans</span>
        </div>
    </li>
    <li class="event-stripe event-stripe--power">
        <h3 class="event-stripe__title"><a href="#">Ein tolles Training</a></h3>
        <div class="event-stripe__body">
            <div class="event-stripe__date">12. - 14.3.2022</div>
            <div class="event-stripe__avatar">
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
            </div>
            <span class="event-stripe__location">In Wursthausen mit Hans Wurst und Wurst Hans</span>
        </div>
    </li>
        <li class="event-stripe event-stripe--cancelled">
        <h3 class="event-stripe__title"><a class="card__link" href="#">Ein tolles Training mit einem schönen langen Titel 123</a></h3>
        <p class="event-stripe__subtitle">iSAQB® ARC</p>
        <div class="pills pills--sm">
            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--sm">20
            </div>
            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--sm">—
            </div>
            <div class="pill"><span class="pill__label">K</span><span
                    class="pill__number pill__number--sm">10
            </div>
        </div>
        <p class="event-stripe__label event-stripe__label--cancelled">Abgesagt</p>
        <div class="event-stripe__body">
            <div class="event-stripe__date">
                <time datetime="2024-03-12">12.</time> -
                <time datetime="2024-03-14">14.3.2024</time>
            </div>
            <div class="event-stripe__avatar">
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
                <img class="avatar" src="/snippet/images/illustrations/avatar-dummy.svg" />
            </div>
            <span class="event-stripe__location">In Wursthausen mit Hans Wurst und Wurst Hans</span>
        </div>
    </li>
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
