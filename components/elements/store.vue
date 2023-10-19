<template>
    <div class="flex items-center gap-4">
        <VectorsSaleFor />
        <span>
            <small class="block mb-1.5">Vendido por</small>
            {{ name ? name : "Webmotors" }}
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String
})
</script>

<style lang="scss" scoped>
div {          

    span {
        font: 500 16px/1 $inter;

        small {
            color: $grey-4;
            font: 400 12px/1 $inter;
        }
    }
}
</style>