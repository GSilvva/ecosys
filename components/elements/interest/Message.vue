<template>
    <div class="message py-8 sm:pt-10 sm:pb-8 px-6 sm:px-10">
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
    background: $blue;

    @media screen and (max-width: $mobile) {
        margin: -48px 0 0 0;
    }

    h3 {
        font: 600 24px/28px $poppins;
    }

    p {
        font: 500 16px/24px $inter;
    }
}
</style>
