<template>
    <label
        :class="['block mb-2 cursor-pointer', (floating ? 'floating' : ''), (blue ? 'blue' : '')]"
        :for="$formatStringSimple(label)"
    >
        {{ label }}
    </label>
</template>

<script setup lang="ts">
defineProps({
    label: String,
    floating: Boolean,
    blue: Boolean
});
</script>

<style lang="scss" scoped>
label {
    font: 500 16px/32px $inter;
    z-index: 9;
    
    &.floating {
        position: absolute;
        top: 0;
        transform: translateY(-50%);
        left: 8px;
        padding: 2px 8px;
        font-size: 14px;
        line-height: 14px;
        margin: 0;
        background: $white;
        color: $grey-4;
        display: inline-block;
    }

    &.blue {
        color: $blue;
    }
}
</style>