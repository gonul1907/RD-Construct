# R&D Construct — Website

Premium Next.js 15 website voor R&D Construct bouwbedrijf.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaties)
- **Lucide React** (iconen)

## Pagina's

| Route | Pagina |
|-------|--------|
| `/` | Home |
| `/over-ons` | Over Ons |
| `/diensten` | Diensten |
| `/projecten` | Projecten (filterable gallery) |
| `/contact` | Contact |
| `/offerte` | Gratis Offerte Aanvragen |

## Projectstructuur

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home pagina
│   ├── globals.css         # Global stijlen + custom classes
│   ├── over-ons/page.tsx
│   ├── diensten/page.tsx
│   ├── projecten/
│   │   ├── page.tsx
│   │   └── ProjectenClient.tsx  # Client component (filter + modal)
│   ├── contact/page.tsx
│   └── offerte/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Responsive navbar met scroll-effect
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionHeader.tsx   # Herbruikbare sectie-header
│   │   └── FadeIn.tsx          # Scroll-animatie wrapper
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── HomeContact.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── offerte/
│       └── OfferteForm.tsx
```

## Installatie

> **Opgelet:** De mapnaam "R&D Construct" bevat een `&`-teken dat `cmd.exe` breekt.
> Gebruik daarom de **PowerShell scripts** hieronder in plaats van `npm run`.

```powershell
# 1. Installeer dependencies
npm install --ignore-scripts

# 2. Start development server
.\dev.ps1

# 3. Productie build
.\build.ps1

# 4. Start productie server (na build)
.\start.ps1
```

## Design tokens

| Token | Waarde |
|-------|--------|
| **Gold** | `#d4a017` / `#f5c842` |
| **Dark bg** | `#080808` / `#0d0d0d` |
| **Dark card** | `#1a1a1a` |
| **Text primary** | `#f7f7f7` |
| **Text muted** | `#818181` |

## Aanpassen

- **Telefoonnummer** → zoek `+32 000 00 00 00` in de codebase
- **E-mailadres** → `info@rdconstruct.be`
- **Adres** → `Voorbeeldstraat 1, 2000 Antwerpen`
- **Openingstijden** → `Footer.tsx` en `contact/page.tsx`
- **Contactformulier backend** → `ContactForm.tsx` en `OfferteForm.tsx` (vervang de `setTimeout` door echte API-aanroep)
