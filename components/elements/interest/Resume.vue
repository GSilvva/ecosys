<template>
    <NuxtLayout name="simple">
        <div class="resume">
            <ElementsContainer class="container" block>
                <div class="content w-full m-auto">
                    <ElementsInterestMessage :name="name">
                        <template v-if="sale">
                            Agradecemos por agendar a avaliação do seu veículo.
                        </template>
                        <template v-else>
                            Agradecemos por agendar sua visita.
                        </template>
                        <br>
                        Vamos te retornar em até 24h para verificar as informações e confirmar a sua visita.
                    </ElementsInterestMessage>

                    <div class="box bg-white px-6 pt-8 pb-10 sm:p-10 flex flex-col items-end">
                        <section class="section schedule pb-8 mb-8 sm:pb-10 pb-8 mb-8 sm:mb-10 w-full">
                            <h6 class="title uppercase mb-6">Agendamento</h6>

                            <div class="flex flex-wrap justify-between gap-y-8">
                                <div class="flex gap-4 w-max sm:w-1/2">
                                    <VectorsCalendar />
                                    <p>16 de Janeiro</p>
                                </div>
                                <div class="flex gap-4 w-5/12 sm:w-1/2">
                                    <VectorsClock />
                                    <p>10:30</p>
                                </div>
                                <div class="flex gap-4 w-full">
                                    <VectorsMap />
                                    <p>
                                        B.CAR Águas Claras
                                        <br>
                                        <small class="my-2">QS 1 Rua 210, 24, Lote, Areal (Águas claras) <br> Brasília, DF</small>
                                        <a href="##" target="_blank"><small>Ver no Google Maps</small></a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section
                            v-if="!sale"
                            class="section car pb-8 mb-8 sm:pb-10 pb-8 mb-8 sm:mb-10 w-full"
                        >
                            <h6 class="title uppercase mb-6">Veículo desejado</h6>

                            <ElementsInterestCarPreview
                                :carImage="carImage"
                                :carName="carName"
                                :carPrice="carPrice"
                                :carBuildYear="carBuildYear"
                                :carModelYear="carModelYear"
                                :carKM="carKM"
                            />

                            <div class="infos grid grid-cols-2 gap-y-6">
                                <p>
                                    Marca
                                    <br>
                                    <strong>{{ carBrand }}</strong>
                                </p>
                                <p>
                                    Cor
                                    <br>
                                    <strong>{{ carColor }}</strong>
                                </p>
                                <p>
                                    Modelos
                                    <br>
                                    <strong>{{ carModel }}</strong>
                                </p>
                                <p>
                                    Versão
                                    <br>
                                    <strong>{{ carVersion }}T</strong>
                                </p>
                            </div>
                        </section>

                        <section
                            v-if="exchange || sale"
                            class="section exchange pb-8 mb-8 w-full"
                        >
                            <h6 class="title uppercase mb-6">Veículo {{ exchange ? "para troca" : "" }}</h6>

                            <h3 class="mb-0.5">{{ $formatCurrency(59000) }}</h3>
                            <h5 class="mb-8">Valor de mercado</h5>

                            <div class="infos grid grid-cols-2 gap-y-6">
                                <p>
                                    Placa
                                    <br>
                                    <strong>Não sei a placa</strong>
                                </p>
                                <p>
                                    Marca
                                    <br>
                                    <strong>Mitsubishi</strong>
                                </p>
                                <p>
                                    Modelos
                                    <br>
                                    <strong>Outlander V6 3.0</strong>
                                </p>
                                <p>
                                    Ano
                                    <br>
                                    <strong>2012</strong>
                                </p>
                                <p>
                                    Cor
                                    <br>
                                    <strong>Prata</strong>
                                </p>
                                <p>
                                    Versão
                                    <br>
                                    <strong>V6 3.0 GT</strong>
                                </p>
                            </div>
                        </section>
                        
                        <ElementsButton
                            @click="$scrollBody"
                            href="/"
                            outline
                            small
                        >
                            Voltar para a home
                        </ElementsButton>
                    </div>
                </div>
            </ElementsContainer>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    title: String,
    exchange: Boolean,
    sale: Boolean,
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
})
</script>

<style lang="scss" scoped>
.content {
    max-width: 525px;

    @media screen and (max-width: $mobile) {
        max-width: 100%;
    }
}

.container {
    @media screen and (max-width: $mobile) {
        padding: 0;
    }
}

.title {
    font: 700 16px/24px $gotham;
}

.section {
    border-bottom: 1px solid $grey-2;
}

.infos {

    p {
        color: $grey-4;

        &,
        & * {
            font: 400 16px/24px $inter;
        }

        strong {
            font-weight: 500;
            color: $dark;
        }
    }
}

.schedule {
    
    p {
        color: $dark;
        font: 500 16px/24px $inter;

        small {
            font: 500 14px/20px $inter;
            color: $grey-4;
        }

        a {
            small {
                color: $dark;
            }
        }
    }
}

.exchange {

    h3 {
        font: 700 24px/32px $gotham;
    }

    h5 {
        font: 500 16px/24px $inter;
        color: $grey-5;
    }
}
</style>