# Snaphaus — website

Static, fast, SEO-ready site for an interior design studio in Mysuru.
No build step, no framework — just `index.html`, `styles.css`, `script.js`.

---

## 1. Put it on GitHub

1. Create a new repository (public), e.g. `praveen-interiors`.
2. Upload every file in this folder to the repo root (keep the same names).
3. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` → `/root` → **Save**.
4. Your site goes live at `https://<username>.github.io/<repo>/`.

## 2. Connect your domain

1. Buy the domain (GoDaddy, Namecheap, Hostinger, etc.).
2. In your domain's DNS, add records pointing to GitHub Pages:
   - Four `A` records for the apex/root (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<username>.github.io`
3. In **Settings → Pages → Custom domain**, enter your domain and Save, then tick **Enforce HTTPS** (may take a few minutes to appear).
   - This creates/updates the `CNAME` file for you. The `CNAME` file in this folder is a placeholder — replace `snaphaus.in` with your real domain, or just delete it and set the domain from the Pages screen.

---

## 3. Edit these before going live  ⚠️

Search-and-replace across `index.html` (and the SEO files):

| Placeholder | Change to |
|---|---|
| `Snaphaus` | your **actual registered business name** (if different) |
| `https://snaphaus.in/` | your **real domain** — in `index.html` (canonical, OG, JSON-LD), `robots.txt`, `sitemap.xml`, `CNAME` |
| `hello@snaphaus.in` | your real email |
| `[Add your studio street address]` / `570001` | your full studio address + PIN (matters for local ranking) |
| `150+` spaces, testimonials, gallery captions | your real numbers, real reviews, real project photos |
| Social links (`href="#"` in footer, `sameAs` in JSON-LD) | your Instagram / Facebook / YouTube URLs |

The phone number **9886333362** and WhatsApp links are already wired throughout — WhatsApp opens a chat directly via `https://wa.me/919886333362`.

---

## 4. Photos — swap placeholders for your real project photos (important)

The hero, About section, and all six gallery tiles currently use **free-license stock photos** (hotlinked from Unsplash, under the [Unsplash License](https://unsplash.com/license) — free for commercial use, no attribution required) so the site doesn't look empty. They're good for launch, but real project photos will always convert and rank better once you have them.

To swap in your own photos:

1. Add a folder `assets/` with your compressed JPG/WebP images (aim < 300 KB each — large photos slow the site down).
2. In `index.html`, replace the relevant `<img src="https://images.unsplash.com/...">` with your own file, e.g.
   ```html
   <img src="assets/kitchen-kuvempunagar.jpg" alt="Modular kitchen interior in Kuvempunagar, Mysuru" loading="lazy">
   ```
   This appears in 7 places: the hero background (in `styles.css`, under `.hero`), the About section photo, and the 6 gallery tiles.
3. Also update the `og:image` / `twitter:image` meta tags and the `"image"` field in the LocalBusiness JSON-LD (top of `index.html`) to point at your own `assets/og-image.jpg` (1200×630) — it's what shows when the site is shared on WhatsApp/Facebook.
4. Keep `alt` text descriptive and location-based — it helps image search.

Because the stock photos are hotlinked from Unsplash's CDN, they'll keep working indefinitely, but self-hosting your own photos is more reliable long-term (no dependency on a third-party site staying up) and lets you compress them for faster loading.

---

## 5. Rank on Google — the checklist that actually moves the needle

The code already includes: LocalBusiness + FAQ structured data, geo meta tags, Open Graph/Twitter cards, a sitemap, robots.txt, semantic headings, and location-rich copy. After you go live:

- [ ] **Google Business Profile** — create/claim it (this is the #1 factor for local "interior designers in Mysore" searches). Use the exact same name, address, phone as the site.
- [ ] **Google Search Console** — add the domain, submit `sitemap.xml`.
- [ ] **Bing Webmaster Tools** — add + submit the sitemap there too.
- [ ] Get listed on **JustDia­l, Sulekha, Houzz, IndiaMART** with identical name/phone/address (consistent "NAP" builds local trust).
- [ ] Ask happy clients for **Google reviews** — steady reviews strongly influence local ranking.
- [ ] Add **real project photos** with good alt text.
- [ ] Later, add individual **project/blog pages** (e.g. "3BHK interior in Vijayanagar") — more indexed pages = more keywords you can rank for.

---

## Files

```
index.html     Home page (all sections + structured data)
styles.css     Styles — mobile-first, responsive to laptop/desktop
script.js      Mobile menu, scroll reveals, sticky header
robots.txt     Lets search engines crawl + points to sitemap
sitemap.xml    Helps Google index the site
404.html       Friendly not-found page for GitHub Pages
CNAME          Custom-domain file (edit or delete — see above)
```

Tested to be responsive on small Android phones, iPhones, tablets, and laptops.
