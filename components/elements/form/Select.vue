<template>
    <fieldset class="relative w-full">
        <ElementsFormLabel
            v-if="label"
            :floating="floating"
            :label="label"
        />
        <div class="relative w-full">
            <select
                :class="['block w-full transition px-4 appearance-none', (small ? 'sm' : ''), (big ? 'big' : '')]"
                :id="label ? $formatStringSimple(label) : name"
                :name="name ? name : $formatStringSimple(label)"
                :required="required"
            >
                <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
            </select>
            <VectorsArrowSelect />
        </div>
    </fieldset>
</template>

<script setup lang="ts">
defineProps({
    options: Array,
    floating: Boolean,
    small: Boolean,
    big: Boolean,
    label: String,
    legend: String,
    name: String,
    required: Boolean,
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/inputs';

svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    z-index: 1;
}
</style>