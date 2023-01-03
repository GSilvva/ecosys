<template>

    <!-- OVERFLOW HIDDEN HTML -->

    <NuxtLayout name="simple">
        <main class="cars grid pt-sm">
            <aside class="filters bg-white pt-9 pb-10 px-8 overflow-y-auto">
                <ElementsFormInput
                    class="mb-10"
                    name="busca"
                    placeholder="Buscar um carro"
                    small
                />
                <ElementsFormSelect
                    class="mb-10"
                    label="Marca"
                    name="marca"
                    :options="brandsCards"
                    small
                />
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Ano"
                        name="anoDe"
                        placeholder="De"
                        legend="ex: 2014"
                        small
                    />
                    <ElementsFormInput
                        name="anoAte"
                        placeholder="Até"
                        legend="ex: 2018"
                        small
                    />
                </div>
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Preço"
                        name="precoDe"
                        placeholder="De"
                        legend="ex: R$ 20.000"
                        small
                    />
                    <ElementsFormInput
                        name="precoAte"
                        placeholder="Até"
                        legend="ex: R$ 80.000"
                        small
                    />
                </div>
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Quilometragem"
                        name="kmDe"
                        placeholder="De"
                        legend="ex: 10.000"
                        small
                    />
                    <ElementsFormInput
                        name="kmAte"
                        placeholder="Até"
                        legend="ex: 50.000"
                        small
                    />
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Categoria" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox label="SUV / Utilitário" />
                        <ElementsFormCheckbox label="Hatch" />
                        <ElementsFormCheckbox label="Sedan" />
                        <ElementsFormCheckbox label="Picape" />
                        <ElementsFormCheckbox label="Wagon / Mini van" />
                        <ElementsFormCheckbox label="Conversível / Coupe" />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Câmbio" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox label="Automático" />
                        <ElementsFormCheckbox label="Manual" />
                        <ElementsFormCheckbox label="CVT" />
                        <ElementsFormCheckbox label="Tiptronic" />
                        <ElementsFormCheckbox label="Automatizado" />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Opcionais" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox label="Airbag" />
                        <ElementsFormCheckbox label="Alarme" />
                        <ElementsFormCheckbox label="Ar condicionado" />
                        <ElementsFormCheckbox label="Ar quente" />
                        <ElementsFormCheckbox label="Bancos de couro" />
                    </div>
                    <button type="button">
                        Ter todos os opcionais
                        <VectorsSmallArrowRight />
                    </button>
                </div>
                <ElementsButton class="m-auto flex" outline small>Limpar filtros</ElementsButton>
            </aside>

            <section class="content overflow-y-auto pt-8 px-14 pb-14">
                <ElementsBreadcrumb :links="buyPage.links" />

                <header class="flex justify-between items-end mb-10">
                    <div>
                        <h1 class="mb-1">Carros Novos e Usados</h1>
                        <p v-if="buyPage.totalCars <= 0">Nenhum carro encontrado</p>
                        <p v-else-if="buyPage.totalCars === 1">1 carro encontrado</p>
                        <p v-else>{{ buyPage.totalCars }} carros encontrados</p>
                    </div>
                    <div class="flex gap-4">
                        <button
                            class="bg-white rounded-full flex items-center justify-center h-12 w-12"
                            @click="buyPage.listView = !buyPage.listView"
                            type="button"
                        >
                            <VectorsListView v-if="!buyPage.listView" />
                            <VectorsCardView v-else />
                        </button>
                        <fieldset class="relative bg-white rounded-full">
                            <select
                                class="rounded-full h-12 pr-10 pl-6 appearance-none relative z-20"
                                name="filtro"
                                id="filtro"
                            >
                                <option value="Mais relevantes">Mais relevantes</option>
                                <option value="Menor preço">Menor preço</option>
                                <option value="Maior preço">Maior preço</option>
                            </select>
                            <VectorsArrowSelect class="absolute top-2/4 right-6 z-10" />
                        </fieldset>
                    </div>
                </header>

                <section>
                    <ElementsCardCar
                        :photos="photos"
                        :recent="true"
                        :promotion="true"
                        name="BMW M3"
                        characteristics="2.0 16V Diesel Limited 4X4 Automático"
                        :price="120000"
                        :old_price="125900"
                        :build_year="2018"
                        :model_year="2019"
                        :km="158.836"
                    />
                </section>
            </section>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
const photos = [
    {
        url_path: "https://media.ecosysauto.com.br/cars/84625519/photos/i/8dqjEiACNPK3QlP1VeObecOFxbx5uytTmx8bA0Pt/jeep_renegade_longitude_die_2016_2016.jpg?w=300&q=80"
    },
    {
        url_path: "https://media.ecosysauto.com.br/cars/75262281/photos/i/OuKzHtGoJNoClkqTDk2H20UIwzYvrpXnJ4PlK827/fiat_toro_volcano_4x4_diesel_2019_2020.jpg?w=300&q=80"
    },
    {
        url_path: "https://media.ecosysauto.com.br/cars/31624413/photos/i/Bi93wfDVocyocsjEwO6F3CGROpwtH0BxLqltNpaz/ford_ecosport_freestyle_1_6_2015_2015.jpg?w=300&q=80"
    },
    {
        url_path: "https://media.ecosysauto.com.br/cars/42175683/photos/i/pm96cX5lRzTvP1SOxW34zDT4baI4I7Xw3mpKnKMZ/hyundai_hb20s_premium_1_6_aut_2018_2019.jpg?w=300&q=80"
    },
    {
        url_path: "https://media.ecosysauto.com.br/cars/52961655/photos/i/a4DXrNo76qoCB6lamOIBGL3XEUSQZV0ukz5XY8d0/fiat_pulse_impetus_1_0t_aut_2022_2022.jpg?w=300&q=80"
    },
]
const buyPage: object = reactive({
    totalCars: 0,
    links: [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "Comprar",
            url: ""
        }
    ],
    listView: false
});
const brandsCards = [
    "AUDI",
    "BMW",
    "CADILLAC",
    "CHERY",
    "CHEVROLET",
    "CITROËN",
    "FIAT",
    "FORD",
    "HONDA",
    "HYUNDAI",
    "JEEP",
    "KIA",
    "LAND ROVER",
    "LEXUS",
    "MASERATI",
    "MERCEDES-BENZ",
    "MINI",
    "MITSUBISHI",
    "NISSAN",
    "PEUGEOT",
    "PORSCHE",
    "RAM",
    "RENAULT",
    "SSANGYONG",
    "TOYOTA",
    "TROLLER",
    "VOLKSWAGEN",
]
</script>

<style lang="scss" scoped>
.cars {
    grid-template-columns: 352px 1fr;
}

.filters,
.content {
    height: calc(100vh - 88px);
}

.content {

    h1 {
        @include titlePageNormal;
    }

    p {
        font: 500 16px/24px $inter;
    }

    fieldset {
        select,
        option {
            background: transparent;
            font: 500 16px/24px $inter;
            color: $dark;
        }

        svg {
            transform: translateY(-50%);
        }
    }
}
</style>