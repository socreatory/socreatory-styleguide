title: News
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
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> News</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/news.png" alt="">
        <h1 class="header__heading header__heading--centered">Unsere News</h1>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section">
            <div class="news__block">
                <div class="news__item">
                    <time class="news__newsdate" datetime="23-02-14">
                        14.02.2023
                    </time>
                    <h2 class="news__newsheadline"><a href="#">
                        socreatory weiß wo es langgeht
                    </a></h2>
                </div>
                <div class="news__item">
                    <time class="news__newsdate" datetime="23-02-14">
                        <span>14.02.2023</span>
                    </time>
                    <h2 class="news__newsheadline"><a href="#">
                        Das ganze Leben ist ein Quiz – und wir sind nur die Kanidaten
                    </a></h2>
                </div>
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
