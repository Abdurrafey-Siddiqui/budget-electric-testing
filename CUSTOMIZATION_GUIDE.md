# Customization Guide for Budget Electric Website

## 🎨 Changing Colors

All brand colors are centralized in `src/app/globals.css`. The current color scheme uses:

```css
/* Primary Color: #272C6C (Deep Blue) */
--primary: oklch(0.2 0.05 265);

/* Accent Color: #FFC107 (Amber Gold) */
--accent: oklch(0.83 0.15 85);

/* Background: White */
--background: oklch(1 0 0);
```

To change colors, update the CSS variables in the `:root` selector.

### Quick Color Reference

- `#272C6C` → Brand Blue (headings, buttons, text)
- `#FFC107` → Brand Gold (accents, CTAs, highlights)
- `#FFFFFF` → White (backgrounds, secondary text)

## 📝 Updating Content

### Contact Information

Located in: `src/components/sections/cta-section.tsx` and `src/components/sections/footer.tsx`

```tsx
// Update these:
Phone: (614) 555-1234
Email: info@budgetelectric.com
Location: Columbus, Ohio
```

### Business Hours

Located in: `src/components/sections/cta-section.tsx`

```tsx
Monday - Friday: 7:00 AM - 6:00 PM
Saturday: 8:00 AM - 4:00 PM
Sunday: Emergency Only
```

### Services

Located in: `src/components/sections/services-section.tsx`

Add or modify services in the `services` array.

### Testimonials

Located in: `src/components/sections/testimonials-section.tsx`

Add new testimonials to the `testimonials` array:

```tsx
{
  name: "Client Name",
  role: "Client Role",
  content: "Testimonial text...",
  rating: 5
}
```

## 🖼️ Replacing Image Placeholders

### Logo

Already using: `/public/budget-electric-logo.jpg`

### Hero Image

Replace grey placeholder in `src/components/sections/hero-section.tsx`:

```tsx
// Find this section and replace the placeholder div with:
<Image
  src="/hero-image.jpg"
  alt="Professional electrical work"
  fill
  className="object-cover"
  priority
/>
```

### About Image

Replace grey placeholder in `src/components/sections/about-section.tsx`

## 📧 Setting Up Contact Form

The form is located in `src/components/sections/cta-section.tsx`

### Option 1: Using a Form Service (Recommended)

1. **Formspree:**

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Netlify Forms:**

```tsx
<form name="contact" method="POST" data-netlify="true">
```

3. **Email API:**
   Use services like SendGrid, Resend, or Postmark with a Next.js API route.

### Option 2: Custom API Route

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Send email or save to database

  return NextResponse.json({ success: true });
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify:** Connect GitHub repo
- **AWS Amplify:** Connect repo
- **Self-hosted:** `npm run build` then serve the `.next` folder

## 🎯 SEO Optimization

### Update Meta Tags

Located in: `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
};
```

### Add Google Analytics

In `src/app/layout.tsx`, add before closing `</body>`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🎨 Adding New Sections

1. Create new file in `src/components/sections/`
2. Follow the pattern of existing sections
3. Import and add to `src/app/page.tsx`

Example:

```tsx
// src/components/sections/new-section.tsx
"use client";

import { motion } from "framer-motion";

export function NewSection() {
  return <section className="py-24 bg-white">{/* Your content */}</section>;
}
```

## 📱 Social Media Links

Update in `src/components/sections/footer.tsx`:

```tsx
<a href="https://facebook.com/yourpage">
  <Facebook className="w-5 h-5" />
</a>
```

## 🎭 Animation Customization

All animations use Framer Motion. To adjust:

```tsx
// Change animation duration
transition={{ duration: 0.6 }}

// Change delay
transition={{ delay: 0.3 }}

// Change animation type
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

## 🛠️ Adding New Components

From shadcn registries:

```bash
# Search for components
npx shadcn@latest add @registryname/component-name

# Available registries:
# @shadcn - default components
# @aceternity - advanced UI
# @magicui - animated components
# @shadcnblocks - pre-built blocks
```

## 🎯 Conversion Tracking

Add tracking to CTAs:

```tsx
<button
  onClick={() => {
    // Track event
    gtag("event", "click", {
      event_category: "CTA",
      event_label: "Get Free Quote",
    });
  }}
>
  Get Free Quote
</button>
```

## 📊 Performance Optimization

### Images

Use Next.js Image component with optimization:

```tsx
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={600}
  height={400}
  loading="lazy" // or "eager" for above-fold images
/>;
```

### Fonts

Already optimized with `next/font`

### Code Splitting

Automatic with Next.js

## 🔧 Common Modifications

### Change Navigation Items

In `src/app/page.tsx`:

```tsx
const navItems = [
  { name: "Home", link: "#home", icon: <HomeIcon /> },
  // Add more items
];
```

### Adjust Section Spacing

Change `py-24` (padding-y) classes in section components:

- `py-16` - Less spacing
- `py-32` - More spacing

### Modify Container Width

Update `container` classes or create custom max-width:

- `max-w-7xl` - Standard
- `max-w-6xl` - Narrower
- `max-w-full` - Full width

## 🎨 Custom Styling

### Tailwind Classes

Modify classes directly in components:

```tsx
className = "text-4xl font-bold text-[#272C6C]";
```

### Custom CSS

Add to `src/app/globals.css`:

```css
.custom-class {
  /* Your styles */
}
```

## 📞 Emergency Contacts Setup

To add emergency/24-7 service badge:

```tsx
<div className="bg-red-500 text-white px-4 py-2 rounded-full">
  24/7 Emergency Service Available
</div>
```

## 🎯 Call Tracking

For phone number click tracking:

```tsx
<a href="tel:+16145551234" onClick={() => trackEvent("phone_click")}>
  (614) 555-1234
</a>
```

## 💡 Tips

1. **Keep brand colors consistent** - Use the defined color variables
2. **Test on mobile** - Always check responsive design
3. **Optimize images** - Compress before uploading
4. **Update content regularly** - Keep testimonials and services current
5. **Monitor analytics** - Track which CTAs perform best
6. **A/B test** - Try different headline variations
7. **Back up regularly** - Use version control (Git)

---

Need help? Refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
