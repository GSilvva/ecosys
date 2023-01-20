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
const favorited = ref(false)
</script>

<style lang="scss">
.favorited {
    
    svg {

        path {
            stroke: $orange;
            fill: $orange;
        }
    }
}
</style>