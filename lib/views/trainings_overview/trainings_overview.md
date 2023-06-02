title: Training Overview
description: Description

example view

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<scroll-nav>
    <nav class="navbar">
        <img class ="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo">
        <input type="checkbox" id="navbar__checkbox">
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

<header class="header header-color--normal">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> <a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Trainings</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/Schulunguebersicht.png" alt="">
        <h1 class="header__heading header__heading--centered">Unsere Trainings im Überblick</h1>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section">
            <div class="section__1col markdown">
                <p>Hier findest Du unser komplettes Angebot. Wenn Du speziell an iSAQB®-Trainings interessiert bist, hilft Dir <a href="#">unser praktischer Modulbaukasten:</a> Mit wenigen Klicks stellst Du Dir dort Dein individuelles Trainingsprogramm zusammen.
                </p>
            </div>
        </section>
    </div>
    <div class="container__fullwidth">
        <section class="section section--home">
            <!-- <h2 class="section__title--small"><span aria-hidden>-- </span>Beliebte Schulungen</h2> -->
            <div class="filters">
                <ul class="filters__list">
                    <li class="filters__item filters__item--active"><a href="#" class="filters__link">Alle</a></li>
                    <li class="filters__item "><a href="#" class="filters__link filters__link--isaqb">iSAQB Trainings</a></li>
                    <li class="filters__item "><a href="#" class="filters__link filters__link--power">Powerworkshops</a></li>
                    <li class="filters__item filters__item--inactive">Auswahl Modulbaukasten</li>
                </ul>
            </div>
            <ul class="cards">
                <li class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
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
                    <div class="card__body card__body--isaqb">
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
                    <div class="card__body card__body--isaqb">
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
                    <div class="card__body card__body--isaqb">
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
                    <div class="card__body card__body--power">
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
        </section>

        <section class="section section--home">
            <div class="quote quote--center">
                <blockquote class="quote__blockquote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus corrupti amet.</blockquote>
                <div class="quote__name">Alexander Trapp</div>
                <div class="quote__role">Developer IoT & Cloud bei GIB mbH</div>
            </div>
        </section>

    </div>
</main>

<footer class="footer">
    <div class="footer__top">
        <div class="container__fullwidth">
            <div class="footer__content">
                <img class ="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo">
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
