# Eric Bundy Law Website

A production-ready Next.js website built in plain JavaScript with custom CSS. It intentionally avoids TypeScript, Tailwind, PostCSS configuration, path aliases, and unnecessary dependencies to reduce deployment risk.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Vercel settings

- Framework Preset: Next.js
- Root Directory: `./`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave blank

## Before launch

1. Replace the placeholder email address and WhatsApp number in `app/page.js`.
2. Add an approved professional headshot.
3. Connect the inquiry form to Formspree, Resend, HubSpot, or another form service if preferred.
4. Review all attorney advertising and jurisdictional disclaimers.
