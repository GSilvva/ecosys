<template>
    <svg class="desk" width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L12 12L2 22" stroke="#0F0F0F" stroke-width="4"/>
    </svg>
    <svg class="mob" xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
        <path d="M2 2L8 8L2 14" stroke="#111214" stroke-width="3"/>
    </svg>
</template>

<style lang="scss" scoped>
.desk {
    @media (max-width: $mobile) {
        display: none;
    }
}
.mob {
    @media (min-width: $mobile) {
        display: none;
    }
}
</style>