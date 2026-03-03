# Portfolio — RAKOTONDRAZAKA Fitia Ismael

Personal portfolio built with Nuxt 4, featuring multilingual content, project/experience showcases, and a contact flow with server-side validation + Brevo email delivery.

## Live website

- https://ismaelrakoto.com

## Features

- Bilingual UI (`fr`, `en`) with `@nuxtjs/i18n`
- Portfolio sections: welcome, about, skills, projects, experience, education, contact
- Contact form with schema validation (`zod`, `vee-validate`) and server API endpoint
- Email notifications via Brevo transactional templates
- SEO modules (`@nuxtjs/seo`, sitemap, schema.org identity metadata)
- UI stack based on Tailwind CSS + shadcn-nuxt/reka-ui components

## Tech stack

- Nuxt 4 + Vue 3 + TypeScript
- Pinia, VueUse, VueUse Motion
- Tailwind CSS 4
- Zod / vee-validate
- Brevo SDK (transactional email)

## Project structure

- `app/` — application pages, components, composables, stores, assets
- `server/` — API routes and server utilities (email, validation, exceptions)
- `shared/` — shared types and schemas used by app + server
- `i18n/` — locale configuration and translation files

## Local development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create your local env file from the example:

```bash
# macOS / Linux
cp .env.example .env

# Windows (PowerShell)
Copy-Item .env.example .env
```

Required variables (from `.env.example`):

- `APP_VERSION`
- `NUXT_PUBLIC_APP_VERSION`
- `NUXT_PUBLIC_APP_URL`
- `NUXT_SITE_URL`
- `NUXT_PUBLIC_SITE_URL`
- `NUXT_BREVO_SMTP_KEY`
- `NUXT_PUBLIC_CONTACT_EMAIL`
- `NUXT_PUBLIC_CONTACT_FULL_NAME`
- `NUXT_PUBLIC_CONTACT_PHONE_NUMBER`

### 3) Start the app

```bash
npm run dev
```

App runs on `http://localhost:3000`.

## Available scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run generate` — generate static output (where applicable)
- `npm run typecheck` — run Nuxt/Vue type checks
- `npm run lint` — lint project
- `npm run lint:fix` — lint and auto-fix

## Docker

This repository includes a production Docker setup:

- `Dockerfile` builds and runs the Nuxt output (`.output/server/index.mjs`)
- `docker-compose.yml` defines the `app` service and expected env vars

Run with Docker Compose:

```bash
docker compose up --build -d
```

## Contact API

- Endpoint: `POST /api/messages`
- Validates payload on server and sends:
  - notification email to portfolio owner
  - acknowledgement email to sender
