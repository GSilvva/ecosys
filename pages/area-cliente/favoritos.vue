<template>
    <main class="favorites">
        <h2 class="title title--mrg">Favoritos</h2>
        <section
            class="flex flex-col items-center gap-6 pt-16 sm:pt-20"
            v-if="!favs.cars.length"
        >
            <h3 class="w-full text-center mx-auto max-w-lg">Você não tem nenhum carro em interesse, que tal procurar algum?</h3>
            <ElementsButton class="!py-4" href="/comprar">Ver catálogo de carros</ElementsButton>
        </section>
        <ul v-else class="grid grid-cols-1 xl:grid-cols-3 gap-1 xl:gap-6">
            <li class="transition" v-for="(car, index) in favs.cars" :key="index">
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
                    nohover
                    :favorited="true"
                />
                <div class="bg-white px-8 pt-2 pb-8 hidden xl:block">
                    <ElementsButton class="w-full" blank small :href="`/comprar/${car.brand}/${car.slug}`">Ver carro</ElementsButton>
                </div>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
const favs = reactive({
    cars: [
        {
            brand: "fiat",
            slug: "grand-siena-16-mpi-essence-16v-flex-4p-manual-36709135",
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
            price: 125900,
            build_year: 2018,
            model_year: 2019,
            km: 100000
        },
        {
            brand: "fiat",
            slug: "grand-siena-16-mpi-essence-16v-flex-4p-manual-36709135",
            photos: [
                {
                    url_path: "/images/general/car2.jpg",
                },
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            price: 90000,
            old_price: 98000,
            build_year: 2018,
            model_year: 2019,
            km: 100000
        },
    ]
})

definePageMeta({
    layout: "area-cliente"
})

useHead({
    title: `Ecosys Auto | Favoritos`,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/area-cliente';

li {
    border-bottom: 2px solid $white;
    &:hover {
        box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
        border-color: $blue;
    }
}

section {
    border-top: 1px solid $grey-2;

    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
    }
}
</style>
