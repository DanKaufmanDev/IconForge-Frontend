# Transforms

## Rotate

Rotate elements with the `is-rot-*` classes. This is useful for everything from creating loading spinners to indicating sort order.

| Class | CSS | Description |
| --- | --- | --- |
| `is-rot-45` | `rotate: 45deg;` | Rotates the element by 45 degrees clockwise. |
| `is-rot-90` | `rotate: 90deg;` | Rotates the element by 90 degrees clockwise. |
| `is-rot-135` | `rotate: 135deg;` | Rotates the element by 135 degrees clockwise. |
| `is-rot-180` | `rotate: 180deg;` | Rotates the element by 180 degrees. |
| `is-rot-225` | `rotate: 225deg;` | Rotates the element by 225 degrees clockwise. |
| `is-rot-270` | `rotate: 270deg;` | Rotates the element by 270 degrees clockwise. |
| `is-rot-315` | `rotate: 315deg;` | Rotates the element by 315 degrees clockwise. |
| `is-rot-360` | `rotate: 360deg;` | Rotates the element by 360 degrees. |

### Arbitrary Values
You can use arbitrary rotation values using the format `is-rot-[value]`, where `value` is any valid CSS rotate value (e.g., `60deg`, `0.25turn`).

**Use Cases & Examples:**

- **Indicating Sort Direction:** Flip a chevron icon to show ascending or descending order.
  ```html
  <i class="if-chevron-down is-rot-180"></i>
  ```
- **Loading Spinners:** Animate a rotation to create a loading indicator.
  ```html
  <i class="if-spinner is-animated-spin"></i> <!-- Assumes a spin animation class -->
  ```

## Scale

Scale elements up or down using the `is-scale-*` classes. This is perfect for creating interactive hover and focus effects.

| Class | CSS | Description |
| --- | --- | --- |
| `is-scale-50` | `transform: scale(0.5);` | Shrinks the element to 50% of its original size. |
| `is-scale-100`| `transform: scale(1);` | The element's default, original size. |
| `is-scale-125`| `transform: scale(1.25);`| Enlarges the element to 125% of its original size. |
| `is-scale-150`| `transform: scale(1.5);`| Enlarges the element to 150% of its original size. |
| `is-scale-200`| `transform: scale(2);` | Doubles the size of the element. |

> [!NOTE]
> Arbitrary values like `is-scale-[1.1]` are also supported for fine-grained control.

**Use Cases & Examples:**

- **Hover Effect:** Make a button or icon grow when the user hovers over it.
  ```html
  <button class="is-scale-100 hover:is-scale-110 is-transition-all">
    Hover Me
  </button>
  ```
- **Highlighting Active Element:** Make the currently selected item in a list larger than the others.
  ```html
  <div class="item is-active is-scale-125">...</div>
  ```

## Flip

Flip elements horizontally or vertically. This is a quick way to reverse an icon's direction.

| Class | CSS | Description |
| --- | --- | --- |
| `is-flip-v` | `transform: scaleY(-1);` | Flips the element vertically. |
| `is-flip-h` | `transform: scaleX(-1);` | Flips the element horizontally. |

**Use Cases & Examples:**

- **Reply Icon:** Flip a "send" icon horizontally to create a "reply" icon.
  ```html
  <i class="if-send is-flip-h"></i>
  ```
- **Creating Symmetry:** Flip a decorative bracket or quote icon to create a matching pair.
  ```html
  <i class="if-quote-left"></i>
  ... some text ...
  <i class="if-quote-left is-flip-h"></i>
  ```

## Translate

Translate, or move, elements up, down, left, or right with the `is-translate-*` utilities. This is useful for subtle positioning adjustments and animations.

The translate utilities support arbitrary values, such as `is-translate-x-[10px]` or `is-translate-y-[-2rem]`.

| Class Pattern | CSS | Description |
| --- | --- | --- |
| `is-translate-x-[value]` | `transform: translateX(value);` | Moves an element along the X-axis. |
| `is-translate-y-[value]` | `transform: translateY(value);` | Moves an element along the Y-axis. |

**Use Cases & Examples:**

- **Hover Animation:** Nudge an element upwards on hover to indicate it's interactive.
  ```html
  <a href="#" class="hover:is-translate-y-[-4px] is-transition-all">Link</a>
  ```
- **Fine-tuning Position:** Adjust an element's position by a few pixels to achieve perfect alignment without altering the document flow.
  ```html
  <i class="if-star is-translate-y-[2px]"></i>
  ```
