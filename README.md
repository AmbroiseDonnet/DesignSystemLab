# 🧪 Design System Lab

> Un espace d'expérimentation pour construire, tester et affiner les fondations d'un design system — tokens, composants, patterns — le tout en React / TypeScript + SCSS.

---

## ✦ Pourquoi ce repo ?

Ce labo est un terrain de jeu structuré. On y explore :

- Les **fondations** — couleurs, typographie, spacing, ombres, breakpoints
- Les **composants UI** — du plus atomique au plus composite
- Les **patterns d'interaction** — états, transitions, accessibilité

Rien n'est figé. Tout est questionnable. C'est fait pour ça.

---

## 📁 Structure du projet

```
design-system-lab/
├── tokens/                  # Design tokens en SCSS
│   ├── _colors.scss
│   ├── _typography.scss
│   ├── _spacing.scss
│   └── _index.scss          # Barrel export
├── components/              # Composants React
│   ├── primitives/          # Button, Input, Badge…
│   ├── layout/              # Stack, Grid, Container…
│   └── patterns/            # Card, Modal, Dropdown…
├── styles/                  # Styles globaux & utilitaires SCSS
├── docs/                    # Notes, décisions, références
└── playground/              # Sandbox libre pour les expériences
```

---

## 🚀 Démarrage rapide

```bash
# Cloner le repo
git clone https://github.com/ton-user/design-system-lab.git
cd design-system-lab

# Installer les dépendances
npm install

# Lancer le dev
npm run dev
```

---

## 🎨 Tokens

Les design tokens sont la **source de vérité** du système. Ils sont définis en SCSS comme variables et custom properties CSS, importés via le barrel `_index.scss`.

```scss
@use '@/tokens' as t;

.button {
  background-color: t.$color-brand-500;
  padding: t.$spacing-2 t.$spacing-4;
  font-size: t.$text-sm;
}
```

> 💡 **Règle d'or** : on ne met jamais de valeur brute (`#3b5bdb`, `16px`) dans un composant. Tout passe par les tokens.

---

## 🧩 Composants

Chaque composant suit les conventions suivantes :

- **Props typées** avec TypeScript
- **Variantes** gérées via des props explicites (pas de className hack)
- **Accessibilité** — attributs ARIA, navigation clavier
- **Pas de dépendance externe** sur les primitives

```tsx
import { Button } from '@/components/primitives/Button'

<Button variant="primary" size="md" onClick={handleClick}>
  Valider
</Button>
```

---

## 📋 Conventions

| Élément | Convention |
|---|---|
| Nommage des composants | PascalCase |
| Nommage des tokens | `$kebab-case` |
| Fichiers de styles | SCSS Modules (`*.module.scss`) |
| Commits | Conventional Commits |

---

## 🗺️ Roadmap

- [ ] Mise en place des tokens de base (couleurs, typo, spacing)
- [ ] Composants primitifs (Button, Input, Badge, Tag)
- [ ] Composants de layout (Stack, Grid)
- [ ] Composants composites (Card, Modal, Dropdown)
- [ ] Documentation interactive (Storybook)
- [ ] Système de thème (light / dark)

---

## 📝 Notes & décisions

Les décisions d'architecture et les choix de design sont documentés dans [`/docs`](./docs). Avant d'introduire un nouveau pattern ou de modifier une fondation, une note est créée pour tracer le contexte et les alternatives considérées.

<p align="center">
  Fait avec curiosité · React · TypeScript · SCSS
</p>
