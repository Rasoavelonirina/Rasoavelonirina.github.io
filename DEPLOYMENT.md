# Déploiement — GitHub Pages

Le portfolio est désormais un **site statique** (HTML / CSS / JS) servi directement depuis la racine du repo, sans build. Les anciens fichiers React (`src/`, `public/`, `package.json`, …) sont laissés en place pour référence mais ne sont plus utilisés.

## Structure servie en production

```
/                        ← racine GitHub Pages
├── index.html           ← page principale
├── .nojekyll            ← désactive Jekyll
├── CNAME                ← domaine perso (uupm.cc / rasoavelonirina.github.io)
└── assets/
    ├── css/styles.css
    ├── js/i18n.js
    ├── js/animations.js
    ├── js/main.js
    ├── img/danielson.png
    └── cv/
        ├── cv-fr.pdf
        └── cv-en.pdf
```

## Étapes de mise en ligne (une seule fois)

### 1. Commit & push sur `main`

```bash
git add index.html assets/ .nojekyll DEPLOYMENT.md
git commit -m "feat: refonte portfolio — site statique bilingue avec animations"
git push origin main
```

### 2. Configurer GitHub Pages pour servir depuis `main`

1. Aller sur https://github.com/Rasoavelonirina/rasoavelonirina.github.io/settings/pages
2. Sous **Build and deployment → Source**, choisir **Deploy from a branch**
3. Branche : `main`
4. Dossier : `/ (root)`
5. Cliquer **Save**

Le site sera disponible en ~1 minute sur https://rasoavelonirina.github.io/

> **Note** : la branche `master` (où GitHub Pages déploie aujourd'hui via `gh-pages`) peut être conservée mais ne sera plus servie. Vous pouvez la supprimer plus tard si vous voulez.

## Mise à jour du contenu

Tout le texte est dans **un seul fichier** : `assets/js/i18n.js`. Pour modifier le portfolio :

- **Texte FR/EN** : éditer `i18n.js`, recharger la page
- **Photo** : remplacer `assets/img/danielson.png`
- **CV** : remplacer `assets/cv/cv-fr.pdf` et `assets/cv/cv-en.pdf`
- **Couleur d'accent** : éditer `--accent` dans `assets/css/styles.css` (actuellement `#2D3D7C` indigo)
- **Animations** : `assets/js/animations.js`

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

## Roadmap éventuelle

- [ ] Optimiser les images (WebP)
- [ ] Service Worker / PWA pour mode offline
- [ ] Analytics légers (Plausible / GoatCounter)
- [ ] Page projet détaillée par projet (créer `projects/<slug>.html`)
- [ ] Blog (`/blog/`) — fichiers Markdown rendus par JS ou un générateur statique
