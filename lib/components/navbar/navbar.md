title: Navbar
description: Navbar

## Navbar auf großen Viewports

### Nicht eingeloggt

```html
<scroll-nav>
    <nav class="navbar">
        <a href="#" class="navbar__brand-link">
            <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <a href="#" class="navigation-login">Login</a>
        <input type="checkbox" id="navbar__checkbox" />
        <div class="navigation-main">
            <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                <li><a href="#" class="navbar__item">Trainings</a></li>
                <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">iSAQB</a></li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
            </ul>
        </div>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>
```

### Eingeloggt

```html height=300
<scroll-nav>
    <nav class="navbar">
        <a href="#" class="navbar__brand-link">
            <img width="160" height="36" class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <input type="checkbox" id="profile__checkbox" />
        <ul role="list" aria-label="Profilbereich" class="navigation-profile">
            <li><a href="#">Profil verwalten</a></li>
            <li><a href="#">Meine Trainings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
        <label class="profile-label" for="profile__checkbox">Profil</label>

        <input type="checkbox" id="navbar__checkbox" />
        <div class="navigation-main">
            <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                <li><a href="#" class="navbar__item">Trainings</a></li>
                <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">iSAQB</a></li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
            </ul>
        </div>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>
```

## Navbar auf kleinen Viewports

### Nicht eingeloggt

```html height=300 width=400
<scroll-nav>
    <nav class="navbar">
        <a href="#" class="navbar__brand-link">
            <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <a href="#" class="navigation-login">Login</a>
        <input type="checkbox" id="navbar__checkbox" />
        <div class="navigation-main">
            <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                <li><a href="#" class="navbar__item">Trainings</a></li>
                <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">iSAQB</a></li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
            </ul>
        </div>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>
```

### eingeloggt

```html height=600 width=400
<scroll-nav>
    <nav class="navbar">
        <a href="#" class="navbar__brand-link">
            <img width="160" height="36" class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
        </a>
        <input type="checkbox" id="profile__checkbox" />
        <ul role="list" aria-label="Profilbereich" class="navigation-profile">
            <li><a href="#">Profil verwalten</a></li>
            <li><a href="#">Meine Trainings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
        <label class="profile-label" for="profile__checkbox">Profil</label>

        <input type="checkbox" id="navbar__checkbox" />
        <div class="navigation-main">
            <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                <li><a href="#" class="navbar__item">Trainings</a></li>
                <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                <li><a href="#" class="navbar__item">Preise</a></li>
                <li><a href="#" class="navbar__item">iSAQB</a></li>
            </ul>
            <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
            </ul>
        </div>
        <label class="navbar__burger" for="navbar__checkbox"></label>
    </nav>
</scroll-nav>
```
