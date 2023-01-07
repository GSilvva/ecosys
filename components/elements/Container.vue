<template>
    <div :class="`${block ? 'block' : 'xl:flex justify-between'} ${center ? 'items-center' : ''}  `">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    block: Boolean,
    center: Boolean,
});
</script>

<style lang="scss" scoped>
    div {
        max-width: calc(1216px + 96px);
        width: 100%;
        padding: 0 48px;
        margin: 0 auto;
        
        @media screen and (max-width: $mobile) {
            padding: 0 24px;
        }

        &.full {
            max-width: 100%;
            padding: 0 32px;

            @media screen and (max-width: $tablet) {
                padding: 0 48px;
            }

            @media screen and (max-width: $mobile) {
                padding: 0 24px;
            }
        }
    }

</style>