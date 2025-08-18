# Flexbox

Flexbox is a powerful layout model that provides an efficient way to distribute space and align items within a container. To start using flexbox, add the `is-flex` class to a container element.

## Flex Direction

These utilities control the direction in which flex items are placed in the flex container.

| Class | CSS | Description |
| --- | --- | --- |
| `is-flex-row` | `flex-direction: row;` | Items are placed horizontally, from left to right. (Default) |
| `is-flex-row-reverse` | `flex-direction: row-reverse;` | Items are placed horizontally, from right to left. |
| `is-flex-col` | `flex-direction: column;` | Items are placed vertically, from top to bottom. |
| `is-flex-col-reverse` | `flex-direction: column-reverse;` | Items are placed vertically, from bottom to top. |

**Example:** A common use case is creating a vertical layout for a card's content.
```html
<div class="is-flex is-flex-col">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>
```

## Justify Content

These utilities define how the browser distributes space between and around content items along the main axis.

| Class | CSS | Description |
| --- | --- | --- |
| `is-justify-start` | `justify-content: flex-start;` | Items are packed toward the start of the flex-direction. |
| `is-justify-end` | `justify-content: flex-end;` | Items are packed toward the end of the flex-direction. |
| `is-justify-center` | `justify-content: center;` | Items are centered along the line. |
| `is-justify-between` | `justify-content: space-between;` | Items are evenly distributed; the first item is on the start line, the last on the end line. |
| `is-justify-around` | `justify-content: space-around;` | Items are evenly distributed with equal space around them. |
| `is-justify-evenly` | `justify-content: space-evenly;` | Items are distributed so that the spacing between any two items is equal. |

**Example:** Centering items inside a container.
```html
<div class="is-flex is-justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Align Items

These utilities define how flex items are laid out along the cross axis.

| Class | CSS | Description |
| --- | --- | --- |
| `is-items-start` | `align-items: flex-start;` | Items are placed at the start of the cross axis. |
| `is-items-end` | `align-items: flex-end;` | Items are placed at the end of the cross axis. |
| `is-items-center` | `align-items: center;` | Items are centered in the cross-axis. |
| `is-items-baseline` | `align-items: baseline;` | Items are aligned such as their baselines align. |
| `is-items-stretch` | `align-items: stretch;` | Stretch to fill the container (still respects min/max-width). (Default) |

**Example:** Vertically centering items in a navigation bar.
```html
<nav class="is-flex is-h-16 is-items-center">
  <div>Logo</div>
  <div>Links</div>
</nav>
```

## Flex Wrap

These utilities control whether flex items are forced onto one line or can wrap onto multiple lines.

| Class | CSS | Description |
| --- | --- | --- |
| `is-flex-nowrap` | `flex-wrap: nowrap;` | All flex items will be on one line. (Default) |
| `is-flex-wrap` | `flex-wrap: wrap;` | Flex items will wrap onto multiple lines, from top to bottom. |
| `is-flex-wrap-reverse` | `flex-wrap: wrap-reverse;` | Flex items will wrap onto multiple lines from bottom to top. |

**Example:** Creating a responsive grid of tags that wraps on smaller screens.
```html
<div class="is-flex is-flex-wrap is-gap-2">
  <span class="tag">Tag 1</span>
  <span class="tag">Tag 2</span>
  <span class="tag">Tag 3</span>
  <!-- ... more tags -->
</div>
```

## Align Content

Use these utilities to align a flex container’s lines when there is extra space in the cross-axis, such as when `is-flex-wrap` is used. This property has no effect on single-line flex containers.

| Class | CSS | Description |
| --- | --- | --- |
| `is-content-start` | `align-content: flex-start;` | Lines packed to the start of the container. |
| `is-content-end` | `align-content: flex-end;` | Lines packed to the end of the container. |
| `is-content-center` | `align-content: center;` | Lines packed to the center of the container. |
| `is-content-between` | `align-content: space-between;` | Lines evenly distributed; the first line is at the start, the last at the end. |
| `is-content-around` | `align-content: space-around;` | Lines evenly distributed with equal space around each line. |
| `is-content-evenly` | `align-content: space-evenly;` | Lines are evenly distributed with equal space around them. |

## Flex Grow & Shrink

Control how flex items grow to fill available space or shrink to fit.

| Class | CSS | Description |
| --- | --- | --- |
| `is-flex-grow-1` | `flex-grow: 1;` | The item will grow to fill any available space. |
| `is-flex-grow-0` | `flex-grow: 0;` | The item will not grow. (Default) |
| `is-flex-shrink-1`| `flex-shrink: 1;`| The item will shrink if necessary. (Default) |
| `is-flex-shrink-0`| `flex-shrink: 0;`| The item will not shrink. |

**Example:** Creating a layout where one item takes up all remaining space.
```html
<div class="is-flex">
  <div class="sidebar">Sidebar</div>
  <div class="main-content is-flex-grow-1">Main content grows to fill space</div>
</div>
```

## Align Self

Override the container's `align-items` property for individual flex items.

| Class | CSS | Description |
| --- | --- | --- |
| `is-self-start` | `align-self: flex-start;` | Aligns the item to the start of the cross axis. |
| `is-self-end` | `align-self: flex-end;` | Aligns the item to the end of the cross axis. |
| `is-self-center` | `align-self: center;` | Centers the item on the cross axis. |
| `is-self-baseline` | `align-self: baseline;` | Aligns the item's baseline with the other items. |
| `is-self-stretch` | `align-self: stretch;` | Stretches the item to fill the container's cross size. |

**Example:**
```html
<div class="is-flex is-items-start">
  <div>Item 1</div>
  <div class="is-self-end">This item is aligned to the end</div>
  <div>Item 3</div>
</div>
```