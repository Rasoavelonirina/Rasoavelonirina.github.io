# Déploiement — GitHub Pages

Le portfolio est un **site statique** (HTML / CSS / JS) servi directement depuis la racine du repo, sans build. Les anciens fichiers React (`src/`, `public/`, `package.json`, …) sont laissés en place pour référence mais ne sont plus utilisés.

## Structure servie en production

```
/                              ← racine GitHub Pages
├── index.html                 ← page principale (design bento)
├── index-editorial.html       ← version éditoriale précédente (gardée comme alternative)
├── .nojekyll                  ← désactive Jekyll
└── assets/
    ├── css/
    │   ├── bento.css          ← design system du nouvel index
    │   └── styles.css         ← design system éditorial (legacy)
    ├── js/
    │   ├── i18n.js            ← traductions FR / EN
    │   ├── tech-icons.js      ← injection logos + marquee
    │   ├── bento-anim.js      ← animations bento
    │   ├── animations.js      ← animations éditorial (legacy)
    │   └── main.js            ← orchestrateur (i18n, nav, smooth scroll)
    ├── img/
    │   ├── danielson.webp     ← photo optimisée (62 KB)
    │   └── danielson.png      ← fallback (1.1 MB)
    └── cv/
        ├── cv-fr.pdf
        └── cv-en.pdf
```

## Étapes de mise en ligne (à faire une seule fois)

### 1. Commit & push sur `main`

```powershell
git add -A
git commit -m "feat: mise en ligne bento"
git push origin main
```

### 2. Configurer GitHub Pages pour servir depuis `main`

1. Aller sur https://github.com/Rasoavelonirina/Rasoavelonirina.github.io/settings/pages
2. Sous **Build and deployment → Source**, choisir **Deploy from a branch**
3. Branche : `main`
4. Dossier : `/ (root)`
5. Cliquer **Save**

Le site sera disponible en ~1 minute sur https://rasoavelonirina.github.io/

> **Note** : la branche `master` (où GitHub Pages déploie aujourd'hui via `gh-pages`) peut être conservée mais ne sera plus servie. Vous pouvez la supprimer plus tard si vous voulez.

## Mise à jour du contenu

Tout le texte est dans **un seul fichier** : `assets/js/i18n.js`.

- **Texte FR / EN** : éditer `i18n.js`, recharger la page
- **Photo** : remplacer `assets/img/danielson.webp` (et `.png` pour fallback)
- **CV** : remplacer `assets/cv/cv-fr.pdf` et `assets/cv/cv-en.pdf`
- **Palette du bento** : éditer les variables `--lime`, `--coral`, `--sky`, etc. dans `assets/css/bento.css`
- **Animations** : `assets/js/bento-anim.js`
- **Logos technos** (marquee + tags) : `assets/js/tech-icons.js` — modifier `ICON_MAP` et `MARQUEE_ITEMS`

Pas de build à lancer. Un simple `git push` met le site à jour.

## Tester en local

```bash
# Depuis la racine du repo
python -m http.server 5500
# Puis ouvrir http://localhost:5500
```

ou avec Node :

```bash
npx serve -p 5500
```

## Versions du portfolio

| URL | Design | Fichier |
|---|---|---|
| `/` | **Bento maximaliste** (actif) | `index.html` |
| `/index-editorial.html` | Éditorial serif (précédent) | `index-editorial.html` |

Pour basculer entre les deux, renommer les fichiers via `git mv`.

## Roadmap éventuelle

- [ ] Service Worker / PWA pour mode offline
- [ ] Analytics légers (Plausible / GoatCounter)
- [ ] Page projet détaillée par projet (créer `projects/<slug>.html`)
- [ ] Blog (`/blog/`) — fichiers Markdown rendus par JS ou un générateur statique
- [ ] Open Graph image pour partages sociaux
