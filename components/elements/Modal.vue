<template>
    <article :class="`modal fixed left-0 top-0 z-50 w-full h-full opacity-0 invisible flex items-center flex-col justify-center transition overflow-hidden ${open ? 'visible' : ''}`">
        <ElementsContainer>
            <div class="box bg-white max-w-md w-full mx-auto relative z-50">
                <header class="py-4 px-6 sm:px-8 flex items-center justify-between">
                    <h5 class="uppercase">{{ title }}</h5>
                    <button @click="$emit('update:open', false)" type="button">
                        <VectorsCloseGrey />
                    </button>
                </header>
                <div class="px-6 pb-6 pt-8 sm:px-8 sm:pt-11 sm:pb-8">
                    <slot />
                </div>
            </div>

            <div @click="$emit('update:open', false)" class="overlay fixed top-0 left-0 w-full h-full z-40"></div>
        </ElementsContainer>
    </article>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    open: Boolean
})

defineEmits(["update:open"])
</script>

<style lang="scss" scoped>
.modal {

    &.visible {
        opacity: 1;
        visibility: visible;
    }
}

.box {

    header {
        border-bottom: 1px solid $grey-2;
    
        h5 {
            font-family: $gotham;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
        }
    }
}

.overlay {
    background: rgba(0, 0, 0, 0.6);
}
</style>