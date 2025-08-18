# Usage

Using an icon is as simple as adding an `<i>` or `<span>` tag with the appropriate class name.

## Basic Icon
```html
<!-- Basic Icon -->
<i class="if-user"></i>
```

<div align="center"><i class="if-user is-size-4xl"></i></div>

## Styled Icon
```html
<!-- Styled Icon -->
<i class="if-health is-color-red-5 is-size-4xl is-anim-pulse"></i>
```

<div align="center"><i class="if-health is-color-red-5 is-size-4xl is-anim-pulse"></i></div>

## Dynamic Changes
Use prefixes like `dark:` and `hover:` to dynamically change your icon.
```html
<!-- Dynamic Icon -->
<i class="if-bulb is-color-blue-2 dark:is-color-amber-4 is-size-4xl hover:is-anim-pop"></i>
```

<div align="center"><i class="if-bulb is-color-blue-2 dark:is-color-amber-4 is-size-4xl hover:is-anim-pop"></i></div>

## Arbitrary Value

>[!NOTE]
>IconForge supports arbitrary values. Simply place the value between square brackets `[VALUE]`.


```html
<!-- Arbitrary Icon-->
<button class="is-sq hover:is-clickable">
    <i class="if-iconforge is-color-[#ffad8c] is-size-[64px]"></i>
</button>
```
<div align="center">
<button class="is-sq hover:is-clickable">
    <i class="if-iconforge is-color-[#ffad8c] is-size-[64px]"></i>
</button></div>