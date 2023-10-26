<template>
    <NuxtLayout name="default">
        <main class="result pb-20 xl:pb-52">
            <ElementsContainer class="container" block>
                <section class="content">
                    <header class="p-6 pb-8 md:pt-3 md:px-12 xl:p-0 xl:mb-12">
                        <ElementsBreadcrumb :links="breadcrumbResult" />

                        <section class="flex-col xl:flex-row flex justify-between xl:items-end gap-6">
                            <div>
                                <h1 class="mb-1">Meus 3 top carros</h1>
                                <p>Estes são os resultados</p>
                            </div>
                            <div class="hidden xl:flex sm:justify-between gap-4 w-full xl:w-max">
                                <fieldset class="relative bg-white">
                                    <select
                                        class="h-10 xl:h-12 pr-9 xl:pr-10 pl-5 xl:pl-6 appearance-none relative z-20 bg-transparent"
                                        name="filtro"
                                        id="filtro"
                                    >
                                        <option value="Mais relevantes">Mais relevantes</option>
                                        <option value="Menor preço">Menor preço</option>
                                        <option value="Maior preço">Maior preço</option>
                                    </select>
                                    <VectorsArrowSelect class="absolute top-2/4 right-5 xl:right-6 z-10" />
                                </fieldset>
                            </div>
                        </section>
                    </header>

                    <section :class="`hidden xl:grid cards gap-8`">
                        <div
                            class="relative inline-flex"
                            v-for="(car, index) in cars"
                            :key="index"
                        >
                            <span class="tag absolute top-0 left-0 block px-3 py-2.5 z-30">{{ index + 1 }}º</span>
                            <ElementsCardCar
                                :url="`/comprar/${car.brand}/${car.slug}`"
                                :photos="car.photos"
                                :name="car.name"
                                :characteristics="car.characteristics"
                                :transmission="car.transmission"
                                :price="car.price"
                                :old_price="car.old_price"
                                :build_year="car.build_year"
                                :model_year="car.model_year"
                                :km="car.km"
                            />
                        </div>
                    </section>

                    <section class="cards grid gap-1 xl:hidden">
                        <div
                            class="relative inline-flex"
                            v-for="(car, index) in cars"
                            :key="index"
                        >
                            <span class="tag absolute top-0 left-0 block px-3 py-2.5 z-30">{{ index + 1 }}º</span>
                            <ElementsCardCar
                                :url="`/comprar/${car.brand}/${car.slug}`"
                                :photos="car.photos"
                                :name="car.name"
                                :characteristics="car.characteristics"
                                :transmission="car.transmission"
                                :price="car.price"
                                :old_price="car.old_price"
                                :build_year="car.build_year"
                                :model_year="car.model_year"
                                :km="car.km"
                            />
                        </div>
                    </section>
                </section>
            </ElementsContainer>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
const breadcrumbResult: object = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Comprar",
        url: ""
    }
]

defineProps({
    cars: Array,
})
</script>

<style lang="scss" scoped>
.container {
    @media screen and (max-width: $tablet) {
        padding: 0;
    }
}

.content {

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

.tag {
    background: $blue;
    color: $white;
    font: 600 12px/1 $poppins;
}
</style>