title: Invoices Overview Page
description: List all of the different invoices

Putting all of the pieces together for the Invoices view.

```html height=1000
<div class="navbar-layout">
    <nav class="navbar">
        <a class="navbar-item brand" href="#">
            <div class="symbol">
                <span class="icon icon-INNOQ" role="presentation"></span>
            </div>
            <div class="label">Zur Rechnologe Hauptseite</div>
        </a>
        <a class="navbar-item current" href="#">
            <div class="symbol">
                <span class="icon icon-list-bulleted" role="presentation"></span>
            </div>
            <div class="label">Meine Aufgaben</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-upload" role="presentation"></span>
            </div>
            <div class="label">Rechnungserstellung</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-download" role="presentation"></span>
            </div>
            <div class="label">Zahlungseingang</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-alarm" role="presentation"></span>
            </div>
            <div class="label">Zahlungserinnerungen</div>
        </a>
        <a class="navbar-item" href="#">
            <div class="symbol">
                <span class="icon icon-dots" role="presentation"></span>
            </div>
            <div class="label">Mehr</div>
        </a>
    </nav>

    <nav class="secondary-navbar">
        <a class="navbar-item current">
            <div class="symbol">
                <span class="icon icon-snooze" role="presentation"></span>
            </div>
            <div class="label">Abwarten 6</div>
        </a>
        <a class="navbar-item">
            <div class="symbol">
                <span class="icon icon-bolt" role="presentation"></span>
            </div>
            <div class="label">Leistungen freigeben 15</div>
        </a>
        <a class="navbar-item">
            <div class="symbol">
                <span class="icon icon-pencil" role="presentation"></span>
            </div>
            <div class="label">Bearbeiten 2</div>
        </a>
        <a class="navbar-item">
            <div class="symbol">
                <span class="icon icon-crown" role="presentation"></span>
            </div>
            <div class="label">Prinzenfreigabe 10</div>
        </a>
        <a class="navbar-item">
            <div class="symbol">
                <span class="icon icon-plane" role="presentation"></span>
            </div>
            <div class="label">Versenden 8</div>
        </a>
    </nav>

    <main class="main-layout">
        <div class="page-category">Rechnungserstellung</div>
        <h1>Keine freizugebenden Leistungen</h1>
        <div class="button-group">
            <button class="button tertiary" type="submit">Alle ermahnen</button>
            <button class="button primary" type="submit">Neue Rechnung</button>
        </div>

        <div>
            <div>
                <span class="muted">Gesamt:</span>
                <span class="amount">2,575.00€</span>
            </div>

            <table role="table" class="table table-responsive">
                <thead role="rowgroup">
                    <tr role="row">
                        <th class="table-toggler-cell" scope="col" role="columnheader">
                            <span class="sr-only">Einträge auf/zuklappen</span>
                        </th>
                        <th scope="col" role="columnheader" aria-label="Auftragsnr.">
                            <div class="tabelle-header">
                                <span class="header" id="auftragsnr_group" aria-hidden="true">
                                    <span class="squishable" aria-label="Auftragsnr." data-short="Auftrag" style="--squish-at: 11ch;"></span>
                                </span>
                                <input class="tabelle-arrow" id="auftragsnr_asc" type="radio" name="sort" value="auftragsnr_asc" checked />
                                <label class="tabelle-arrow--asc" for="auftragsnr_asc">
                                    <span class="sr-only">Sort Auftragsnr. Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="auftragsnr_desc" type="radio" name="sort" value="auftragsnr_desc" />
                                <label class="tabelle-arrow--desc" for="auftragsnr_desc">
                                    <span class="sr-only">Sort Auftragsnr. Descending</span>
                                </label>
                                <input class="tabelle-input" name="auftragsnr" type="text" aria-label="Filter Auftragsnr." />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Sale Order Name">
                            <div class="tabelle-header">
                                <span class="header" id="saleorder_group" aria-hidden="true">
                                    <span class="squishable" aria-label="Sale Order Name" data-short="Order" style="--squish-at: 15ch;"></span>
                                </span>
                                <input class="tabelle-arrow" id="saleorder_asc" type="radio" name="sort" value="saleorder_asc" checked />
                                <label class="tabelle-arrow--asc" for="saleorder_asc">
                                    <span class="sr-only">Sort Sale Order Name Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="saleorder_desc" type="radio" name="sort" value="saleorder_desc" />
                                <label class="tabelle-arrow--desc" for="saleorder_desc">
                                    <span class="sr-only">Sort Sale Order Name Descending</span>
                                </label>
                                <input class="tabelle-input" name="saleorder" type="text" aria-label="Filter Sale Order Name" />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Kunde">
                            <div class="tabelle-header">
                                <span class="header truncatable" id="kunde_group" aria-hidden="true">Kunde</span>
                                <input class="tabelle-arrow" id="kunde_asc" type="radio" name="sort" value="kunde_asc" checked />
                                <label class="tabelle-arrow--asc" for="kunde_asc">
                                    <span class="sr-only">Sort Kunde Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="kunde_desc" type="radio" name="sort" value="kunde_desc" />
                                <label class="tabelle-arrow--desc" for="kunde_desc">
                                    <span class="sr-only">Sort Kunde Descending</span>
                                </label>
                                <input class="tabelle-input" name="kunde" type="text" aria-label="Filter Kunde" />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Principal">
                            <div class="tabelle-header">
                                <span class="header" id="principal_group" aria-hidden="true">
                                    <span class="squishable" aria-label="Principal" data-short="Prinz" style="--squish-at: 9ch;"></span>
                                </span>
                                <input class="tabelle-arrow" id="principal_asc" type="radio" name="sort" value="principal_asc" checked />
                                <label class="tabelle-arrow--asc" for="principal_asc">
                                    <span class="sr-only">Sort Principal Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="principal_desc" type="radio" name="sort" value="principal_desc" />
                                <label class="tabelle-arrow--desc" for="principal_desc">
                                    <span class="sr-only">Sort Principal Descending</span>
                                </label>
                                <input class="tabelle-input" name="principal" type="text" aria-label="Filter Principal" />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Freigaben">
                            <div class="tabelle-header">
                                <span class="header truncatable" id="freigaben_group" aria-hidden="true">Freigaben</span>
                                <input class="tabelle-arrow" id="freigaben_asc" type="radio" name="sort" value="freigaben_asc" checked />
                                <label class="tabelle-arrow--asc" for="freigaben_asc">
                                    <span class="sr-only">Sort Freigaben Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="freigaben_desc" type="radio" name="sort" value="freigaben_desc" />
                                <label class="tabelle-arrow--desc" for="freigaben_desc">
                                    <span class="sr-only">Sort Freigaben Descending</span>
                                </label>
                                <input class="tabelle-input" name="freigaben" type="text" aria-label="Filter Freigaben" />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Status">
                            <div class="tabelle-header">
                                <span class="header truncatable" id="status_group" aria-hidden="true">Status</span>
                                <input class="tabelle-arrow" id="status_asc" type="radio" name="sort" value="status_asc" checked />
                                <label class="tabelle-arrow--asc" for="status_asc">
                                    <span class="sr-only">Sort Status Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="status_desc" type="radio" name="sort" value="status_desc" />
                                <label class="tabelle-arrow--desc" for="status_desc">
                                    <span class="sr-only">Sort Status Descending</span>
                                </label>
                                <input class="tabelle-input" name="status" type="text" aria-label="Filter Status" />
                            </div>
                        </th>

                        <th scope="col" role="columnheader" aria-label="Nettopreis">
                            <div class="tabelle-header">
                                <span class="header" id="netto_group" aria-hidden="true">
                                    <span class="squishable" aria-label="Nettopreis" data-short="Netto" style="--squish-at: 10ch;"></span>
                                </span>
                                <input class="tabelle-arrow" id="netto_asc" type="radio" name="sort" value="netto_asc" checked />
                                <label class="tabelle-arrow--asc" for="netto_asc">
                                    <span class="sr-only">Sort Nettopreis Ascending</span>
                                </label>
                                <input class="tabelle-arrow" id="netto_desc" type="radio" name="sort" value="netto_desc" />
                                <label class="tabelle-arrow--desc" for="netto_desc">
                                    <span class="sr-only">Sort Nettopreis Descending</span>
                                </label>
                                <input class="tabelle-input" name="netto" type="text" aria-label="Filter Nettopreis" />
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody role="rowgroup">
                    <tr role="row">
                        <td class="table-toggler-cell" role="cell">
                            <button is="tabelle-toggler" hidden aria-expanded="false">
                                <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                    <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                </span>
                                <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                    <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                </span>
                            </button>
                        </td>

                        <td role="cell" data-column="Auftragnr." class="emphasized">
                            D12.34.567
                        </td>
                        <td role="cell" data-column="Sale Order Name">
                            Quality-focused bandwidth-monitored parallelism
                        </td>
                        <td role="cell" data-column="Kunde" class="muted">
                            Stiedemann, Wolff and Pachocha
                        </td>
                        <td role="cell" data-column="Principal" class="muted">
                            Jörg Müller
                        </td>
                        <td role="cell" data-column="Freigaben" class="muted">
                            <label class="progress-bar undefined">
                                <progress value="2" max="3"></progress>
                                2 / 3
                            </label>
                        </td>

                        <td role="cell" data-column="Status" class="muted">
                            <label class="progress-bar green">
                                <progress value="1" max="5"></progress>
                                1 / 5
                            </label>
                        </td>

                        <td role="cell" data-column="Nettopreis">
                            <span class="amount">€2,575.00</span>
                        </td>
                    </tr>
                    <tr role="row">
                        <td class="table-toggler-cell" role="cell">
                            <button is="tabelle-toggler" hidden aria-expanded="false">
                                <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                    <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                </span>
                                <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                    <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                </span>
                            </button>
                        </td>

                        <td role="cell" data-column="Auftragnr." class="emphasized">
                            D12.34.567
                        </td>
                        <td role="cell" data-column="Sale Order Name">
                            Quality-focused bandwidth-monitored parallelism
                        </td>
                        <td role="cell" data-column="Kunde" class="muted">
                            Stiedemann, Wolff and Pachocha
                        </td>
                        <td role="cell" data-column="Principal" class="muted">
                            Jörg Müller
                        </td>
                        <td role="cell" data-column="Freigaben" class="muted">
                            <label class="progress-bar undefined">
                                <progress value="2" max="3"></progress>
                                2 / 3
                            </label>
                        </td>

                        <td role="cell" data-column="Status" class="muted">
                            <label class="progress-bar green">
                                <progress value="1" max="5"></progress>
                                1/ 5
                            </label>
                        </td>

                        <td role="cell" data-column="Nettopreis">
                            <span class="amount">€2,575.00</span>
                        </td>
                    </tr>

                    <tr role="row">
                        <td class="table-toggler-cell" role="cell">
                            <button is="tabelle-toggler" hidden aria-expanded="false">
                                <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                    <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                </span>
                                <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                    <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                </span>
                            </button>
                        </td>

                        <td role="cell" data-column="Auftragnr." class="emphasized">
                            D12.34.567
                        </td>
                        <td role="cell" data-column="Sale Order Name">
                            Quality-focused bandwidth-monitored parallelism
                        </td>
                        <td role="cell" data-column="Kunde" class="muted">
                            Stiedemann, Wolff and Pachocha
                        </td>
                        <td role="cell" data-column="Principal" class="muted">
                            Jörg Müller
                        </td>
                        <td role="cell" data-column="Freigaben" class="muted">
                            <label class="progress-bar undefined">
                                <progress value="2" max="3"></progress>
                                2 / 3
                            </label>
                        </td>

                        <td role="cell" data-column="Status" class="muted">
                            <label class="progress-bar green">
                                <progress value="1" max="5"></progress>
                                1 / 5
                            </label>
                        </td>

                        <td role="cell" data-column="Nettopreis">
                            <span class="amount">€2,575.00</span>
                        </td>
                    </tr>

                    <tr role="row">
                        <td class="table-toggler-cell" role="cell">
                            <button is="tabelle-toggler" hidden aria-expanded="false">
                                <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                    <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                </span>
                                <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                    <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                </span>
                            </button>
                        </td>

                        <td role="cell" data-column="Auftragnr." class="emphasized">
                            D12.34.567
                        </td>
                        <td role="cell" data-column="Sale Order Name">
                            Quality-focused bandwidth-monitored parallelism
                        </td>
                        <td role="cell" data-column="Kunde" class="muted">
                            Stiedemann, Wolff and Pachocha
                        </td>
                        <td role="cell" data-column="Principal" class="muted">
                            Jörg Müller
                        </td>
                        <td role="cell" data-column="Freigaben" class="muted">
                            <label class="progress-bar undefined">
                                <progress value="2" max="3"></progress>
                                2 / 3
                            </label>
                        </td>

                        <td role="cell" data-column="Status" class="muted">
                            <label class="progress-bar green">
                                <progress value="1" max="5"></progress>
                                1 / 5
                            </label>
                        </td>

                        <td role="cell" data-column="Nettopreis">
                            <span class="amount">€2,575.00</span>
                        </td>
                    </tr>

                    <tr role="row">
                        <td class="table-toggler-cell" role="cell">
                            <button is="tabelle-toggler" hidden aria-expanded="false">
                                <span class="expand" title="Auftrag D12.34.567 aufklappen">
                                    <span class="sr-only">Auftrag D12.34.567 aufklappen</span>
                                </span>
                                <span class="collapse" title="Auftrag D12.34.567 zuklappen">
                                    <span class="sr-only">Auftrag D12.34.567 zuklappen</span>
                                </span>
                            </button>
                        </td>

                        <td role="cell" data-column="Auftragnr." class="emphasized">
                            D12.34.567
                        </td>
                        <td role="cell" data-column="Sale Order Name">
                            Quality-focused bandwidth-monitored parallelism
                        </td>
                        <td role="cell" data-column="Kunde" class="muted">
                            Stiedemann, Wolff and Pachocha
                        </td>
                        <td role="cell" data-column="Principal" class="muted">
                            Jörg Müller
                        </td>
                        <td role="cell" data-column="Freigaben" class="muted">
                            <label class="progress-bar undefined">
                                <progress value="2" max="3"></progress>
                                2 / 3
                            </label>
                        </td>

                        <td role="cell" data-column="Status" class="muted">
                            <label class="progress-bar green">
                                <progress value="1" max="5"></progress>
                                1 / 5
                            </label>
                        </td>

                        <td role="cell" data-column="Nettopreis">
                            <span class="amount">€2,575.00</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</div>
```
