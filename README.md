# A LONG VACATION

A travel journal built with Vue 3 and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy to Cloudflare Pages

Recommended setup:

- Connect this repository to `Cloudflare Pages`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

For a custom subdomain, add it from:

- `Cloudflare Dashboard -> Workers & Pages -> your project -> Custom domains`

Suggested subdomains:

- `www.a-long-vacation.com`
- `blog.a-long-vacation.com`
