<template>
    <fieldset :class="['relative w-full', classesFieldset]">
        <ElementsFormLabel
            v-if="label"
            :floating="floating"
            :label="label"
        />
        <textarea
            v-if="textarea"
            :class="['block w-full transition px-4 py-4 !h-24 appearance-none', classes]"
            :id="label ? $formatStringSimple(label) : name"
            :name="name ? name : $formatStringSimple(label)"
            :placeholder="placeholder"
            :required="required"
        ></textarea>
        <input
            v-else
            :class="['block w-full transition px-4', (small ? 'sm' : ''), (big ? 'big' : ''), (legend ? 'legend' : ''), classes]"
            :id="label ? $formatStringSimple(label) : name"
            :name="name ? name : $formatStringSimple(label)"
            :type="type ? type : 'text'"
            :placeholder="placeholder"
            :required="required"
        >
        <small v-if="legend" class="mt-2">{{ legend }}</small>
    </fieldset>
</template>

<script setup lang="ts">
defineProps({
    classes: String,
    classesFieldset: String,
    floating: Boolean,
    small: Boolean,
    big: Boolean,
    label: String,
    legend: String,
    name: String,
    type: String,
    textarea: Boolean,
    placeholder: String,
    required: Boolean,
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/inputs';

label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

small {
    color: $grey-4;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
</style>