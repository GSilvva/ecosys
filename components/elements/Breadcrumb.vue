<template>
    <div class="flex items-center gap-3 md:gap-4 mb-6 xl:mb-8 overflow-x-auto">
        <template v-for="(link, index) in links" :key="index">
            <nuxt-link class="transition" v-if="index + 1 !== links.length" :to="link.url">{{ link.text }}</nuxt-link>
            <span v-else>{{ link.text }}</span>
            <VectorsArrowBreadcrumb v-if="index + 1 !== links.length" />
        </template>
    </div>
</template>

<script setup lang="ts">
defineProps({
    links: Array
});
</script>

<style lang="scss" scoped>
    a,
    span {
        font: 500 16px/24px $inter;
        color: $grey-4;

        @media screen and (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }

    a {
        &:hover {
            color: $dark;
        }
    }
</style>