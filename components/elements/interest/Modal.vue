<template>
    <div :class="`modal fixed top-0 left-0 w-full h-full z-50 opacity-0 invisible transition pt-big pb-20 overflow-y-auto ${visible ? 'visible' : ''}`">
        <header
            class="header bg-white fixed top-0 left-0 w-full py-8"
            v-if="!modal.resume"
        >
            <ElementsContainer block>
                <div class="relative">
                    <button
                        v-if="modal.buy === false && modal.exchange === false"
                        class="absolute left-0 top-1/2"
                        @click="visible = false"
                        type="button"
                    >
                        <VectorsClose />
                    </button>
                    <button
                        v-else
                        @click="modal.buy = false, modal.exchange = false"
                        class="absolute left-0 top-1/2"
                        type="button"
                    >
                        <VectorsArrowBack />
                    </button>
                    <h6 class="text-center" v-if="modal.choice === 'buy'">Quero comprar</h6>
                    <h6 class="text-center" v-else-if="modal.choice === 'exchange'">Quero trocar</h6>
                    <h6 class="text-center" v-else>Tenho interesse</h6>
                </div>
            </ElementsContainer>
        </header>

        <div
            class="init"
            v-if="!modal.buy && !modal.exchange && !modal.scheduling && !modal.resume"
        >
            <ElementsContainer block>
                <div class="content w-full m-auto">
                    <h2 class="uppercase mb-6">Como podemos te ajudar?</h2>
                    <p class="mb-10">Escolha uma opção para começar. <br> As outras continuarão disponíveis no seu processo de compra.</p>
                    <div class="car-preview mb-12 flex items-center gap-8">
                        <img
                            class="w-full object-cover h-32 w-40"
                            :src="carImage"
                            :alt="carName"
                        >
                        <div>
                            <h5 class="mb-0.5">{{ carName }}</h5>
                            <h6 class="mb-5">{{ $formatCurrency(carPrice) }}</h6>
                            <footer class="flex gap-2 items-center">
                                <small>{{ carBuildYear }}/{{ carModelYear }}</small>
                                <div class="square"></div>
                                <small>{{ $formatNumber(carKM) }}km</small>
                            </footer>
                        </div>
                    </div>
                    <div class="flex gap-8">
                        <button
                            @click="modal.buy = true, modal.personalInfos = true"
                            class="flex-1 bg-white pt-8 pr-8 pb-10 pl-10"
                            type="button"
                        >
                            <VectorsBuy class="w-16 ml-auto mb-4" />
                            <h5 class="mb-1 text-left">Eu quero</h5>
                            <div class="flex items-end justify-between">
                                <h3 class="uppercase text-left">Comprar <br> este carro</h3>
                                <div class="arrow bottom-1 right-7 relative transition">
                                    <VectorsArrowRight class="h-4" />
                                </div>
                            </div>
                        </button>
                        <button
                            @click="modal.exchange = true, modal.personalInfos = false"
                            class="flex-1 bg-white pt-8 pr-8 pb-10 pl-10"
                            type="button"
                        >
                            <VectorsExchange class="w-16 ml-auto mb-4" />
                            <h5 class="mb-1 text-left">Eu quero</h5>
                            <div class="flex items-end justify-between">
                                <h3 class="uppercase text-left">Dar meu carro <br> na troca</h3>
                                <div class="arrow bottom-1 right-7 relative transition">
                                    <VectorsArrowRight class="h-4" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </ElementsContainer>
        </div>

        <div
            class="form"
            v-if="modal.buy === true || modal.exchange === true"
        >
            <ElementsContainer block>
                <div class="content-form w-full m-auto flex justify-between gap-6">
                    <aside class="w-full">
                        <div class="car-preview mb-12 flex items-center gap-8">
                            <img
                                class="w-full object-cover h-32 w-40"
                                :src="carImage"
                                :alt="carName"
                            >
                            <div>
                                <h5 class="mb-0.5">{{ carName }}</h5>
                                <h6 class="mb-5">{{ $formatCurrency(carPrice) }}</h6>
                                <footer class="flex gap-2 items-center">
                                    <small>{{ carBuildYear }}/{{ carModelYear }}</small>
                                    <div class="square"></div>
                                    <small>{{ $formatNumber(carKM) }}km</small>
                                </footer>
                            </div>
                        </div>

                        <div class="local hidden xl:block my-8">
                            <h6 class="mb-5">Visita disponível:</h6>
                            <div class="flex gap-5">
                                <VectorsMapBlack />
                                <p>
                                    Terraço Shoping
                                    <a class="underline block transition" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                                </p>
                            </div>
                        </div>
                    </aside>

                    <ElementsInterestForm
                        v-bind:car="modal.personalInfos ? false : true"
                        title="Seus dados"
                        textButton="Continuar"
                    >
                        <template
                            v-slot:button
                            v-if="modal.personalInfos === true"
                        >
                            <ElementsButton
                                @click="modal.scheduling = true, modal.buy = false, modal.exchange = false"
                                class="button py-4 px-8"
                            >
                                Continuar
                            </ElementsButton>
                        </template>
                        <template
                            v-slot:button
                            v-else
                        >
                            <ElementsButton
                                @click="modal.personalInfos = true"
                                class="button py-4 px-8"
                            >
                                Continuar
                            </ElementsButton>
                        </template>
                    </ElementsInterestForm>
                </div>
            </ElementsContainer>
        </div>

        <div
            class="scheduling"
            v-if="modal.scheduling"
        >
            <ElementsContainer block>
                <div class="content w-full m-auto">
                    <ElementsInterestMessage name="Tiago">
                        Recebemos seus dados e agradecemos pelo seu interesse. <br> Retornaremos o mais breve possível.
                    </ElementsInterestMessage>
                    <ElementsInterestScheduling class="mt-8" full />
                </div>
            </ElementsContainer>
        </div>

        <ElementsInterestResume
            v-if="modal.resume"
            name="Tiago"
        />
    </div>
</template>

<script setup lang="ts">
const visible = ref(true)

const modal: object = reactive({
    choice: "",
    buy: false,
    exchange: false,
    scheduling: false,
    resume: true,
    personalInfos: false,
    exchangeData: {
        value: "59000",
        sign: "Não sei a placa",
        brand: "Mitsubishi",
        model: "Outlander V6 3.0",
        year: 2012,
        color: "Prata",
        version: "V6 3.0 GT",
    },
})

defineProps({
    carImage: String,
    carName: String,
    carPrice: Number,
    carBuildYear: Number,
    carModelYear: Number,
    carBrand: String,
    carColor: String,
    carKM: Number,
    carVersion: String,
    carModel: String,
    localeName: String,
    localeRegion: String,
    localeAddress: String,
    localeURL: String,
})
</script>

<style lang="scss" scoped>
.modal {
    background: $grey-1;

    &.visible {
        opacity: 1;
        visibility: visible;
    }

    .header {

        h6 {
            font: 500 16px/24px $inter;
        }

        button {
            transform: translateY(-50%);
        }
    }

    .init {

        .content {
            max-width: 800px;

            h2 {
                @include titlePageNormal;
            }
        
            p {
                font: 400 18px/26px $inter;
            }

            h5 {
                font: 500 16px/24px $inter;
                color: $grey-4;
            }

            h3 {
                font: 700 24px/28px $gotham;
            }

            button {
                &:hover {
                    .arrow {
                        transform: translateX(4px);
                    }
                }
            }
        }
    }

    .content-form {
        max-width: 930px;
    }

    .local {

        h6 {
            font: 500 16px/24px $inter;
            color: $grey-5;

            @media screen and (max-width: $tablet) {
                color: $dark;
            }
        }

        p {
            color: $dark;

            @media screen and (max-width: $tablet) {
                color: $dark !important;
            }

            &,
            & * {
                color: $dark;
                font: 500 18px/26px $inter;
                
                @media screen and (max-width: $mobile) {
                    font: 500 16px/24px $inter;
                }
            }
        }
    }

    .scheduling {

        .content {
            max-width: 1010px;
        }
    }
}
</style>