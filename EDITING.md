# Make the website sound like you

Live site: https://jayashruthi.com

The source repository is [shrut10/portfolio](https://github.com/shrut10/portfolio). Clone it into a local folder named `portfolio`; the live address remains **jayashruthi.com**.

## Start with `content/site.js`

This is the main file for changing the wording. [Open the copy file on GitHub](https://github.com/shrut10/portfolio/edit/main/content/site.js), or open it in any text editor. Change the words, then commit to `main` to update the live site through Vercel.

The quickest places to start are `home.newsTitle` and `home.newsText` (the homepage update), `about.intro` and `about.paragraphs` (the professional biography), and `ui.projectsIntro` (the projects page tagline). The old `profile.introduction` and `profile.welcome` fields are no longer displayed on the homepage.

| What you want to change | Find this in `content/site.js` |
| --- | --- |
| Your identity metadata, email and social links | `profile` |
| The homepage announcement and its button wording | `home.newsTitle`, `home.newsText`, `home.newsButton` |
| Other homepage headings and sentences | `home` |
| The quote beneath the Thronglets field and its attribution | `thronglets` |
| Menu labels, buttons, section headings and page taglines | `ui` |
| GeneCraft’s page, screenshot caption and download link | `genecraft` |
| IntentLab’s explanation, motivation and results | `intentlab` |
| The NeuroTechX listing on the homepage and project page | `home.newsResourceLabel`, `intentlab.recognition`, `intentlab.recognitionDetail` and their adjacent links |
| Other project names, descriptions, thumbnails and GitHub links | `projects` |
| Essay titles, summaries, publication dates, links and banner credits | `posts`, ordered by professional relevance. The first two appear under Selected writing on the homepage, and the first leads the Writing page. The remaining essays keep this order, regardless of date or whether they have an image. |
| The mathematics paper on the Writing page | `markovPaper` |
| About page | `about` |
| Contact page | `contact` |

Change the words inside the quotes; leave property names and commas in place. For a sentence containing a straight apostrophe, use double quotes around it, for example:

```js
newsText: "IntentLab's recorded EEG experiments explore how imagined hand movements can become computer commands",
```

You can use paragraphs that sound like you. Keep the measured results, dataset attribution and limits accurate: the experiment uses **recorded** EEG and its 61.1% figure is participant-macro balanced accuracy. If a new model changes the results, update the project and this page together.

## Other text and the design

- `app/page.jsx`: homepage section labels and link labels.
- `app/projects/intentlab/page.jsx`: extra project section headings, technical explanation and resource links.
- `app/projects/page.jsx`: projects page introduction and featured-project layout.
- `app/blog/page.jsx`: featured essay, essay archive and mathematics paper.
- `components/WritingList.module.css`: featured essay, archive card and homepage writing styles.
- `public/writing/`: article banners. Match each file to its image entry in `posts`.
- `app/ClientLayout.jsx`: menu and footer wording.
- `content/search.js`: browser-tab titles, search descriptions, link-preview wording and current research topics.
- `content/site.js` → `profile.name` and `profile.shortName`: the visible name, displayed as Jayashruthi Rajesh Babu (Shruthi). `profile.alternateNames` supplies name variants for search metadata only; do not add a visible explanation of these variants.
- `lib/seo.js`: connects the pages, Person identity, GitHub/LinkedIn profiles and projects using structured data.
- `app/layout.jsx`: shared metadata, crawl settings and the Person/website information. Individual page files use `pageMetadata(...)`.
- `components/ThrongletField.jsx`: the canvas landscape, original sprites and brief settling movement. The field is passive and displays only the scene and its attributed quote.
- `app/styles/globals.css`: colours, fonts, borders, spacing and button styling. The black palette and Comic Sans font stack are at the top. The shared layout and control styles are defined in the same file.
- `components/FeaturedProject.jsx`: the GeneCraft and IntentLab feature layouts; their text comes from `content/site.js`.
- `public/projects/`: your GeneCraft screenshot, an actual capture of the IntentLab demo, the tree outage exploration chart and the published model comparison figure.
- `public/social-card.svg` and `public/social-card.png`: the preview image used when the site is shared. If you edit the SVG, regenerate the PNG with `npm run social-image`.
- `app/sitemap.js`: add any new page URLs and change `lastModified` when making a substantive update.

The field uses original pixel sprites drawn on a canvas, inspired by the creatures in Black Mirror’s Plaything. It uses no extracted game artwork or language model. The scene moves for up to four seconds while visible, then remains still; a reduced-motion preference shows a still scene from the start. Comic Sans MS is used when installed on the visitor’s device, with Comic Neue served from the website as a fallback.

## Preview your changes

Use Node.js 22. From the parent directory of your local clone, open a terminal:

```sh
cd portfolio
npm ci
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:3000). Saved changes appear in the preview. Stop the preview with Ctrl+C.

Before publishing:

```sh
npm run lint
npm run build
```

## Publish to the existing website

Commit and push your changes to the repository’s `main` branch. The connected Vercel project builds the update for **jayashruthi.com**. You can also edit `content/site.js` directly on GitHub and commit there; pull those changes locally before your next local edit.

Check the Vercel deployment status before assuming an update is live. A failed build leaves the previous successful version online. GitHub Actions separately checks the code, build and production dependencies.

To reverse a published change, revert its commit and push, or restore an earlier successful deployment in Vercel. Avoid force-pushing or deleting the repository.

## The separate IntentLab demo

The demo has its own repository and deployment. Its introduction, headings and explanations are in [web/index.html](https://github.com/shrut10/intentlab-bci/edit/main/web/index.html). Find the exact words visible on the page and change the text between the HTML tags. Keep `id` attributes and control values intact.

- Main title: search `Recorded EEG decoding`
- Intro: search `IntentLab classifies EEG`.
- Notes: search `Research question`, `Limits of the evidence`, or `Further evaluation`.
- Messages after a prediction: `web/app.js`.
- Palette and fonts: `web/base.css`; demo layout, borders and buttons: `web/styles.css`.
- Full map: [IntentLab editing guide](https://github.com/shrut10/intentlab-bci/blob/main/docs/EDITING.md).

Keep the separate demo in its own local `intentlab-bci` clone. Pushing its `main` branch updates `intentlab-bci.vercel.app` independently of this portfolio.

## Current project selection

GeneCraft and IntentLab are the two lead projects. The Baringa tree outage exploration follows, before the reproducible neural network versus polynomial comparison, the housing group project and PageRank. The tree outage project presents exploratory analysis of open source electricity fault, woodland, terrain and weather data; it is not a deployed forecasting model. Small exercises and repositories without a clear standalone presentation are left off this curated page; all work remains accessible through GitHub.

This is a curated snapshot, so a new repository is added by editing the `genecraft`, `intentlab` or `projects` objects in `content/site.js` rather than appearing automatically. For the model comparison, the polynomial's validation MSE is 0.0307308 and the neural network's is 0.035906: about 14.4% lower relative to the neural network. The repository README's approximately 17% uses the other denominator.

Use actual screenshots or published figures. Omit `image` and `imageAlt` on ordinary project cards when there is no suitable image. The original GeneCraft screenshot remains at full resolution on its project page.

## Search metadata and name variants

[Edit titles and search descriptions](https://github.com/shrut10/portfolio/edit/main/content/search.js). The main identity is Jayashruthi Rajesh Babu; alternate names, including Shruthi, Jaya and the joined Rajeshbabu spelling, live under `profile.alternateNames` in `content/site.js`. Keep aliases factual. They describe one person, not separate profiles.

The homepage and About page describe the current BCI, EEG, neurotechnology and agentic AI work in visible prose. IntentLab and GeneCraft have distinct descriptions, share previews and structured project data linked to the same creator. The separate IntentLab demo also identifies its creator by the full name.

Keep `googleVerification` in `content/search.js`: this public tag verifies ownership of the HTTPS website in your Google Search Console account. It is not a password. Removing it can cause Google to revoke verification.

After changing an individual page, update `search.updated` to the real edit date. The sitemap uses the same public-page list as the metadata. When changing the share graphic, run `npm run social-image` and change its image version in `lib/seo.js` so sharing services can fetch it again.

In your verified Google Search Console property, inspect and request indexing for the homepage, About page, projects page and both project pages. The sitemap is `https://jayashruthi.com/sitemap.xml`. Metadata and structured data supply accurate context; Google chooses snippets, rankings and AI summaries. Re-crawling can take days or weeks, and a request does not guarantee inclusion. Official guidance: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl and https://developers.google.com/search/docs/fundamentals/ai-optimization-guide.

## Design and writing

The homepage starts with project updates and the Thronglets landscape, with the professional biography kept on About. The About page describes actual work, technical questions and ways to collaborate rather than repeating a CV or displaying a separate current interests panel.

Use British English and direct explanatory wording without sentence full stops, hyphens, exclamations or dramatic fragments in visible prose, while preserving decimal points, addresses, URLs and identifiers where needed for accuracy. Keep article titles and quotations accurate to their sources.

The page background is pure black, with neon green links, cyan and lilac accents, grey body text and restrained borders. Compact heading strips, square bordered buttons with subtle inset pressed states, and selected writing rows with muted dates give the layout definition. The Thronglets landscape contains layered mountains, fir trees and fog, with no title, buttons or instructions around the scene.

The font stack starts with the device’s Comic Sans MS. [Comic Neue](https://fontsource.org/fonts/comic-neue/use) is bundled as an open-licensed fallback.

### Reference notes

These are structural and editorial references, with patterns adapted to this site rather than copied layouts, wording or artwork.

- [OSDev](https://forum.osdev.org/) and [VOGONS](https://www.vogons.org/): clear category headings and consistent rows informed the compact section strips and grouped links.
- [Hacker News](https://news.ycombinator.com/): compact navigation and subordinate metadata informed the selected writing rows and muted dates.
- [Fabrice Bellard](https://bellard.org/): project links with concrete descriptions informed the emphasis on work and direct contact rather than a large introduction.
- [Christopher Olah](https://colah.github.io/about.html): a concise statement of the actual technical work informed the About page’s focus.
- [Chip Huyen](https://huyenchip.com/): connections between projects, practical work and collaboration informed the About page’s structure.
- [Bruno Olshausen](https://rctn.org/bruno/): direct access to research, software and contact information informed the emphasis on evidence and useful links.
- [Incompetech](https://incompetech.com/): concrete project updates informed the editorial approach, while the black interface reference supplied by the site owner informed the visual direction.
