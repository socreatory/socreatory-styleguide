 title: iSAQB Training Detail View
description: Show Training Detail View

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
                        <img src="https://www.innoq.com/de/trainings/blockchain-verteilter-konsens/lars-hupel.jpg" alt="Dr. Lars Hupel im Einsatz"/>
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
                    <div class="stars" style="--rating: 3.5;" aria-label="Die Bewertung dieses Trainings beträgt 4 von möglichen 5."></div>
                    <p class="stars__rating">(14 Bewertungen)</p>
                    <p><strong>92%</strong> aller Teilnehmer:innen würden dieses Training weiterempfehlen</p>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Ihr Nutzen</h2>
                    <div class="texttable markdown">
                        <p class="texttable__cell">Dieses Seminar macht Methoden, praktische Techniken und hilfreiche Sichtweisen erlebbar.</p>
                        <p class="texttable__cell">At vero eos et molestiae non ero tibique si mihi probabis ea quae sunt vitae.</p>
                        <p class="texttable__cell">Quid ex eo delectu rerum quem modo ista sis aequitate quam nihil oportere exquisitis.</p>
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
                            <img class="img-text__image" src="https://uploads.innoq.com/variants/jzYaUpasLWC34wmKfDPmixSa/c6102565cc763bd8b0970e3abe89d48675dd7c8c3124b0570a295b43def26f57?response-content-disposition=inline%3B%20filename%3D%22niko-will-expert.png%22%3B%20filename%2A%3DUTF-8%27%27niko-will-expert.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHA5PEZW3OX32LYA%2F20210128%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210128T142050Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=416c8deba427cf14ca0c619afae1f2fbbc9bf50805d81e7f2b862c898b4a5eea"/>
                        </div>
                        <div class="img-text__content">
                            <h3 class="img-text__heading">Kim Nena Duggen</h3>
                            <p>Kim Nena Duggen ist als Organisationsentwicklerin im Bereich New Work, Selbstorganisation und (IT-)Strategie in ihrem Element. Erfahrungen im Prozessmanagement und ihr Einsatz als Trainerin im Bereich EAM, RE, Soft Skills, New Work sind ihr Fundament.</p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section__title--small"><span aria-hidden>-- </span>Unsere Kund:innen sagen</h2>
                    <div class="quote">
                        <blockquote class="quote__blockquote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus corrupti amet.</blockquote>
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
                            <p>Grundlage für das Seminar ist das Buch „Vorgehensmuster für Softwarearchitektur: Kombinierbare Praktiken in Zeiten von Agile und Lean“ (Hanser Verlag, 2019) Ihres Trainers Stefan Toth. Das Buch ist für jeden Teilnehmer im Seminarpreis enthalten (Gebundene Ausgabe und eBook).</p>
                        </div>
                    </div>
                </section>

            </div>
            <div id="booking" class="layout-main-with-sidebar__sidebar sidebar">
                <div class="layout-main-with-sidebar__sidebar">
                    <p>Buchungswidget</p>
                </div>
                <div class="layout-main-with-sidebar__sidebar">
                    <h3>Inhouse Schulung</h3>
                    <p>Sie können diese Schulung auch als inhouse Schulung exklusiv bei Ihnen buchen. Bitte nutzen Sie dafür unser Anfrage-Formular.</p>
                    <a href="#" class="btn btn-type--secondary btn-size--full">Jetzt anfragen</a>
                </div>
            </div>
        </div>
    </div>
</main>
<aside>
    <div class="container__fullwidth">
        <h2 class="section__title--small"><span aria-hidden>-- </span>Relevante weitere Schulungen</h2>
        <section class="cards">
            <div class="card">
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
            </div>
            <div class="card">
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
            </div>
            <div class="card">
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
            </div>
        </section>
    </div>
</aside>

<footer class="footer">

</footer>

```
