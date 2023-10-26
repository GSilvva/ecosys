<template>
    <div :class="`modal fixed top-0 left-0 w-full h-full z-50 opacity-0 invisible transition pt-big p-0 sm:pb-20 overflow-y-auto ${open ? 'visible' : ''}`">
        <header
            class="header bg-white fixed top-0 left-0 w-full py-5 xl:py-8"
            v-if="!modal.resume"
        >
            <ElementsContainer block>
                <div class="relative">
                    <button
                        v-if="modal.buy === false && modal.exchange === false && modal.scheduling === false || modal.scheduling && modal.choice === 'buy'"
                        class="absolute left-0 top-1/2 w-10 h-10 flex items-center"
                        @click="$emit('update:open', false)"
                        @click.prevent="$scrollBody"
                        type="button"
                    >
                        <VectorsClose />
                    </button>
                    <button
                        v-else
                        v-on="modal.choice === 'exchange' && modal.scheduling ? { click: () => (modal.scheduling = false, modal.exchange = true) } : { click: () => (modal.buy = false, modal.exchange = false) }"
                        class="absolute left-0 top-1/2 w-10 h-10 flex items-center"
                        type="button"
                    >
                        <VectorsArrowBack />
                    </button>
                    <h6 class="text-center" v-if="modal.buy">Quero comprar</h6>
                    <h6 class="text-center" v-else-if="modal.exchange">Quero trocar</h6>
                    <h6 class="text-center" v-else-if="modal.scheduling && modal.choice === 'buy'">Agendamento</h6>
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
                    <h2 class="mb-4 sm:mb-6">Como podemos te  <br class="sm:hidden"> ajudar?</h2>
                    <p class="mb-10">Escolha uma opção para começar. <br> As outras continuarão disponíveis no seu processo de compra.</p>
                    <ElementsInterestCarPreview
                        :carImage="carImage"
                        :carName="carName"
                        :carPrice="carPrice"
                        :carBuildYear="carBuildYear"
                        :carModelYear="carModelYear"
                        :carKM="carKM"
                    />
                    <div class="buttons flex-col xl:flex-row flex gap-4 xl:gap-8 pb-14 xl:pb-0">
                        <button
                            @click="modal.buy = true, modal.personalInfos = true, modal.choice = 'buy'"
                            class="flex-1 bg-white pt-6 sm:pt-8 pr-6 sm:pr-8 pb-8 sm:pb-10 pl-8 sm:pl-10"
                            type="button"
                        >
                            <VectorsBuyCar class="w-14 h-14 sm:h-14 sm:w-16 ml-auto mb-0 sm:mb-4" />
                            <h5 class="mb-1 text-left">Eu quero</h5>
                            <div class="flex items-end justify-between">
                                <h3 class="text-left">Comprar <br> este carro</h3>
                                <div class="arrow bottom-1 right-7 relative transition">
                                    <VectorsArrowRight class="h-4" />
                                </div>
                            </div>
                        </button>
                        <button
                            @click="modal.exchange = true, modal.personalInfos = false, modal.choice = 'exchange'"
                            class="flex-1 bg-white pt-6 sm:pt-8 pr-6 sm:pr-8 pb-8 sm:pb-10 pl-8 sm:pl-10"
                            type="button"
                        >
                            <VectorsChangeCar class="w-14 h-14 sm:h-14 sm:w-16 ml-auto mb-0 sm:mb-4" />
                            <h5 class="mb-1 text-left">Eu quero</h5>
                            <div class="flex items-end justify-between">
                                <h3 class="text-left">Dar meu carro <br> na troca</h3>
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
                <div class="content-form w-full m-auto xl:flex justify-between gap-6">
                    <aside class="w-full">
                        <ElementsInterestCarPreview
                            :carImage="carImage"
                            :carName="carName"
                            :carPrice="carPrice"
                            :carBuildYear="carBuildYear"
                            :carModelYear="carModelYear"
                            :carKM="carKM"
                        />

                        <div class="local my-8">
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
                        :title="modal.personalInfos ? 'Seus dados' : 'Dados do carro para troca'"
                        textButton="Continuar"
                        :event="eventBuy"
                    >
                        <template
                            v-slot:button
                            v-if="modal.personalInfos === true"
                        >
                            <ElementsButton
                                class="button py-4 px-8"
                                submit
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
            <ElementsContainer class="container" block>
                <div class="content w-full m-auto">
                    <ElementsInterestMessage
                        class="message"
                        v-if="modal.choice === 'buy'"
                        name="Tiago"
                    >
                        Recebemos seus dados e agradecemos pelo seu interesse. <br> Retornaremos o mais breve possível.
                    </ElementsInterestMessage>
                    <ElementsInterestScheduling
                        :event="eventResume"
                        class="mt-0 sm:mt-8"
                        :title="modal.choice === 'buy' ? 'Deseja agendar sua visita agora?' : 'Agende sua avaliação e visita'"
                        full
                    />
                </div>
            </ElementsContainer>
        </div>

        <ElementsInterestResume
            v-if="modal.resume"
            name="Tiago"
            :exchange="modal.choice === 'exchange' ? true : false"
            :carImage="carImage"
            :carName="carName"
            :carPrice="carPrice"
            :carBuildYear="carBuildYear"
            :carModelYear="carModelYear"
            :carKM="carKM"
            :carBrand="carBrand"
            :carColor="carColor"
            :carModel="carModel"
            :carVersion="carVersion"
        />
    </div>
</template>

<script setup lang="ts">
const modal = reactive({
    choice: "",
    buy: false,
    exchange: false,
    scheduling: false,
    resume: false,
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
    carKM: Number,
    carBrand: String,
    carColor: String,
    carVersion: String,
    carModel: String,
    localeName: String,
    localeRegion: String,
    localeAddress: String,
    localeURL: String,
    car: Object,
    open: Boolean,
})

function eventBuy() {
    modal.scheduling = true
    modal.buy = false
    modal.exchange = false
}

function eventResume() {
    modal.scheduling = false
    modal.resume = true
}

defineEmits(["update:open"])
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
                color: $dark;
                font: 400 18px/26px $inter;

                @media screen and (max-width: $mobile) {
                    font: 400 16px/24px $inter;
                }
            }

            .buttons {
                h5 {
                    font: 500 16px/24px $inter;
                    color: $grey-4;

                    @media screen and (max-width: $mobile) {
                        font: 500 14px/22px $inter;
                    }
                }

                h3 {
                    font: 600 24px/28px $poppins;

                    @media screen and (max-width: $mobile) {
                        font: 600 20px/26px $inter;
                    }
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
                font: 500 18px/26px $inter;
                
                @media screen and (max-width: $mobile) {
                    font: 500 16px/24px $inter;
                }
            }
        }
    }

    .scheduling {
        
        .container {

            @media screen and (max-width: $mobile) {
                padding: 0;
            }
        }

        .content {
            max-width: 1010px;
        }
    }

    .message {
        @media screen and (max-width: $tablet) {
            margin-bottom: 43px;
        }
    }
}
</style>