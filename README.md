# lockfix

A Tailwind CSS + HTML project with live reload functionality.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server with live reload:
```bash
npm run dev
```

This will:
- Watch for changes in your HTML files and CSS
- Automatically rebuild Tailwind CSS when changes are detected
- Reload the browser automatically when files change

The server will open at `http://localhost:3000`

## Build

Build the production CSS (minified):
```bash
npm run build:css
```

## Project Structure

```
lockfix/
├── index.html          # Main HTML file
├── src/
│   └── input.css      # Tailwind CSS input file
├── dist/
│   └── output.css     # Generated Tailwind CSS (auto-generated)
├── lib/
│   ├── utils.js       # Cult UI cn() utility (for bundlers)
│   ├── utils-browser.js # Browser-compatible cn() utility
│   └── utils-cdn.html # CDN-based cn() utility
├── tailwind.config.js # Tailwind configuration
└── package.json       # Project dependencies and scripts
```

## Features

- ✅ Tailwind CSS CLI setup
- ✅ Live reload with auto-refresh
- ✅ Watch mode for CSS changes
- ✅ Production-ready CSS build
- ✅ Cult UI utilities (clsx, tailwind-merge)

## Cult UI Integration

This project includes Cult UI dependencies and utilities. Cult UI provides beautiful, accessible components built with Tailwind CSS.

### Installed Dependencies

- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes intelligently

### Utility Functions

The `cn()` utility function is available in:
- `lib/utils.js` - For use with bundlers/module systems
- `lib/utils-browser.js` - Browser-compatible version
- `lib/utils-cdn.html` - CDN-based version for direct HTML use

### Using Cult UI Components

**Note:** Cult UI components are designed for React. For HTML projects:

1. Visit [cult-ui.com](https://www.cult-ui.com) to browse components
2. Copy the Tailwind CSS classes from component examples
3. Adapt the HTML structure to your needs
4. Use the `cn()` utility for dynamic class merging

### Example Usage

```html
<!-- Include CDN utilities -->
<script src="./lib/utils-cdn.html"></script>

<script>
  // Use cn() to merge classes
  const buttonClasses = window.cn(
    'px-4 py-2 rounded',
    isActive && 'bg-blue-500',
    'hover:bg-blue-600'
  );
</script>
```

For React projects, you can use the shadcn CLI:
```bash
npx shadcn@beta add @cult-ui/component-name
```
