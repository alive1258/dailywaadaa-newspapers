# PetCare — Veterinary Clinic & Pet Care Platform

A web platform for a veterinary clinic / pet care business, built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. The live public site is pet-care branded — appointment booking, services, a shop, and clinic info — alongside a self-service **admin dashboard (CMS)**. The project is **mid-rebrand**: the public marketing pages were converted from an earlier yacht-charter template to PetCare, but the booking/payment backend, auth, live chat, and the CMS dashboard still run on the original yacht-charter domain model. See [Current State & Rebrand Notes](#current-state--rebrand-notes) below before assuming any given page or system is fully pet-care-native.

---

## Overview

| | |
|---|---|
| **Type** | Full-stack frontend (Next.js) consuming a REST API |
| **Audience** | Public clinic site (appointments, services, shop) + internal content-management dashboard |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Redux Toolkit |
| **Rendering** | App Router with route groups for layout separation |

The codebase is organized into two route groups under a single Next.js App Router instance:

- **`(withCommonLayout)`** — the public site. The pages actually linked from the navbar (`Home`, `Services`, `Shop`, `About Us`, `Contact`) are PetCare-branded: a veterinary clinic homepage, a services page (wellness exams, vaccinations, dental, surgery, emergency care, lab diagnostics), a pet-supplies shop, an about/team page, and a contact page with a 24/7 emergency line. Auth (`login`/`signup`/`otp`) and `/my-bookings` are also live, but still backed by the yacht-charter booking/payment system (see below). `yachts/`, `destinations/`, `experiences/`, `crew-services/`, `booking/confirmation`, `booking/cancelled`, `privacy-policy`, `refund-policy`, `terms-conditions` still exist as routes but are **not linked from the PetCare nav** — leftover yacht-charter pages from before the rebrand.
- **`(dashboardLayout)`** — the internal CMS: authenticated staff tooling for managing content and operations. This side has **not** been migrated — it still manages yacht-domain content (yachts/services, destinations, bookings, payments) against the same backend described in the sibling `backend/` service's README.

---

## Tech Stack

**Core**
- [Next.js 16](https://nextjs.org/) — App Router, file-based routing, image optimization, server/client component split
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing across pages, components, hooks, and API layer

**State & Data**
- [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux` — global state, RTK Query API slices
- `redux-persist` — persisted client state (e.g. auth session)
- [Axios](https://axios-http.com/) — typed HTTP client / API service layer
- `js-cookie` / `cookies-next` / `cookie` — cookie-based session handling
- `jwt-decode` — client-side token inspection
- `lodash` — utility functions

**Payments & Real-Time** *(legacy yacht-charter backend — see Current State)*
- [Stripe Checkout](https://stripe.com/) — redirect-based deposit/balance payment flow for `/my-bookings`
- [Socket.IO Client](https://socket.io/) — persistent WebSocket connection (`/chat` namespace) powering the live support chat widget and staff inbox, with typing indicators, read receipts, and presence

**UI & Forms**
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [react-hook-form](https://react-hook-form.com/) — form state and validation
- [react-datepicker](https://reactdatepicker.com/), `react-paginate`, `lucide-react`, `react-icons`
- `sweetalert2`, `react-toastify` — user feedback / alerts
- `recharts` — dashboard analytics and charts
- `html2canvas` + `jspdf` — client-side document/PDF export (e.g. prescriptions)

**Tooling**
- ESLint 9 (flat config) with `eslint-config-next`
- `date-fns` for date formatting/manipulation

---

## Project Structure

```
src/
├── app/
│   ├── (withCommonLayout)/
│   │   ├── page.tsx                # Home — renders only Ui/HomePage/PetCare/* sections
│   │   ├── services/                # Wellness exams, vaccinations, dental, surgery, emergency, lab tests
│   │   ├── shop/                    # Pet food/grooming/toys catalog, category filter
│   │   ├── about/                   # Mission, vet team, certifications, stats
│   │   ├── contact/                 # Contact form, clinic info, 24/7 emergency line
│   │   ├── my-bookings/             # Customer's booking + payment history (legacy backend)
│   │   ├── booking/confirmation/    # Post-Stripe-Checkout landing (legacy backend)
│   │   ├── booking/cancelled/       # Stripe Checkout cancel/expiry landing (legacy backend)
│   │   └── yachts/ destinations/ experiences/ crew-services/  # Unlinked legacy yacht-charter pages
│   ├── (dashboardLayout)/
│   │   └── dashboard/               # Staff CMS — still yacht-domain, not yet migrated
│   └── login/ signup/ otp/          # Authentication flows (shared by customers & staff)
├── components/
│   ├── Common/                      # Shared form controls, modals, auth UI, skeleton loaders, text editor
│   ├── Shared/
│   │   ├── MessageWidget/           # Floating real-time chat widget (public site)
│   │   ├── CtaBanner/ MobileBottomNav/ MobileMenuSheet/
│   │   └── Navbar/ Footer/ PageHero/ Logo
│   └── Ui/
│       ├── HomePage/PetCare/        # The live PetCare homepage sections (Hero, CareServices, Vets, BookAppointment, WellnessPlans, Shop, Testimonials, Blog, FAQ, ...)
│       ├── HomePage/                # Sibling yacht-charter sections (Hero, Destinations, FeaturedYachts, YachtSearch, Sustainability, ...) — unused, kept for reference
│       ├── ServicesPage/ AboutPage/ ContactPage/ ShopPage/
│       ├── YachtsPage/ YachtDetail/ PrivacyPolicy/  # Legacy, orphaned
│       └── Dashboard/               # Staff CMS modules (yacht-domain — bookings, payments, fleet, etc.)
├── redux/
│   ├── api/                    # RTK Query API slices (incl. chatApi)
│   └── features/auth/          # Auth state slice
├── services/                   # API service functions (Axios)
├── hooks/
│   └── useChatSocket.ts        # Socket.IO connection, message state, typing/read-receipt logic
├── helpers/ lib/providers/     # Utilities, app-level context providers
├── utils/
│   ├── data/petCare.ts         # Static content for the live PetCare site — services, vets, wellness plans, shop products, testimonials, blog, FAQ (no backend endpoints yet)
│   ├── data/                   # Other static/mock content (yachts, blog, testimonials, stats — legacy)
│   └── mappers/                # API-response-to-view-model mappers (legacy yacht domain)
└── types/                      # Shared TypeScript types
```

---

## Key Features

### Live — PetCare public site
- **Homepage** — hero, care services grid, emergency banner, meet-the-vets, online appointment request form, wellness plans (Basic/Premium/Complete pricing tiers), shop essentials teaser, testimonials marquee, health tips, blog teaser, FAQ, app download CTA, trusted brand partners.
- **Services page** — full list of veterinary services with descriptions, a process/how-it-works section, wellness plans, and an emergency banner.
- **Shop** — pet food, grooming supplies, toys, and comfort/essentials products with category filtering.
- **About page** — mission, clinic stats, veterinarian profiles, certifications/accreditation.
- **Contact page** — contact form, clinic address/hours/phone/email, embedded map, 24/7 emergency callout.
- All of the above is driven entirely by static data in `src/utils/data/petCare.ts` — there is currently **no backend API** for services, vets, wellness plans, shop products, testimonials, or blog posts, and the appointment-request form on the homepage is a mock submit (no request is actually sent to a server).

### Live — shared/legacy backend integration
- **Authentication & accounts** — email/OTP-based signup and login, JWT session handling (HTTP-only cookies), protected routes, self-service account settings. Domain-agnostic; works regardless of the rebrand.
- **Booking & Stripe payments** (`/my-bookings`, `/booking/confirmation`, `/booking/cancelled`) — still fully wired to the yacht-charter booking/deposit-payment backend; not yet adapted to pet-care appointments.
- **Real-time support chat (Socket.IO)** — floating widget on the public site, staff inbox in the dashboard; domain-agnostic, works as-is.
- **Full CMS/admin dashboard** — role-based staff access, but the manageable content types (yachts/services, destinations, bookings, payments, etc.) are still yacht-domain and have not been updated for pet care.

---

## Current State & Rebrand Notes

This app is partway through a rebrand from a yacht-charter platform to a veterinary/pet-care clinic site:

- **Done:** public marketing pages (`page.tsx`, `services`, `shop`, `about`, `contact`) and the root SEO metadata (`src/app/layout.tsx` — title/OG/Twitter all say "PetCare") were rewritten with pet-care content and components under `Ui/*/PetCare/`.
- **Not done:** the booking/payment flow, the CMS dashboard, and the backend API are all still modeled around yacht charters (fleet, destinations, experiences, crew services). `/my-bookings` and the Stripe checkout flow work, but they book yacht charters, not vet appointments.
- **Orphaned:** `app/(withCommonLayout)/yachts`, `destinations`, `experiences`, `crew-services`, and the original yacht-themed `Ui/HomePage/*` sections (outside the `PetCare/` subfolder) are no longer linked from navigation but still exist in the tree.
- **Stale packaging metadata:** `package.json`'s `name` is still `sustainable-yachts-frontend`.

Anyone continuing this work should treat the public PetCare pages as the source of truth for the intended product, and plan to either migrate the booking/CMS/backend to a pet-care domain (appointments, patients, clinic services) or remove the yacht-charter remnants.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (recommended: latest LTS)
- npm (project is committed with `package-lock.json`)
- A running instance of the backend API

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=https://your-api-host/api
```

The Socket.IO client derives its connection origin from this same variable (stripping the `/api/v1` suffix), so no separate chat/socket URL needs to be configured.

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the public site, and `/dashboard` for the CMS (requires authentication).

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Deployment

The app builds as a standard Next.js application and deploys cleanly to [Vercel](https://vercel.com/) or any Node-compatible host. Ensure `NEXT_PUBLIC_API_URL` and any additional remote image hostnames (see `next.config.ts` → `images.remotePatterns`) are configured per environment.

---

## Author

Built and maintained by **Zamirul Kabir** — frontend engineer specializing in Next.js/React platforms with integrated CMS tooling for non-technical stakeholders.
