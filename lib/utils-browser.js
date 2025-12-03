/**
 * Browser-compatible version of the cn utility function
 * For use directly in HTML files via script tag
 * 
 * Usage in HTML:
 * <script type="module">
 *   import { cn } from './lib/utils-browser.js';
 *   // Use cn() function
 * </script>
 */

// Note: This requires clsx and tailwind-merge to be available
// Install via: npm install clsx tailwind-merge
// Then use a bundler or import maps for browser compatibility

// For direct browser use without a bundler, you can use CDN versions:
// <script src="https://cdn.jsdelivr.net/npm/clsx@latest/dist/clsx.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/tailwind-merge@latest/dist/index.umd.js"></script>

export function cn(...inputs) {
  // This will work if clsx and tailwind-merge are available globally
  // Or use a bundler like Vite, Parcel, or esbuild
  if (typeof window !== 'undefined' && window.clsx && window.twMerge) {
    return window.twMerge(window.clsx(inputs));
  }
  
  // Fallback: try to use imported modules (requires bundler)
  try {
    const clsx = require('clsx');
    const { twMerge } = require('tailwind-merge');
    return twMerge(clsx(inputs));
  } catch (e) {
    console.warn('cn utility requires clsx and tailwind-merge. Install them via npm.');
    // Simple fallback - just join classes
    return inputs.filter(Boolean).join(' ');
  }
}

