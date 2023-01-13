<template>
    <div class="message pt-10 pb-8 px-10">
        <h3 class="uppercase text-white mb-4">{{ name }}</h3>
        <p class="text-white"><slot /></p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
})
</script>

<style lang="scss" scoped>
.message {
    background: $orange;

    h3 {
        font: 700 24px/28px $gotham;
    }

    p {
        font: 500 16px/24px $inter;
    }
}
</style>
