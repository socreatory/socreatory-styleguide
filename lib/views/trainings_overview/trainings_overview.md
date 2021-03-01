title: Training Overview
description: Description

example view

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<scroll-nav>
    <nav class="navbar">
            <img class ="navbar__logo" src="/snippet/images/logos/sca_logo.svg" alt="Software Creators Academy Logo">
            <input type="checkbox" id="navbar__checkbox">
            <ul class="navbar__items">
                <li><a href="#" class="navbar__item">Schulungen</a></li>
                <li><a href="#" class="navbar__item">Über uns</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">Info</a></li>
            </ul>
            <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>

<header class="header header-color--normal">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item">Schulungen</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/lernenvondenbesten2.jpg" alt="">
        <h1 class="header__heading header__heading--centered">Alle Schulungen im Überblick</h1>
    </div>
</header>

<main>
    <div class="container__fullwidth">
        <section class="section section--home">
            <h2 class="section__title--small"><span aria-hidden>-- </span>Beliebte Schulungen</h2>
            <div class="filters">
                <input type="radio" id="all" name="trainings">
                <label for="all">Alle Schulungen</label>
                <input type="radio" id="isaqb" name="trainings">
                <label for="all">ISAQB Schulungen</label>
            </div>
            <section class="cards">
                <div class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title">Cloud Native Infrastruktur</h3>
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
                        <p class="card__price">ab 1.750 €</p>
                        <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title">Cloud Native Infrastruktur</h3>
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
                        <p class="card__price">ab 1.750 €</p>
                        <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title">Cloud Native Infrastruktur</h3>
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
                        <p class="card__price">ab 1.750 €</p>
                        <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title">Card Title</h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">ab 1.750 €</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title">Card Title</h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">ab 1.750 €</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title">Card Title</h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                        </div>
                        <div class="card__body__bottom">
                        </div>
                    </div>
                    <div class="card__footer">
                        <p class="card__price">ab 1.750 €</p>
                    </div>
                </div>
            </section>
            <a href="#" class="btn btn-type--primary btn-size--fit">Alle Schulungen</a>
        </section>

    </div>
</main>

<footer class="footer">
</footer>

```
