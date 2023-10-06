<template>
    <nuxt-link
        v-if="href"
        :class="`xl:py-4 ${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${green ? 'green' : ''} ${outlineWhite ? 'outline-white' : ''} ${lightBlack ? 'light-black' : ''} ${classes}`"
        :to="href"
        :target="blank ? '_blank' : ''"
    >
        <slot />
    </nuxt-link>
    <button
        v-else
        :class="`${outline ? 'outlined' : ''} ${black ? 'black' : ''} ${small ? 'small' : ''} ${green ? 'green' : ''} ${outlineWhite ? 'outline-white' : ''} ${lightBlack ? 'light-black' : ''} ${classes}`"
        :type="submit ? 'submit' : 'button'"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const classes = "rounded-md transition inline-block px-8 py-4 text-center";

defineProps({
    href: String,
    blank: Boolean,
    submit: Boolean,
    outline: Boolean,
    outlineWhite: Boolean,
    black: Boolean,
    lightBlack: Boolean,
    small: Boolean,
    green: Boolean
});
</script>

<style lang="scss" scoped>
a,
button {
    font: 500 16px/24px $inter;
    color: $white;
    background: $blue;
    border: 1px solid $blue;

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
        padding: 11px 32px;
    }

    &.outline-white {
        color: $white;
        border-color: #333333;
        background: transparent;

        &:hover {
            border-color: $white;
        }
    }

    &.light-black {
        background: #242526;
        border-color: #242526;

        &:hover {
            background: $white;
            border-color: $white;
            color: $dark;
        }
    }

    &:disabled {
        cursor: not-allowed;
        background: $grey-3;
        border-color: $grey-3;
    }
}
</style>