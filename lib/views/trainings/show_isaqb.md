 title: Training Detail iSAQB
description: Show Training Detail iSAQB

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
            <div class="pills">
                <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
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
            <div id="booking" class="layout-main-with-sidebar__sidebar sidebar">
                <div class="layout-main-with-sidebar__sidebar">
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
                            <div class="pretix-widget-event-form">
                                <div class="pretix-widget-event-list-back">
                                    <!----><a href="#">‹ Anderen Termin auswählen</a>
                                </div>
                                <div class="pretix-widget-event-header"><strong>ADOC - Stefan Zörner</strong></div>
                                <div class="pretix-widget-event-details">26.–27. Juli 2021 09:30</div>
                                <!---->
                                <form method="post"
                                    action="https://pretix.eu/socreatory/adoc/w/60pdNeqJclHhCwnm/cart/add?iframe=1&amp;next=%2Fsocreatory%2Fadoc%2Fw%2F60pdNeqJclHhCwnm%2F&amp;take_cart_id=60pdNeqJclHhCwnmhByW8fSHP2choaSBfhIzY5HXsosxQrzE@kra4vasrb6jgukjh183v1snvp8cjdg6i"
                                    target="_blank">
                                    <!----><input type="hidden" name="subevent" value="1198840"><input type="hidden" name="widget_data"
                                        value="{&quot;referer&quot;:&quot;https://preview.socreatory.com/trainings/72023cf40def-adoc&quot;}">
                                    <!---->
                                    <div class="pretix-widget-info-message pretix-widget-clickable"><button type="button"
                                            class="pretix-widget-resume-button">Kauf fortsetzen</button>Sie haben einen aktiven Warenkorb
                                        für diese Veranstaltung. Wenn Sie mehr Produkte auswählen, werden diese zu Ihrem Warenkorb
                                        hinzugefügt.<div class="pretix-widget-clear"></div>
                                    </div>
                                    <!---->
                                    <div class="pretix-widget-category">
                                        <h3 class="pretix-widget-category-name">2-Tages-Training</h3>
                                        <!---->
                                        <div class="pretix-widget-category-items">
                                            <div class="pretix-widget-item">
                                                <div class="pretix-widget-item-row pretix-widget-main-item-row">
                                                    <div class="pretix-widget-item-info-col">
                                                        <!---->
                                                        <div class="pretix-widget-item-title-and-description"><strong
                                                                class="pretix-widget-item-title">Teilnahmegebühr (Online) -
                                                                EUaußerD</strong>
                                                            <div class="pretix-widget-item-description">
                                                                <p>Dieses Ticket gilt für Buchungen von Online-Veranstaltungen von
                                                                    Teilnehmern aus dem EU-Raum, außerhalb Deutschlands.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-item-price-col">
                                                        <div class="pretix-widget-pricebox"><span>EUR 1.400,00</span>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <div class="pretix-widget-item-availability-col">
                                                        <!---->
                                                        <div class="pretix-widget-availability-box">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div class="pretix-widget-availability-available">
                                                                <!----><input type="number" placeholder="0" min="0" max="10"
                                                                    name="item_108000" class="pretix-widget-item-count-multiple">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-clear"></div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="pretix-widget-item">
                                                <div class="pretix-widget-item-row pretix-widget-main-item-row">
                                                    <div class="pretix-widget-item-info-col">
                                                        <!---->
                                                        <div class="pretix-widget-item-title-and-description"><strong
                                                                class="pretix-widget-item-title">Teilnahmegebühr Loyalty (Online) -
                                                                EUaußerD</strong>
                                                            <div class="pretix-widget-item-description">
                                                                <p>Dieses Ticket gilt für Buchungen von Online-Veranstaltungen von
                                                                    Teilnehmern aus dem EU-Raum, außerhalb Deutschlands.<br>
                                                                    Wir freuen uns über Ihre Treue und senken Ihren Schulungspreis für
                                                                    Folgebuchungen um 20%. Der Rabatt ist nicht mit anderen Rabatten
                                                                    kombinierbar oder übertragbar und gilt max. 2 Jahre nach Beendigung
                                                                    einer unserer Schulungen.<br>
                                                                    Die Gewährung dieser Teilnahmegebühr erfolgt erst nach manueller
                                                                    Prüfung.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-item-price-col">
                                                        <div class="pretix-widget-pricebox">
                                                            <!----><span><del class="pretix-widget-pricebox-original-price">EUR
                                                                    1.400,00</del> <ins class="pretix-widget-pricebox-new-price">EUR
                                                                    1.120,00</ins></span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <div class="pretix-widget-item-availability-col">
                                                        <!---->
                                                        <div class="pretix-widget-availability-box">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div class="pretix-widget-availability-available">
                                                                <!----><input type="number" placeholder="0" min="0" max="10"
                                                                    name="item_108003" class="pretix-widget-item-count-multiple">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-clear"></div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="pretix-widget-item">
                                                <div class="pretix-widget-item-row pretix-widget-main-item-row">
                                                    <div class="pretix-widget-item-info-col">
                                                        <!---->
                                                        <div class="pretix-widget-item-title-and-description"><strong
                                                                class="pretix-widget-item-title">Teilnahmegebühr Team (Online) -
                                                                EUaußerD</strong>
                                                            <div class="pretix-widget-item-description">
                                                                <p>Dieses Ticket gilt für Buchungen von Online-Veranstaltungen von
                                                                    Teilnehmern aus dem EU-Raum, außerhalb Deutschlands.<br>
                                                                    Bereits ab zwei Teilnehmern aus Ihrem Unternehmen sparen Sie deutlich:
                                                                    für jede weitere Person zahlen Sie nur 50% des regulären Preises. <br>
                                                                    Der Rabatt ist nicht mit anderen Rabatten kombinierbar oder
                                                                    übertragbar.<br>
                                                                    Die Gewährung dieser Teilnahmegebühr erfolgt erst nach manueller
                                                                    Prüfung.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-item-price-col">
                                                        <div class="pretix-widget-pricebox">
                                                            <!----><span><del class="pretix-widget-pricebox-original-price">EUR
                                                                    1.400,00</del> <ins class="pretix-widget-pricebox-new-price">EUR
                                                                    700,00</ins></span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <div class="pretix-widget-item-availability-col">
                                                        <!---->
                                                        <div class="pretix-widget-availability-box">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div class="pretix-widget-availability-available">
                                                                <!----><input type="number" placeholder="0" min="0" max="10"
                                                                    name="item_108005" class="pretix-widget-item-count-multiple">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pretix-widget-clear"></div>
                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pretix-widget-action"><button type="submit" disabled="disabled">In den Warenkorb</button>
                                    </div>
                                </form>
                                <!---->
                            </div>
                            <!---->
                            <!---->
                            <!---->
                            <div class="pretix-widget-clear"></div>
                            <div class="pretix-widget-attribution"><a href="https://pretix.eu" target="_blank"
                                    rel="noopener">Event-Ticketing-Software von pretix</a></div>
                        </div>
                    </div>




                </div>
                <div class="layout-main-with-sidebar__sidebar">
                    <h3>Inhouse Schulung</h3>
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
                <p class="card__appendix">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                <p class="card__appendix">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
