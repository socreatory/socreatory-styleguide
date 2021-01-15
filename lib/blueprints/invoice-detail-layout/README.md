title: Invoice Detail Layout
description: Provides a two column layout component for the main content area

## Mobile Viewport

```html width=350 height = 500
<main class="invoice-detail-layout">
    <div class="container-main">
        <nav class="pagination">
            <a href="#">Zurück</a>
            <div class="pagination-wrapper">
                <a href="#">Vorherige</a>
                <a href="#">Nächste</a>
            </div>
        </nav>

        <header class="header-with-actions">
            <h1>Rechnungsentwurf</h1>
            <div class="header-with-actions-wrapper">
                <a class="add-link" href="#">Anhang hochladen</a>
                <button class="button tertiary" type="submit">Alle ermahnen</button>
            </div>
        </header>

        Main Content goes here
    </div>

    <div class="container-sidebar">
        Sidebar Content goes here
    </div>
</main>
```

## Larger Viewports

```html height=500
<main class="invoice-detail-layout">
    <div class="container-main">
        <nav class="pagination">
            <a class="link-with-icon" href="#"><span class="icon icon-arrow-left-red" role="presentation"></span>Zurück</a>
            <div class="pagination-wrapper">
                <a href="#">Vorherige</a>
                <a href="#">Nächste</a>
            </div>
        </nav>

        <header class="header-with-actions">
            <h1>Rechnungsentwurf</h1>
            <div class="header-with-actions-wrapper">
                <a class="add-link" href="#"><span class="icon icon-add" role="presentation"></span>Anhang hochladen</a>
                <button class="button tertiary" type="submit">Alle ermahnen</button>
            </div>
        </header>

        Main Content goes here
    </div>

    <div class="container-sidebar">
        Sidebar Content goes here
    </div>
</main>
```
