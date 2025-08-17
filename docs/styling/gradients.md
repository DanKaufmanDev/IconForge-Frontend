# Gradients

Create beautiful gradient effects on your icons.

**Class format:** `is-gradient-{type}-[{value}]`

**Types:**

*   `linear`
*   `radial`
*   `conic`

**Example:**
```html
<i class="if-heart is-gradient-linear-[to_right,red,orange]"></i>
```

```css
.is-gradient-linear-\[to_right\,red\,orange\] {
  background: linear-gradient(to right, red, orange);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```
