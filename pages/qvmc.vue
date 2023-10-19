<template>
    <template v-if="infos.type === 'model'">
        <section class="init pt-sm">
            <ElementsContainer class="flex flex-col-reverse sm:flex-col xl:flex-row gap-10 xl:gap-0">
                <div class="pb-48 xl:pb-0 xl:pt-28 max-w-md w-full">
                    <h1 class="text-center xl:text-left">Quanto Vale o <br /> Meu Carro?</h1>
                    <p class="mt-4 mb-8 sm:mt-8 sm:mb-12 px-4 xl:px-0 text-center xl:text-left">Responda o nosso questionário a seguir e descubra o valor de mercado do seu carro!</p>
                    <fieldset class="relative w-full">
                        <div class="relative z-20">
                            <VectorsSearch class="absolute top-2/4 left-4" />
                            <input class="bg-white block w-full pt-4 pb-4 pr-4" type="search" placeholder="Ex: Fiesta" v-model="infos.value">
                        </div>
                        <article :class="`absolute left-0 bottom-0 bg-white w-full transition z-10 ${!infos.value ? 'opacity-0 invisible' : ''}`">
                            <ul v-if="!infos.empty">
                                <li>
                                    <button
                                        class="text-left w-full py-2 px-4 transition cursor-pointer"
                                        @click="(infos.model = 'Fiat' + ' ' + 'Argo', infos.type = 'steps', infos.value = '')"
                                        type="button"
                                    >
                                        Fiat
                                        <strong>Argo</strong>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="text-left w-full py-2 px-4 transition cursor-pointer"
                                        @click="(infos.model = 'Fiat' + ' ' + 'Argo', infos.type = 'steps', infos.value = '')"
                                        type="button"
                                    >
                                        Fiat
                                        <strong>Argo</strong>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="text-left w-full py-2 px-4 transition cursor-pointer"
                                        @click="(infos.model = 'Fiat' + ' ' + 'Argo', infos.type = 'steps', infos.value = '')"
                                        type="button"
                                    >
                                        Fiat
                                        <strong>Argo</strong>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="text-left w-full py-2 px-4 transition cursor-pointer"
                                        @click="(infos.model = 'Fiat' + ' ' + 'Argo', infos.type = 'steps', infos.value = '')"
                                        type="button"
                                    >
                                        Fiat
                                        <strong>Argo</strong>
                                    </button>
                                </li>
                            </ul>
                            <p v-else class="text-center p-4">Nenhum modelo encontrado para <strong>{{ infos.value }}</strong></p>
                        </article>
                    </fieldset>
                </div>
                <picture>
                    <source media="(max-width: 1180px)" srcset="/images/qvmc/car-mob.png" />
                    <img class="mt-10 xl:mt-0 w-full" src="/images/qvmc/car.png" alt="Carro">
                </picture>
            </ElementsContainer>
        </section>
        <LayoutFooter class="hidden xl:block" />
    </template>

    <template v-if="infos.type === 'steps'">
        <section class="pt-big infos flex items-start flex-col-reverse sm:flex-row justify-center sm:gap-8 sm:pb-10">
            <aside class="data bg-white sm:bg-transparent w-full flex justify-between sm:flex-col flex-wrap gap-1 px-6 pb-10 sm:p-0">
                <button
                    @click="infos.type = 'model'"
                    class="gap-2 pt-3 pb-3 pl-4 pr-4 sm:pr-5 text-left sm:w-full bg-white flex items-center justify-between"
                    type="button"
                >
                    <p>
                        Modelo
                        <strong class="block">{{ infos.model ? infos.model : "-" }}</strong>
                    </p>
                    <VectorsArrowSmall />
                </button>
                <button
                    @click="infos.index = 1"
                    class="gap-2 pt-3 pb-3 pl-4 pr-4 sm:pr-5 text-left sm:w-full bg-white flex items-center justify-between"
                    type="button"
                >
                    <p>
                        Ano
                        <strong class="block">{{ infos.year ? infos.year : "-" }}</strong>
                    </p>
                    <VectorsArrowSmall />
                </button>
                <button
                    @click="infos.index = 2"
                    class="gap-2 pt-3 pb-3 pl-4 pr-4 sm:pr-5 text-left sm:w-full bg-white flex items-center justify-between"
                    type="button"
                >
                    <p>
                        Versão
                        <strong class="block truncate">{{ infos.version ? infos.version : "-" }}</strong>
                    </p>
                    <VectorsArrowSmall />
                </button>
                <button
                    @click="infos.index = 3"
                    class="gap-2 pt-3 pb-3 pl-4 pr-4 sm:pr-5 text-left sm:w-full bg-white flex items-center justify-between"
                    type="button"
                >
                    <p>
                        Quilometragem
                        <strong class="block">{{ infos.slider.value ? $formatNumber(infos.slider.value) + " km" : "-" }}</strong>
                    </p>
                    <VectorsArrowSmall />
                </button>
                <button
                    @click="infos.index = 4"
                    class="gap-2 pt-3 pb-3 pl-4 pr-4 sm:pr-5 text-left sm:w-full bg-white flex items-center justify-between"
                    type="button"
                >
                    <p>
                        Cidade
                        <strong class="block">{{ infos.city ? infos.city : "-" }}</strong>
                    </p>
                    <VectorsArrowSmall />
                </button>
            </aside>

            <article class="content bg-white py-8 px-6 pb-10 sm:p-10 max-w-md w-full">
                <template v-if="infos.index === 1">
                    <h3 class="w-full mx-auto mb-6 sm:mb-8 text-center">Qual o ano do modelo do seu carro?</h3>
                    <ElementsFormOption
                        v-for="(y, index) in infos.years"
                        :key="index"
                        class="w-full mb-2 block"
                        :label="y"
                        big
                        :checked="infos.year === y ? true : false"
                        @click="(infos.index = 2, infos.year = y)"
                    />
                    <p class="obs mt-6 sm:mt-8 pb-2 sm:pb-1 text-center">Não encontrou o ano do seu carro? <br /> Analisamos somente carros modelo a partir de 2012.</p>
                </template>

                <template v-if="infos.index === 2">
                    <h3 class="w-full mx-auto mb-6 sm:mb-8 text-center">Qual a versão do seu carro?</h3>
                    <ElementsFormOption
                        v-for="(v, index) in infos.versions"
                        :key="index"
                        class="w-full mb-2 block"
                        :label="v"
                        big
                        :checked="infos.version === v ? true : false"
                        @click="(infos.index = 3, infos.version = v)"
                    />
                </template>

                <template v-if="infos.index === 3">
                    <h3 class="w-full mx-auto mb-6 sm:mb-11 text-center">Qual a quilometragem aproximada?</h3>
                    <div class="slider2">
                        <Slider
                            v-model="infos.slider.value"
                            :min="infos.slider.min"
                            :max="infos.slider.max"
                            :format="infos.slider.format"
                            :showTooltip="infos.slider.showTooltip"
                        />
                    </div>
                    <div class="flex justify-end">
                        <ElementsButton
                            class="mt-36"
                            small
                            @click="infos.index = 4"
                        >
                            Continuar
                        </ElementsButton>
                    </div>
                </template>

                <template v-if="infos.index === 4">
                    <h3 class="w-full mx-auto mb-6 sm:mb-10 text-center">Qual sua cidade?</h3>
                    <ElementsFormSearchSelect
                        floating
                        label="Cidade"
                        :items="[
                            {
                                'options': [
                                    'São Paulo - SP',
                                    'São Paulo das Missões - SP',
                                    'São Paulo de Olivença - SP',
                                    'São Paulo do Potengi - SP'
                                ]
                            }
                        ]"
                        :event="() => infos.type = 'result'"
                    >
                        <VectorsArrowSelect />
                    </ElementsFormSearchSelect>
                </template>
            </article>
        </section>
    </template>

    <template v-if="infos.type === 'load'">
        <section class="load h-screen pt-sm flex justify-center items-center">
            <ElementsContainer class="flex flex-col justify-center items-center gap-6 sm:gap-20">
                <h2 class="text-center w-full mx-auto">Só um momento. <br /> Estamos analisando os maiores portais do Brasil...</h2>
                <p class="text-center">icarros</p>
            </ElementsContainer>
        </section>
    </template>

    <template v-if="infos.type === 'result'">
        <section class="result pt-sm h-screen flex justify-center items-center">
            <ElementsContainer class="flex flex-col items-center">
                <h6 class="text-center text-white">
                    O valor médio de mercado 
                    <br />
                    do seu carro é:
                </h6>
                <h2 class="text-white text-center my-6 sm:my-8">R$ 152.991</h2>
                <p class="text-center text-white mb-8 sm:mb-10">
                    {{ infos.model }} {{ infos.year }} -
                    <br class="sm:hidden" />
                    {{ infos.version }}
                    <br />
                    Data da análise: {{ new Date().toLocaleDateString('pt-BR') }}
                </p>
                <ElementsButton
                    @click="infos.type = 'model'"
                    black
                    small
                >
                    Refazer QVMC
                </ElementsButton>
            </ElementsContainer>
        </section>
    </template>

    <template v-if="infos.type === 'error'">
        <section class="error pt-sm h-screen flex justify-center items-center">
            <ElementsContainer class="flex flex-col items-center">
                <VectorsLogoBlack class="w-20 h-16 sm:w-36 sm:h-28" />
                <h2 class="text-center mt-8 sm:mt-14">Sem resultado</h2>
                <p class="text-center mt-6 sm:mt-8 mb-8 sm:mb-10">Não encontramos anúncios com <br /> carros próximos ao seu.</p>
                <ElementsButton @click="infos.type = 'model'">Iniciar nova pesquisa</ElementsButton>
            </ElementsContainer>
        </section>
    </template>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'

const infos = reactive({
    index: 1,
    type: "model",
    model: "",
    year: "",
    version: "",
    city: "",
    value: "",
    empty: false,
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
    versions: ["SE 1.6 16V FLEX 5P", "SE PLUS DIRECT 1.6 16V FLEX AUT.", "SEL 1.6 16V FLEX AUT. 5P", "SEDAN SEL 1.6 16V FLEX MEC.", "SE STYLE 1.6 16V FLEX MEC. 5P", "SEL STYLE 1.6 16V FLEX MEC. 5P", "TIT.PLUS 1.0 12V ECOBOOST AUT. 5P", "TITANIUM 1.6 16V FLEX MEC."],
    slider: {
        value: 0,
        min: 0,
        max: 200000,
        step: 1000,
        format: {
            suffix: " km",
            decimals: 0,
            thousand: '.',
        },
        showTooltip: "focus",
        tooltipPosition: "bottom"
    }
})

definePageMeta({
  layout: "simple",
})

useHead({
  title: `Quanto Vale o Meu Carro? | Ecosys Auto`,
})
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
.init {

    div {

        h1 {
            @include h2();
        }

        p {
            font-weight: 500;
        }

        fieldset {
            max-width: 420px;
        
            div {

                svg {
                    transform: translateY(-50%);
                }
                
                input {
                    font: 500 16px/24px $inter;
                    padding-left: 52px;
                    border: 1px solid $grey-2;

                    &::placeholder {
                        font-weight: 400;
                        opacity: 1;
                        color: $grey-4;
                    }
                }
            }

            article {
                transform: translateY(100%);
                border-left: 1px solid $grey-2;
                border-right: 1px solid $grey-2;
                border-bottom: 1px solid $grey-2;
                max-height: 320px;
                overflow-y: auto;

                ul {

                    li {

                        button {
                            font: 400 16px/24px $inter;

                            &:hover {
                                background: $blue;
                                color: $white;
                            }
                        }
                    }
                }

                p {
                    font: 400 14px/130% $inter;

                    strong {
                        color: $dark;
                    }
                }
            }
        }
    }

    img {
        
        @media (min-width: $tablet) {
            max-width: 675px;
            transform: translateX(16px);
        }
    }
}

.infos {

    @media (max-width: $mobile) {
        padding-top: 68px;
    }

    .data {
        max-width: 230px;

        @media (max-width: $mobile) {
            max-width: 100%;
        }

        button {

            @media (max-width: $mobile) {
                border: 1px solid $grey-2;
                width: calc(50% - 2px);

                &:last-of-type {
                    width: 100%;
                }
            }

            p {
                width: 92%;
                font: 400 16px/24px $inter;
                color: $grey-4;

                @media (max-width: $mobile) {
                    width: 88%;
                }

                @media (max-width: 330px) {
                    width: 85%;
                }

                strong {
                    color: $dark;
                    font-weight: 600;
                }
            }

            svg {
                min-width: 7px;
                max-width: 7px;
            }
        }
    }

    .content {

        h3 {
            max-width: 345px;
            font: 600 24px/28px $poppins;

            @media (max-width: $mobile) {
                font-size: 20px;
                max-width: 280px;
            }
        }

        .obs {
            color: $grey-4;
            font: 500 12px/18px $inter;
        }
    }
}

.load {

    h2 {
        max-width: 800px;
        font: 600 40px/1 $poppins;

        @media (max-width: $mobile) {
            font: 600 20px/28px $poppins;
        }
    }

    p {
        color: $dark;
        font: 500 24px/1 $inter;

        @media (max-width: $mobile) {
            font: 500 16px/24px $inter;
        }
    }
}

.result {
    background: $blue;

    h6 {
        font: 600 24px/28px $poppins;

        @media (max-width: $mobile) {
            font: 600 20px/28px $poppins;
        }
    }

    h2 {
        font: 600 120px/1 $poppins;

        @media (max-width: $mobile) {
            font: 600 48px/1 $poppins;
        }
    }

    p {
        font: 500 16px/24px $inter;

        @media (max-width: $mobile) {
            font: 500 14px/20px $inter;
        }
    }
}

.error {

    h2 {
        font: 600 48px/1 $poppins;

        @media (max-width: $mobile) {
            font: 600 20px/28px $poppins;
        }
    }

    p {
        font-weight: 500;
    }
}
</style>