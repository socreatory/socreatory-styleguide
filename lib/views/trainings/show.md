title: Training Detail
description: Show Training Detail

example view

```html
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
        </ul>
        <label class="navbar__burger" for="navbar__checkbox"></label>
</nav>
</scroll-nav>

<header class="header header-color--highlighted-2">
    <div class="container__fullwidth">
            <div class="breadcrumb">
                <ul class="breadcrumb__list">
                    <li class="breadcrumb__item"><a href="#">Home</a></li>
                    <li class="breadcrumb__item"><a href="#">Schulungen</a></li>
                    <li class="breadcrumb__item">JavaScript</li>
                </ul>
            </div>
            <h1 class="header__heading">JavaScript verstehen und anwenden</h1>
            <p class="header__subheading">Accusantium doloremque Saepe quidem</p>
    </div>
</header>

<main>
    <div class="container__fullwidth">
        <div class="layout-main-with-sidebar">
            <div class="layout-main-with-sidebar__main">
                <a href="#booking" class="btn btn-type--secondary btn-size--full btn-anchor">Termine und Buchung</a>
                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Beschreibung</h2>
                    <h3 class="heading">Lorem ipsum dolor sit, amet consectetur adipisicing elitusto enim quia</h3>
                    <div class="article markdown">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloribus laborum nisi non, <a href="#">lorem ipsum</a> cupiditate quo accusantium doloremque saepe quidem illum!</p>
                        <img class="article__image" src="https://www.innoq.com/de/trainings/isaqb/header.jpg"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid, <strong>lorem ipsum</strong> reiciendis error fugit dicta tempora necessitatibus maiores nesciunt et, porro ipsa incidunt <em>lorem ipsum</em> asperiores perspiciatis, dolor explicabo quia aliquam eos nam.</p>
                        <ul class="unordered-list">
                            <li class="unordered-list__item"><p>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque?</p></li>
                            <li class="unordered-list__item"><p>Lorem reiciendis error fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
                            <li class="unordered-list__item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                            <li class="unordered-list__item"><p>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque?</p></li>
                            <li class="unordered-list__item"><p>Lorem reiciendis error fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
                            <li class="unordered-list__item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                            <li class="unordered-list__item"><p>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque?</p></li>
                            <li class="unordered-list__item"><p>Lorem reiciendis error fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
                            <li class="unordered-list__item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
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
                    <div class="stars" style="--rating: 3.5;" aria-label="Die Bewertung dieses Trainings beträgt 4 von möglichen 5."></div>
                    <p class="stars__rating">(14 Bewertungen)</p>
                    <p><strong>92%</strong> aller Teilnehmer:innen würden dieses Training weiterempfehlen</p>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Ihr Nutzen</h2>
                    <div class="texttable markdown">
                        <p class="texttable__cell">Die Kenntnis flexibler Architektur&shy;modelle ist essenziell bei Moderni&shy;sierung&shy;svor&shy;haben gewachsener Systeme als auch beim Design neuer Systeme auf der »grünen Wiese«</p>
                        <p class="texttable__cell">»Full-Stack«-&shy;Architektur&shy;kompetenz: vom iterativen Entwerfen bis zur konti&shy;nuier&shy;lichen Auslieferung</p>
                        <p class="texttable__cell">Anwendbar in allen Auf&shy;gabenfeldern der Softwarearchitektur unabhängig von Technologien und Sprachen</p>
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
                        <p class="texttable__cell">Motivation: Schnelle IT als Wettbewerbsfaktor</p>
                        <p class="texttable__cell">Gesetz von Conway: Software-Architekturen und Organisation</p>
                        <p class="texttable__cell">Microservices und Self-contained Systems</p>
                        <p class="texttable__cell">Domain-driven Design für Modularisierung: Bounded Context und Context Maps</p>
                        <p class="texttable__cell">Selbstorganisation und Architektur: Mikro- und Makro-Architekturen</p>
                        <p class="texttable__cell">Kommunikation: REST und Messaging</p>
                        <p class="texttable__cell">Event-driven Front-End-Integration</p>
                        <p class="texttable__cell">Datenreplikation</p>
                        <p class="texttable__cell">Verteilte Sicherheitsmechanismen</p>
                        <p class="texttable__cell">Moderne Infrastrukturen mit IaaS, PaaS und Container</p>
                        <p class="texttable__cell">Continuous Delivery, Delivery Pipelines und Software-Architektur</p>
                        <p class="texttable__cell">Metriken und Logging</p>
                        <p class="texttable__cell">Ausblick: Konsistenzmodelle und Resilience</p>
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
                            <img class="img-text__image" src="https://images-na.ssl-images-amazon.com/images/I/41C55Z7cezL.jpg"/>
                        </div>
                        <div class="img-text__content">
                            <h3 class="img-text__heading">Vorgehensmuster für Softwarearchitektur</h3>
                            <p>Grundlage für das Seminar ist das Buch »Vorgehensmuster für Softwarearchitektur: Kombinierbare Praktiken in Zeiten von Agile und Lean« (Hanser Verlag, 2019) Ihres Trainers Stefan Toth. Das Buch ist für jeden Teilnehmer im Seminarpreis enthalten (Gebundene Ausgabe und eBook).</p>
                        </div>
                    </div>
                </section>

            </div>
            <div id="booking" class="layout-main-with-sidebar__sidebar sidebar">
                <div class="layout-main-with-sidebar__sidebar">
                    <h3>Termine</h3>
                    <!-- Pretix Widget -->
                    <div class="pretix-widget-wrapper" event="https://pretix.eu/socreatory/adoc/">
                        <div class="pretix-widget pretix-widget-mobile">
                            <div data-v-b329ee4c="" tabindex="-1" class="resize-observer"><object aria-hidden="true" tabindex="-1"
                                    type="text/html" data="about:blank"></object></div>
                            <div class="pretix-widget-loading" style="display: none;"><svg width="128" height="128" viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"
                                        class="pretix-widget-primary-color"></path>
                                </svg></div>
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
                                    <div class="pretix-widget-event-list-entry-availability"><span>Jetzt buchen</span></div>
                                </a><a
                                    class="pretix-widget-event-list-entry pretix-widget-event-availability-green pretix-widget-event-availability-ok">
                                    <div class="pretix-widget-event-list-entry-name">ADOC</div>
                                    <div class="pretix-widget-event-list-entry-date">3.–4. November 2021 09:30</div>
                                    <div class="pretix-widget-event-list-entry-location">Online</div>
                                    <div class="pretix-widget-event-list-entry-availability"><span>Jetzt buchen</span></div>
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
                    <p>Du kannst diese Training auch als inhouse-Training exklusiv bei Dir buchen. Bitte nutze dafür unser Anfrage-Formular.</p>
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
                <div class="card__body">
                    <div class="card__body__top">
                        <h3 class="card__title"><a href="#" class="card__link">Card Title</a></h3>
                        <p class="card__text">Card Text Lorem, ipsum dolor.</p>
                    </div>
                    <div class="card__body__bottom">
                    </div>
                </div>
                <div class="card__footer">
                    <p class="card__price">ab 1.750 €</p>
                </div>
                <p class="card__appendix">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                    <p class="card__price">ab 1.750 €</p>
                </div>
                <p class="card__appendix">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                    <p class="card__price">ab 1.750 €</p>
                </div>
                <p class="card__appendix">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
