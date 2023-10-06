<template>
    <svg class="mob sm:w-6 sm:h-6" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
        <g id="Group_2">
        <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M7.848 2C9.4355 2 10.5 3.49 10.5 4.8775C10.5 7.694 6.0805 10 6 10C5.9195 10 1.5 7.694 1.5 4.8775C1.5 3.49 2.5645 2 4.152 2C5.0595 2 5.6555 2.4525 6 2.8555C6.3445 2.4525 6.9405 2 7.848 2Z" stroke="#565759" stroke-width="0.762712" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
    </svg>
    <svg class="desk" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="black" fill-opacity="0.2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.08 9.33334C21.7258 9.33334 23.5 11.8167 23.5 14.1292C23.5 18.8233 16.1342 22.6667 16 22.6667C15.8658 22.6667 8.5 18.8233 8.5 14.1292C8.5 11.8167 10.2742 9.33334 12.92 9.33334C14.4325 9.33334 15.4258 10.0875 16 10.7592C16.5742 10.0875 17.5675 9.33334 19.08 9.33334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<style lang="scss" scoped>
.desk {

    @media (max-width: $tablet) {
        display: none;
    }
}

.mob {

    @media (min-width: $tablet) {
        display: none;
    }
}
</style>