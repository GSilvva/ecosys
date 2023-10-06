<template>
    <main class="buy">
        <h2 class="title">Compra</h2>
        <ElementsTabs :tabs="compra.tabs" full small>
            <template v-slot:tab-1>
                <div class="negociacao flex flex-col xl:grid grid-cols-2    gap-12">
                    <aside>
                        <h2 class="subtitle">Interesses</h2>
                        
                        <ul class="flex flex-col gap-y-6">
                            <li>
                                <div class="bg-white py-6 sm:py-8 px-6 sm:px-12 xl:px-8">
                                    <p class="mb-6"><strong>Segunda, 10 out 2023 <br> 16:15 horas</strong></p>
                                    <img
                                        class="w-40 h-32 mb-6"
                                        src="/images/general/car.jpg"
                                        alt="Foto"
                                    >
                                    <h3 class="mb-4">BMW M3</h3>
                                    <p class="mb-6">2.0 16V Diesel Limited 4X4 <br> Automático</p>
                                    <p class="mb-2"><strong>Mensagem</strong></p>
                                    <p>Opa, tudo bem? Aceita 50mil nesse <br> carro hoje?</p>
                                </div>
                            </li>
                        </ul>
                    </aside>
                    <aside>
                        <h2 class="subtitle">Visitas</h2>
                        <ul class="flex flex-col gap-y-6">
                            <li class="flex flex-col gap-y-1">
                                <div class="bg-white px-6 sm:px-12 xl:px-8 py-6 sm:py-8">
                                    <div class="flex items-start justify-between">
                                        <p class="mb-6"><strong>Segunda, 10 out 2023 <br> 16:15 horas</strong></p>
                                        <ElementsTag />
                                    </div>
                                    <img
                                        class="w-40 h-32 mb-6"
                                        src="/images/general/car.jpg"
                                        alt="Foto"
                                    >
                                    <h3 class="mb-4">BMW M3</h3>
                                    <p class="mb-6">2.0 16V Diesel Limited 4X4 <br> Automático</p>
                                    <p class="mb-2"><strong>Local da visita e avaliação</strong></p>
                                    <p>Avenida Epitácio Pessoa, 2566 <br> Lagoa, Chapecó, SC</p>
                                    <p class="mt-4"><a href="##" target="_blank">Como chegar</a></p>
                                    <div class="mt-8 flex gap-2">
                                        <ElementsButton small green>Confirmar</ElementsButton>
                                        <ElementsButton
                                            small
                                            outline
                                            @click="compra.openCalendar = true"
                                        >
                                            Reagendar
                                        </ElementsButton>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <h4 class="mb-6">Avaliação de troca</h4>
                                    <div class="grid grid-cols-2 gap-y-6">
                                        <p>
                                            Marca
                                            <strong>Mitsubishi</strong>
                                        </p>
                                        <p>
                                            Modelo
                                            <strong>Outlander V6 3.0</strong>
                                        </p>
                                        <p>
                                            Versão
                                            <strong>V6 3.0 GT</strong>
                                        </p>
                                        <p>
                                            Ano
                                            <strong>2012/2013</strong>
                                        </p>
                                        <p>
                                            KM
                                            <strong>148.500</strong>
                                        </p>
                                        <p>
                                            Cor
                                            <strong>Prata</strong>
                                        </p>
                                        <p>
                                            Placa
                                            <strong>Não sei a placa</strong>
                                        </p>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Quem vai te atender</h6>
                                    <div class="flex items-center gap-6">
                                        <img class="rounded-full object-cover w-16 h-16" src="/images/home/man.png" alt="Foto">
                                        <div>
                                            <p><strong>Tiago Luchtenberg</strong></p>
                                            <p>Vendedor</p>
                                            <p class="mt-0.5">+55 (47) 9 4893 7169</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Importante</h6>
                                    <div class="flex items-center gap-6">
                                        <VectorsDoc />
                                        <div>
                                            <p><strong>Leve seu documento de <br> identificação com foto</strong></p>
                                            <p>RG, CPF ou carteira de motorista.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col gap-y-1">
                                <div class="bg-white p-6 sm:p-8">
                                    <div class="flex items-start justify-between">
                                        <p class="mb-6"><strong>Segunda, 10 out 2023 <br> 16:15 horas</strong></p>
                                        <ElementsTag confirmed />
                                    </div>
                                    <img
                                        class="w-40 h-32 mb-6"
                                        src="/images/general/car.jpg"
                                        alt="Foto"
                                    >
                                    <h3 class="mb-4">BMW M3</h3>
                                    <p class="mb-6">2.0 16V Diesel Limited 4X4 <br> Automático</p>
                                    <p class="mb-2"><strong>Local da visita e avaliação</strong></p>
                                    <p>Avenida Epitácio Pessoa, 2566 <br> Lagoa, Chapecó, SC</p>
                                    <p class="mt-4"><a href="##" target="_blank">Como chegar</a></p>
                                    <div class="mt-8 flex gap-2">
                                        <ElementsButton
                                            small
                                            outline
                                            @click="compra.openCalendar = true"
                                        >
                                            Reagendar
                                        </ElementsButton>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Quem vai te atender</h6>
                                    <div class="flex items-center gap-6">
                                        <img class="rounded-full object-cover w-16 h-16" src="/images/home/man.png" alt="Foto">
                                        <div>
                                            <p><strong>Tiago Luchtenberg</strong></p>
                                            <p>Vendedor</p>
                                            <p class="mt-0.5">+55 (47) 9 4893 7169</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Importante</h6>
                                    <div class="flex items-center gap-6">
                                        <VectorsDoc />
                                        <div>
                                            <p><strong>Leve seu documento de <br> identificação com foto</strong></p>
                                            <p>RG, CPF ou carteira de motorista.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>

                <ElementsInterestCalendar
                    v-model:open="compra.openCalendar"
                    :event="() => compra.openCalendar = false"
                />
            </template>
            <template v-slot:tab-2>
                <ul class="grid grid-cols-1 xl:grid-cols-3 gap-1 xl:gap-6">
                    <li v-for="(car, index) in compra.cars" :key="index">
                        <ElementsCardCar
                            :url="`/comprar/${car.brand}/${car.slug}`"
                            :photos="car.photos"
                            :name="car.name"
                            :characteristics="car.characteristics"
                            :transmission="car.transmission"
                            :build_year="car.build_year"
                            :model_year="car.model_year"
                            :km="car.km"
                            :paid_out="car.paid_out"
                        />
                    </li>
                </ul>
            </template>
        </ElementsTabs>
    </main>
</template>

<script setup lang="ts">
const compra = reactive({
    tabs: ["Em negociação", "Comprados"],
    cars: [
        {
            brand: "",
            slug: "",
            photos: [
                {
                    url_path: "/images/general/car2.jpg",
                },
                {
                    url_path: "/images/general/car2.jpg",
                },
                {
                    url_path: "/images/general/car2.jpg",
                },
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            build_year: 2018,
            model_year: 2019,
            km: 100000,
            paid_out: 125900
        },
        {
            brand: "",
            slug: "",
            photos: [
                {
                    url_path: "/images/general/car2.jpg",
                }
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            build_year: 2018,
            model_year: 2019,
            km: 100000,
            paid_out: 125900
        }
    ],
    openCalendar: false
})

definePageMeta({
    layout: "area-cliente"
})

useHead({
    title: `Ecosys Auto | Compra`,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/area-cliente';

h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
}

h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
}

h6 {
    color: $grey-4;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
}
</style>
