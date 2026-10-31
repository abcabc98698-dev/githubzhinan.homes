export default {
  // Nav
  'nav.home': 'Home',
  'nav.contact': 'Contact & Feedback',

  // Home
  'home.title': 'GitHub Guide (githubzhinan.homes)',
  'home.description':
    'Curated GitHub developer practices, Actions CI/CD automation workflows, and open-source project accelerators.',
  'home.cta.docs': 'Explore Guides',
  'home.cta.contact': 'Contact Us',

  // Feature cards
  'feature.astro.title': 'Modern Architecture',
  'feature.astro.desc':
    'Engineered with modern web standards, zero client-side overhead, instant rendering and sub-second page loads.',
  'feature.tailwind.title': 'Tailwind CSS v4',
  'feature.tailwind.desc': 'CSS-first styling, OKLCH wide-gamut colors, native container queries and fluid typography.',
  'feature.svelte.title': 'Lightweight Islands',
  'feature.svelte.desc': 'Svelte 5 reactive islands, hydrated only when interaction is required to keep pages lean.',
  'feature.biome.title': 'Modern Code Standards',
  'feature.biome.desc': 'Fast, uniform linting and code formatting ensuring high maintainability across projects.',
  'feature.zod.title': 'Strict Schema Validation',
  'feature.zod.desc': 'End-to-end runtime validation for environment configurations, forms and API boundaries.',
  'feature.darkmode.title': 'Adaptive Dark Mode',
  'feature.darkmode.desc': 'System-preference-aware with instant toggle, built for developer eye-care and readability.',
  'feature.webvitals.title': 'Core Web Vitals Optimized',
  'feature.webvitals.desc':
    'Real User Monitoring with green performance scores across LCP, FID/INP, and CLS metrics.',

  // prop-for-that demo
  'demo.title': 'Interactive Showcase',
  'demo.description':
    'Pure CSS runtime reactivity powered by custom properties — zero JavaScript animation overhead.',
  'demo.pointer.title': 'Pointer 3D Tilt',
  'demo.pointer.desc':
    'Hover over this card to observe smooth 3D perspective tilting mapped directly to cursor position.',
  'demo.scroll.title': 'Scroll Reveal',
  'demo.scroll.desc':
    'Elements fade into view smoothly as they intersect the viewport.',
  'demo.range.title': 'Range Fill Bar',
  'demo.range.desc': 'Drag the slider — the progress bar dynamically maps its fill state via pure CSS.',
  'demo.scrollvelocity.title': 'Scroll Velocity Sensor',
  'demo.scrollvelocity.desc':
    'Scroll the viewport — the gauge reacts dynamically to scroll velocity and direction.',
  'demo.clock.title': 'Hardware Accelerated Clock',
  'demo.clock.desc': 'Precision second hand rendered smoothly without JavaScript interval loops.',
  'demo.random.title': 'Per-Element Generative Color',
  'demo.random.desc':
    'Each swatch generates unique hue and tilt variants at load time without layout recalculations.',
  'demo.viewport.title': 'Live Viewport Measurement',
  'demo.viewport.desc':
    'Resize your window — dimension numbers update in real-time through CSS counter calculations.',
  'demo.size.title': 'Element Dimension Tracker',
  'demo.size.desc':
    'Drag the corner of the container — dimensions are tracked dynamically with zero manual observer code.',
  'demo.truncated.title': 'Overflow Truncation Detection',
  'demo.truncated.desc': 'CSS automatically detects multi-line overflow and reveals a truncation indicator badge.',
  'demo.truncated.sample':
    'This demonstration paragraph is crafted to exceed two lines in height, demonstrating automatic overflow clamping and dynamic truncation badge activation.',
  'demo.truncated.badge': 'Truncated',
  'demo.color.title': 'Two-Way Color Swatch',
  'demo.color.desc': 'Pick any color — the swatch reacts immediately with native CSS color bindings.',

  // Contact
  'contact.title': 'Contact & Feedback',
  'contact.description': 'Have suggestions, open-source partnership inquiries, or feedback? Send us a message.',
  'contact.name': 'Your Name',
  'contact.email': 'Your Email',
  'contact.subject': 'Subject',
  'contact.message': 'Message',
  'contact.send': 'Send Message',
  'contact.success': 'Thank you! Your feedback has been received.',
  'contact.demoNotice':
    'You can also reach out to our core team directly via contact@githubzhinan.homes.',

  // 404
  '404.title': '404 - Page Not Found',
  '404.text': 'The requested page could not be found.',
  '404.back': 'Back to Homepage',

  // Footer
  'footer.built': 'Powered by',
} as const;
