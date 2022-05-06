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
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item">Trainings</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/Schulunguebersicht.png" alt="">
        <h1 class="header__heading header__heading--centered">Alle Trainings im Überblick</h1>
    </div>
</header>

<main>
    <div class="container__fullwidth">
        <section class="section section--home">
            <!-- <h2 class="section__title--small"><span aria-hidden>-- </span>Beliebte Schulungen</h2> -->
            <div class="filters">
                <ul class="filters__list">
                    <li class="filters__item filters__item--active"><a href="#" class="filters__link">Alle Trainings</a></li>
                    <li class="filters__item "><a href="#" class="filters__link">iSAQB Trainings</a></li>
                    <li class="filters__item filters__item--inactive">Deine Auswahl</li>
                </ul>
            </div>
            <ul class="cards">
                <li class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB Modul ARC</p>
                    </div>
                </li>
                <li class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Agile Software-Architektur</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB Modul AGILA</p>
                    </div>
                </li>
                <li class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Architecture Evaulation</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">1.400 €</p>
                        <p class="card__label">iSAQB Modul ARCEVAL</p>
                    </div>
                </li>
                <li class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Domain Driven Design</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB Modul DDD</p>
                    </div>
                </li>
                <li class="card">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Cloud Native Infrastruktur</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                    </div>
                </li>
                <li class="card">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Cloud Native Infrastruktur</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                            <div class="pills">
                                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer card__footer--isaqb">
                        <p class="card__price">2.100 €</p>
                        <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                    </div>
                </li>
                <li class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Card Title</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">2.100 €</p>
                    </div>
                </li>
                <li class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Card Title</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">1.400 €</p>
                    </div>
                </li>
                <li class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Card Title</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">2.100 €</p>
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
                        <li class="footer__link"><a href="#">Trainer:innen</a></li>
                        <li class="footer__link"><a href="#">Trainings</a></li>
                        <li class="footer__link"><a href="#">Über uns</a></li>
                    </ul>
                    <ul class="footer__links">
                        <li class="footer__link"><a href="#">Kontakt</a></li>
                        <li class="footer__link"><a href="#">Impressum</a></li>
                        <li class="footer__link"><a href="#">Datenschutz</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container__fullwidth">
            <div class="footer__content">
                <div class="footer__company">socreatory — The Software Creators’ Academy</div>
                <div class="footer__copyright">©2021</div>
            </div>
        </div>
    </div>
</footer>

```
