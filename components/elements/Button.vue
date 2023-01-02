<template>
    <nuxt-link
        v-if="href"
        :class="`xl:py-5 ${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${classes}`"
        :to="href"
        :target="blank ? '_blank' : ''"
    >
        <slot />
    </nuxt-link>
    <button
        v-else
        :class="classes"
        :type="submit ? 'submit' : 'button'"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const classes = "rounded-full transition flex items-center justify-center px-8 py-4";

defineProps({
  href: String,
  blank: Boolean,
  submit: Boolean,
  outline: Boolean,
  black: Boolean
});
</script>

<style lang="scss" scoped>
a,
button {
    font: 500 18px/24px $inter;
    color: $white;
    background: $orange;

    @media screen and (max-width: $mobile) {
        font-size: 16px;
    }

    &:hover {
        background: #ff6c3b;
    }

    &.outlined {
        background: transparent;
        border: 1px solid $grey-3;
        color: $dark;

        &:hover {
            background: rgba(0, 0, 0, .04);
        }
    }
    
    &.black {
        background: $dark;
        &:hover {
            background: rgba(0, 0, 0, .88);
        }
    }
}
</style>