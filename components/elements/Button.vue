<template>
    <nuxt-link
        v-if="href"
        :class="`xl:py-5 ${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${green ? 'green' : ''} ${classes}`"
        :to="href"
        :target="blank ? '_blank' : ''"
    >
        <slot />
    </nuxt-link>
    <button
        v-else
        :class="`${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${green ? 'green' : ''} ${classes}`"
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
  green: Boolean,
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
            background: $dark;
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
        padding: 12px 32px;
    }

    &:disabled {
        cursor: not-allowed;
        background: $grey-3;
        border-color: $grey-3;
    }
}
</style>