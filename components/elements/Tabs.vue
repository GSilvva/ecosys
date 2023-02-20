<template>
    <section class="tabs">
        <header class="mb-8 md:mb-10">
            <ElementsContainer :fluid="full" block>
                <section class="flex justify-start gap-8 overflow-x-auto">
                    <button
                        @click="activeTab = index + 1"
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :class="`pb-4 relative transition ${activeTab === index + 1 ? 'active' : ''} ${small ? 'small' : ''}`"
                        type="button"
                    >
                        {{ tab }}
                    </button>
                </section>
            </ElementsContainer>
        </header>

        <template v-for="(tab, index) in tabs">
            <slot v-if="index + 1 === activeTab" :key="index" :name="`tab-${index + 1}`" />
        </template>
    </section>
</template>

<script setup lang="ts">
const activeTab = ref(1);

defineProps({
    tabs: Array,
    full: Boolean,
    small: Boolean
});
</script>

<style lang="scss" scoped>
header {
    section {
        border-bottom: 1px solid $grey-2;

        button {
            font: 500 18px/26px $inter;
            color: $grey-5;

            @media screen and (max-width: $mobile) {
                font: 500 16px/24px $inter;
            }

            &:hover {
                color: $dark;
            }

            &::before {
                content: "";
                position: absolute;
                bottom: 0px;
                left: 0;
                opacity: 0;
                visibility: hidden;
                width: 100%;
                height: 2px;
                background: $orange;
                transition: .3s ease;
            }

            &.small {
                font-size: 16px;
            }

            &.active {
                color: $dark;

                &::before {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
}

.full {
    max-width: 100%;
    padding: 0;
}
</style>