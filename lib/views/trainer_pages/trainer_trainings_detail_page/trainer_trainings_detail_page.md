title: Trainer:innen Trainings Detail Page
description: Backend-View for Trainers shows details of a specific training

```html
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg"
                    alt="Software Creators Academy Logo" />
            </a>
            <input type="checkbox" id="profile__checkbox" />
            <ul role="list" aria-label="Profilbereich" class="navigation-profile">
                <li><a href="#">Profil</a></li>
                <li><a href="#">Meine Trainings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
            <label class="profile-label" for="profile__checkbox">Mein Name</label>
            <input type="checkbox" id="navbar__checkbox" />
            <div class="navigation-main">
                <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                    <li><a href="#" class="navbar__item">Trainings</a></li>
                    <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                    <li><a href="#" class="navbar__item">Preise</a></li>
                    <li><a href="#" class="navbar__item">iSAQB</a></li>
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

<header class="header">
    <div class="header__wrapper--fullwidth">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow"
                        aria-label="Pfeil nach rechts">›</span>Training</li>
            </ul>
        </div>
        <h1>TRAINING - 10.-12.1.2030</h1>
        <p>öffentlich</p>
    </div>
</header>

<main class="trainer-trainings-overview-page">
    <h2 class="section__title--sub">Teilnehmer:innen</h2>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Datum der Anmeldung</th>
                <th>Bereits besucht</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Hans Wurst</td>
                <td>hans.wurst@example.com</td>
                <td>1.1.2022</td>
                <td>
                    <ul class="table__list--unstyled">
                        <li>Training 1</li>
                        <li>Training 1</li>
                        <li>Training 1</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Hans Wurst</td>
                <td>hans.wurst@example.com</td>
                <td>1.1.2022</td>
                <td>TRAINING</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Hans Wurst</td>
                <td>hans.wurst@example.com</td>
                <td>1.1.2022</td>
                <td>TRAINING</td>
            </tr>
        </tbody>
    </table>
    <form class="form--spacing-sm" id="new_copy_event_info" novalidate="novalidate"
        action="/admin/copy_event_info?locale=de" accept-charset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token"
            value="9dtszcFXzhXlpjqaiEmwLFyflpErfZplvh6UWItNkb2GyVhl4dCc6LVV09NbEv5P7LQTnwMM4oBLUrAymZSSQg"
            autocomplete="off">
        <input class="form__input form__input--small" autocomplete="off" type="hidden" value="eadbc3869f1d"
            name="copy_event_info[event_uid]" id="copy_event_info_event_uid">
        <p>Kopiere Wichtige Links, Hinweise und Vorab-Checkliste aus einem vorigen Training</p>
        <div class="form__field--sm">
            <label class="form__label" for="copy_event_info_event_template_uid">Vorlage</label><select
                class="form-control is-valid select optional" name="copy_event_info[event_template_uid]"
                id="copy_event_info_event_template_uid">
                <option value="" label=" "></option>
                <option selected="selected" value="caa40a78adee">Legacy Software absichern 11.11.2024 - 11.11.2024
                </option>
                <option value="b265d2751c64">OWASP Top Ten in der Praxis 03.12.2024 - 04.12.2024</option>
            </select>
        </div>
        <input type="submit" name="commit" value="Kopieren" class="btn--form btn--form--secondary"
            data-disable-with="Kopieren">
    </form>

    <section class="tile-grid--sm m-t-xl">
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zeitplan</h2>
            <turbo-frame>
                <ul class="tuple-list">
                    <li>
                        <turbo-frame class="tuple-list__entry">
                            <span class="tuple-list__label">MO 22.12.</span>
                            <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                                <small>kurze Pausen ca. jede Stunde</small>
                            </span>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                    <li>
                        <turbo-frame class="tuple-list__entry">
                            <span class="tuple-list__label">MO 22.12.</span>
                            <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                                <small>kurze Pausen ca. jede Stunde</small>
                            </span>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                    <li>
                        <turbo-frame class="tuple-list__entry">
                            <span class="tuple-list__label">MO 22.12.</span>
                            <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                                <small>kurze Pausen ca. jede Stunde</small>
                            </span>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                </ul>
                <form class="form--spacing-sm" id="edit_checklist_item_1" novalidate="novalidate"
                    action="/admin/events/77135c78eded/checklist_items/1?locale=de" accept-charset="UTF-8"
                    method="post">
                    <div class="form__field--sm">
                        <input class="form__input form__input--small" autocomplete="off" type="hidden" value="534854"
                            name="checklist_item[event_id]" id="checklist_item_event_id" />
                    </div>
                    <div class="form__field--sm">
                        <label class="form__label" for="checklist_item_item_title_de">Datum</label>
                        <div class="form-group">
                            <input type="hidden" name="_method" value="patch" autocomplete="off" /><input type="hidden"
                                name="authenticity_token"
                                value="43xW4wq5K9aKYNfYtZPUR2QuTGrOv6yW8fsaZQI-bBNymXjxLWaum-3gfxQnWijvewEwvR8l-_0Z4_lK83FyjQ"
                                autocomplete="off" />
                            <select id="time_table_date_3i" name="time_table[date(3i)]"
                                class="form-control mx-1 date required">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24" selected="selected">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select id="time_table_date_2i" name="time_table[date(2i)]"
                                class="form-control mx-1 date required">
                                <option value="1">Januar</option>
                                <option value="2">Februar</option>
                                <option value="3">März</option>
                                <option value="4">April</option>
                                <option value="5">Mai</option>
                                <option value="6" selected="selected">Juni</option>
                                <option value="7">Juli</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Dezember</option>
                            </select>
                            <select id="time_table_date_1i" name="time_table[date(1i)]"
                                class="form-control mx-1 date required">
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024" selected="selected">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </select>
                        </div>
                    </div>

                    <div class="form__field--sm">
                        <label class="form__label" for="checklist_item_item_title_de">Item title (DE)</label>
                        <input class="form__input form__input--small" type="text" value="Meine Liste"
                            name="checklist_item[item_title_de]" id="checklist_item_item_title_de" />
                    </div>
                    <div class="form__field--sm">
                        <label class="form__label" for="checklist_item_item_title_en">Item title (EN)</label>
                        <input class="form__input form__input--small" type="text" value="My List"
                            name="checklist_item[item_title_en]" id="checklist_item_item_title_en" />
                    </div>
                    <div class="form__field--sm">
                        <label class="form__label" for="checklist_item_item_description_de">Item description
                            (DE)</label>
                        <textarea class="form__textarea form__input form__input--small" rows="4"
                            name="checklist_item[item_description_de]"
                            id="checklist_item_item_description_de">Test</textarea>
                    </div>
                    <div class="form__field--sm">
                        <label class="form__label" for="checklist_item_item_description_en">Item description
                            (EN)</label>
                        <textarea class="form__textarea form__input form__input--small" rows="4"
                            name="checklist_item[item_description_en]"
                            id="checklist_item_item_description_en">Test</textarea>
                    </div>
                    <div class="form-control">
                        <a class="btn--form btn--form--black" href="" #"">Abbrechen</a>
                        <input type="submit" name="commit" value="Aktualisieren" class="btn--form btn--form--secondary"
                            data-disable-with="Aktuaelisieren" />
                    </div>
                </form>
                <turbo-frame>
                    <a href="#">Edit</a>
                </turbo-frame>
            </turbo-frame>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Wichtige Links</h2>
            <turbo-frame>
                <ul class="resource-list">
                    <li>
                        <turbo-frame class="resource-list__item">
                            <a href="#">Wichtiger Link Wichtig</a>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                    <li>
                        <turbo-frame class="resource-list__item">
                            <a href="#">Wichtiger Link</a>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                    <li>
                        <turbo-frame class="resource-list__item">
                            <a href="#">Wichtiger Link</a>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                    <li>
                        <turbo-frame class="resource-list__item">
                            <a href="#">Wichtiger Link</a>
                            <div class="form-control">
                                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                                <form class="button_to" method="post" action="#">
                                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                                </form>
                            </div>
                        </turbo-frame>
                    </li>
                </ul>
                <turbo-frame>
                    <a href="#">Edit</a>
                </turbo-frame>
            </turbo-frame>
        </div>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Hinweise</h2>
            <turbo-frame>
                <div class="markdown-text--medium">
                    <p>Hier steht ein Freitext, der weitere Hinweise enthält, die man ausfüllen
                        kann.
                        Oder auch nicht.</p>
                </div>
                <div class="form-control m-t-sm">
                    <a href="#" class="btn--form btn--form--secondary">Edit</a>
                    <form class="button_to" method="post" action="#">
                        <button class="btn--form btn--form--black" type="submit">Delete</button>
                    </form>
                </div>
            </turbo-frame>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zoom Link</h2>
            <turbo-frame>
                <a href="">Linkslinkrechts</a>
                <div class="form-control m-t-sm">
                    <a href="#" class="btn--form btn--form--secondary">Edit</a>
                    <form class="button_to" method="post" action="#">
                        <button class="btn--form btn--form--black" type="submit">Delete</button>
                    </form>
                </div>
            </turbo-frame>
        </div>
    </section>
    <h2 class="section__title--sub m-t-lg">Vorab-Checkliste</h2>
    <turbo-frame class="training-checklist__frame">
        <ol class="training-checklist">
            <li class="training-checklist__item">
                <turbo-frame class="training-checklist__item__wrapper">
                    <div class="training-checklist__item__body">
                        <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                        <p>Wichtiger Hinweis-Text</p>
                    </div>
                    <div class="training-checklist__item__footer">
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </turbo-frame>
            </li>
            <li class="training-checklist__item">
                <turbo-frame class="training-checklist__item__wrapper">
                    <div class="training-checklist__item__body">
                        <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                        <p>Wichtiger Hinweis-Text</p>
                        <ul>
                            <li>Node</li>
                            <li>Git</li>
                            <li>kaffee</li>
                        </ul>
                    </div>
                    <div class="training-checklist__item__footer">
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </turbo-frame>
            </li>
            <li class="training-checklist__item">
                <turbo-frame class="training-checklist__item__wrapper">
                    <div class="training-checklist__item__body">
                        <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                        <p>Wichtiger Hinweis-Text</p>
                        <ul>
                            <li>Node</li>
                            <li>Git</li>
                            <li>kaffee</li>
                        </ul>
                    </div>
                    <div class="training-checklist__item__footer">
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </turbo-frame>
            </li>
            <li class="training-checklist__item">
                <turbo-frame class="training-checklist__item__wrapper">
                    <div class="training-checklist__item__body">
                        <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                        <p>Wichtiger Hinweis-Text</p>
                        <ul>
                            <li>Node</li>
                            <li>Git</li>
                            <li>kaffee</li>
                        </ul>
                    </div>
                    <div class="training-checklist__item__footer">
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </turbo-frame>
            </li>
        </ol>
        <turbo-frame>
            <a href="#">Edit</a>
        </turbo-frame>
    </turbo-frame>
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
