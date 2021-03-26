title: Homepage
description: Homepage

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

<header class="hero">
    <div class="container__fullwidth">
        <div class="hero__teaser">
            <div class="teaser__column">
                <img class="hero__image" src="/snippet/images/illustrations/softwarearchitektur.png" alt="">
            </div>
            <div class="teaser__column">
                <h2 class="section__title--small">Softwarearchitektur — Trainings und Zertifizierung</h2>
                <h1 class="hero__heading">Lernen von den Besten</h1>
                <p>Unsere Mission: ein Ausbildungsangebot für Softwarearchitektur, an dem wir selbst gerne teilgenommen hätten. Mit Expert:innen, die nicht nur Fachwissen, sondern auch ihre reiche Praxiserfahrung weitergeben können. Mit Trainer:innen, die Fachbücher nicht nur gelesen, sondern selbst geschrieben haben. Für Menschen, die sich nicht nur weiterbilden, sondern auch weiterkommen wollen.</p>
                <p>Willkommen bei SOCREATORY, der Software Creators Academy, eine Kollaboration von</p>
                <div class="hero__logos">
                    <img class="hero__logo" src="/snippet/images/logos/embarc_logo_alt.svg">
                    <img class="hero__logo" src="/snippet/images/logos/innoq_logo.svg">
                </div>
                <div class="hero__aside">
                    <p class="text__small">Wir sind zertifizierter Partner des iSAQB®</p>
                </div>
            </div>
        </div>
    </div>
</header>

<main>
    <div class="container__fullwidth">
        <section class="section section--home">
            <div class="teaser">
                <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/ausbildungs-weg.png" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Gehe deinen eigenen Ausbildungsweg</h2>
                    <p class="teaser__text">Unser intelligenter Modulbaukasten enthält Trainings zu sämtlichen Architekturthemen und für jedes Zertifizierungslevel. Dass sich die Schulungsmodule dabei klug ergänzen bzw. aufeinander aufbauen, war uns ebenso wichtig wie die höchsten Qualitätsstandards des iSAQB®. Stelle dir jetzt dein individuelles Trainingsprogramm für dich und dein Team zusammen – vom Einsteiger- bis hin zum CPSA® Advanced Level.</p>
                    <p><img class="hero__logo" src="/snippet/images/logos/isaqb_logo.svg"></p>
                    <a href="#" class="btn btn-type--primary btn-size--fit">Zum Modulbaukasten</a>
                </div>
            </div>
        </section>

        <section class="section section--home">
            <h2 class="section__title--normal">Beliebte Schulungen</h2>
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
                            <h3 class="card__title"><a href="#" class="card__link">Architecture Evaluation</a></h3>
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
                        <p class="card__label">iSAQB Modul ARCEVAL</p>
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
            <a href="#" class="btn btn-type--primary btn-size--fit">Alle Schulungen</a>
        </section>

        <section class="section section--home">
            <h2 class="section__title--normal">Du brauchst noch mehr Argumente?</h2>
            <div class="textcolumns">
                <div class="textcolumn">
                    <img class="textcolumn__img" src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/product.png">
                    <h3 class="textcolumn__heading">Einzigartige Vielfalt.</h3>
                    <p class="textcolumn__text">Wir bieten dir das umfangreichste Schulungsangebot für Softwarearchitektur im deutschsprachigen Raum – akkreditiert und zertifiziert vom iSAQB®.</p>
                </div>
                <div class="textcolumn">
                    <img class="textcolumn__img" src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/engineering.png">
                    <h3 class="textcolumn__heading">Geballte IT-Kompetenz.</h3>
                    <p class="textcolumn__text">Unsere erfahrenen Trainer:innen sind bekannte Größen in der Branche und haben 80 Prozent der Modul-Lehrpläne inhaltlich wie didaktisch mitentwickelt.</p>
                </div>
                <div class="textcolumn">
                    <img class="textcolumn__img" src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/hr.png">
                    <h3 class="textcolumn__heading">Praxisnahes Lern-Erlebnis.</h3>
                    <p class="textcolumn__text">Wir legen größten Wert auf interaktive und begeisternde Wissensvermittlung. Damit alle Teilnehmenden das Erlernte direkt in die Praxis umsetzen können.</p>
                </div>
                <div class="textcolumn">
                    <img class="textcolumn__img" src="https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/sales.png">
                    <h3 class="textcolumn__heading">Faires Preismodell.</h3>
                    <p class="textcolumn__text">Schon ab zwei Teilnehmenden aus deinem Unternehmen zahlst du nur die Hälfte. Zudem profitierst du von Early Bird-Preisen und großer Planungssicherheit.</p>
                </div>
            </div>
        </section>

        <section class="section section--home">
            <div class="teaser teaser--reverse">
                <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/liveoderremote.png" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Live oder Remote – gleichwertig, aber nicht gleich</h2>
                    <p class="teaser__text">Kann eine Online-Schulung so gut sein wie ein Vor-Ort-Seminar? Wir finden ja! Denn für jedes Format setzen wir die jeweils besten Werkzeuge ein, achten auf einen hohen Praxisanteil, ermöglichen Teamwork und den fachlichen Austausch. So oder so kannst du dich auf ein hoch-interaktives Schulungserlebnis freuen­.</p>
                    <a href="#" class="btn btn-type--primary btn-size--fit">Jetzt anmelden</a>
                </div>
            </div>
        </section>

        <section class="section section--home">
            <div class="teaser">
                <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/wersindwir.png" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Wer sind wir?</h2>
                    <p class="teaser__text">Die SOCREATORY ist ein gemeinsames Projekt von INNOQ und embarc. Hauptberuflich sind wir Technologie-Beratungsunternehmen. Doch wenn wir nicht gerade anspruchsvolle Softwarearchitektur und Software-Lösungen für unsere Kundinnen und Kunden entwickeln, geben wir unser Wissen sehr gerne weiter. So sind wir zu zwei der führenden Schulungsanbieter geworden, die jetzt eine gemeinsame Mission haben: die SOCREATORY.</p>
                    <a href="#" class="btn btn-type--primary btn-size--fit">Mehr über uns</a>
                </div>
            </div>
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
                        <li class="footer__link"><a href="#">Kurse</a></li>
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
                <div class="footer__company">SOCREATORY — The Software Creators’ Academy</div>
                <div class="footer__copyright">©2021</div>
            </div>
        </div>
    </div>
</footer>

```
