<template>
    <button
        type="button"
        @click.prevent="favorited = !favorited"
        :class="favorited ? 'favorited' : ''"
    >
        <VectorsFavorite class="w-full h-full" />
    </button>
</template>

<script setup lang="ts">
defineProps({
    favorited: Boolean
})
</script>

<style lang="scss">
.favorited {
    path {
        stroke: $orange;
        fill: $orange;
    }
}
</style>