<template>
    <label
        class="flex gap-4 cursor-pointer"
        :for="label ? $formatStringSimple(label) : name"
    >
        <input
            class="absolute opacity-0 invisible"
            :id="label ? $formatStringSimple(label) : name"
            :name="name ? name : $formatStringSimple(label)"
            :type="type ? type : 'checkbox'"
            :value="label"
            :required="required"
        >
        <div class="rounded mt-px relative transition"></div>
        <span :class="`w-full inline-block ${form ? 'form' : ''}`">{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
defineProps({
    label: String,
    name: String,
    type: String,
    required: Boolean,
    form: Boolean,
});
</script>

<style lang="scss" scoped>
label {

    &:not(:last-of-type) {
        margin: 0 0 12px 0;
    }

    &:hover {

        div {
            border-color: $dark;
        }
    }

    input:checked {

        & ~ div {
            background: $orange;
            border-color: $orange;
        }
    }

    div {
        border: 1px solid $grey-2;
        min-width: 20px;
        max-width: 20px;
        height: 20px;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: $white;
            width: 8px;
            height: 8px;
            border-radius: 2px;
        }
    }

    span {
        color: $grey-5;
        font: 400 16px/22px $inter;

        &.form {
            font: 500 14px/20px $inter;
            color: $grey-4;
        }
    }
}
</style>