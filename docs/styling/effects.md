# Effects

This guide covers utilities that apply visual effects to elements, such as shadows, filters, opacity, and outlines.

## Box Shadow

Add depth and emphasis to elements with box-shadow utilities.

| Class | CSS |
| --- | --- |
| `is-shadow-sm` | `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);` |
| `is-shadow-md` | `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);` |
| `is-shadow-lg` | `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);` |
| `is-shadow-xl` | `box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);` |
| `is-shadow-2xl` | `box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);` |
| `is-shadow-inner`| `box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);` |
| `is-shadow-none` | `box-shadow: none;` |

**Use Case:** Use shadows on cards, modals, and buttons to make them appear elevated from the background.

## Opacity

Control the transparency of elements.

| Class | CSS | 
| --- | --- |
| `is-opacity-0` | `opacity: 0;` |
| `is-opacity-25` | `opacity: 0.25;` |
| `is-opacity-50` | `opacity: 0.5;` |
| `is-opacity-75` | `opacity: 0.75;` |
| `is-opacity-100` | `opacity: 1;` |

> [!NOTE]
> Arbitrary values are supported: `is-opacity-[0.3]`

**Use Case:** Make elements semi-transparent for subtle designs, or combine with transitions for fade-in/fade-out effects.

## Filters

Apply graphical effects like blur, brightness, contrast, and more.

### Blur

| Class | CSS |
| --- | --- |
| `is-blur-sm` | `filter: blur(4px);` |
| `is-blur-md` | `filter: blur(12px);` |
| `is-blur-lg` | `filter: blur(16px);` |
| `is-blur-xl` | `filter: blur(24px);` |
| `is-blur-2xl` | `filter: blur(40px);` |

**Use Case:** Often used on background images or elements behind a modal to draw focus to the foreground content.

### Backdrop Blur

Apply a blur to the area *behind* an element.

| Class | CSS |
| --- | --- |
| `is-backdrop-blur-none` | `backdrop-filter: blur(0);` |
| `is-backdrop-blur-sm` | `backdrop-filter: blur(4px);` |
| `is-backdrop-blur-md` | `backdrop-filter: blur(8px);` |
| `is-backdrop-blur-lg` | `backdrop-filter: blur(12px);` |

**Use Case:** Perfect for creating "glassmorphism" effects on overlays and navigation bars.

### Brightness

| Class | CSS |
| --- | --- |
| `is-brightness-0` | `filter: brightness(0);` |
| `is-brightness-50` | `filter: brightness(.5);` |
| `is-brightness-100` | `filter: brightness(1);` |

### Contrast

| Class | CSS |
| --- | --- |
| `is-contrast-0` | `filter: contrast(0);` |
| `is-contrast-50` | `filter: contrast(.5);` |
| `is-contrast-100` | `filter: contrast(1);` |
| `is-contrast-125` | `filter: contrast(1.25);` |
| `is-contrast-150` | `filter: contrast(1.5);` |
| `is-contrast-200` | `filter: contrast(2);` |

### Other Filters

| Class | CSS |
| --- | --- |
| `is-grayscale-0` | `filter: grayscale(0);` |
| `is-grayscale` | `filter: grayscale(100);` |
| `is-saturate-0` | `filter: saturate(0);` |
| `is-saturate-50` | `filter: saturate(.5);` |
| `is-saturate-100` | `filter: saturate(1);` |
| `is-sepia-0` | `filter: sepia(0);` |
| `is-sepia` | `filter: sepia(100);` |
| `is-invert-0` | `filter: invert(0);` |
| `is-invert` | `filter: invert(100);` |

## Outline

Style the outline of an element, which is often used for accessibility to show focus.

| Class | CSS |
| --- | --- |
| `is-outline-none` | `outline: 2px solid transparent;` |
| `is-outline-dashed` | `outline: 1px dashed;` |
| `is-outline-dotted` | `outline: 1px dotted;` |
| `is-outline-double` | `outline: 4px double;` |