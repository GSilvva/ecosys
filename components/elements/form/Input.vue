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
            v-model="value"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
        <input
            v-else
            :class="['block w-full transition px-4', (small ? 'sm' : ''), (big ? 'big' : ''), (legend ? 'legend' : ''), classes]"
            :id="label ? $formatStringSimple(label) : name"
            :name="name ? name : $formatStringSimple(label)"
            :type="type ? type : 'text'"
            :placeholder="placeholder"
            :required="required"
            v-model="value"
            @input="
                $emit('update:modelValue', $event.target.value),
                number ? maskNumber($event) : '',
                phone ? maskPhone($event) : ''
            "
            v-maska
            :data-maska="mask"
            :maxlength="phone ? 15 : false"
        >
        <small v-if="legend" class="mt-2">{{ legend }}</small>
    </fieldset>
</template>

<script setup lang="ts">
import { vMaska } from "maska"

const value = ref("")

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
    number: Boolean,
    mask: String,
    phone: Boolean
})

function maskNumber(event: any) {
    const mask = event.target.value.replace(/\D/g, '')
    event.target.value = mask
}

function maskPhone(event: any) {
    const mask = event.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d)/,"($1) $2")
                                    .replace(/(\d)(\d{4})$/,"$1-$2")
    event.target.value = mask
}
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