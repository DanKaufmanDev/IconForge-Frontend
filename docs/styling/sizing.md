---
aside: false
---
# Sizing

## Size

The `is-size-*` classes are used to control the `font-size` of text and icons. When used on an icon, changing the font size is the primary way to adjust the icon's dimensions.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-size-xs` | `font-size: 0.75rem;` | For very small, subtle icons or text. |
| `is-size-sm` | `font-size: 0.875rem;` | Ideal for icons inside buttons or other small components. |
| `is-size-md` | `font-size: 1rem;` | The default base size. |
| `is-size-lg` | `font-size: 1.25rem;` | For slightly larger, more prominent icons. |
| `is-size-xl` | `font-size: 1.5rem;` | Heading icons or standalone icons that need to be noticed. |
| `is-size-2xl`| `font-size: 2rem;` | Large icons, often used in feature lists or info boxes. |
| `is-size-3xl`| `font-size: 3rem;` | Extra-large icons for hero sections or page titles. |
| `is-size-4xl`| `font-size: 4rem;` | Use for significant visual impact. |
| `is-size-5xl`| `font-size: 5rem;` | Massive icons for display purposes. |
| `is-size-6xl`| `font-size: 6rem;` | Use sparingly for oversized, attention-grabbing elements. |
| `is-size-7xl`| `font-size: 7rem;` | Enormous icons, suitable for artistic or stylistic layouts. |
| `is-size-8xl`| `font-size: 8rem;` | The largest size, for maximum visual presence. |

**Example:**
```html
<!-- A small icon inside a button -->
<button class="button">
  <i class="if-heart is-size-sm"></i>
  <span>Like</span>
</button>

<!-- A large icon for a feature section -->
<div class="feature">
  <i class="if-check-circle is-size-3xl"></i>
  <p>Feature description</p>
</div>
```

## Height

The `is-h-*` classes control the `height` of an element. While `font-size` is preferred for sizing icons, these classes are essential for layout and for sizing container elements.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-h-auto` | `height: auto;` | The browser calculates the height. Good for content of variable height. |
| `is-h-fit` | `height: fit-content;` | Sets the height to the intrinsic height of its content, up to a limit. |
| `is-h-min` | `height: min-content;` | Sets the height to the minimum intrinsic height of its content. |
| `is-h-max` | `height: max-content;` | Sets the height to the maximum intrinsic height of its content. |
| `is-h-full` | `height: 100%;` | Makes the element's height equal to 100% of its parent container. Requires the parent to have a defined height. |
| `is-h-three-quarter` | `height: 75%;` | Sets the element's height to 75% of its parent container. |
| `is-h-half` | `height: 50%;` | Sets the element's height to 50% of its parent container. |
| `is-h-quarter` | `height: 25%;` | Sets the element's height to 25% of its parent container. |

**Example:**
```html
<!-- A div that takes up the full height of its parent -->
<div class="parent-with-defined-height">
  <div class="is-h-full">
    <!-- This content will be in a full-height container -->
  </div>
</div>
```

## Width

The `is-w-*` classes control the `width` of an element. They are crucial for creating responsive layouts and managing the horizontal space of components.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-w-auto` | `width: auto;` | The browser calculates the width. |
| `is-w-fit` | `width: fit-content;` | Useful for making a container only as wide as its content. |
| `is-w-min` | `width: min-content;` | Shrinks the element to the smallest possible width without overflowing its content. |
| `is-w-max` | `width: max-content;` | Expands the element to the widest possible width of its content without wrapping. |
| `is-w-full` | `width: 100%;` | Makes an element span the entire width of its parent container. |
| `is-w-three-quarter` | `width: 75%;` | Sets the element's width to 75% of its parent container. |
| `is-w-half` | `width: 50%;` | Commonly used for creating two-column layouts. |
| `is-w-quarter` | `width: 25%;` | Commonly used for creating four-column layouts. |

**Example:**
```html
<!-- A two-column layout -->
<div class="is-flex">
  <div class="is-w-half">Column 1</div>
  <div class="is-w-half">Column 2</div>
</div>
```

## Square

The `is-sq-*` classes create square elements by setting equal `width` and `height`. This is perfect for creating uniformly shaped containers for icons, images, or color swatches.

The system supports arbitrary values using the format `is-sq-[value]`, where `value` can be any valid CSS size (e.g., `100px`, `5rem`, `20vw`).

| Class Pattern | CSS | Use Case |
| --- | --- | --- |
| `is-sq-[value]` | `width: value; height: value;` | Create a square of a specific, fixed size. Excellent for avatar images, profile pictures, or custom-sized grid items. |

**Example:**
```html
<!-- A fixed-size 5rem square, perfect for a color swatch -->
<div class="is-sq-[5rem] is-bg-blue-5"></div>
```

:::tip
All size, height, width, and sq support arbitrary values place your value in square brackets [VALUE]
:::