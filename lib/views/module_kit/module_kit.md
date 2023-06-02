title: Module Kit
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
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> iSAQB</li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span> Ausbildungsweg</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/Ausbildungsweg.png" alt="">
        <h1 class="header__heading header__heading--centered">Bau Dir Deinen Ausbildungsweg</h1>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section section--home">
            <h2 class="section__title--normal">Mit unserem Modulbaukasten zum Advanced Level</h2>
            <div class="article markdown">
                <p>Als Softwarearchitekt:in bist Du es gewohnt, Dich mit komplexen Systemen zu beschäftigen. Trotzdem möchten wir es Dir so einfach wie möglich machen. Mit unserem Modulbaukasten stellst Du Dir mit wenigen Klicks ein Trainingsprogramm zusammen, das ideal ineinandergreift und alle Voraussetzungen für Deine Teilnahme an der Prüfung zum <a href="https://www.isaqb.org/de/zertifizierungen/zertifizierungen-uebersicht/cpsa-advanced-level/" target="_blank">Certified Professional for Software Architecture – Advanced Level (CPSA-A)</a> erfüllt.
                </p>
                <p>Du siehst auf einen Blick, wie viele Credit Points Du mit Deiner Auswahl erreichst, welche Themenbereiche Du bereits belegt hast und welche Module noch dazu passen könnten. Selbstverständlich kannst Du die Trainingseinheiten frei kombinieren und Deine eigenen Schwerpunkte setzen. Du hast keine Muße, Dir sämtliche Modulbeschreibungen einzeln durchzulesen? Nutze einfach unsere Empfehlungen, um Dich zu orientieren. Sie basieren auf den Erfahrungswerten unserer Trainer:innen und die müssen es ja wissen.</p>
                <div class="achtung-box"><p>Um die Prüfung antreten zu können, werden <strong>insgesamt min. 70 Punkte</strong> sowie <strong>min. 10 Punkte</strong> in jedem Schwerpunkt benötigt</p></div>
            </div>
        </section>
    </div>
    <div class="container__fullwidth">
        <section class="section section--supernarrow">
            <h2 class="header__heading header__heading--centered">Unser Modulbaukasten</h2>
            <div class="modulekitsticky">
                <div class="modulekitheader">
                    <div class="modulekitheader__pills">
                        <div class="modulekitheader__pill"><span class="pill__label">Punkte</span><span class="pill__number pill__number--big">20</div>
                    </div>
                    <div class="modulekitheader__center">
                        <div class="modulekitheader__pills">
                            <div class="modulekitheader__pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="modulekitheader__pill"><span class="pill__label">Methodik</span><span class="pill__number pill__number--zero">—</div>
                            <div class="modulekitheader__pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                            </div>
                        <p class="modulekitheader__info">Jeweils mindestens 10 Punkte</p>
                    </div>
                        <div class="flex-center gap-1">
                        <a href="#" class="btn btn-type--primary btn-state--disabled">Zur Auswahl</a>
                        <a href="#" class="btn btn-type--secondary ">Reset</a>
                    </div>
                </div>
            </div>
            <ul class="modulekitgrid">
                <li class="modulekitcard modulekitcard--disabled">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Agila</h3>
                        <p class="modulekitcard__subtitle">Agile Software Architektur</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                    <p class="modulekitcard__zuwenigpunkte">zu wenig Punkte
                    </p>
                </li>
                <li class="modulekitcard modulekitcard--active">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Arceval</h3>
                        <p class="modulekitcard__subtitle">Architekturbewertung</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Adoc</h3>
                        <p class="modulekitcard__subtitle">Architektur-Dokumentation</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Blockchain</h3>
                        <p class="modulekitcard__subtitle">Blockchain</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">DDD</h3>
                        <p class="modulekitcard__subtitle">Domain-driven-Design in der Praxis</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Improve</h3>
                        <p class="modulekitcard__subtitle">Evolution und Verbesserung von Softwarearchitekturen</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Flex</h3>
                        <p class="modulekitcard__subtitle">Flexible Architekturen</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Cloudinfra</h3>
                        <p class="modulekitcard__subtitle">Infrastruktur, Container und Cloud Native</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Web</h3>
                        <p class="modulekitcard__subtitle">Skalierbare Web-Architekturen</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Soft</h3>
                        <p class="modulekitcard__subtitle">Soft Skills für Softwarearchitekt:innen</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
                <li class="modulekitcard">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Websec</h3>
                        <p class="modulekitcard__subtitle">Web-Security</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--zero">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--zero">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--zero">10</div>
                        </div>
                    </div>
                    <div class="modulekitcard__overlay">
                        <a class="modulekitcard__link" href="#"></a>
                    </div>
                </li>
            </ul>
        </section>
    </div>

    <div class="container__centered">
        <section class="section section--home">
            <div class="modulekit__info">
                <div class="achtung-box"><p class="modulekit__infotext"><strong>Gut zu wissen:</strong> Zwischen den Modulen FLEX und CLOUDINFRA gibt es eine Überschneidung. FLEX beinhaltet ebenfalls das Bauen skalierbarer Anwendungen.</p></div>
            </div>
            <div class="modulekitkombis">
                <h3 class="modulekitkombis__heading">Wir empfehlen dir auch folgende Kombinationen</h3>
                <ul class="modulekitkombis__pills">
                    <li><a href="#" class="modulekitkombis__pill">Lösungen mit mehreren Teams bauen</a></li>
                    <li><a href="#" class="modulekitkombis__pill">Sicher und gekonnt durchs Web</a></li>
                    <li><a href="#" class="modulekitkombis__pill">Legacy Softwaresysteme modernisieren</a></li>
                    <li><a href="#" class="modulekitkombis__pill">Anforderungen erarbeiten und Moderationsfähigkeit verbessern</a></li>
                    <li><a href="#" class="modulekitkombis__pill">Architekturen dokumentieren und kommunizieren</a></li>
                    <li><a href="#" class="modulekitkombis__pill">Moderne Architekturstile bauen und betreiben</a></li>
                </ul>
            </div>
        </section>
        <section class="section section--home">
            <div class="img-text">
                <div class="img-text__figure">
                    <img class="img-text__image" src="/snippet/images/illustrations/Kontakt.png">
                </div>
                <div class="img-text__content">
                    <h3 class="img-text__heading">Du hast noch Fragen?</h3>
                    <p class="markdown">Sehr gerne beraten wir Dich auch persönlich und sprechen mit Dir über Deine Wünsche und Möglichkeiten. Schreibe uns einfach eine E-Mail und vereinbare bei Bedarf einen Telefontermin.</p>
                    <p>E-Mail: <a href="mailto:info@socreatory.com">info@socreatory.com</a></p>
                </div>
            </div>
        </section>

        <section class="section section--home">
            <div class="teaser teaser--reverse">
                <!-- <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/Schulunguebersicht.png" alt="">
                </div> -->
                <div class="">
                    <h2 class="section__title--normal">Prüfungsvorbereitung Meetup</h2>
                    <p class="teaser__text">Du möchtest keine FAQs wälzen, sondern würdest Deine Fragen zum iSAQB<sup>®</sup> Advanced Level und zur Prüfung lieber direkt stellen? Nutze das regelmäßig stattfindende Meetup unseres Trainers Gerrit Beine, um Dich über die iSAQB<sup>®</sup> Advanced Level Prüfungsvorbereitung zu informieren. Hier geht es darum, wie die Prüfung formal abläuft, wie Du Dich darauf vorbereiten kannst und worauf Du achten solltest. Deine Teilnahme ist kostenfrei, es gelten die in der Meetup-Gruppe beschriebenen Regeln.
                    <p><a href="https://www.meetup.com/de-DE/isaqb-cpsa-advanced-examination-cpsa-a/events/284842444/?isFirstPublish=true" target="_blank">Jetzt zum nächsten Termin anmelden</a></p>
                    <!-- <a href="#" class="btn btn-type--primary btn-size--fit">Alle Trainings</a> -->
                </div>
            </div>
        </section>

        <section class="section section--home">
            <div class="teaser teaser--reverse">
                <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/Schulunguebersicht.png" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Das volle Programm</h2>
                    <p class="teaser__text">Mit der Software Creators’ Academy bieten wir Dir alles, was Du brauchst, um erfolgreich Deine iSAQB<sup>®</sup> CPSA Advanced Level Prüfung abzulegen. Zusätzlich bieten wir Dir noch viele andere spannende Trainings. Damit erwirbst Du zwar keine iSAQB<sup>®</sup>-Punkte, aber jede Menge Praxiswissen für den Alltag. Und damit kann man schließlich auch punkten.
                    </p>
                    <a href="#" class="btn btn-type--primary btn-size--fit">Alle Trainings</a>
                </div>
            </div>
        </section>

        <section class="section section--home">
            <div class="teaser">
                <div class="teaser__column">
                    <img class="teaser__image" src="/snippet/images/illustrations/Ausbildungnachisaqb.png" alt="">
                </div>
                <div class="teaser__column">
                    <h2 class="section__title--normal">Die Ausbildung nach iSAQB<sup>®</sup></h2>
                    <p class="teaser__text">Erfahre mehr über das ISAQB<sup>®</sup>, die verschiedenen Ausbildungsstufen und das Credit Point System. Sollten dann noch Fragen offen sein, helfen Dir wahrscheinlich <a href="https://www.socreatory.com/de/isaqb">unsere FAQs</a> weiter.</p>
                    <a href="#" class="btn btn-type--primary btn-size--fit">Mehr Infos zum iSAQB<sup>®</sup></a>
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
    </div>
    <div class="footer__bottom">
        <div class="container__fullwidth">
            <div class="footer__content">
                <div class="footer__company">socreatory — The Software Creators’ Academy</div>
                <div class="footer__copyright">©2023</div>
            </div>
        </div>
    </div>
</footer>

```
