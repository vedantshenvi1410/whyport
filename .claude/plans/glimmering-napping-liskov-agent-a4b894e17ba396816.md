# Implementation Plan: Vibrant Editorial Brutalism

The goal is to transform the website from a 'bland' aesthetic to a 'spiced up', vibrant experience while maintaining its Editorial Brutalist foundation.

## 1. Recolorization (High-Contrast Palette)
Current palette is muted (#F8F9FA, #0A0A0A, #FF3C00). We will shift to a 'Bauhaus/High-Tech' inspired palette with stronger accents.

### Proposed Palette
| Variable | Light Mode (New) | Dark Mode (New) | Role |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#FDFDFB` (Soft Bone) | `#080808` (Deep Obsidian) | Primary Background |
| `--color-fg` | `#000000` (Pure Black) | `#FFFFFF` (Pure White) | Primary Text/Borders |
| `--color-accent` | `#FF3E00` (Vibrant Vermillion) | `#FF4D1A` (Neon Vermillion) | Main Accent |
| `--color-accent-tech` | `#0047FF` (Electric Blue) | `#2E7BFF` (Cyber Blue) | Secondary Tech Accent |
| `--color-accent-highlight` | `#BFFF00` (Acid Lime) | `#DFFF00` (Neon Lime) | Highlight/Energy |
| `--color-muted` | `#E5E5E5` (Concrete) | `#1A1A1A` (Gunmetal) | UI Accents/Dividers |

### Application
- Update `src/app/globals.css` with these variables.
- Ensure `tailwind.config.ts` mapping remains consistent.

## 2. Hero Section Enhancements
- **Remove Scroll Indicator**: Delete the absolute positioned `div` containing the "Scroll" text and moving line (lines 69-84 in `Hero.tsx`).
- **Fix Next.js Image Warning**: Add the `sizes` prop to the `Image` component in `Hero.tsx`.
  - Proposed: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`

## 3. Blueprint Video Fix
- **Diagnosis**: The video uses a Pixabay URL which might be blocked or failing to load due to CORS/hotlinking restrictions.
- **Fix**: 
  - Implement a check for video loading.
  - Ensure the `<video>` tag has `preload="auto"` and consider adding a fallback image.
  - If the URL is the issue, I will suggest replacing it with a local asset or a more reliable CDN.

## 4. General 'Spice' (Motion & Visuals)
To remove the 'bland' feel, we will introduce high-energy motion using Framer Motion.

### Proposed Enhancements
- **Dynamic Entry Animations**:
  - Change `AnimatedText` or wrap sections in `motion.div` with a "staggered reveal" (fade-up with spring physics).
- **Border Animations**:
  - In `Architecture.tsx`, add a subtle "border-glow" or "color-shift" animation on hover.
- **Subtle Grain/Texture**:
  - Enhance the existing noise overlay in `Blueprint.tsx` and apply a global subtle grain overlay to the body via CSS for a more 'printed' editorial feel.
- **Cursor Interaction**:
  - Ensure `CustomCursor.tsx` interacts vibrantly with the new accent colors.

## Implementation Steps
1. **Colors**: Update `src/app/globals.css`.
2. **Hero**: Edit `src/components/sections/Hero.tsx` (remove scroll, add `sizes`).
3. **Blueprint**: Edit `src/components/sections/Blueprint.tsx` (fix video, refine noise).
4. **Spice**: 
   - Global grain effect in `globals.css`.
   - Staggered animations in `SectionWrapper.tsx` or individual sections.
   - Hover enhancements in `Architecture.tsx`.

## Critical Files
- `src/app/globals.css`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Blueprint.tsx`
- `src/components/sections/Architecture.tsx`
- `src/components/layout/SectionWrapper.tsx`
