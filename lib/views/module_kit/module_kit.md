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

<header class="header header-color--normal">
    <div class="container__fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item">iSAQB</li>
                <li class="breadcrumb__item">Ausbildungsweg</li>
            </ul>
        </div>
    </div>
    <div class="container__centered">
        <img class="header__image" src="/snippet/images/illustrations/Ausbildungsweg.png" alt="">
        <h1 class="header__heading header__heading--centered">Dein Ausbildungsweg</h1>
    </div>
</header>

<main>
    <div class="container__centered">
        <section class="section section--home">
            <h2 class="section__title--normal">Die Module — viele Wege führen nach Rom</h2>
            <div class="article markdown">
                <p>Wie du möglichst schnell deine Punkte sammelst und so die Kriterien zur Anmeldung zur iSAQB<sup>®</sup> CPSA-A (Advanced-Level) Prüfung erfüllst, kannst du mit unserem Socreatory-Modulbaukasten herausfinden. Finde deine eigenen Kombination – oder klicke dich durch unsere Empfehlungen. So siehst du, welche Module du kombinieren kannst, um deine Ziele zu erreichen.</p>
                <div class="achtung-box"><p>Um die Prüfung antreten zu können, werden <strong>insgesamt min. 70 Punkte</strong> sowie <strong>min. 10 Punkte</strong> in jedem Schwerpunkt benötigt</p></div>
            </div>
        </section>
    </div>
    <div class="container__fullwidth">
        <section class="section section--home">
            <h2 class="section__title--normal">Punkte für deine Auswahl</h2>
            <ul class="modulekitgrid">
                <li class="modulekitcard modulekitcard--inactive">
                    <a href="#" class="modulekitcard__body">
                        <h3 class="modulekitcard__title">Agila</h3>
                        <p class="modulekitcard__subtitle">Agile Software Architektur</p>
                    </a>
                    <div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
                            <div class="pill"><span class="pill__label">T</span><span class="pill__number pill__number--modulekit">20</div>
                            <div class="pill"><span class="pill__label">M</span><span class="pill__number pill__number--modulekit">—</div>
                            <div class="pill"><span class="pill__label">K</span><span class="pill__number pill__number--modulekit">10</div>
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
            <div class="img-text">
                <div class="img-text__figure">
                    <img class="img-text__image" src="/snippet/images/profiles/Stefan_Toth.jpg">
                </div>
                <div class="img-text__content">
                    <h3 class="img-text__heading">Du hast noch Fragen?</h3>
                    <p class="markdown">Sehr gerne beraten wir dich auch persönlich und sprechen mit dir über deine Wünsche und Möglichkeiten. Schreibe uns einfach eine E-Mail und vereinbare bei Bedarf einen Telefontermin. Dein Ansprechpartner ist Stefan Toth von embarc.</p>
                    <p>E-Mail: <a href="mailto:stefan.toth@embarc.de">stefan.toth@embarc.de</a></p>
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
                    <p class="teaser__text">Wir bieten dir alles, was du brauchst, um erfolgreich deine iSAQB® CPSA-A (Advanced-Level) Prüfung ablegen zu können. Darüberhinaus kannst du bei uns aber auch weitere spannende Trainings besuchen, in denen du zwar keine iSAQB<sup>®</sup>-Punkte erwirbst, dafür aber jede Menge Praxiswissen für deinen Karriereweg.</p>
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
                    <p class="teaser__text">Erfahre mehr zum iSAQB<sup>®</sup>, seinen verschiedenen Ausbildungsstufen und dem Credit Point System. Auf die Fragen, die dann noch offen sind, geben dir unsere FAQs die richtigen Antworten.</p>
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
                <img class ="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="socreatory">
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
