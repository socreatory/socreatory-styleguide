title: Training Detail iSAQB
description: Show Training Detail iSAQB

example view

```html
<script type="text/javascript" src="https://pretix.eu/widget/v1.de.js" async></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<scroll-nav>
    <nav class="navbar">
        <img class ="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo">
        <input type="checkbox" id="navbar__checkbox">
        <ul class="navbar__items">
            <li><a href="#" class="navbar__item">Schulungen</a></li>
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

<header class="header header-color--highlighted-1">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><a href="#">Schulungen</a></li>
                <li class="breadcrumb__item">Agile Softwarearchitektur</li>
            </ul>
        </div>
        <h1 class="header__heading">Reduzierte Wartungskosten durch evolutionäre Verbesserung</h1>
        <p class="header__subheading">Seminar iSAQB CPSA-Advanced AGILA — 3 Tage</p>
        <div class="header__logogrid">
            <div class="logogrid__left">
                <div class="pills">
                    <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                    <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                    <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                </div>
            </div>
            <div class="logogrid__right">
                <div class="header__logos">
                    <img class="header__logo" src="/snippet/images/logos/embarc_logo.svg">
                    <img class="header__logo" src="/snippet/images/logos/innoq_logo.svg">
                </div>
            </div>
        </div>
    </div>
</header>

<main>
    <div class="container__fullwidth">
        <div class="layout-main-with-sidebar">
            <div class="layout-main-with-sidebar__main">
                <a href="#booking" class="btn btn-type--secondary btn-size--full btn-anchor">Termine und Buchung</a>
                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Beschreibung</h2>
                    <h3 class="heading">Evolution und Verbesserung von Software&shy;architekturen – systematisch und nachhaltig</h3>
                    <div class="article markdown">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloribus laborum nisi non, <a href="#">lorem ipsum</a> cupiditate quo accusantium doloremque saepe quidem illum!</p>
                        <img class="article__image" src="https://www.innoq.com/de/trainings/blockchain-verteilter-konsens/lars-hupel.jpg" alt="Dr. Lars Hupel im Einsatz"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid, <strong>lorem ipsum</strong> reiciendis error fugit dicta tempora necessitatibus maiores nesciunt et, porro ipsa incidunt <em>lorem ipsum</em> asperiores perspiciatis, dolor explicabo quia aliquam eos nam.</p>
                        <ul class="unordered-list">
                            <li class="unordered-list__item">Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque?</li>
                            <li class="unordered-list__item">Lorem reiciendis error fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et distinctio voluptatem fugit est beatae nisi possimus ratione, obcaecati quod veniam, numquam architecto voluptate.</li>
                            <li class="unordered-list__item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                        <ol class="ordered-list">
                            <li class="ordered-list__item">Lorem, ipsum dolor</li>
                            <li class="ordered-list__item">Lorem reiciendis error fugit</li>
                            <li class="ordered-list__item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ol>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Teilnehmer:innen Bewertung</h2>
                    <div class="stars" style="--rating: 3.5;" aria-label="Die Bewertung dieses Trainings beträgt 3,5 von möglichen 5."></div>
                    <p class="stars__rating">(14 Bewertungen)</p>
                    <p><strong>92%</strong> aller Teilnehmer:innen würden dieses Training weiterempfehlen</p>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Ihr Nutzen</h2>
                    <div class="texttable markdown">
                        <p class="texttable__cell">Die Kenntnis flexibler Architektur&shy;modelle ist essenziell bei Moderni&shy;sierungs&shy;vorhaben gewachsener Systeme als auch beim Design neuer Systeme auf der »grünen Wiese«</p>
                        <p class="texttable__cell">»Full-Stack«-&shy;Architektur&shy;kompetenz: vom iterativen Entwerfen bis zur kontinuierlichen Auslieferung</p>
                        <p class="texttable__cell">Anwendbar in allen Aufgabenfeldern der Softwarearchitektur unabhängig von Technologien und Sprachen</p>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Zielgruppe</h2>
                    <div class="section__1col markdown">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, magnam corrupti, enim, ratione id quisquam quas explicabo magni maxime commodi facilis? Illum, in ipsa? Ipsum dolorem dolor pariatur provident esse?</p>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Lernziele</h2>
                    <div class="texttable markdown">
                        <p class="texttable__cell">Legacy und Technische Schulden</p>
                        <p class="texttable__cell">Praxistaugliche Analysemethoden kennen und anwenden können</p>
                        <p class="texttable__cell">Szenario- und Metrik-basierte Bewertung</p>
                        <p class="texttable__cell">Maßnahmen an Architekturzielen ausrichten</p>
                        <p class="texttable__cell">Fitness Functions und evolutionäre Architektur</p>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Ihre Trainer:innen</h2>
                    <div class="img-text">
                        <div class="img-text__figure">
                            <a href="#"><img class="img-text__image" src="/snippet/images/profiles/Oliver_Zeigermann.jpg"/></a>
                        </div>
                        <div class="img-text__content">
                            <h3 class="img-text__heading"><a href="#" class="heading__link">Kim Nena Duggen</a></h3>
                            <p class="profile__company">embarc</p>
                            <p class="profile__role">Rolle</p>
                            <div class="spacer__md"></div>

                            <p>Kim Nena Duggen ist als Organisationsentwicklerin im Bereich New Work, Selbstorganisation und (IT-)Strategie in ihrem Element. Erfahrungen im Prozessmanagement und ihr Einsatz als Trainerin im Bereich EAM, RE, Soft Skills, New Work sind ihr Fundament.</p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Unsere Kund:innen sagen</h2>
                    <div class="quote">
                        <blockquote class="quote__blockquote">»Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus corrupti amet.«</blockquote>
                        <div class="quote__name">Alexander Trapp</div>
                        <div class="quote__role">Developer IoT & Cloud bei GIB mbH</div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Fachinfos und Bücher</h2>
                    <div class="img-text">
                        <div class="img-text__figure">
                            <img class="img-text__image" src="https://www.innoq.com/de/staff/gernot-starke/Requirements-Skills-V1.png"/>
                        </div>
                        <div class="img-text__content">
                            <h3 class="img-text__heading">Vorgehensmuster für Softwarearchitektur</h3>
                            <p>Grundlage für das Seminar ist das Buch »Vorgehensmuster für Softwarearchitektur: Kombinierbare Praktiken in Zeiten von Agile und Lean« (Hanser Verlag, 2019) Ihres Trainers Stefan Toth. Das Buch ist für jeden Teilnehmer im Seminarpreis enthalten (Gebundene Ausgabe und eBook).</p>
                        </div>
                    </div>
                </section>
            </div>

            <div id="booking" class="layout-main-with-sidebar__sidebar">
                <div>
                    <h3>Online-Termine</h3>
                    <pretix-widget event="https://pretix.eu/socreatory/adoc--online/" style="list"></pretix-widget>
                    <h3>Vor-Ort-Termine</h3>
<pretix-widget event="https://pretix.eu/socreatory/adoc--praesenz/" style="list"></pretix-widget>
                <p><a href="https://pretix.eu/socreatory/" class="link-attribution" target="_blank">Event-Ticketing-Software von pretix</a></p>
                </div>

                <div>
                    <h3>Inhouse Schulung</h3>
                    <p>Du kannst dieses Training auch als inhouse-Training exklusiv bei Dir buchen. Bitte nutze dafür unser Anfrage-Formular.</p>
                    <a href="#" class="btn btn-type--secondary btn-size--full">Jetzt anfragen</a>
                </div>
            </div>
        </div>
    </div>
</main>
<aside>
    <div class="container__fullwidth">
        <h2 class="section__title--small"><span aria-hidden>-- </span>Relevante weitere Schulungen</h2>
        <ul class="cards">
            <li class="card">
                <div class="card__body card__body--isaqb">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Cloud Native Infrastruktur Lorem ipsum dolor</a></h3>
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
                <p class="card__appendix">Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen. Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen. Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen. Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen.</p>
            </li>
            <li class="card">
                <div class="card__body card__body--isaqb">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Cloud Native Infrastruktur</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor Lorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, alias.</p>
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
                <p class="card__appendix">Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen</p>
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
                    <p class="card__price">ab 1.750 €</p>
                    <p class="card__label">iSAQB Modul CLOUDINFRA</p>
                </div>
                <p class="card__appendix">Mehr vernetzte und gemeinschaftliche Sicht von Architekturarbeit unterstützen</p>
            </li>
        </ul>
    </div>
</aside>

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
