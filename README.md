# Indika Brand Studio

# Website Generation Prompt — Indika (Inspired Indian Cuisine)

Copy everything below into your website-building AI.

---

## ROLE
You are a senior UI/UX architect and brand-grade web designer. Build a premium, boutique-restaurant website for **Indika – Inspired Indian Cuisine**, a fine-casual Indian dining restaurant in Noida. The result must look like it was designed by a top hospitality-branding agency — not template-generated, not AI-generated. Every section needs intention: spacing, contrast, motion, and copy should feel considered.

## BRAND FACTS (do not alter — use exactly as given)
- **Name:** Indika – Inspired Indian Cuisine (इंडिका)
- **Cuisine:** Indian, contemporary/inspired take on classic Indian dishes
- **Rating:** 4.8★ (465 Google reviews)
- **Price range:** ₹400–₹1,400 per person
- **Address:** Ground Floor, Tower C, Noida World One, Sector 90, Noida, Uttar Pradesh 201301
- **Phone:** 081786 83062
- **Hours:** Open daily, closes 11:30 PM (display as "Open till 11:30 PM")
- **Service options:** Dine-in, Kerbside pickup, No-contact delivery, Table reservations
- **Instagram:** https://www.instagram.com/indika.in/
- **Ambiance descriptors (from real guest reviews):** warm, elegant, cozy, calm vibe, spacious enough for family gatherings and casual catch-ups, popular for family lunches and celebrations
- **Service descriptors (from real guest reviews):** courteous, soft-spoken, attentive, polite staff; kid-friendly
- **Dishes explicitly mentioned by guests (verified, real):** Biryani, Dal Makhani, Paneer dishes, Tandoori Chicken, Dahi Kebab, Dabeli, Veg Platter

> ⚠️ Do not invent ratings, awards, chef names, founding year, or menu items beyond what's listed above. If a section needs more menu depth than provided, use a labeled placeholder ("More dishes coming soon") rather than fabricating.

## DESIGN DIRECTION
- **Style:** Modern boutique-restaurant aesthetic — think warm minimalism, not loud/traditional Indian-restaurant clichés (no red-gold clutter).
- **Palette (minimal, 2–3 colors max + neutrals):**
  - Base: warm off-white / ivory (#F8F4EC)
  - Primary accent: deep saffron/terracotta (#C1793A or similar burnt-orange)
  - Secondary/dark: charcoal or deep espresso brown (#2B211B) for text and dark sections
  - Optional metallic hint: muted brass/gold used sparingly (dividers, icons only — never backgrounds)
- **Typography:** A refined serif (editorial, high-end menu feel) for headings paired with a clean grotesk/sans for body text. Strong type hierarchy, generous line-height.
- **Motion:** Calm, physics-based micro-interactions — subtle 3D tilt on food images on hover, smooth fade/slide-up on scroll (staggered), gentle parallax on hero image, soft scale on buttons. Nothing jittery or gimmicky. Motion should feel like quiet confidence, not flash.
- **Imagery:** Full-bleed hero food photography, rounded-corner image cards with soft shadow, generous whitespace, grid-based menu cards.
- **Mobile-first:** Design and test at 375px first; nav collapses to a clean hamburger with slide-in panel; sticky "Reserve a Table" CTA bar on mobile.

## SITE STRUCTURE (4 pages, all interlinked via a persistent nav + footer)

### 1. HOME
- **Hero section:** full-bleed image/video-style banner, restaurant name, tagline (write an elevated, appetite-driving tagline true to "Inspired Indian Cuisine" — e.g. built around tradition reimagined), star rating (4.8★ · 465 reviews), price range chip, two CTAs: **"Reserve a Table"** (primary) and **"View Menu"** (secondary).
- **Intro/story strip:** short persuasive paragraph on the warm, elegant dining experience, written from the verified review sentiment (not invented history).
- **Signature dishes preview:** 4–6 image cards pulled from the verified dish list (Biryani, Dal Makhani, Paneer specialties, Tandoori Chicken) with a "View Full Menu" CTA.
- **Why guests love us:** 3-column feature strip — Authentic Flavors, Warm & Elegant Ambiance, Attentive Service — each backed by paraphrased real review sentiment.
- **Testimonials carousel:** 3–4 short paraphrased guest quotes (rewritten in original voice, not copied verbatim) with names/local-guide status.
- **Instagram section:** "Follow Our Table" — embedded/linked grid teaser of @indika.in posts, CTA button "Follow us on Instagram" → https://www.instagram.com/indika.in/
- **Footer CTA banner:** reservation + location + hours before global footer.

### 2. MENU
- Tab/toggle interface: **Food** | **Beverages**
- **Food** splits into two clearly labeled, switchable lists:
  - **Vegetarian** — Paneer dishes, Dal Makhani, Veg Platter, Dabeli (mark others as "and more" if list is short)
  - **Non-Vegetarian** — Tandoori Chicken, Dahi Kebab, Biryani (chicken/mutton style, keep generic since exact variants weren't provided)
- **Beverages** — since no beverage items were provided in source data, include a general placeholder category (e.g., "Refreshing Coolers, Traditional Chaas & Lassi, Hot Beverages") clearly labeled as indicative, with a note inviting the AI builder to update once the full menu is supplied.
- No prices displayed anywhere on this page (per requirement).
- Each item = card with dish name, 1-line appetizing description (written fresh, non-copied), veg/non-veg indicator icon (green/red dot per Indian convention).
- CTA at bottom: "Reserve a Table to Taste the Menu"

### 3. ABOUT US
- Brand story section: written fresh around "Inspired Indian Cuisine" positioning — reinterpreting classic Indian dishes with a refined, modern touch (do not state unverified founding facts).
- Ambiance section: describe the warm, elegant, cozy dining room using real guest sentiment, ideal for families and casual gatherings.
- Service philosophy section: attentive, courteous, soft-spoken staff — built from real review language, paraphrased.
- Trust strip: 4.8★ rating with 465 Google reviews, price range ₹400–1,400 per person.
- CTA: "Reserve Your Table" + "Get Directions"

### 4. VISIT US
- Map/location block: Ground Floor, Tower C, Noida World One, Sector 90, Noida, Uttar Pradesh 201301, with a "Get Directions" button.
- Hours block: Open daily, closes 11:30 PM.
- Contact block: phone 081786 83062 (click-to-call on mobile), reservation CTA.
- Service options as icon row: Dine-in / Kerbside Pickup / No-Contact Delivery.
- Instagram section (second instance, styled differently from Home): "Visit Us & Tag Us" — grid teaser + follow CTA linking to https://www.instagram.com/indika.in/
- Embedded contact/reservation form (Name, Phone, Date, Time, Guests) with a polished, minimal style.

## GLOBAL UI REQUIREMENTS
- Sticky top nav: Logo | Home | Menu | About Us | Visit Us | **Reserve a Table** (button, always visible)
- Footer: address, phone, hours, Instagram icon link, service-option icons, copyright line.
- All CTA buttons: consistent primary (terracotta fill) / secondary (outline) style, soft hover scale + shadow lift.
- Section transitions: fade-up on scroll, staggered card reveals, subtle hover-tilt (3D) on food photography cards.
- Accessibility: proper contrast ratios, alt text on all images, keyboard-navigable menu.
- Fully responsive: mobile-first breakpoints at 375px, 768px, 1024px, 1440px.

## COPYWRITING TONE
Elevated, warm, appetite-driving, confident but not over-the-top. Avoid clichés like "best in town." Let real guest sentiment (courteous service, elegant ambiance, authentic flavor) drive the persuasive language rather than generic restaurant marketing filler.

## OUTPUT
Generate the full site (Home, Menu, About Us, Visit Us) as a cohesive, production-ready responsive website following all specifications above.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03da81c2-32b8-420a-858d-990345e7645b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
