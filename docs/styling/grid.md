# Grid

CSS Grid Layout is a powerful system for creating complex, two-dimensional layouts. To begin, add the `is-grid` class to a container element.

## Grid Template Columns

Use these utilities to define the number of columns in your grid. The columns will have equal width and take up all available space.

| Class | CSS | 
| --- | --- |
| `is-grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `is-grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `is-grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `is-grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr));` |
| `is-grid-cols-5` | `grid-template-columns: repeat(5, minmax(0, 1fr));` |
| `is-grid-cols-6` | `grid-template-columns: repeat(6, minmax(0, 1fr));` |

**Use Case:** Creating a product listing, photo gallery, or any other content that needs to be arranged in a multi-column layout.

**Example:** A responsive 3-column grid that becomes a 1-column grid on smaller screens.
```html
<div class="is-grid sm:is-grid-cols-3 is-gap-4">
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 1</div>
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 2</div>
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 3</div>
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 4</div>
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 5</div>
  <div class="is-bg-blue-5 is-p-4 is-rounded-lg">Item 6</div>
</div>
```

## Grid Template Rows

Use these utilities to define the number of rows in your grid.

| Class | CSS | 
| --- | --- |
| `is-grid-rows-1` | `grid-template-rows: repeat(1, minmax(0, 1fr));` |
| `is-grid-rows-2` | `grid-template-rows: repeat(2, minmax(0, 1fr));` |
| `is-grid-rows-3` | `grid-template-rows: repeat(3, minmax(0, 1fr));` |
| `is-grid-rows-4` | `grid-template-rows: repeat(4, minmax(0, 1fr));` |
| `is-grid-rows-5` | `grid-template-rows: repeat(5, minmax(0, 1fr));` |
| `is-grid-rows-6` | `grid-template-rows: repeat(6, minmax(0, 1fr));` |

## Gap

Control the gap between grid items using the `is-gap-*` utilities. This is the modern way to add space between elements, replacing the need for margins in many cases.

| Class | CSS | 
| --- | --- |
| `is-gap-0` | `gap: 0;` |
| `is-gap-1` | `gap: 0.25rem;` |
| `is-gap-2` | `gap: 0.5rem;` |
| `is-gap-3` | `gap: 0.75rem;` |
| `is-gap-4` | `gap: 1rem;` |
| `is-gap-5` | `gap: 1.25rem;` |
| `is-gap-6` | `gap: 1.5rem;` |
| `is-gap-8` | `gap: 2rem;` |
| `is-gap-10` | `gap: 2.5rem;` |
| `is-gap-12` | `gap: 3rem;` |

**Example:** A 2-column grid with a large gap between the items.
```html
<div class="is-grid is-grid-cols-2 is-gap-8">
  <div class="is-bg-green-5 is-p-4 is-rounded-lg">Item 1</div>
  <div class="is-bg-green-5 is-p-4 is-rounded-lg">Item 2</div>
  <div class="is-bg-green-5 is-p-4 is-rounded-lg">Item 3</div>
  <div class="is-bg-green-5 is-p-4 is-rounded-lg">Item 4</div>
</div>
```