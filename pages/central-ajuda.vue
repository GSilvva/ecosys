<template>
    <NuxtLayout>
        <header class="header pt-big mb-8 md:mb-16">
            <ElementsContainer block>
                <h1 class="mb-1 md:mb-3">Têm dúvidas?</h1>
                <p>Nós te ajudamos a resolvê-las.</p>
            </ElementsContainer>
        </header>

        <ElementsTabs class="xl:pb-28" :tabs="tabs">
            <template
                v-for="(tab, index) in tabs"
                :key="index"
                v-slot:[slotName(index)]
            >
                <ElementsContainer block class="container">
                    <section class="bg-white xl:py-4 px-6 md:px-12 xl:px-10 w-full">
                        <dl
                            v-for="question in questions[index]"
                            :key="question.question"
                        >
                            <dt
                                v-if="!questionActive || questionActive !== question.question"
                                @click="questionActive = question.question"
                                :class="`py-6 md:py-8 cursor-pointer flex justify-between items-center gap-4 ${questionActive === question.question ? 'active' : ''}`"
                            >
                                {{ question.question }}
                                <div class="h-3 md:h-5 relative"></div>
                            </dt>
                            <dt
                                v-else
                                @click="questionActive = ''"
                                :class="`py-6 md:py-8 cursor-pointer flex justify-between items-center gap-4 ${questionActive === question.question ? 'active' : ''}`"
                            >
                                {{ question.question }}
                                <div class="h-3 md:h-5 relative"></div>
                            </dt>
                            <dd v-if="questionActive === question.question" class="pb-6 md:pb-8 transition w-full">{{ question.answer }}</dd>
                        </dl>
                    </section>
                </ElementsContainer>
            </template>
        </ElementsTabs>
    </NuxtLayout>
</template>

<script setup lang="ts">
const tabs = ["Compra", "Venda", "Troca"];
const questions = [
    [
        {   
            question: "O que é e como funciona a b.car?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "O que é uma venda?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "O que preciso fazer depois de comprar meu carro?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Posso visitar as lojas?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Como eu compro um carro?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Como eu vendo meu carro e compro uma batata?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Pastel azul é gostoso?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
    ],
    [
        {
            question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Lorem ipsum dolor, sit amet consectetur",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Lorem ipsum dolor, sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Lorem ipsum dolor?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
    ],
    [
        {
            question: "Eos obcaecati sequi explicabo, harum ex tenetur beatae animi?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
        {
            question: "Eos obcaecati sequi explicabo",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati sequi explicabo, harum ex tenetur beatae animi sint nostrum eum minus neque accusantium dolor! Exercitationem error placeat modi neque ipsum."
        },
    ]
];
const questionActive = ref("");

function slotName(index: number) {
    return `tab-${index + 1}`;
};

useHead({
  title: `b.car | Central de Ajuda`,
});
</script>

<style lang="scss" scoped>
.header {
    h1 {
        @include titlePage;
    }
    p {
        font: 400 18px/26px $inter;
        @media screen and (max-width: $mobile) {
            font: 400 14px/22px $inter;
        }
    }
}

.tabs {

    @media screen and (max-width: $tablet) {
        .container {
            padding: 0;
        }
    }

    dl {
        &:not(:last-of-type) {
            border-bottom: 1px solid $grey-2;
        }

        dt {
            font: 500 24px/32px $inter;

            @media screen and (max-width: $mobile) {
                font: 500 18px/26px $inter;
            }

            div {
                min-width: 20px;
                max-width: 20px;

                @media screen and (max-width: $mobile) {
                    min-width: 12px;
                    max-width: 12px;
                }

                &::before,
                &::after {
                    content: "";
                    background: $dark;
                    position: absolute;
                }
                &::before {
                    width: 100%;
                    height: 2px;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                }
                &::after {
                    height: 100%;
                    width: 2px;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            &.active {
                div {
                    &::after {
                        transform: translateX(-50%) rotate(90deg);
                    }
                }
            }
        }
        
        dd {
            max-width: 750px;
            margin: -16px 0 0 0;
            font: 400 18px/26px $inter;
            color: $grey-5;

            @media screen and (max-width: $mobile) {
                font: 400 16px/24px $inter;
                margin: -8px 0 0 0;
            }
        }
    }
}
</style>