# Spacing

Spacing is fundamental to creating clean, readable layouts. These utilities control the `margin` and `padding` of elements. The classes use a consistent formula:

`is-{property}{direction}-{size}`

- **Property:** `m` for `margin` or `p` for `padding`.
- **Direction:** `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical), or blank for all sides.
- **Size:** A number from the spacing scale (or `auto`).

## Margin

Use margin utilities to create space *outside* of an element, pushing other elements away.

### Directional Margin

| Class Prefix | CSS Property | 
| --- | --- |
| `is-m-*` | `margin` |
| `is-mt-*` | `margin-top` |
| `is-mr-*` | `margin-right` |
| `is-mb-*` | `margin-bottom` |
| `is-ml-*` | `margin-left` |
| `is-mx-*` | `margin-left` & `margin-right` |
| `is-my-*` | `margin-top` & `margin-bottom` |

### Centering an Element

To center a block-level element with a defined width, use `is-mx-auto`.

```html
<div class="is-w-half is-mx-auto is-bg-blue-2 is-p-4">
  This div is centered.
</div>
```

## Padding

Use padding utilities to create space *inside* of an element, between its border and its content.

### Directional Padding

| Class Prefix | CSS Property | 
| --- | --- |
| `is-p-*` | `padding` |
| `is-pt-*` | `padding-top` |
| `is-pr-*` | `padding-right` |
| `is-pb-*` | `padding-bottom` |
| `is-pl-*` | `padding-left` |
| `is-px-*` | `padding-left` & `padding-right` |
| `is-py-*` | `padding-top` & `padding-bottom` |

**Example:** Creating a button with horizontal and vertical padding.
```html
<button class="is-bg-blue-5 is-color-white is-px-6 is-py-3 is-rounded-lg">
  Click Me
</button>
```

## Spacing Scale

Both margin and padding utilities use the same numeric scale.

| Size | CSS Value | 
| --- | --- |
| `auto` | `auto` |
| `1` | `0.25rem` (4px) |
| `2` | `0.5rem` (8px) |
| `3` | `0.75rem` (12px) |
| `4` | `1rem` (16px) |
| `5` | `1.25rem` (20px) |
| `6` | `1.5rem` (24px) |
| `7` | `1.75rem` (28px) |
| `8` | `2rem` (32px) |
| `9` | `2.25rem` (36px) |
| `10` | `2.5rem` (40px) |

> [!TIP]
> Arbitrary values are also supported. For example, to get a top margin of 50px, you can use the class `is-mt-[50px]`.