<template>
    <main class="cars block xl:grid pt-sm">
        <aside
            :class="`transition filters bg-white overflow-y-auto fixed xl:relative z-40 xl:z-10 top-0 left-0 w-full opacity-0 invisible xl:opacity-100 xl:visible ${buyPage.filtersActive ? 'active' : ''}`"
        >
            <div class="header fixed top-0 left-0 w-full bg-white z-20 py-5 xl:hidden">
                <h5 class="text-center">Filtros</h5>
                <button @click="buyPage.filtersActive = false" class="absolute left-6 md:left-12" type="button"><VectorsCloseOverlay /></button>
            </div>
            <div class="pt-24 pb-11 px-6 md:px-12 xl:pt-9 xl:pb-10 xl:px-8 relative z-10">
                <ElementsFormInput
                    class="mb-10"
                    name="busca"
                    placeholder="Buscar um carro"
                    small
                    v-model="buyPage.search"
                />
                <div class="local mb-10">
                    <button
                        class="flex items-center justify-between w-full mb-3.5 relative z-10"
                        @click="buyPage.allLocales = !buyPage.allLocales"
                        type="button"
                    >
                        <ElementsFormLabel label="Localização" />
                        <VectorsArrowSelect />
                    </button>
                    <ul v-if="buyPage.allLocales">
                        <li>
                            <ElementsFormCheckbox class="mb-3" label="Brasília" />
                            <div class="pl-9">
                                <ElementsFormCheckbox label="Shopping Ataguaçú" />
                                <ElementsFormCheckbox label="Via das rendeiras" />
                            </div>
                        </li>
                    </ul>
                </div>
                <ElementsFormSelect
                    class="mb-10"
                    label="Marca"
                    name="marca"
                    :options="[]"
                    placeholder
                    small
                />
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Ano"
                        name="anoDe"
                        placeholder="De"
                        legend="ex: 2014"
                        small
                        mask="####"
                    />
                    <ElementsFormInput
                        name="anoAte"
                        placeholder="Até"
                        legend="ex: 2018"
                        small
                        mask="####"
                    />
                </div>
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Preço"
                        name="precoDe"
                        placeholder="De"
                        legend="ex: R$ 20.000"
                        small
                        number
                    />
                    <ElementsFormInput
                        name="precoAte"
                        placeholder="Até"
                        legend="ex: R$ 80.000"
                        small
                        number
                    />
                </div>
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Quilometragem"
                        name="kmDe"
                        placeholder="De"
                        legend="ex: 10.000"
                        small
                        number
                    />
                    <ElementsFormInput
                        name="kmAte"
                        placeholder="Até"
                        legend="ex: 50.000"
                        small
                        number
                    />
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Categoria" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox
                            v-for="(filter, index) in data.filters.categories"
                            :key="index"
                            :label="filter.name"
                        />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Câmbio" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox
                            v-for="(filter, index) in data.filters.transmissions"
                            :key="index"
                            :label="filter.name"
                        />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Opcionais" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox
                            v-for="(filter, index) in data.filters.car_features.slice(0, 4)"
                            :key="index"
                            :label="filter.name"
                        />
                        <template v-if="buyPage.allOptions">
                            <ElementsFormCheckbox
                                v-for="(filter, index) in data.filters.car_features.slice(4, data.filters.car_features.length)"
                                :key="index"
                                :label="filter.name"
                            />
                        </template>
                    </div>
                    <button
                        v-if="!buyPage.allOptions"
                        @click="buyPage.allOptions = true"
                        class="more-filters flex items-center underline gap-3 mt-6"
                        type="button"
                    >
                        Ter todos os opcionais
                        <VectorsSmallArrowRight />
                    </button>
                </div>
                <ElementsButton class="m-auto flex" outline small>Limpar filtros</ElementsButton>
            </div>
        </aside>

        <section class="content overflow-y-auto xl:pt-8 xl:px-14 xl:pb-14">
            <div class="container">
                <header class="p-6 md:pt-3 md:pb-8 md:px-12 xl:p-0 xl:mb-10">
                    <ElementsBreadcrumb :links="buyPage.links" />

                    <section class="flex-col xl:flex-row flex justify-between xl:items-end gap-6">
                        <div>
                            <h1 class="mb-1">Carros Novos e Usados</h1>
                            <p v-if="data.ads.total <= 0">Nenhum carro encontrado</p>
                            <p v-else-if="data.ads.total === 1">1 carro encontrado</p>
                            <p v-else>{{ data.ads.total }} carros encontrados</p>
                        </div>
                        <div class="flex justify-between gap-4 w-full xl:w-max">
                            <button
                                class="items-center justify-center bg-white rounded-full h-12 w-12 hidden xl:flex"
                                @click="buyPage.listView = !buyPage.listView"
                                type="button"
                            >
                                <VectorsListView v-if="!buyPage.listView" />
                                <VectorsCardView v-else />
                            </button>
                            <fieldset class="relative bg-white rounded-full">
                                <select
                                    class="rounded-full h-10 xl:h-12 pr-9 xl:pr-10 pl-5 xl:pl-6 appearance-none relative z-20 bg-transparent"
                                    name="filtro"
                                    id="filtro"
                                >
                                    <option value="Mais relevantes">Mais relevantes</option>
                                    <option value="Menor preço">Menor preço</option>
                                    <option value="Maior preço">Maior preço</option>
                                </select>
                                <VectorsArrowSelect class="absolute top-2/4 right-5 xl:right-6 z-10" />
                            </fieldset>
                            <button
                                @click="buyPage.filtersActive = true"
                                class="flex xl:hidden items-center gap-2 bg-white rounded-full h-10 px-5"
                                type="button"
                                @click.prevent="$preventScrollBody"
                            >
                                Filtros
                                <VectorsFilters />
                            </button>
                        </div>
                    </section>
                </header>

                <section :class="`cards grid gap-1 xl:gap-8 ${buyPage.listView ? 'col' : ''}`">
                    <template v-if="pending">
                        <ElementsCardPreview
                            v-for="(ads, index) in data.ads.data"
                            :key="index"
                        />
                    </template>
                    <template v-else>
                        <ElementsCardCar
                            v-for="(ads, index) in adverts.ads.data"
                            :key="index"
                            :list="buyPage.listView"
                            :url="`/comprar/${ads.car.model.brand.slug}/${ads.slug}`"
                            :photos="ads.photos"
                            :recent="true"
                            :promotion="false"
                            :name="ads.name"
                            characteristics="2.0 16V Diesel Limited 4X4"
                            transmission="Automático"
                            :price="ads.price"
                            :old_price="99999"
                            :build_year="ads.car.build_year"
                            :model_year="ads.car.model_year"
                            :km="ads.km"
                        />
                    </template>
                </section>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simple-full",
})

const api_url = `${useRuntimeConfig().public.apiBase}/anuncios`

const { pending, data: adverts } = useLazyAsyncData("adverts", () => $fetch(api_url))
const { data } = await useFetch(api_url)

const buyPage = reactive({
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
    filtersActive: false,
    listView: false,
    allOptions: false,
    allLocales: true,
    search: "",
})

useHead({
    title: "Comprar carros | b.car",
    htmlAttrs: {
        class: 'xl:overflow-hidden'
    }
})

const formattNumbers = computed((value) => {
    return value.rawSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})
</script>

<style lang="scss" scoped>
.cars {
    grid-template-columns: 350px 1fr;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 310px 1fr;
    }
}

.filters,
.content {
    overflow-y: overlay;
    height: calc(100vh - 88px);

    @media screen and (max-width: $tablet) {
        height: auto;
    }
}

.filters {
    @media screen and (max-width: $tablet) {
        height: 100%;
    }

    &.active {
        opacity: 1;
        visibility: visible;
    }

    .header {
        border-bottom: 4px solid $grey-1;

        h5 {
            font: 500 16px/24px $inter;
        }

        button {
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .local button label {
        margin: 0;
    }

    .more-filters {
        color: $grey-5;
        font: 500 16px/24px $inter;
    }
}

.content {

    .container {
        @media screen and (max-width: 1400px) {
            zoom: .88;
        }

        @media screen and (max-width: $tablet) {
            zoom: 1;
        }
    }

    h1 {
        @include titlePageNormal;

        @media screen and (max-width: $mobile) {
            font: 700 24px/32px $gotham;
        }
    }

    p {
        font: 500 16px/24px $inter;

        @media screen and (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }

    fieldset {
        
        svg {
            transform: translateY(-50%);
        }
    }

    button,
    select,
    option {
        font: 500 16px/24px $inter;
        color: $dark;

        @media screen and (max-width: $mobile) {
            font-size: 14px;
        }
    }

    .cards {
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

        &.col {
            grid-template-columns: 1fr;
        }

        @media screen and (max-width: $tablet) {
            grid-template-columns: 1fr;
        }
    }
}
</style>