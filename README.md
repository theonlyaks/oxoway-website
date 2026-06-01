# Oxoway Website — Marketing & Pre-Registration

The official landing page for Oxoway, the AI exam analysis platform. Built with Next.js, this site introduces the product, showcases features, displays pricing, and collects pre-registration emails via a Firebase-backed waitlist.

## Features

- **Pre-Registration Waitlist** — Email capture with real-time spot counter (limited early-access slots via Firestore)
- **AI Analysis Demo** — Interactive section demonstrating the exam analysis experience
- **Pricing Section** — Tiered plan breakdown
- **Team Section** — Founders and team profiles
- **Contact & Feedback** — Contact form and user feedback flow
- **Legal Pages** — Privacy policy, terms, refund policy, shipping policy
- **Account Deletion** — GDPR-compliant account deletion request page

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Firebase Firestore (waitlist) |
| Deployment | Vercel |

## Pages

| Route | Description |
|---|---|
| `/` | Landing page (hero, features, pricing, team) |
| `/analysis` | Live AI analysis demo |
| `/submit-news` | Community news submission |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/refund` | Refund policy |
| `/delete-account` | Account deletion request |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Scripts

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```
