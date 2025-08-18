# Typography

This guide covers all utilities related to text and fonts, including font weight, line height, alignment, and list styles.

## Font Weight

Control the weight (boldness) of text.

| Class | CSS | 
| --- | --- |
| `is-font-light` | `font-weight: 300;` |
| `is-font-normal` | `font-weight: 400;` |
| `is-font-medium` | `font-weight: 500;` |
| `is-font-semibold`| `font-weight: 600;` |
| `is-font-bold` | `font-weight: 700;` |

## Line Height

Control the height of a line of text.

| Class | CSS | 
| --- | --- |
| `is-line-none` | `line-height: 1;` |
| `is-line-tight` | `line-height: 1.25;` |
| `is-line-snug` | `line-height: 1.375;` |
| `is-line-normal` | `line-height: 1.5;` |

## Text Alignment

Control the horizontal alignment of text.

| Class | CSS | 
| --- | --- |
| `is-text-start` | `text-align: start;`|
| `is-text-end` | `text-align: end;` |
| `is-text-left` | `text-align: left;` |
| `is-text-right` | `text-align: right;` |
| `is-text-center` | `text-align: center;` |

## Vertical Alignment

Control the vertical alignment of an inline or table-cell element.

| Class | CSS | 
| --- | --- |
| `is-align-middle` | `vertical-align: middle;` |
| `is-align-top` | `vertical-align: text-top;` |
| `is-align-bottom` | `vertical-align: text-bottom;` |

## Text Decoration

| Class | CSS | 
| --- | --- |
| `is-text-none` | `text-decoration: none;` |

## List Styles

Control the appearance of lists.

| Class | CSS | 
| --- | --- |
| `is-list-disc` | `list-style-type: disc;` |
| `is-list-decimal` | `list-style-type: decimal;` |
| `is-list-inside` | `list-style-position: inside;` |
| `is-list-outside` | `list-style-position: outside;` |

## Text Handling

### Truncate

Truncate long text with an ellipsis (...) to prevent it from overflowing its container.

| Class | CSS | 
| --- | --- |
| `is-truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |

**Use Case:**
This is extremely useful for things like file names, user comments, or long titles in a constrained space, ensuring your layout doesn't break.

**Example:**
```html
<p class="is-truncate is-w-64">
  This is a very long piece of text that will be truncated if it doesn't fit.
</p>
```