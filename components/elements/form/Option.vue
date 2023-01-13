<template>
    <label :for="$formatStringSimple(label) + name">
        <input
            class="absolute opacity-0"
            :id="$formatStringSimple(label) + name"
            :name="checkbox ? $formatStringSimple(label) : name"
            :value="label"
            :type="checkbox ? 'checkbox' : 'radio'"
            :checked="checked"
        >
        <span
            :class="`transition py-3 px-6 block rounded-full whitespace-nowrap cursor-pointer ${big ? 'py-4 px-8' : ''}`"
        >
            {{ label }}
        </span>
    </label>
</template>

<script setup lang="ts">
defineProps({
    label: String,
    name: String,
    big: Boolean,
    checkbox: Boolean,
    checked: Boolean,
})
</script>

<style lang="scss" scoped>
label {

    input {

        &:checked ~ span {
            border-color: $dark;
            background: $grey-1;
        }
    }

    span {
        border: 1px solid $grey-2;
        font: 500 16px/24px $inter;
    }

    &:hover {

        span {
            border-color: $dark;
        }
    }
}
</style>