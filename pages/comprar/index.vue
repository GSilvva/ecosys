<template>
    <main class="cars block xl:grid pt-sm">
        <aside
            :class="`transition filters bg-white overflow-y-auto fixed xl:relative z-40 xl:z-10 top-0 left-0 w-full opacity-0 invisible xl:opacity-100 xl:visible ${buyPage.filtersActive ? 'active' : ''}`"
        >
            <div class="header fixed top-0 left-0 w-full bg-white z-20 py-5 xl:hidden">
                <h5 class="text-center">Filtros</h5>
                <button @click="buyPage.filtersActive = false" class="absolute left-6 md:left-12" type="button"><VectorsCloseOverlay /></button>
            </div>

            <div class="pt-24 pb-11 px-6 md:px-12 xl:pt-8 xl:pb-10 xl:px-8 relative z-10">
                <ElementsFormSearchSelect
                    class="mb-10"
                    label="Localização"
                    placeholder="Escolha cidade ou estado"
                    :items="locations"
                >
                    <VectorsArrowSelect />
                </ElementsFormSearchSelect>
                <div class="mb-10">
                    <ElementsFormSearchSelect
                        class="mb-6"
                        label="Revendedor"
                        placeholder="Digite o nome"
                        :items="stores"
                    >
                        <VectorsSearch />
                    </ElementsFormSearchSelect>
                    <ElementsFormCheckbox
                        v-for="(store, index) in stores[0].options.slice(0, 5)"
                        :key="index"
                        :label="store"
                    />
                </div>
                <div class="mb-10">
                    <ElementsFormSearchSelect
                        class="mb-6"
                        label="Marca"
                        placeholder="Busque"
                        :items="brands"
                    >
                        <VectorsSearch />
                    </ElementsFormSearchSelect>
                    <ElementsFormCheckbox
                        v-for="(brand, index) in brands[0].options.slice(0, 5)"
                        :key="index"
                        :label="brand"
                    />
                    <template v-if="buyPage.allBrands">
                        <ElementsFormCheckbox
                            v-for="(brand, index) in brands[0].options.slice(5, brands[0].options.length)"
                            :key="index"
                            :label="brand"
                        />
                    </template>
                    <button
                        @click="buyPage.allBrands = !buyPage.allBrands"
                        class="more-filters flex items-center underline gap-3 mt-6"
                        type="button"
                    >
                        {{ buyPage.allBrands ? "Esconder" : "Ver mais" }}
                    </button>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel label="Carro" blue />
                    <div class="flex items-center gap-20">
                        <ElementsFormCheckbox class="!m-0" label="Novo" />
                        <ElementsFormCheckbox label="Usado" />
                    </div>
                </div>
                <div class="flex items-end gap-4 mb-10">
                    <ElementsFormInput
                        label="Ano"
                        name="anoDe"
                        placeholder="De"
                        legend="ex: 2014"
                        small
                        mask="####"
                        blue
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
                        blue
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
                        blue
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
                    <ElementsFormLabel blue label="Categoria" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox
                            v-for="(categorie, index) in categories"
                            :key="index"
                            :label="categorie.label"
                            :image="categorie.image"
                        />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel blue label="Câmbio" />
                    <div class="flex flex-col items-start">
                        <ElementsFormCheckbox
                            v-for="(filter, index) in data.filters.transmissions"
                            :key="index"
                            :label="filter.name"
                        />
                    </div>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel blue label="Opcionais" />
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
                        @click="buyPage.allOptions = !buyPage.allOptions"
                        class="more-filters flex items-center underline gap-3 mt-6"
                        type="button"
                    >
                        {{ buyPage.allOptions ? "Esconder" : "Ver mais" }}
                    </button>
                </div>
                <div class="mb-10">
                    <ElementsFormLabel blue label="Cores" />
                    <div class="flex items-center flex-wrap">
                        <ElementsFormCheckbox
                            v-for="(color, index) in colors"
                            :key="index"
                            :label="color.cor"
                            :color="color.hex === '#FFFFFF' ? '' : color.hex"
                            class="w-6/12"
                        />
                    </div>
                </div>
                <div class="flex justify-between gap-4">
                    <ElementsButton
                        class="!font-medium !px-6 !py-3 xl:m-auto w-full"
                        outline
                        small
                    >
                        Limpar filtros
                    </ElementsButton>
                    <ElementsButton
                        class="!font-medium !px-6 !py-3 xl:hidden w-full"
                        small
                        @click="buyPage.filtersActive = false"
                    >
                        Aplicar filtros
                    </ElementsButton>
                </div>
            </div>
        </aside>

        <section class="content overflow-y-auto xl:pt-8 xl:px-14 xl:pb-14">
            <div class="container-cards">
                <header class="p-6 xl:pt-3 md:pb-8 md:px-12 xl:p-0 xl:mb-10">
                    <ElementsBreadcrumb
                        class="hidden xl:flex"
                        :links="buyPage.links"
                    />

                    <section class="flex-col xl:flex-row flex justify-between xl:items-end gap-6">
                        <div class="hidden xl:block">
                            <h1 class="mb-1">Carros Novos e Usados</h1>
                            <p v-if="data.ads.total <= 0">Nenhum carro encontrado</p>
                            <p v-else-if="data.ads.total === 1">1 carro encontrado</p>
                            <p v-else>{{ data.ads.total }} carros encontrados</p>
                        </div>
                        <div class="flex justify-between gap-4 w-full xl:w-max">
                            <fieldset class="relative bg-white">
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
                                class="flex xl:hidden items-center gap-2 bg-white h-10 px-5"
                                type="button"
                            >
                                Filtros
                                <span class="block w-5 h-5 flex items-center justify-center rounded-full" v-if="buyPage.filtersSelected">3</span>
                                <VectorsFilters v-else />
                            </button>
                        </div>
                    </section>
                </header>

                <section :class="`cards grid gap-1 xl:gap-6 2xl:gap-8`">
                    <template v-if="pending">
                        <ElementsCardPreview
                            v-for="(ads, index) in data.ads.data"
                            :key="index"
                        />
                    </template>
                    <template v-else>
                        <ElementsCardCar
                            small
                            v-for="(ads, index) in adverts.ads.data"
                            :key="index"
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
    filtersSelected: 3,
    allOptions: false,
    allBrands: false,
})

const locations = [
    {
        "label": "Cidades",
        "options": [
            "Florianópolis - SC",
            "Florestópolis - PR",
            "Floraí - PR"
        ]
    },
    {
        "label": "Estados",
        "options": [
            "Santa Catarina",
            "Paraná",
            "São Paulo"
        ]
    }
]

const stores = [
    {
        "options": [
            "Webmotors",
            "O chefe das vendas",
            "Miguel forte",
            "Tiagão vendedor",
            "Fordaza",
            "Outra loja"
        ]
    }
]

const brands = [
    {
        "options": [
            "Aston Martin",
            "Bulgatti",
            "BMW",
            "Chevrolet",
            "Mercedes Benz",
            "Volkswagen",
            "Chevrolet",
            "Ford",
            "Fiat",
            "Fordaza",
            "Renault"
        ]
    }
]

const categories = [
    {
        "label": "SUV / Utilitário",
        "image": "./temp/suv.png"
    },
    {
        "label": "Hatch",
        "image": "./temp/hatch.png"
    },
    {
        "label": "Sedan",
        "image": "./temp/sedan.png"
    },
    {
        "label": "Picape",
        "image": "./temp/pickup.png"
    },
    {
        "label": "Wagon / Mini van",
        "image": "./temp/minivan.png"
    },
    {
        "label": "Conversível",
        "image": "./temp/convertible.png"
    },
    {
        "label": "Coupe",
        "image": "./temp/coupe.png"
    },
    {
        "label": "Perua",
        "image": "./temp/sw.png"
    }
]

const colors = [
    {
        "cor": "Branco",
        "hex": "#FFFFFF"
    },
    {
        "cor": "Vingo",
        "hex": "#981929"
    },
    {
        "cor": "Prata",
        "hex": "#D8DAE1"
    },
    {
        "cor": "Vermelho",
        "hex": "#FF0000"
    },
    {
        "cor": "Cinza",
        "hex": "#FF0000"
    },
    {
        "cor": "Marrom",
        "hex": "#AD7452"
    },
    {
        "cor": "Chumbo",
        "hex": "#545D62"
    },
    {
        "cor": "Dourado",
        "hex": "#E1B83E"
    },
    {
        "cor": "Preto",
        "hex": "#000000"
    },
    {
        "cor": "Amarelo",
        "hex": "#FFD600"
    },
    {
        "cor": "Azul",
        "hex": "#0065FF"
    },
    {
        "cor": "Beje",
        "hex": "#E8B989"
    },
    {
        "cor": "Verde",
        "hex": "#28A745"
    },
    {
        "cor": "Laranja",
        "hex": "#FF9639"
    }
]

useHead({
    title: "Comprar carros | Ecosys Auto",
    htmlAttrs: {
        class: 'xl:overflow-hidden'
    }
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

    .more-filters {
        color: $grey-5;
        font: 500 16px/24px $inter;
    }
}

.content {

    .container-cards {
        @media screen and (max-width: 1400px) {
            zoom: .9;
        }

        @media screen and (max-width: $tablet) {
            zoom: 1;
        }
    }

    h1 {
        @include titlePageNormal;

        @media screen and (max-width: $mobile) {
            font: 600 24px/32px $poppins;
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

        span {
            font: 500 14px/1 $inter;
            color: $white;
            background: $blue;
        }
    }

    .cards {
        grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));

        &.col {
            grid-template-columns: 1fr;
        }

        @media screen and (max-width: $tablet) {
            grid-template-columns: 1fr;
        }
    }
}
</style>