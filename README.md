# A LONG VACATION

A travel journal built with Vue 3, Vite, and Decap CMS-ready content files.

## Local development

```bash
npm install
npm run dev
```

## Local CMS editing

Decap CMS is available at `/admin`.

For local editing with the Decap local backend:

```bash
npm run cms
npm run dev
```

Then open:

- `http://localhost:5173/admin/`

This follows the official Decap local backend workflow using `local_backend: true` and `npx decap-server`.

## Content locations

- Journals: `content/journals/*.json`
- Site-wide copy: `content/settings/site.json`
- Uploaded images: `public/images/uploads`

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Cloudflare Pages

Recommended setup:

- Framework preset: `Vue`
- Build command: `npm run build`
- Build output directory: `dist`

## Decap CMS on Cloudflare Pages

This repo now includes a Cloudflare Pages Functions OAuth skeleton for Decap CMS:

- `functions/api/auth.js`
- `functions/api/callback.js`

### What you need to configure

1. Create a GitHub OAuth App

- GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth App
- Homepage URL: your deployed site origin
- Authorization callback URL: `https://YOUR-SITE-DOMAIN/api/callback`

2. In Cloudflare Pages add environment variables

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

3. Update `public/admin/config.yml`

- replace `base_url: https://YOUR-SITE-DOMAIN`
  with your real deployed origin

Example:

```yml
backend:
  name: github
  repo: dockvader/soft_parade
  branch: main
  base_url: https://blog.a-long-vacation.com
  auth_endpoint: api/auth
```

4. Redeploy the site

Then your live CMS should be available at:

- `https://YOUR-SITE-DOMAIN/admin/`

### Notes

- Decap's official docs state that the GitHub backend needs server-assisted authentication:
  https://decapcms.org/docs/github-backend/
- Decap's local backend docs:
  https://decapcms.org/docs/working-with-a-local-git-repository/
- The Cloudflare-specific OAuth bridge pattern here is an implementation choice based on common Decap OAuth provider behavior and Cloudflare Pages Functions.
