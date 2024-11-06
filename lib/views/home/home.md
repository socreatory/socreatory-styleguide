title: Homepage
description: Homepage

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="announcement">
            <p class="announcement__text">Diesen Juli haben wir ein Trainings-Spezialevent in der Therme Erding für euch
                – Mehr dazu
                <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get
                    ice cream for free</a>
            </p>
        </div>
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg"
                    alt="Software Creators Academy Logo" />
            </a>
            <a href="#" class="navigation-login">Login</a>
            <input type="checkbox" id="navbar__checkbox" />
            <div class="navigation-main">
                <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                    <li><a href="#" class="navbar__item">Trainings</a></li>
                    <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                    <li><a href="#" class="navbar__item">Preise</a></li>
                    <li><a href="#" class="navbar__item">iSAQB</a></li>
                    <li><a href="#" class="navbar__item">Über uns</a></li>
                </ul>
                <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                    <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln"
                            class="navigation-meta__item">DE</a></li>
                    <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English"
                            aria-current="true" class="navigation-meta__item">EN</a></li>
                </ul>
            </div>
            <label class="navbar__burger" for="navbar__checkbox"></label>
        </div>
    </nav>
</scroll-nav>
<header class="hero">
    <div class="hero_grid-wrapper">
        <h1 class="hero__heading">Unsere Mission: <span class="marker-highlight">Softwarearchitektur</span> von den
            Besten lernen!</h1>
        <p class="hero__text">
            Für Menschen, die sich nicht nur weiterbilden, sondern auch weiterkommen wollen. Wir sind Expert:innen, die
            nicht nur Fachwissen, sondern auch ihre reiche Praxiserfahrung an euch
            weitergeben können. Wir sind Trainer:innen, die Fachbücher nicht nur gelesen, sondern selbst geschrieben
            haben. Willkommen bei socreatory, der Software Creator’s Academy.
        </p>
        <div class="hero__isaqb__wrapper">
            <a href="#"><img class="hero__isaqb" src="/snippet/images/logos/isaqb.svg" /></a>
            <span class="hero__logos__caption">akkreditierter Partner</span>
        </div>
        <a href="#" class="btn btn--cta btn--lg">Unsere Trainings</a>
    </div>

    <div class="hero_grid-wrapper">
        <img class="hero__image" src="/snippet/images/illustrations/Lernenvondenbesten.png" alt="" />
        <div class="hero__logos">
            <span class="hero__logos__caption"> Eine Kooperation von</span>
            <div class="hero__logos__wrapper">
                <a href="#"><img class="hero__logo" src="/snippet/images/logos/embarc_logo.svg" /></a>
                <a href="#"><img class="hero__logo" src="/snippet/images/logos/innoq_logo.svg" /></a>
            </div>
        </div>
    </div>
</header>

<main>
    <section class="container container--xl container-vertical-spacing-xl">
        <h2 class="section__title--normal">Beliebte Schulungen</h2>
        <ul class="legend__list">
            <li class="legend__item legend__item--socreatory">Socreatory Training</li>
            <li class="legend__item legend__item--isaqb">iSAQB Trainings</li>
            <li class="legend__item legend__item--power">Powerworkshop</li>
        </ul>
        <ul class="cards m-t-sm">
            <li class="card card--isaqb">
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            sisit.
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
                        <div>
                            <p class="card__price">2.100 €</p>
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
                        <h3 class="card__title"><a href="#" class="card__link">Leichtgewichtige
                                Architekturdokumentation</a>
                        </h3>
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
                        <h3 class="card__title"><a href="#" class="card__link">Evolution und Verbesserung von
                                Softwarearchitekturen</a></h3>
                        <p class="card__text">Mit Domain-driven Design, Event Storming und ML Design Canvas
                            AI-Produkte
                            entwerfen.</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="card card--isaqb">
                <div class="card__body ">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                            sisit.
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
                        <div>
                            <p class="card__price">2.100 €</p>
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
                        <h3 class="card__title"><a href="#" class="card__link">Leichtgewichtige
                                Architekturdokumentation</a>
                        </h3>
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
                        <h3 class="card__title"><a href="#" class="card__link">Evolution und Verbesserung von
                                Softwarearchitekturen</a></h3>
                        <p class="card__text">Mit Domain-driven Design, Event Storming und ML Design Canvas
                            AI-Produkte
                            entwerfen.</p>
                    </div>
                    <div class="card__body__bottom">
                        <div>
                            <p class="card__price">2.100 €</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <a href="#" class="btn btn--cta">Alle Schulungen</a>
        <div class="container--2-col m-t-lg">
            <div class="event-stripe__wrapper">
                <h2 class="section__title--normal">Early Birds</h2>
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
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
                    </li>
                    <li class="event-stripe">
                        <h3 class="event-stripe__title"><a href="#">Ein tolles Training mit einem schönen langen Titel 123</a></h3>
                        <p class="event-stripe__subtitle">iSAQB® ARC</p>
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
                        <div class="pills pills--sm">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--sm">20
                            </div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--sm">—
                            </div>
                            <div class="pill"><span class="pill__label">K</span><span
                                    class="pill__number pill__number--sm">10
                            </div>
                        </div>
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
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
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
                    </li>
                </ul>
                <a href="#" class="btn btn--cta">Alle Early Birds</a>
            </div>
            <div class="event-stripe__wrapper">
                <h2 class="section__title--normal">Nächste Termine</h2>
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
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
                    </li>
                    <li class="event-stripe">
                        <h3 class="event-stripe__title"><a href="#">Ein tolles Training mit einem schönen langen Titel 123</a></h3>
                        <p class="event-stripe__subtitle">iSAQB® ARC</p>
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
                        <div class="pills pills--sm">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--sm">20
                            </div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--sm">—
                            </div>
                            <div class="pill"><span class="pill__label">K</span><span
                                    class="pill__number pill__number--sm">10
                            </div>
                        </div>
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
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
                        <span class="event_stripe__earlybird">
                            Rabatt bis 9.April
                            <img class="event-stripe__earlybird__image" src="/snippet/images/illustrations/iconearlybird.png" />
                        </span>
                    </li>
                </ul>
                <a href="#" class="btn btn--cta">Alle Early Birds</a>
            </div>
        </div>
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
    <div class="stripe stripe--primary-light">
        <section class="container container--md container-vertical-spacing-xl">
            <blockquote class="testimonial" itemscope itemtype="http://schema.org/Person">
                <p class="testimonial__text">
                    Obwohl in der agilen Softwareentwicklung das Big Upfront Design glücklicherweise der Vergangenheit
                    angehört, bleibt Architekturarbeit weiterhin von zentraler Bedeutung. Stefan Toth gelingt es
                    innerhalb
                    der AGILA-Schulung
                    hervorragend Ansätze zur Integration iterativer Architekturarbeit in einem agilen Kontext zu
                    vermitteln.
                    Er schafft
                    eine ausgewogene Mischung aus theoretischen Inhalten, praktischen Erfahrungen und fruchtbarem
                    Austausch
                    unter den
                    Teilnehmenden. Ein besonderes Highlight ist das praktische Übungsprojekt: Hier werden die
                    vermittelten
                    Konzepte unmittelbar
                    angewendet und in einem unterhaltsamen Rahmen vertieft!
                </p>
                <footer class="testimonial__author">
                    <img class="avatar" itemprop="photo" src="/snippet/images/profiles/testimonial-daniel-wochnik.jpg"
                        alt="Portrait von Daniel Wochnik" />
                    <span class="testimonial__author__name" itemprop="name">Daniel Wochnik</span>
                    <span class="testimonial__author__role" itemprop="jobTitle">Senior Managing Consultant</span>
                    <span class="testimonial__author__company" itemprop="jobTitle">atra.consulting</span>
                </footer>
            </blockquote>
        </section>
    </div>
    <section class="container container--xl container-vertical-spacing-2xl container--centered">
        <h2 class="section__title--normal">Unsere Kunden</h2>
        <div class="custommer-logo-grid">
            <a href="#" class="customer-logo customer-logo--businessdecision"><img
                    src="/snippet/images/logos/business&decision.svg" alt="Firmenlogo business&decision"></a>
            <a href="#" class="customer-logo customer-logo--enbw"><img src="/snippet/images/logos/enbw.svg"
                    alt="Firmenlogo EnbW"></a>
            <a href="#" class="customer-logo--idealo"><img src="/snippet/images/logos/idealo.svg"
                alt="Firmenlogo idealo"></a>
            <a href="#" class="customer-logo--idealo"><img src="/snippet/images/logos/iteratec.svg"
                alt="Firmenlogo iteratec"></a>
            <a href="#" class="customer-logo--ituc"><img src="/snippet/images/logos/ITUC.svg" alt="Firmenlogo ITUC"></a>
            <a href="#" class="customer-logo customer-logo--tracetronic"><img
                    src="/snippet/images/logos/tracetronic.svg" alt="Firmenlogo tracetronic"></a>
            <a href="#" class="customer-logo customer-logo--provinzial"><img src="/snippet/images/logos/provinzial.svg"
                    alt="Firmenlogo Provinzial"></a>
            <a href="#" class="customer-logo customer-logo--zuehlke"><img src="/snippet/images/logos/zuehlke.svg"
                    alt="Firmenlogo Zuehlke"></a>
        </div>
    </section>
    <img class="eyecatcher" itemprop="photo" src="/snippet/images/eyecatcher.webp" alt="Eyecatcher" />
    <section class="container container--xl container-vertical-spacing-2xl">
        <h2 class="section__title--normal">Du brauchst noch mehr Argumente?</h2>
        <div class="textcolumns">
            <div class="textcolumn">
                <img class="textcolumn__img" src="/snippet/images/illustrations/iconeinzigartigevielfalt.png">
                <h3 class="textcolumn__heading">Einzigartige Vielfalt.</h3>
                <p class="textcolumn__text">Wir bieten dir das umfangreichste Schulungsangebot für
                    Softwarearchitektur
                    im deutschsprachigen Raum – akkreditiert und zertifiziert vom iSAQB®.</p>
            </div>
            <div class="textcolumn">
                <img class="textcolumn__img" src="/snippet/images/illustrations/iconITkompetenz.png">
                <h3 class="textcolumn__heading">Geballte IT-Kompetenz.</h3>
                <p class="textcolumn__text">Unsere erfahrenen Trainer:innen sind bekannte Größen in der Branche und
                    haben 80 Prozent der Modul-Lehrpläne inhaltlich wie didaktisch mitentwickelt.</p>
            </div>
            <div class="textcolumn">
                <img class="textcolumn__img" src="/snippet/images/illustrations/iconpraxisnah.png">
                <h3 class="textcolumn__heading">Praxisnahes Lern-Erlebnis.</h3>
                <p class="textcolumn__text">Wir legen größten Wert auf interaktive und begeisternde
                    Wissensvermittlung.
                    Damit alle Teilnehmenden das Erlernte direkt in die Praxis umsetzen können.</p>
            </div>
            <div class="textcolumn">
                <img class="textcolumn__img" src="/snippet/images/illustrations/iconfairprices.png">
                <h3 class="textcolumn__heading">Faires Preismodell.</h3>
                <p class="textcolumn__text">Schon ab zwei Teilnehmenden aus deinem Unternehmen zahlst du nur die
                    Hälfte.
                    Zudem profitierst du von Early Bird-Preisen und großer Planungssicherheit.</p>
            </div>
        </div>
        <div class="container--2-col m-t-lg">
            <div class="textcolumn">
                <h3 class="textcolumn__heading">
                    Alle Vorteile immer zur Hand – lade dir unser Angebot herunter!
                </h3>
                <a href="#" class="btn btn--cta m-t-sm">PDF herunterladen</a>
            </div>
            <div class="textcolumn">
                <h3 class="textcolumn__heading">
                    Unser aktueller Schulungskatalog
                </h3>
                <a href="#" class="btn btn--cta m-t-sm">PDF herunterladen</a>
            </div>
        </div>
    </section>
    <div class="stripe stripe--white-1">
        <section class="container container--xl container-vertical-spacing-2xl">
            <div class="teaser">
                <div class="teaser__column">
                    <img class="" src="/snippet/images/ueber_uns.jpg" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Wer sind wir?</h2>
                    <p class="teaser__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                    </p>
                    <a href="#" class="btn btn--cta">Mehr über uns</a>
                </div>
            </div>
        </section>
    </div>
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
