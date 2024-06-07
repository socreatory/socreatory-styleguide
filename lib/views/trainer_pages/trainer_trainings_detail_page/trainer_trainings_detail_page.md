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
    <section class="tile-grid--sm m-t-xl">
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zeitplan</h2>
            <ul class="tuple-list">
                <li class="tuple-list__entry">
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
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">DI 14.9</span>
                    <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                    <div class="form-control">
                        <a href="#" class="btn--form btn--form--secondary">Edit</a>
                        <form class="button_to" method="post" action="#">
                            <button class="btn--form btn--form--black" type="submit">Delete</button>
                        </form>
                    </div>
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">Mi 15.9.</span>
                    <span class="tuple-list__value">9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                    <div class="form-control">
                        <a href="#" class="btn--form btn--form--secondary">Edit</a>
                        <form class="button_to" method="post" action="#">
                            <button class="btn--form btn--form--black type=" submit">Delete</button>
                        </form>
                    </div>
                </li>
            </ul>
            <form class="form--spacing-sm" id="edit_checklist_item_1" novalidate="novalidate"
                action="/admin/events/77135c78eded/checklist_items/1?locale=de" accept-charset="UTF-8" method="post">
                <input type="hidden" name="_method" value="patch" autocomplete="off" /><input type="hidden"
                    name="authenticity_token"
                    value="43xW4wq5K9aKYNfYtZPUR2QuTGrOv6yW8fsaZQI-bBNymXjxLWaum-3gfxQnWijvewEwvR8l-_0Z4_lK83FyjQ"
                    autocomplete="off" />
                <div class="form__field--sm">
                    <input class="form__input form__input--small" autocomplete="off" type="hidden" value="534854"
                        name="checklist_item[event_id]" id="checklist_item_event_id" />
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
                    <label class="form__label" for="checklist_item_item_description_de">Item description (DE)</label>
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
            <a href="#">Edit</a>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Wichtige Links</h2>
            <ul class="resource-list">
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                        <div class="form-control">
                            <a href="#" class="btn--form btn--form--secondary">Edit</a>
                            <form class="button_to" method="post" action="#">
                                <button class="btn--form btn--form--black" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                </li>
            </ul>
            <a href="#">Edit</a>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Hinweise</h2>
            <div class="markdown-text--medium">
                <p>Hier steht ein Freitext, der weitere Hinweise enthält, die man ausfüllen
                    kann.
                    Oder auch nicht.</p>
            </div>
            <div class="form-control">
                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                <form class="button_to" method="post" action="#">
                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                </form>
            </div>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zoom Link</h2>
            <a href="">Linkslinkrechts</a>
            <div class="form-control">
                <a href="#" class="btn--form btn--form--secondary">Edit</a>
                <form class="button_to" method="post" action="#">
                    <button class="btn--form btn--form--black" type="submit">Delete</button>
                </form>
            </div>
        </div>
    </section>
    <h2 class="section__title--sub m-t-lg">Vorab-Checkliste</h2>
    <ol class="tile-grid--sm training-checklist">
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
                <div class="training-checklist__item__body">
                    <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                    <p class="training-checklist__item__caption">Wichtiger Hinweis-Text</p>
                    <a href="#" class="training-checklist__item__link">Link</a>
                </div>
                <div class="training-checklist__item__footer">
                    <div class="form-control">
                        <a href="#" class="btn--form btn--form--secondary">Edit</a>
                        <form class="button_to" method="post" action="#">
                            <button class="btn--form btn--form--black" type="submit">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </li>
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
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
            </div>
            </div>
        </li>
    </ol>
    <a href="#">Edit</a>
</main>
<footer>
    <div class="footer__top">
        <div class="footer__top__content">
            <div class="footer__top__content__right">
                <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg"
                    alt="Software Creators Academy Logo" />
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
                <h2>Newsletter</h2>
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
                    <button class="btn btn-type--primary">Anmelden</button>
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
