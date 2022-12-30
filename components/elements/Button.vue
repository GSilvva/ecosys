<template>
    <nuxt-link
        v-if="href"
        :class="['py-5', classes]"
        :href="href"
        :target="blank ? '_blank' : ''"
    >
        <slot />
    </nuxt-link>
    <button
        v-else
        :class="['py-4', classes]"
        :type="submit ? 'submit' : 'button'"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const classes = "rounded-full transition flex items-center justify-center px-8";

defineProps({
  href: String,
  blank: Boolean,
  submit: Boolean,
});
</script>

<style lang="scss" scoped>
a,
button {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: $white;
    background: $orange;

    &:hover {
        background: $light-orange;
    }
}
</style>