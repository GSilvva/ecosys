<template>
    <label
        class="flex gap-3 cursor-pointer"
        :for="label ? $formatStringSimple(label) : name"
    >
        <input
            class="absolute opacity-0 invisible"
            :id="label ? $formatStringSimple(label) : name"
            :name="name ? name : $formatStringSimple(label)"
            :type="type ? type : 'checkbox'"
            :value="label"
            :required="required"
            v-model="value"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <div class="rounded mt-px relative transition" :style="`background: ${color}; border-color: ${color};`"></div>
        <img v-if="image" :src="image" alt="Imagem">
        <span :class="`w-full inline-block ${form ? 'form' : ''}`">{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
const value = ref("")

defineProps({
    label: String,
    name: String,
    type: String,
    required: Boolean,
    form: Boolean,
    image: String,
    color: String
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
            background: $blue;
            border-color: $blue;

            &::before {
                opacity: 1;
            }
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
            opacity: 0;
            transition: .3s;
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