# Positioning

| Class | CSS |
| --- | --- |
| `is-nav` | `position: sticky; top: 0; z-index: 999;` |
| `is-sticky` | `position: sticky;` |
| `is-absolute` | `position: absolute;` |
| `is-relative` | `position: relative;` |

### Z-Index

| Class | CSS |
| --- | --- |
| `is-z-0` | `z-index: 0;` |
| `is-z-50` | `z-index: 50;` |
| `is-z-100` | `z-index: 100;` |

### Arbitrary Values

> **Note:** Arbitrary values are supported for all z-index utilities.

You can also use arbitrary z-index values using the following syntax:

**Class format:** `is-z-[{value}]`

**Example:**
```html
<i class="if-heart is-z-[9999]"></i>
```
