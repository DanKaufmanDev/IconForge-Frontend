# Getting Started

There are two ways to get started with IconForge:

## Method 1: CDN (Runtime JIT)

For the quickest setup, you can use the CDN link. The JIT compiler will scan your page on the fly and generate the necessary CSS.

Place the following script tag in the `<head>` section of your HTML file.

```html
<script src="https://cdn.jsdelivr.net/npm/iconforged@latest"></script>
```

## Method 2: IconForge CLI (Build-Time)

For a more robust, production-ready setup, you can install the IconForge CLI.

**1. Initialize your project:**

Run the `init` command to initialize the project and create a default `iconforge.config.js` file in your project root.
```bash
npx iconforged init
```

**2. Start the build process:**

Use the `build` command to perform a one-time scan and generate your CSS. Use `watch` to automatically rebuild as you make changes.
```bash
npx iconforged build
```
```bash
npx iconforged watch
```
This will generate an `iconforge-output` directory containing your `iconforge.css` and `iconforge.woff2` files.

**3. Link the generated stylesheet in your HTML:**

Copy the following `<link>` tag into the `<head>` of your HTML file. The path should be relative to your HTML file.

```html
<link rel="stylesheet" href="iconforge-output/iconforge.css">
```