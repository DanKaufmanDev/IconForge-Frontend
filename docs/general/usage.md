# Usage

Using an icon is as simple as adding an `<i>` or `<span>` tag with the appropriate class name.

## Basic Icon
```html
<!-- Basic Icon -->
<i class="if-user"></i>
```

## Styled Icon
```html
<!-- Styled Icon -->
<i class="if-heart is-color-red-5 is-size-2xl is-anim-pulse"></i>
```

## Dynamic Changes
Use prefixes like `dark:` and `hover:` to dynamically change your icon.
```html
<!-- Dynamic Icon -->
<i class="if-bulb is-color-white dark:is-color-amber-4 is-size-2xl hover:is-anim-pop"></i>
```

## Arbitrary Values
IconForge supports arbitrary values. Simply place the value between square brackets `[VALUE]`.
```html
<!-- Arbitrary Icon-->
<button class="is-sq hover:is-clickable">
    <i class="if-iconforge is-color-[#ffad8c] is-size-[64px]"></i>
</button>
```
