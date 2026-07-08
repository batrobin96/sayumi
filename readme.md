# Sayumi - AI Website Builder (All-in-One)

En plattform inspirerad av Lovable och Bolt.new som låter användare skapa, förhandsvisa, hosta och koppla domäner till sina hemsidor – allt via ett enkelt AI-chattgränssnitt.

---

## 🛠 Tech Stack

### Ramverk & Språk
* **Monorepo:** Turborepo (för ren separation av appar och paket)
* **Frontend/Backend:** Next.js (React) + TypeScript
* **Styling:** Tailwind CSS + shadcn/ui

### AI-Motor & Sandlåda
* **AI-Modell:** Anthropic API (Claude 3.5 Sonnet)
* **AI Streaming:** Vercel AI SDK
* **Preview:** HTML iFrame (MVP) -> WebContainers/Sandpack (Skala)

### Infrastruktur & Databas
* **Hosting-API (Användarsajter):** Vercel API (eller Netlify API)
* **Domänhantering:** Namecheap API / GoDaddy Reseller API
* **Databas & Auth:** Supabase (PostgreSQL)
* **Betalningar:** Stripe Billing (Prenumerationer)

---

## 🚀 Utvecklingsplan (Fas för Fas)

### ⏹ Fas 1: AI-Motorn & Rå Kodströmning (Nuvarande)
- [ ] Skaffa Anthropic API-nyckel och sätt upp `.env.local`
- [ ] Skapa en API-route (`/api/chat`) i Next.js med Vercel AI SDK och en stenhård System Prompt.
- [ ] Bygg ett enkelt chatt-UI med ett textfält och en panel som visar koden som strömmar in.

### ⏹ Fas 2: Live Preview (Ögat)
- [ ] Koppla den strömmande AI-koden till en `<iframe>` via `srcDoc`.
- [ ] Se till att sidan uppdateras live i webbläsaren i takt med att AI-koden ändras.
- [ ] Lägg till grundläggande felhantering om AI:n genererar trasig HTML.

### ⏹ Fas 3: Databas & Sparning (Minnet)
- [ ] Sätta upp ett Supabase-projekt.
- [ ] Skapa en `projects`-tabell för att spara användarens genererade kod (`id`, `user_id`, `html_code`).
- [ ] Skapa en "Spara"-knapp i UI:t som skickar koden till databasen.

### ⏹ Fas 4: Instant Hosting (Publiceringen)
- [ ] Integrera Vercel Deployment API i vår backend.
- [ ] Skapa en "Publicera"-knapp. När användaren klickar, skickas koden till Vercel.
- [ ] Ge användaren en live-URL direkt (t.ex. `anvandare-projekt.vercel.app`).

### ⏹ Fas 5: Domäner & Betalvägg (SaaS-redo)
- [ ] Integrera Namecheap/GoDaddy API för domänsökning och köp inuti appen.
- [ ] Koppla domänen automatiskt till Vercel via Vercels Domains API.
- [ ] Lägg till Stripe för månadsabonnemang (Hosting + Domän-paket).