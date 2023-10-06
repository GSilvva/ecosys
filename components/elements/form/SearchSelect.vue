<template>
    <div class="select relative">
        <div class="input relative z-10">
            <ElementsFormLabel :label="label" blue />
            <div class="relative">
                <input
                    class="block w-full transition px-4 sm"
                    type="text"
                    :placeholder="placeholder"
                    v-model="filter"
                    @click="open = true"
                >
                <button
                    @click="open ? open = false : open = true"
                    class="absolute top-2/4 right-4 flex justify-center items-center z-20 cursor-pointer cursor-pointer"
                    type="button"
                >
                    <VectorsClose class="w-3" v-if="open" />
                    <slot v-else />
                </button>
            </div>
        </div>
        <div :class="`list absolute left-0 bottom-0 bg-white w-full z-20 transition ${!open ? 'opacity-0 invisible' : ''}`">
            <template v-for="(item, index) in filtered" :key="index">
                <h6
                    class="text-white uppercase py-2.5 px-4"
                    v-if="item.label"
                >
                    {{ item.label }}
                </h6>
                <ul>
                    <li
                        v-for="option in item.options"
                        :key="option"
                    >
                        <button
                            @click="(filter = option), (open = false)"
                            class="text-left w-full py-2 px-4 transition cursor-pointer"
                            type="button"
                        >
                            {{ option }}
                        </button>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const filter = ref("")
const open = ref(false)

const props = defineProps({
    label: String,
    placeholder: String,
    items: Array
})

const filtered = computed(() => {
    if (!filter.value) return props.items

    const filterRe = new RegExp(filter.value, "i")

    return props.items?.map((item: any) => {
        const filteredOptions = item.options.filter((option: string) => option.match(filterRe)).sort()

        if (filteredOptions.length) {
            return {
                ...item,
                options: filteredOptions,
            }
        }

        return null
    }).filter(Boolean)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/inputs';

.input {

    input {
        padding-right: 30px;
    }

    button {
        transform: translateY(-50%);
    }
}

.list {
    transform: translateY(100%);
    border-left: 1px solid $grey-2;
    border-right: 1px solid $grey-2;
    border-bottom: 1px solid $grey-2;
    max-height: 320px;
    overflow-y: auto;

    h6 {
        background: $grey-3;
        font: 600 12px/1 $inter;
    }

    ul {

        li {
            
            button {
                font: 400 16px/24px $inter;

                &:hover {
                    background: $grey-1;
                }
            }
        }
    }
}
</style>