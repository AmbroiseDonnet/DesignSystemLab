
export default function TestBalise() {
    return (
        <>
        <h1>Titre H1 — Système opérationnel</h1>
        <h2>Titre H2 — Module actif</h2>
        <h3>Titre H3 — Sous-section</h3>
        <h4>Titre H4 — Paramètre</h4>
        <h5>Titre H5 — Détail</h5>
        <h6>Titre H6 — Micro-label</h6>

        <hr/>

        <p>Corps de texte principal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Voici du texte en <strong>gras</strong>, en <em>italique</em>, et un <small>petit texte secondaire</small>.</p>

        <p>Un lien vers <a href="#">une destination quelconque</a> et du texte qui contient un mot <mark>surligné</mark> important, ainsi qu'une abréviation comme <abbr title="Cascading Style Sheets">CSS</abbr>.</p>

        <blockquote>
            Ceci est une citation. Elle doit apparaître avec une bordure gauche accent et une couleur secondaire. Idéalement en italique.
        </blockquote>

        <hr/>

        <h2>Listes</h2>

        <ul>
            <li>Élément de liste non ordonnée</li>
            <li>Second élément avec du contenu plus long pour tester le retour à la ligne</li>
            <li>Troisième élément</li>
        </ul>

        <ol>
            <li>Premier élément ordonné</li>
            <li>Deuxième élément ordonné</li>
            <li>Troisième élément ordonné</li>
        </ol>

        <dl>
            <dt>Token</dt>
            <dd>Variable CSS représentant une valeur du design system.</dd>
            <dt>Radius</dt>
            <dd>Arrondi appliqué aux coins d'un composant.</dd>
            <dt>Surface</dt>
            <dd>Fond d'une carte ou d'un panneau, légèrement plus clair que la base.</dd>
        </dl>

        <hr/>

        <h2>Code & technique</h2>

        <p>Une variable inline : <code>--color-accent</code>, une touche clavier : <kbd>Ctrl</kbd> + <kbd>S</kbd>, et un résultat de commande : <samp>Build success</samp>.</p>

        <pre><code>{`:root {
            --color-accent: #db610a;
            --font-display: "Barlow Condensed", sans-serif;
            --space-xl: 16px;
            }`}</code></pre>

        <hr/>

        <h2>Formulaires</h2>

        <fieldset>
            <legend>Informations de contact</legend>

            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom"/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="votre@email.com"/>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Votre message..."></textarea>

            <label htmlFor="choix">Catégorie</label>
            <select id="choix" name="choix">
            <option value="">-- Choisir --</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
            </select>

            <button type="submit">Envoyer</button>
        </fieldset>

        <hr/>

        <h2>Tableau</h2>

        <table>
            <thead>
            <tr>
                <th>Token</th>
                <th>Valeur</th>
                <th>Usage</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><code>--color-accent</code></td>
                <td><code>#db610a</code></td>
                <td>Orange signature, CTA, focus</td>
            </tr>
            <tr>
                <td><code>--font-display</code></td>
                <td><code>Barlow Condensed</code></td>
                <td>Titres, labels, boutons</td>
            </tr>
            <tr>
                <td><code>--space-xl</code></td>
                <td><code>16px</code></td>
                <td>Padding standard des composants</td>
            </tr>
            <tr>
                <td><code>--radius-md</code></td>
                <td><code>5px</code></td>
                <td>Arrondi des cards et panneaux</td>
            </tr>
            </tbody>
        </table>

        <hr/>

        <h2>Médias</h2>

        <figure>
            <img src="https://placehold.co/800x300/251c15/f07823?text=Image+placeholder" alt="Image de test"/>
            <figcaption>Légende de l'image — font-mono, couleur muted</figcaption>
        </figure>

        <hr/>

        <h2>Utilitaires natifs</h2>

        <details>
            <summary>Afficher les détails</summary>
            <p>Contenu masqué par défaut. Le summary doit être en font-display uppercase, et passer en couleur accent au hover et quand ouvert.</p>
        </details>
    </>
    )
}
