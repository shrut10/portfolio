# Portfolio

Projects and writing at **[jayashruthi.com](https://jayashruthi.com)**.

Built with Next.js, React and CSS, with project pages for IntentLab and GeneCraft, a writing archive and an About page. Source: [shrut10/portfolio](https://github.com/shrut10/portfolio).

## Run locally

Use Node.js 22, then:

```sh
npm ci
npm run dev
```

## Check and build

```sh
npm run lint
npm run build
npm start
```

Pages are pre-rendered. Client JavaScript handles navigation and a canvas landscape with six creatures inspired by Thronglets. The passive scene moves for up to four seconds while visible, then remains still; reduced-motion preferences show a still scene from the start. Only the landscape and its attributed quote are displayed. Email links open the visitor’s email application; there is no contact form backend.

## Edit the website

Most wording lives in **`content/site.js`**. See **[EDITING.md](EDITING.md)** for the file map, preview steps, publishing instructions and design references.

## Deployment

The `main` branch of `shrut10/portfolio` is connected to Vercel and serves **jayashruthi.com**. GitHub Actions runs lint, a production build and a production dependency audit. Environment variables are not required for this portfolio; IntentLab’s demo and API are hosted separately.

## Design

A pure black background, neon green links, cyan and lilac accents, compact section headings and square bordered buttons. The font stack uses the device’s Comic Sans MS with a locally bundled Comic Neue fallback. Original canvas sprites and SVG icons are used; no extracted game artwork is included.

The layout adapts restrained forum and technical personal-site patterns: clear sections, links before supporting metadata, visible button borders and subtle pressed states. Keyboard focus styles, a skip link, a mobile menu with Escape support and reduced-motion styling are included.
