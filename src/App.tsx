export default function App() {
  return (
    <>
        <div className="layout">

            {/* SIDEBAR */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <h1>Design System</h1>
                    <p>φ = 1.618 · v1.0</p>
                    <p>Pour l'instant il n'y a aucun composant en react</p>
                </div>
                <nav>
                    <div className="nav-group">
                        <span className="nav-group-label">Fondations</span>
                        <a href="#couleurs" className="nav-link active">Couleurs</a>
                        <a href="#typographie" className="nav-link">Typographie</a>
                        <a href="#espacement" className="nav-link">Espacement</a>
                        <a href="#radius" className="nav-link">Border radius</a>
                    </div>
                    <div className="nav-group">
                        <span className="nav-group-label">Composants</span>
                        <a href="#boutons" className="nav-link">Boutons</a>
                        <a href="#badges" className="nav-link">Badges</a>
                        <a href="#formulaires" className="nav-link">Formulaires</a>
                        <a href="#cards" className="nav-link">Cards</a>
                        <a href="#alertes" className="nav-link">Alertes</a>
                        <a href="#stats" className="nav-link">Statistiques</a>
                        <a href="#tables" className="nav-link">Tables</a>
                    </div>
                </nav>
            </aside>

            {/* MAIN */}
            <main className="main">

                {/* COULEURS */}
                <section className="section" id="couleurs">
                    <div className="section-header">
                        <span className="section-index">01</span>
                        <span className="section-title">Couleurs</span>
                    </div>

                    <div className="subsection">
                        <span className="subsection-label">Orange — couleur signature</span>
                        <div className="color-scale">
                            <div className="color-swatch swatch-orange-50" data-label="50"></div>
                            <div className="color-swatch swatch-orange-100" data-label="100"></div>
                            <div className="color-swatch swatch-orange-200" data-label="200"></div>
                            <div className="color-swatch swatch-orange-400" data-label="400"></div>
                            <div className="color-swatch swatch-orange-500" data-label="500 ★"></div>
                            <div className="color-swatch swatch-orange-600" data-label="600"></div>
                            <div className="color-swatch swatch-orange-800" data-label="800"></div>
                            <div className="color-swatch swatch-orange-900" data-label="900"></div>
                        </div>
                    </div>

                    <div className="subsection">
                        <span className="subsection-label">Stone / Béton — neutrals</span>
                        <div className="color-scale">
                            <div className="color-swatch swatch-stone-50" data-label="50"></div>
                            <div className="color-swatch swatch-stone-100" data-label="100"></div>
                            <div className="color-swatch swatch-stone-200" data-label="200"></div>
                            <div className="color-swatch swatch-stone-400" data-label="400"></div>
                            <div className="color-swatch swatch-stone-500" data-label="500"></div>
                            <div className="color-swatch swatch-stone-600" data-label="600"></div>
                            <div className="color-swatch swatch-stone-700" data-label="700"></div>
                            <div className="color-swatch swatch-stone-800" data-label="800"></div>
                            <div className="color-swatch swatch-stone-900" data-label="900 ★"></div>
                        </div>
                    </div>

                    <div className="subsection">
                        <span className="subsection-label">Couleurs sémantiques</span>
                        <div className="color-chips">
                            <div className="color-chip">
                                <div className="color-chip-dot dot-accent"></div>
                                <div className="color-chip-info">
                                    <div className="color-chip-name">accent</div>
                                    <div className="color-chip-value">#D95F0A</div>
                                </div>
                            </div>
                            <div className="color-chip">
                                <div className="color-chip-dot dot-danger"></div>
                                <div className="color-chip-info">
                                    <div className="color-chip-name">danger</div>
                                    <div className="color-chip-value">#E03A2F</div>
                                </div>
                            </div>
                            <div className="color-chip">
                                <div className="color-chip-dot dot-success"></div>
                                <div className="color-chip-info">
                                    <div className="color-chip-name">success</div>
                                    <div className="color-chip-value">#4E9E6A</div>
                                </div>
                            </div>
                            <div className="color-chip">
                                <div className="color-chip-dot dot-warning"></div>
                                <div className="color-chip-info">
                                    <div className="color-chip-name">warning</div>
                                    <div className="color-chip-value">#D4A017</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TYPOGRAPHIE */}
                <section className="section" id="typographie">
                    <div className="section-header">
                        <span className="section-index">02</span>
                        <span className="section-title">Typographie</span>
                    </div>

                    <div className="subsection">
                        <span className="subsection-label">Familles de polices</span>
                        <div className="font-card">
                            <div className="font-card-meta">Display — Barlow Condensed · titres, UI labels, boutons</div>
                            <div className="font-card-sample font-sample-display">
                                Opérationnel 24/7
                            </div>
                        </div>
                        <div className="font-card">
                            <div className="font-card-meta">Body — Barlow · corps de texte, descriptions</div>
                            <div className="font-card-sample font-sample-body">
                                Un design system pensé pour durer. Chaque décision visuelle est documentée, chaque composant
                                est cohérent et réutilisable sur tous tes projets.
                            </div>
                        </div>
                        <div className="font-card">
                            <div className="font-card-meta">Mono — IBM Plex Mono · données, code, labels, metadata</div>
                            <div className="font-card-sample font-sample-mono">
                                SYS_STATUS: OPERATIONAL · NODE: 07-ALPHA · BUILD: 2025.05.05
                            </div>
                        </div>
                    </div>

                    <div className="subsection">
                        <span className="subsection-label">Échelle nombre d'or — base 16px × φ 1.618</span>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-2xl</div>
                                <div className="type-size">68px</div>
                                <div className="type-phi">φ⁴</div>
                            </div>
                            <div className="type-sample type-sample--2xl">Hero display</div>
                        </div>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-xl</div>
                                <div className="type-size">41px</div>
                                <div className="type-phi">φ³</div>
                            </div>
                            <div className="type-sample type-sample--xl">Section</div>
                        </div>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-lg</div>
                                <div className="type-size">25px</div>
                                <div className="type-phi">φ²</div>
                            </div>
                            <div className="type-sample type-sample--lg">Lead text et Sous-titre</div>
                        </div>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-base</div>
                                <div className="type-size">16px</div>
                                <div className="type-phi">φ¹</div>
                            </div>
                            <div className="type-sample type-sample--base">Corps de texte</div>
                        </div>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-sm</div>
                                <div className="type-size">10px</div>
                                <div className="type-phi">φ⁻¹</div>
                            </div>
                            <div className="type-sample type-sample--sm">Labels · UI</div>
                        </div>
                        <div className="type-row">
                            <div className="type-meta-col">
                                <div className="type-token">--text-xs</div>
                                <div className="type-size">6px</div>
                                <div className="type-phi">φ⁻²</div>
                            </div>
                            <div className="type-sample type-sample--xs">Captions · metadata</div>
                        </div>
                    </div>
                </section>

                {/* ESPACEMENT */}
                <section className="section" id="espacement">
                    <div className="section-header">
                        <span className="section-index">03</span>
                        <span className="section-title">Espacement</span>
                    </div>
                    <span className="subsection-label">Échelle nombre d'or — base 6px × φ 1.618</span>
                    <table className="space-table">
                        <tbody>
                            <tr>
                                <td>--space-1</td>
                                <td>4px</td>
                                <td>φ⁻²</td>
                                <td><div className="space-bar space-bar--xs"></div></td>
                            </tr>
                            <tr>
                                <td>--space-2</td>
                                <td>6px</td>
                                <td>φ⁻¹</td>
                                <td><div className="space-bar space-bar--sm"></div></td>
                            </tr>
                            <tr>
                                <td>--space-3</td>
                                <td>10px</td>
                                <td>φ⁰</td>
                                <td><div className="space-bar space-bar--md"></div></td>
                            </tr>
                            <tr>
                                <td>--space-4</td>
                                <td>16px</td>
                                <td>φ¹</td>
                                <td><div className="space-bar space-bar--lg"></div></td>
                            </tr>
                            <tr>
                                <td>--space-5</td>
                                <td>25px</td>
                                <td>φ²</td>
                                <td><div className="space-bar space-bar--xl"></div></td>
                            </tr>
                            <tr>
                                <td>--space-6</td>
                                <td>41px</td>
                                <td>φ³</td>
                                <td><div className="space-bar space-bar--2xl"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* BORDER RADIUS */}
                <section className="section" id="radius">
                    <div className="section-header">
                        <span className="section-index">04</span>
                        <span className="section-title">Border radius</span>
                    </div>
                    <span className="subsection-label">Suite de Fibonacci — converge vers φ</span>
                    <div className="radius-grid">
                        <div className="radius-item">
                            <div className="radius-box radius-box--none"></div>
                            <div className="radius-label">none</div>
                            <div className="radius-value">0px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--xs"></div>
                            <div className="radius-label">xs</div>
                            <div className="radius-value">2px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--sm"></div>
                            <div className="radius-label">sm</div>
                            <div className="radius-value">3px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--md"></div>
                            <div className="radius-label">md</div>
                            <div className="radius-value">5px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--lg"></div>
                            <div className="radius-label">lg</div>
                            <div className="radius-value">8px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--xl"></div>
                            <div className="radius-label">xl</div>
                            <div className="radius-value">13px</div>
                        </div>
                        <div className="radius-item">
                            <div className="radius-box radius-box--full"></div>
                            <div className="radius-label">full</div>
                            <div className="radius-value">∞</div>
                        </div>
                    </div>
                </section>

                {/* BOUTONS */}
                <section className="section" id="boutons">
                    <div className="section-header">
                        <span className="section-index">05</span>
                        <span className="section-title">Boutons</span>
                    </div>
                    <div className="subsection">
                        <span className="subsection-label">Variantes</span>
                        <div className="comp-row">
                            <button className="btn btn-primary">Déployer</button>
                            <button className="btn btn-secondary">Annuler</button>
                            <button className="btn btn-ghost">En savoir plus</button>
                            <button className="btn btn-danger">Purger</button>
                        </div>
                    </div>
                    <div className="subsection">
                        <span className="subsection-label">Tailles</span>
                        <div className="comp-row">
                            <button className="btn btn-primary btn-sm">Petit</button>
                            <button className="btn btn-primary">Défaut</button>
                            <button className="btn btn-primary btn-lg">Grand</button>
                        </div>
                    </div>
                </section>

                {/* BADGES */}
                <section className="section" id="badges">
                    <div className="section-header">
                        <span className="section-index">06</span>
                        <span className="section-title">Badges</span>
                    </div>
                    <div className="comp-row">
                        <span className="badge badge-accent">Actif</span>
                        <span className="badge badge-danger">Critique</span>
                        <span className="badge badge-success">Opérationnel</span>
                        <span className="badge badge-warning">En attente</span>
                        <span className="badge badge-neutral">Archivé</span>
                    </div>
                </section>

                {/* FORMULAIRES */}
                <section className="section" id="formulaires">
                    <div className="section-header">
                        <span className="section-index">07</span>
                        <span className="section-title">Formulaires</span>
                    </div>
                    <div className="comp-2col comp-2col--form">
                        <div className="field">
                            <label className="field-label">Identifiant</label>
                            <input type="text" className="input" placeholder="node-07-alpha" />
                        </div>
                        <div className="field">
                            <label className="field-label">Secteur</label>
                            <input type="text" className="input" placeholder="SECTOR_7" />
                        </div>
                        <div className="field">
                            <label className="field-label">Statut</label>
                            <input type="text" className="input input--accent" placeholder="OPERATIONAL" />
                        </div>
                        <div className="field">
                            <label className="field-label">Code d'accès</label>
                            <input type="password" className="input" placeholder="••••••••" />
                        </div>
                    </div>
                </section>

                {/* CARDS */}
                <section className="section" id="cards">
                    <div className="section-header">
                        <span className="section-index">08</span>
                        <span className="section-title">Cards</span>
                    </div>
                    <div className="comp-2col">
                        <div className="card card-accent">
                            <p className="card-title">Mission active</p>
                            <p className="card-body">Récupération de données dans le secteur 7. Durée estimée : 48h. Équipe : 4
                                opérateurs.</p>
                        </div>
                        <div className="card">
                            <p className="card-title">Rapport système</p>
                            <p className="card-body">Tous les nœuds sont opérationnels. Dernière synchronisation il y a 3
                                minutes.</p>
                        </div>
                    </div>
                </section>

                {/* ALERTES */}
                <section className="section" id="alertes">
                    <div className="section-header">
                        <span className="section-index">09</span>
                        <span className="section-title">Alertes</span>
                    </div>
                    <div className="alerts-stack">
                        <div className="alert alert-info">
                            <div className="alert-dot"></div>
                            <div>Mise à jour disponible — version 2.4.1 prête au déploiement.</div>
                        </div>
                        <div className="alert alert-danger">
                            <div className="alert-dot"></div>
                            <div>Connexion perdue — le nœud ALPHA-7 ne répond plus.</div>
                        </div>
                        <div className="alert alert-success">
                            <div className="alert-dot"></div>
                            <div>Déploiement réussi — tous les systèmes sont opérationnels.</div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="section" id="stats">
                    <div className="section-header">
                        <span className="section-index">10</span>
                        <span className="section-title">Statistiques</span>
                    </div>
                    <div className="comp-3col">
                        <div className="stat">
                            <p className="stat-label">Projets actifs</p>
                            <p className="stat-value">12<em>↑</em></p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Taux de succès</p>
                            <p className="stat-value">94<em>%</em></p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Uptime</p>
                            <p className="stat-value">99<em>.9</em></p>
                        </div>
                    </div>
                </section>

                {/* TABLES */}
                <section className="section" id="tables">
                    <div className="section-header">
                        <span className="section-index">11</span>
                        <span className="section-title">Tables</span>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Valeur</th>
                                <th>Statut</th>
                                <th>Env.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>--color-accent</td>
                                <td className="td-mono">#D95F0A</td>
                                <td><span className="badge badge-success">Actif</span></td>
                                <td className="td-meta">Production</td>
                            </tr>
                            <tr>
                                <td>--font-display</td>
                                <td className="td-mono">Barlow Condensed</td>
                                <td><span className="badge badge-success">Actif</span></td>
                                <td className="td-meta">Production</td>
                            </tr>
                            <tr>
                                <td>--text-base</td>
                                <td className="td-mono">16px · φ⁰</td>
                                <td><span className="badge badge-success">Actif</span></td>
                                <td className="td-meta">Production</td>
                            </tr>
                            <tr>
                                <td>--space-6</td>
                                <td className="td-mono">41px · φ⁴</td>
                                <td><span className="badge badge-warning">Review</span></td>
                                <td className="td-meta">Staging</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </main>
        </div>
    </>
  )
}
