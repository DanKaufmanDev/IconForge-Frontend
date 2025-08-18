# Interactivity & Animations

This guide covers utilities that control how users interact with elements and how those elements animate, including cursors, transitions, and keyframe animations.

## Interactivity

### Cursor

Control the mouse cursor style when hovering over an element to provide visual feedback.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-clickable` | `cursor: pointer;` | Indicates that an element is clickable, like a button or link. |
| `is-not-clickable` | `cursor: not-allowed;` | Indicates that an action is disabled or not permitted. |

### User Select

Control whether the user can select the text in an element.

| Class | CSS | 
| --- | --- |
| `is-select-none` | `user-select: none;` |
| `is-select-text` | `user-select: text;` |
| `is-select-all` | `user-select: all;` |
| `is-select-auto` | `user-select: auto;` |

### Resize

Control whether an element is resizable by the user.

| Class | CSS | 
| --- | --- |
| `is-resize-none` | `resize: none;` |
| `is-resize-y` | `resize: vertical;` |
| `is-resize-x` | `resize: horizontal;` |

## Transitions

Apply smooth transitions to property changes, often used with state prefixes like `hover:`.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-transition` | `transition: all 0.2s ease-in-out;` | Default transition for most interactive elements. |
| `is-transition-fast`| `transition: all 0.1s ease-in-out;` | For quick, subtle feedback. |
| `is-transition-slow`| `transition: all 0.5s ease-in-out;` | For more pronounced, deliberate transitions. |

**Example:**
```html
<button class="is-transition hover:is-bg-blue-6">
  Hover me for a smooth color change.
</button>
```

## Animations

Use keyframe animations to create complex, continuous, or triggered animations.

| Class | Description |
| --- | --- |
| `is-anim-pulse` | Fades in and out. Good for notification badges. |
| `is-anim-blink` | Blinks on and off. |
| `is-anim-ping` | A pulse that scales outwards, like a radar ping. |
| `is-anim-spin` | Spins continuously. Perfect for loading indicators. |
| `is-anim-bounce` | Bounces up and down. |
| `is-anim-shake` | Shakes horizontally. Good for error states. |
| `is-anim-wiggle` | Wiggles from side to side. |
| `is-anim-flip` | A 3D flip animation. |
| `is-anim-pop` | A quick, one-time pop effect. |
| `is-anim-flicker` | Flickers like a neon sign. |
| `is-anim-drift` | Drifts slowly and fades. |

**Example:**
```html
<!-- A spinning loading icon -->
<i class="if-spinner is-anim-spin"></i>

<!-- An input field that shakes on error -->
<input class="input if-warningtri is-anim-shake" />
```
