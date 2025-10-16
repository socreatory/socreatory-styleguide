title: Navbar New
description: Navbar New

## Navbar auf großen Viewports

```html height=300
<div class="navbar-wrapper">
    <div class="announcement">
        <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
    </div>
    <nav class="main-navigation" aria-label="Webseite Navigation">
        <a href="#" class="brand-link">
            <img class="brand-logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <menu-toggle hidden show-if="(max-width: 66rem)">
            <button class="burgertime" aria-controls="main-navigation" aria-expanded="true" aria-label="Toggle navigation"></button>
        </menu-toggle>
        <div class="navigations menu-toggle-target" id="main-navigation">
            <ul class="navigation-links" role="list" aria-label="Seitennavigation">
                <li class="navigation-link">
                    <a href="#">Trainings</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Themen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">Trainer:innen</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Leistungen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">News</a>
                </li>
                <li class="navigation-link">
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li>
                    <a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" aria-current="true">de</a>
                </li>
                <li>
                    <a lang="en" href="#" title="Switch to English" aria-label="Switch to English">en</a>
                </li>
            </ul>
            <details class="navigation-profile" name="navigation-detail">
                <summary>Profil</summary>
                <ul class="navigation-profile-links" role="list" aria-label="Magazin Untermenü">
                    <li class="navigation-profile-link">
                        <a href="#">Profil verwalten</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">Trainings</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">logout</a>
                    </li>
                </ul>
            </details>
        </div>
    </nav>
</div>
```

### Eingeloggt

```html height=800
<div class="navbar-wrapper">
    <div class="announcement">
        <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
    </div>
    <nav class="main-navigation" aria-label="Webseite Navigation">
        <a href="#" class="brand-link">
            <img class="brand-logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <menu-toggle hidden show-if="(max-width: 66rem)">
            <button class="burgertime" aria-controls="main-navigation" aria-expanded="true" aria-label="Toggle navigation"></button>
        </menu-toggle>
        <div class="navigations menu-toggle-target" id="main-navigation">
            <ul class="navigation-links" role="list" aria-label="Seitennavigation">
                <li class="navigation-link">
                    <a href="#">Trainings</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Themen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">Trainer:innen</a>
                </li>
                <li class="navigation-link">
                    <details name="navigation-detail">
                        <summary>Leistungen</summary>
                        <ul class="navigation-links--sub" role="list" aria-label="Magazin Untermenü">
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                            <li class="navigation-link--sub">
                                <a href="#">Strategie- und Technologieberatung</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li class="navigation-link">
                    <a href="#">News</a>
                </li>
                <li class="navigation-link">
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li>
                    <a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" aria-current="true">de</a>
                </li>
                <li>
                    <a lang="en" href="#" title="Switch to English" aria-label="Switch to English">en</a>
                </li>
            </ul>
            <details class="navigation-profile" name="navigation-detail">
                <summary>Profil</summary>
                <ul class="navigation-profile-links" role="list" aria-label="Magazin Untermenü">
                    <li class="navigation-profile-link">
                        <a href="#">Profil verwalten</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">Trainings</a>
                    </li>
                    <li class="navigation-profile-link">
                        <a href="#">logout</a>
                    </li>
                </ul>
            </details>
        </div>
    </nav>
</div>
```
