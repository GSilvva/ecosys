<template>
    <form
        method="POST"
        action=""
        @submit.prevent="modalDiscover.result = true"
        :class="`modal fixed top-0 left-0 w-full h-full z-50 opacity-0 invisible transition ${modalDiscover.result ? 'pt-md' : 'pt-big sm:pb-20'} p-0 overflow-y-auto ${open ? 'visible' : ''}`"
    >
        <template v-if="!modalDiscover.result">
            <header class="header bg-white fixed z-40 top-0 left-0 w-full py-5 xl:py-8">
                <ElementsContainer block>
                    <div class="relative">
                        <button
                            class="absolute left-0 top-1/2"
                            @click="$emit('update:open', false)"
                            @click.prevent="$scrollBody"
                            type="button"
                        >
                            <VectorsClose />
                        </button>
                        <h6 class="text-center">Descobrir meu carro</h6>
                    </div>
                </ElementsContainer>
            </header>

            <div class="box m-auto w-full bg-white">
                <div class="questions py-8 px-6 sm:p-12">
                    <template
                        v-for="(question, index) in modalDiscover.questions"
                        :key="index"
                    >
                        <section :class="`flex relative ${modalDiscover.active >= index + 1 ? 'active' : ''}`">
                            <small class="absolute top-px right-0 sm:relative">
                                <template v-if="index <= 9">0{{ index + 1 }}</template>
                                <template v-else>{{ index + 1 }}</template>
                            </small>
                            <aside class="w-full">
                                <h5 class="mb-5 whitespace-pre-line pr-8 sm:pr-0">{{ question.question }}</h5>
                                <div
                                    class="flex flex-wrap gap-2 sm:gap-3"
                                    v-if="!question.range"
                                >
                                    <ElementsFormOption
                                        class="w-full sm:w-max option-modal"
                                        v-for="answer in question.answers"
                                        :key="answer"
                                        :label="answer"
                                        :name="question.question"
                                        big
                                        @click="modalDiscover.active <= index + 1 ? modalDiscover.active++ : ''"
                                    />
                                </div>
                                <template v-else>
                                    <div class="flex items-center justify-between mb-6">
                                        <span>{{ $formatCurrency(modalDiscover.slider.min) }}</span>
                                        <span>{{ $formatCurrency(modalDiscover.slider.max) }}</span>
                                    </div>
                                    <Slider
                                        v-model="modalDiscover.slider.value"
                                        :min="modalDiscover.slider.min"
                                        :max="modalDiscover.slider.max"
                                        :format="modalDiscover.slider.format"
                                        :showTooltip="modalDiscover.slider.showTooltip"
                                        :step="modalDiscover.slider.step"
                                    />
                                </template>
                            </aside>
                        </section>
                    </template>
                </div>

                <div class="actions p-6 sm:py-8 sm:px-12 flex items-center justify-between">
                    <small>Quanto mais respostas <br> melhor o resultado</small>
                    <ElementsButton
                        submit
                        small
                        :disabled="modalDiscover.active < modalDiscover.questions.length ? true : false"
                    >
                        <span class="hidden sm:block">Encontrar meu carro</span>
                        <span class="sm:hidden">Ver carros</span>
                    </ElementsButton>
                </div>
            </div>
        </template>

        <ElementsDiscoverResult
            v-else
            :cars="modalDiscover.cars"
        />
    </form>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'

const modalDiscover = reactive({
    active: 1,
    questions: [
        {
            question: "Quem sou eu?",
            answers: ["Solteiro (a)", "Solteiro (a) namorando", "Casado sem filhos", "Casado com filhos", "Casado com filhos, sogra, cachorro e papagaio"]
        },
        {
            question: "Quem vai usar o carro? \n Não necessariamente dirigir.",
            answers: ["Somente eu", "Eu e meu cônjuge", "Eu e meu cônjuge e meus filhos"]
        },
        {
            question: "Quem vai dirigir o veículo?",
            answers: ["Somente eu", "Eu e meu cônjuge", "Eu e minha família"]
        },
        {
            question: "Onde o carro será usado?",
            answers: ["Na cidade, com trânsito pesado", "Na cidade, sem trânsito", "Na estrada, com piso bom", "Na estrada, com piso ruim", "Na terra ou na areia"]
        },
        {
            question: "Que comportamento dinâmico \n eu quero do carro?",
            answers: ["Estabilidade nas curvas", "Conforto ao passar por obstáculos."]
        },
        {
            question: "Como deve ser o motor?",
            answers: ["Potente", "Econômico", "Potente e econômico"]
        },
        {
            question: "Até quanto você quer gastar?",
            range: true
        },
    ],
    slider: {
        value: [0, 1000000],
        min: 0,
        max: 1000000,
        format: {
            prefix: "R$ ",
            decimals: 0,
            thousand: '.',
        },
        step: 1000,
        showTooltip: "focus",
    },
    result: false,
    cars: [
        {
            brand: "",
            slug: "",
            photos: [
                {
                    url_path: "./images/general/car2.jpg",
                },
                {
                    url_path: "./images/general/car2.jpg",
                },
                {
                    url_path: "./images/general/car2.jpg",
                },
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            price: 125900,
            old_price: 999999,
            build_year: 2018,
            model_year: 2019,
            km: 100000
        },
        {
            brand: "",
            slug: "",
            photos: [
                {
                    url_path: "./images/general/car2.jpg",
                },
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            price: 125900,
            old_price: 999999,
            build_year: 2018,
            model_year: 2019,
            km: 100000
        },
        {
            brand: "",
            slug: "",
            photos: [
                {
                    url_path: "./images/general/car2.jpg",
                },
                {
                    url_path: "./images/general/car2.jpg",
                },
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            price: 125900,
            old_price: 999999,
            build_year: 2018,
            model_year: 2019,
            km: 100000
        },
    ]
})

defineProps({
    open: Boolean,
})
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
.modal {
    background: $grey-1;

    &.visible {
        opacity: 1;
        visibility: visible;
    }

    @media screen and (max-width: $mobile) {
        padding-top: 68px;
    }
}

.header {

    h6 {
            font: 500 16px/24px $inter;
    }

    button {
        transform: translateY(-50%);
    }
}

.box {
    max-width: 592px;

    .questions {

        section {
            display: none;
            animation: 800ms fade ease;

            &.active {
                display: flex;
            }

            @keyframes fade {
                from {
                    transform: translateY(40px);
                    opacity: 0;
                    visibility: hidden;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
            }

            &:not(:first-of-type) {
                margin: 64px 0 0 0;

                @media screen and (max-width: $mobile) {
                    margin: 48px 0 0 0;
                }
            }

            small {
                font: 700 16px/28px $gotham;
                color: $grey-2;
                min-width: 64px;
                max-width: 64px;

                @media screen and (max-width: $mobile) {
                    max-width: initial;
                    min-width: initial;
                }
            }

            h5 {
                font: 500 20px/28px $inter;
            }

            span {
                font: 500 14px/20px $inter;
                color: $grey-4;
            }
        }
    }

    .actions {
        border-top: 1px solid $grey-2;

        small {
            font: 500 14px/20px $inter;
            color: $grey-4;

            @media screen and (max-width: $mobile) {
                font-size: 12px;
            }
        }
    }
}
</style>