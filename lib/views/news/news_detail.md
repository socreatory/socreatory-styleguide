title: News Detail
description: Description

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            </a>
            <a href="#" class="navigation-login">Login</a>
            <input type="checkbox" id="navbar__checkbox" />
            <div class="navigation-main">
                <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                    <li><a href="#" class="navbar__item">Trainings</a></li>
                    <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                    <li><a href="#" class="navbar__item">Preise</a></li>
                    <li><a href="#" class="navbar__item">iSAQB</a></li>
                </ul>
                <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                    <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                    <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
                </ul>
            </div>
            <label class="navbar__burger" for="navbar__checkbox"></label>
        </div>
    </nav>
</scroll-nav>

<div class="announcement">
    <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
</div>

<header class="header header-color--normal header__news">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span><a href="#">News</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>News Detail</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <h1 class="header__heading header__heading--centered">News Detail</h1>
        <div class="news__item">
            <time class="news__newsdetaildate" datetime="23-02-14"> 14.02.2023 </time>
        </div>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section">
            <div class="news__detail">
                <figure>
                    <img
                        src="https://res.cloudinary.com/socreatory/image/upload/c_limit,f_auto,q_auto,w_auto:100:1690/v1/production/pinhwn4z5q36a284dfvmqyk2yoex"
                        alt="Was auf dem Bild zu sehen ist"
                    />
                    <figcaption>Dies und das</figcaption>
                </figure>
                <p>
                    Lorem iipsum dolor sit amet consectetur. Id faucibus vitae in consectetur ornare. Quis nunc volutpat sit in mi in. Arcu leo metus fermentum orci nisl pellentesque mattis. Magnis
                    faucibus molestie tellus molestie hendrerit nibh bibendum potenti. Ligula elementum orci ut pellentesque suspendisse dui egestas. Tellus nec enim cursus ut. Sapien massa sem hac
                    tortor morbi amet morbi bibendum. Nibh pellentesque volutpat vestibulum sapien nunc facilisi egestas venenatis rutrum. Nulla ut diam praesent dui. Gravida ornare sem tincidunt
                    tortor facilisis metus. Vitae placerat quis duis vel cursus. Mauris velit pharetra cum elit adipiscing mauris elementum sapien mi.
                </p>
                <p>
                    Justo sociis amet bibendum urna arcu viverra hendrerit. Adipiscing dui tellus enim morbi. Purus diam viverra tincidunt non. Turpis pretium platea cursus tortor nulla aliquam.
                    Fermentum mattis tortor scelerisque nec nec etiam cursus vulputate. Mi sit et quis cursus nunc quam a varius. Suscipit vivamus augue sit pharetra sit enim eget viverra habitant.
                    Nec pulvinar nunc orci leo orci adipiscing. Dolor pulvinar non elementum urna in quis duis ut ac. Commodo lacus interdum et pharetra ac. Eget nisl tortor turpis et morbi magna
                    neque. Id vitae nec placerat laoreet in integer. Velit a venenatis egestas arcu dolor pulvinar faucibus nulla. Vestibulum est purus fringilla sit vestibulum feugiat. Aliquet ut
                    molestie.
                </p>
            </div>
            <a class="btn btn-type--primary btn-size--fit" href="#">Zur News Übersicht</a>
        </section>
    </div>
</main>

<footer>
    <div class="footer__top">
        <div class="footer__top__content">
            <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            <h2>Frische Architektur direkt in deinem Postfach. Melde dich jetzt an und erfahre alle zwei Monate als erste(r) von neuen Angeboten und Themen.</h2>
            <form class="form" action="#" method="post" target="_blank">
                <div class="form__field">
                    <label class="form__label" for="cr_form-input--text8475472">Wie heißt Du? <abbr title="required">*</abbr></label>
                    <input class="form__input" type="text" name="1121423" id="cr_form-input--text8475472" />
                </div>
                <div class="form__field">
                    <label class="form__label" for="text8475487">E-Mail <abbr title="required">*</abbr></label>
                    <input class="form__input" type="email" name="email" id="text8475487" />
                </div>
            </form>
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
    <div class="footer__bottom">
        <div class="footer__bottom__content">
            <span class="footer__company">socreatory — The Software Creators’ Academy</span>
            <span class="footer__copyright">©2023</span>
        </div>
    </div>
</footer>
```
