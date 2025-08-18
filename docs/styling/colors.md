---
aside: false
---

# Colors

This guide covers all utilities related to colors, backgrounds, borders, and gradients.

## Color Palette

<div class="is-flex is-flex-row is-justify-center" @mouseout="resetValue">
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-red-1 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-1')"></div>
        <div class="is-bg-red-2 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-2')"></div>
        <div class="is-bg-red-3 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-3')"></div>
        <div class="is-bg-red-4 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-4')"></div>
        <div class="is-bg-red-5 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-5')"></div>
        <div class="is-bg-red-6 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-6')"></div>
        <div class="is-bg-red-7 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-7')"></div>
        <div class="is-bg-red-8 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-8')"></div>
        <div class="is-bg-red-9 responsive-sq is-border-black is-border-[2px]" @mouseenter="getValue('red-9')"></div>
        <div class="is-bg-red-10 responsive-sq is-border-black  is-border-[2px]" @mouseenter="getValue('red-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-orange-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-1')"></div>
        <div class="is-bg-orange-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-2')"></div>
        <div class="is-bg-orange-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-3')"></div>
        <div class="is-bg-orange-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-4')"></div>
        <div class="is-bg-orange-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-5')"></div>
        <div class="is-bg-orange-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-6')"></div>
        <div class="is-bg-orange-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-7')"></div>
        <div class="is-bg-orange-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-8')"></div>
        <div class="is-bg-orange-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-9')"></div>
        <div class="is-bg-orange-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('orange-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-yellow-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-1')"></div>
        <div class="is-bg-yellow-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-2')"></div>
        <div class="is-bg-yellow-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-3')"></div>
        <div class="is-bg-yellow-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-4')"></div>
        <div class="is-bg-yellow-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-5')"></div>
        <div class="is-bg-yellow-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-6')"></div>
        <div class="is-bg-yellow-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-7')"></div>
        <div class="is-bg-yellow-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-8')"></div>
        <div class="is-bg-yellow-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-9')"></div>
        <div class="is-bg-yellow-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('yellow-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-green-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-1')"></div>
        <div class="is-bg-green-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-2')"></div>
        <div class="is-bg-green-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-3')"></div>
        <div class="is-bg-green-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-4')"></div>
        <div class="is-bg-green-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-5')"></div>
        <div class="is-bg-green-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-6')"></div>
        <div class="is-bg-green-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-7')"></div>
        <div class="is-bg-green-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-8')"></div>
        <div class="is-bg-green-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-9')"></div>
        <div class="is-bg-green-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('green-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-blue-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-1')"></div>
        <div class="is-bg-blue-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-2')"></div>
        <div class="is-bg-blue-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-3')"></div>
        <div class="is-bg-blue-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-4')"></div>
        <div class="is-bg-blue-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-5')"></div>
        <div class="is-bg-blue-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-6')"></div>
        <div class="is-bg-blue-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-7')"></div>
        <div class="is-bg-blue-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-8')"></div>
        <div class="is-bg-blue-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-9')"></div>
        <div class="is-bg-blue-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blue-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-purple-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-1')"></div>
        <div class="is-bg-purple-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-2')"></div>
        <div class="is-bg-purple-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-3')"></div>
        <div class="is-bg-purple-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-4')"></div>
        <div class="is-bg-purple-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-5')"></div>
        <div class="is-bg-purple-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-6')"></div>
        <div class="is-bg-purple-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-7')"></div>
        <div class="is-bg-purple-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-8')"></div>
        <div class="is-bg-purple-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-9')"></div>
        <div class="is-bg-purple-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('purple-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-blush-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-1')"></div>
        <div class="is-bg-blush-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-2')"></div>
        <div class="is-bg-blush-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-3')"></div>
        <div class="is-bg-blush-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-4')"></div>
        <div class="is-bg-blush-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-5')"></div>
        <div class="is-bg-blush-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-6')"></div>
        <div class="is-bg-blush-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-7')"></div>
        <div class="is-bg-blush-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-8')"></div>
        <div class="is-bg-blush-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-9')"></div>
        <div class="is-bg-blush-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('blush-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-peach-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-1')"></div>
        <div class="is-bg-peach-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-2')"></div>
        <div class="is-bg-peach-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-3')"></div>
        <div class="is-bg-peach-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-4')"></div>
        <div class="is-bg-peach-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-5')"></div>
        <div class="is-bg-peach-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-6')"></div>
        <div class="is-bg-peach-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-7')"></div>
        <div class="is-bg-peach-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-8')"></div>
        <div class="is-bg-peach-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-9')"></div>
        <div class="is-bg-peach-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('peach-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-amber-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-1')"></div>
        <div class="is-bg-amber-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-2')"></div>
        <div class="is-bg-amber-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-3')"></div>
        <div class="is-bg-amber-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-4')"></div>
        <div class="is-bg-amber-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-5')"></div>
        <div class="is-bg-amber-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-6')"></div>
        <div class="is-bg-amber-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-7')"></div>
        <div class="is-bg-amber-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-8')"></div>
        <div class="is-bg-amber-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-9')"></div>
        <div class="is-bg-amber-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('amber-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-zest-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-1')"></div>
        <div class="is-bg-zest-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-2')"></div>
        <div class="is-bg-zest-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-3')"></div>
        <div class="is-bg-zest-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-4')"></div>
        <div class="is-bg-zest-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-5')"></div>
        <div class="is-bg-zest-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-6')"></div>
        <div class="is-bg-zest-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-7')"></div>
        <div class="is-bg-zest-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-8')"></div>
        <div class="is-bg-zest-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-9')"></div>
        <div class="is-bg-zest-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('zest-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-frost-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-1')"></div>
        <div class="is-bg-frost-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-2')"></div>
        <div class="is-bg-frost-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-3')"></div>
        <div class="is-bg-frost-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-4')"></div>
        <div class="is-bg-frost-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-5')"></div>
        <div class="is-bg-frost-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-6')"></div>
        <div class="is-bg-frost-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-7')"></div>
        <div class="is-bg-frost-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-8')"></div>
        <div class="is-bg-frost-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-9')"></div>
        <div class="is-bg-frost-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('frost-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-twilight-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-1')"></div>
        <div class="is-bg-twilight-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-2')"></div>
        <div class="is-bg-twilight-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-3')"></div>
        <div class="is-bg-twilight-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-4')"></div>
        <div class="is-bg-twilight-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-5')"></div>
        <div class="is-bg-twilight-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-6')"></div>
        <div class="is-bg-twilight-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-7')"></div>
        <div class="is-bg-twilight-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-8')"></div>
        <div class="is-bg-twilight-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-9')"></div>
        <div class="is-bg-twilight-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('twilight-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-dune-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-1')"></div>
        <div class="is-bg-dune-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-2')"></div>
        <div class="is-bg-dune-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-3')"></div>
        <div class="is-bg-dune-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-4')"></div>
        <div class="is-bg-dune-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-5')"></div>
        <div class="is-bg-dune-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-6')"></div>
        <div class="is-bg-dune-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-7')"></div>
        <div class="is-bg-dune-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-8')"></div>
        <div class="is-bg-dune-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-9')"></div>
        <div class="is-bg-dune-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('dune-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-cloud-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-1')"></div>
        <div class="is-bg-cloud-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-2')"></div>
        <div class="is-bg-cloud-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-3')"></div>
        <div class="is-bg-cloud-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-4')"></div>
        <div class="is-bg-cloud-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-5')"></div>
        <div class="is-bg-cloud-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-6')"></div>
        <div class="is-bg-cloud-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-7')"></div>
        <div class="is-bg-cloud-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-8')"></div>
        <div class="is-bg-cloud-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-9')"></div>
        <div class="is-bg-cloud-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('cloud-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-mist-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-1')"></div>
        <div class="is-bg-mist-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-2')"></div>
        <div class="is-bg-mist-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-3')"></div>
        <div class="is-bg-mist-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-4')"></div>
        <div class="is-bg-mist-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-5')"></div>
        <div class="is-bg-mist-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-6')"></div>
        <div class="is-bg-mist-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-7')"></div>
        <div class="is-bg-mist-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-8')"></div>
        <div class="is-bg-mist-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-9')"></div>
        <div class="is-bg-mist-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('mist-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-ash-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-1')"></div>
        <div class="is-bg-ash-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-2')"></div>
        <div class="is-bg-ash-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-3')"></div>
        <div class="is-bg-ash-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-4')"></div>
        <div class="is-bg-ash-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-5')"></div>
        <div class="is-bg-ash-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-6')"></div>
        <div class="is-bg-ash-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-7')"></div>
        <div class="is-bg-ash-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-8')"></div>
        <div class="is-bg-ash-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-9')"></div>
        <div class="is-bg-ash-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ash-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-ink-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-1')"></div>
        <div class="is-bg-ink-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-2')"></div>
        <div class="is-bg-ink-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-3')"></div>
        <div class="is-bg-ink-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-4')"></div>
        <div class="is-bg-ink-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-5')"></div>
        <div class="is-bg-ink-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-6')"></div>
        <div class="is-bg-ink-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-7')"></div>
        <div class="is-bg-ink-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-8')"></div>
        <div class="is-bg-ink-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-9')"></div>
        <div class="is-bg-ink-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('ink-10')"></div>
    </div>
    <div class="is-flex is-flex-col is-w-fit">
        <div class="is-bg-coal-1 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-1')"></div>
        <div class="is-bg-coal-2 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-2')"></div>
        <div class="is-bg-coal-3 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-3')"></div>
        <div class="is-bg-coal-4 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-4')"></div>
        <div class="is-bg-coal-5 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-5')"></div>
        <div class="is-bg-coal-6 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-6')"></div>
        <div class="is-bg-coal-7 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-7')"></div>
        <div class="is-bg-coal-8 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-8')"></div>
        <div class="is-bg-coal-9 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-9')"></div>
        <div class="is-bg-coal-10 responsive-sq is-border-black is-border-[2px]"@mouseenter="getValue('coal-10')"></div>
    </div>
</div>

> [!NOTE]
> <strong class="is-font-bold is-size-xl">{{ value }}</strong>

## Color
Control the color of your icons and text using the `is-color-[color]-[shade]` classes. IconForge provides a wide range of colors, each with 10 shades, from 1 (lightest) to 10 (darkest).

**Class format:** `is-color-[color]-[shade]`

**Example:**
```html
<i class="if-heart is-color-red-5"></i>
```

<div align="center"><i class="if-heart is-color-red-5 is-size-4xl"></i></div>

## Background Color
Control the background color of elements using the `is-bg-[color]-[shade]` classes. These work just like the `is-color` classes, with the same range of colors and shades.

**Class format:** `is-bg-[color]-[shade]`

| Class | CSS |
| --- | --- |
| `is-bg-transparent` | `background-color: transparent;` |

**Example:**
```html
<div class="is-bg-coal-8 is-p-4">
    <i class="if-home is-color-white"></i>
</div>
```

<div align="center"><div class="is-bg-coal-8 is-p-4 is-w-fit"><i class="if-home is-color-white is-size-4xl"></i></div></div>

## Gradients
Create beautiful gradient effects. When applied to an icon, the gradient will be clipped to the text shape.

**Class format:** `is-gradient-[type]-[value]`

**Types:** `linear`, `radial`, `conic`

**Example:**
```html
<i class="if-brave is-gradient-linear-[50deg,orange_5%,red]"></i>
```

<div align="center"><i class="if-brave is-size-4xl is-gradient-linear-[50deg,orange_5%,red]"></i></div>

## Borders

### Border Color
Control the border color of elements using the `is-border-[color]-[shade]` classes. These work just like the text and background color classes.

**Class format:** `is-border-[color]-[shade]`

**Example:**
```html
<div class="is-border-[2px] is-border-red-5 is-p-4 is-rounded-lg">...</div>
```
<div align="center"><div class="is-border-[2px] is-border-red-5 is-p-4 is-w-fit is-rounded-lg"><i class="if-error is-color-red-5 is-size-4xl"></i></div></div>

### Border Style
Use these utilities to set the style and width of a border.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-border` | `border: 1px solid;` | Adds a default 1px solid border. Combine with border color utilities. |
| `is-border-t` | `border-top-width: 2px; border-style: solid;` | Adds a default 2px solid border top. Combine with border color utilities. |
| `is-border-r` | `border-right-width: 2px; border-style: solid;` | Adds a default 2px solid border right. Combine with border color utilities. |
| `is-border-b` | `border-bottom-width: 2px; border-style: solid;` | Adds a default 2px solid border bottom. Combine with border color utilities. |
| `is-border-l` | `border-left-width: 2px; border-style: solid;` | Adds a default 2px solid border left. Combine with border color utilities. |
| `is-border-none` | `border: none;` | Removes any existing border. |

### Border Radius
Use the `is-rounded-*` classes to control the roundness of an element's corners.

| Class | CSS | Use Case |
| --- | --- | --- |
| `is-rounded-sm` | `border-radius: 0.25rem;` | For subtle rounding on small elements like tags. |
| `is-rounded-md` | `border-radius: 0.375rem;` | A slightly larger radius, good for cards. |
| `is-rounded-lg` | `border-radius: 0.5rem;` | A more pronounced radius for larger components. |
| `is-rounded-xl` | `border-radius: 0.75rem;` | Even larger, for a very soft look. |
| `is-rounded-2xl` | `border-radius: 1rem;` | Creates a very rounded shape. |
| `is-rounded-3xl` | `border-radius: 1.5rem;` | Almost a pill shape on rectangular elements. |
| `is-rounded-full` | `border-radius: 9999px;` | Creates circles or pill shapes. Perfect for avatars. |

**Example:**
```html
<!-- A circular avatar image -->
<img src="..." class="is-sq-[8rem] is-rounded-full">

<!-- A rounded button -->
<button class="is-button is-rounded-lg">Click Me</button>
```

> [!TIP]
> All color, background, border, and border-radius utilities support arbitrary values. Just place your value in square brackets: `is-color-[#ff0000]`, `is-rounded-[10px]`.

<script setup>
    import { ref } from 'vue';
    
    const value = ref('is- color / bg / border - ')
    const getValue = (Color) => {
        value.value = 'is- color / bg / border - '  + Color;
    };

    const resetValue = () => {
        value.value = 'is- color / bg / border - ';
    };
</script>

<style scoped>
    .is-border-black {border-color: black;}
    .is-border-black:hover {border-color: #348cfe;}

    .responsive-sq {
        width: 3.6dvw;
        height: 3.6dvw;
        max-width: 3.6rem;
        max-height: 3.6rem;
        min-width: 1.2rem;
        min-height: 1.2rem;
    }
</style>