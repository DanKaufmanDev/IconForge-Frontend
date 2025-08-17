# Configuration

The `iconforge.config.js` file allows you to control which files are scanned for icon classes.

```javascript
module.exports = {
    // Files to scan for icon classes
    content: [
        './**/*.{html,js,ts,vue,jsx,tsx}',
    ],
    // Custom CSS files to append to the output
    customCSS: ['styles.css'],
};
```