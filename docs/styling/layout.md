# Layout

This guide covers utilities for controlling the layout of your site, including display, positioning, z-index, and overflow.

## Display

The display utilities allow you to control the `display` property of an element, which is fundamental to how it behaves in the layout.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-hidden` | `display: none;` | Completely removes the element from the page. |
| `is-block` | `display: block;` | The element starts on a new line and takes up the full width available. |
| `is-inline` | `display: inline;` | The element does not start on a new line and only takes up as much width as necessary. |
| `is-inline-block` | `display: inline-block;` | Like `inline`, but you can set a width and height on the element. |
| `is-flex` | `display: flex;` | Enables flexbox layout. See the Flexbox guide for more details. |
| `is-inline-flex` | `display: inline-flex;` | An inline-level version of flexbox. |

**Example:**
```html
<!-- Hide an element by default, but show it on medium screens -->
<div class="is-hidden md:is-block">...</div>
```

## Positioning

Control how an element is positioned within the document or its parent.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-relative` | `position: relative;` | The element is positioned according to the normal flow of the document. Required for `absolute` positioning of children. |
| `is-absolute` | `position: absolute;` | The element is removed from the normal flow and positioned relative to its nearest positioned ancestor. |
| `is-fixed` | `position: fixed;` | The element is positioned relative to the viewport, meaning it always stays in the same place even if the page is scrolled. |
| `is-sticky` | `position: sticky;` | A hybrid of `relative` and `fixed`. It's treated as `relative` until it crosses a specified threshold, at which point it becomes `fixed`. |
| `is-nav` | `position: sticky; top: 0; z-index: 999;` | A pre-built utility for creating sticky navigation bars. |

### Placement

These utilities are used with `absolute`, `fixed`, or `sticky` positioned elements to place them on the page.

| Class | CSS |
| --- | --- |
| `is-top-0` | `top: 0;` |
| `is-bottom-0` | `bottom: 0;` |
| `is-left-0` | `left: 0;` |
| `is-right-0` | `right: 0;` |

**Example:**
```html
<!-- A close button in the top-right corner of a card -->
<div class="is-relative is-p-4">
  <button class="is-absolute is-top-0 is-right-0">X</button>
  <p>Card content...</p>
</div>
```

### Z-Index

Control the stacking order of positioned elements.

| Class | CSS |
| --- | --- |
| `is-z-0` | `z-index: 0;` |
| `is-z-50` | `z-index: 50;` |
| `is-z-100` | `z-index: 100;` |

> [!NOTE]
> Arbitrary values are supported for z-index: `is-z-[999]`

## Overflow

Control how content that overflows an element's box is handled.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-overflow-auto` | `overflow: auto;` | Adds scrollbars only when content overflows. |
| `is-overflow-hidden` | `overflow: hidden;` | Clips the overflowing content. It is not visible. |
| `is-overflow-visible` | `overflow: visible;` | The overflowing content is rendered outside the element's box. (Default) |
| `is-overflow-scroll` | `overflow: scroll;` | Always shows scrollbars, even if content does not overflow. |
| `is-overflow-x-scroll` | `overflow-x: scroll;` | Enables horizontal scrolling. |
| `is-overflow-y-scroll` | `overflow-y: scroll;` | Enables vertical scrolling. |

## Aspect Ratio

Control the aspect ratio of an element.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-aspect-auto` | `aspect-ratio: auto;` | The browser calculates the aspect ratio. |
| `is-aspect-square` | `aspect-ratio: 1 / 1;` | Creates a perfect square. |
| `is-aspect-video` | `aspect-ratio: 16 / 9;` | Creates a 16:9 video container. |

**Example:**
```html
<!-- A responsive video embed -->
<div class="is-aspect-video">
  <iframe src="..." class="is-w-full is-h-full"></iframe>
</div>
```