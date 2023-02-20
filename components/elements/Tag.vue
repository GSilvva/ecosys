<template>
    <span :class="`uppercase flex items-center justify-center px-3 h-7 ${confirmed ? 'confirmed' : ''} ${active ? 'active' : ''} ${pending ? 'pending' : ''} ${concluded ? 'concluded !px-2.5' : ''} ${disabled ? 'disabled' : ''} ${green ? 'green' : ''}`">
        <template v-if="confirmed">Confirmado</template>
        <template v-else-if="active">Ativo</template>
        <template v-else-if="concluded"><VectorsCheckGreen /></template>
        <template v-else-if="pending">Pendente</template>
        <template v-else-if="disabled">Desativado</template>
        <template v-else-if="text">{{ text }}</template>
        <template v-else>A confirmar</template>
    </span>
</template>

<script setup lang="ts">
defineProps({
    text: String,
    confirmed: Boolean,
    active: Boolean,
    concluded: Boolean,
    pending: Boolean,
    disabled: Boolean,
    green: Boolean
})
</script>

<style lang="scss" scoped>
span {
    font-weight: 700;
    font-size: 12px;
    font-family: $gotham;
    background: rgba(246, 83, 26, 0.1);
    color: $orange;

    &.confirmed {
        background: rgba(77, 160, 37, 0.1);
        color: $green;
    }

    &.active {
        background: $green;
        color: $white;
    }

    &.concluded {
        background: rgba(77, 160, 37, 0.1);
    }

    &.pending,
    &.disabled {
        color: $dark;
        background: $grey-1;
    }

    &.green {
        color: $white;
        background: $green;
    }
}
</style>