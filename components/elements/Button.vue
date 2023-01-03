<template>
    <nuxt-link
        v-if="href"
        :class="`xl:py-5 ${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${classes}`"
        :to="href"
        :target="blank ? '_blank' : ''"
    >
        <slot />
    </nuxt-link>
    <button
        v-else
        :class="`${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${classes}`"
        :type="submit ? 'submit' : 'button'"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const classes = "rounded-full transition inline-block px-8 py-4 text-center";

defineProps({
  href: String,
  blank: Boolean,
  submit: Boolean,
  outline: Boolean,
  black: Boolean,
  small: Boolean,
});
</script>

<style lang="scss" scoped>
a,
button {
    font: 500 18px/24px $inter;
    color: $white;
    background: $orange;
    border: 1px solid $orange;

    @media screen and (max-width: $mobile) {
        font-size: 16px;
    }

    &:hover {
        background: $dark;
        border-color: $grey-1;
    }

    &.outlined {
        background: transparent;
        border-color: $grey-3;
        color: $dark;

        &:hover {
            border-color: $dark;
        }
    }
    
    &.green {
        background: $green;
        border-color: $green;
        
        &:hover {
            border-color: $dark;
        }
    }

    &.black {
        background: $dark;
        border-color: $dark;

        &:hover {
            background: $white;
            color: $dark;
            border-color: $white;
        }
    }

    &.small {
        font-size: 16px;
        padding: .75rem 1.5rem;
    }
}
</style>