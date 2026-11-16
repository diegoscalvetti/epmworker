# epmworker.com

Personal site of Diego Calvetti on Electronic Performance Monitoring (EPM) in construction.
Bilingual: Spanish (Chile, default) at `/es/` and English (UK) at `/en/`. Built with [Astro](https://astro.build) as a static site.

## Updating content (no code needed)

All content lives in three YAML files in `src/data/`:

| File | What it holds |
| --- | --- |
| `publications.yaml` | Every publication. Add new ones at the top. Set `featured: true` to show it on the home page, and tag `topics` (e.g. `epm`) so filters work. |
| `projects.yaml` | Projects, with English (`en`) and Spanish (`es`) text side by side. The `id` becomes the page URL. |
| `journey.yaml` | Stations on the "path" metro map on the home page (based on `DC_path_data.xlsx`). |

Interface text (menus, headings, the "What is EPM?" and "About" pages) is in `src/i18n/ui.ts` and the page files in `src/pages/[lang]/`.

`scripts/parse_cv.py` turns the plain-text export of the CV (`pandoc -t plain CV.docx`) into the publication list, if you want to regenerate it.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Hosting on GitHub Pages with epmworker.com

1. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.
2. In the repository: Settings → Pages → Source: **GitHub Actions**. Then set the custom domain to `epmworker.com` (the `public/CNAME` file already says so) and tick **Enforce HTTPS** once the certificate is ready.
3. At your domain registrar, add these DNS records:
   - `A` records for `epmworker.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<github-user>.github.io`

The same `dist/` folder also works on Netlify, Vercel or Cloudflare Pages if you prefer those.
