<template>
    <NuxtLayout name="simple">
        <div class="resume">
            <ElementsContainer block>
                <div class="content w-full m-auto">
                    <ElementsInterestMessage :name="name">
                        Agradecemos por agendar sua visita. <br> Vamos te retornar em até 24h para verificar as informações e confirmar a sua visita.
                    </ElementsInterestMessage>

                    <div class="box bg-white p-10 flex flex-col items-end">
                        <section class="section schedule pb-10 mb-10 w-full">
                            <h6 class="title uppercase mb-6">Agendamento</h6>

                            <div class="flex flex-wrap justify-between gap-y-8">
                                <div class="flex gap-6 w-1/2">
                                    <VectorsCalendar />
                                    <p>16 de Janeiro</p>
                                </div>
                                <div class="flex gap-6 w-1/2">
                                    <VectorsClock />
                                    <p>10:30</p>
                                </div>
                                <div class="flex gap-6 w-full">
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

                        <section class="section car pb-10 mb-10 w-full">
                            <h6 class="title uppercase mb-6">Veículo desejado</h6>

                            <div class="car-preview mb-8 flex items-center gap-8">
                                <img
                                    class="w-full object-cover h-32 w-40"
                                    src="/images/general/car.jpg"
                                    alt="BMW M3 5.0"
                                >
                                <div>
                                    <h5 class="mb-0.5">BMW M3 5.0</h5>
                                    <h6 class="mb-5">{{ $formatCurrency(125900) }}</h6>
                                    <footer class="flex gap-2 items-center">
                                        <small>2018/2019</small>
                                        <div class="square"></div>
                                        <small>{{ $formatNumber(158836) }}km</small>
                                    </footer>
                                </div>
                            </div>

                            <div class="infos grid grid-cols-2 gap-y-6">
                                <p>
                                    Marca
                                    <br>
                                    <strong>Mitsubishi</strong>
                                </p>
                                <p>
                                    Cor
                                    <br>
                                    <strong>Prata</strong>
                                </p>
                                <p>
                                    Modelos
                                    <br>
                                    <strong>Outlander V6 3.0</strong>
                                </p>
                                <p>
                                    Versão
                                    <br>
                                    <strong>V6 3.0 GT</strong>
                                </p>
                            </div>
                        </section>

                        <seciton class="section exchange pb-8 mb-8 w-full">
                            <h6 class="title uppercase mb-6">Veículo para troca</h6>

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
                        </seciton>
                        
                        <ElementsButton href="/" outline small>Voltar para a home</ElementsButton>
                    </div>
                </div>
            </ElementsContainer>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({
    name: String,
})
</script>

<style lang="scss" scoped>
.content {
    max-width: 525px;
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