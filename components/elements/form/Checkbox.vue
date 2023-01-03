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
        <div class="rounded mt-1.5"></div>
        <span class="w-full inline-block">{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
defineProps({
    label: String,
    name: String,
    type: String,
    required: Boolean,
});
</script>

<style lang="scss" scoped>
label {

    div {
        border: 1px solid $grey-2;
        min-width: 20px;
        max-width: 20px;
        height: 20px;
    }

    span {
        color: $grey-5;
        font: 400 16px/32px $inter;
    }
}
</style>