# State & Responsive Prefixes

IconForge allows you to apply styles conditionally using state and responsive prefixes. This is a powerful feature that lets you create dynamic and responsive designs.

### State Prefixes

State prefixes are used to apply styles based on the state of an element, such as when it is hovered over or focused.

| Prefix | Description |
| --- | --- |
| `hover:` | Applied when the element is hovered over. |
| `focus:` | Applied when the element is focused. |
| `active:` | Applied when the element is active. |
| `disabled:` | Applied when the element is disabled. |
| `dark:` | Applied when the `dark` class is present on a parent element. |

**Example:**
```html
<i class="if-heart is-color-red-5 hover:is-color-red-7"></i>
```

### Responsive Prefixes

Responsive prefixes are used to apply styles at different screen sizes.

| Prefix | Media Query |
| --- | --- |
| `xs:` | `@media (min-width: 420px)` |
| `sm:` | `@media (min-width: 640px)` |
| `md:` | `@media (min-width: 768px)` |
| `lg:` | `@media (min-width: 1024px)` |
| `xl:` | `@media (min-width: 1280px)` |

**Example:**
```html
<i class="if-heart is-size-2xl md:is-size-3xl"></i>
```
