<template>
    <main class="favorites">
        <header class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 xl:mb-10 gap-6">
            <h2 class="title !mb-0 w-full">Meus carros</h2>
            <ElementsButton @click="myCars.openModal = true" class="!py-4 whitespace-nowrap">Adicionar carro</ElementsButton>
        </header>

        <ul class="grid-cols-3 gap-6 hidden xl:grid">
            <li class="transition" v-for="(car, index) in myCars.cars" :key="index">
                <ElementsCardCar
                    small
                    :url="`/comprar/${car.brand}/${car.slug}`"
                    :photos="car.photos"
                    :name="car.name"
                    :characteristics="car.characteristics"
                    :transmission="car.transmission"
                    :build_year="car.build_year"
                    :model_year="car.model_year"
                    :km="car.km"
                    nohover
                    clean
                />
                <div class="bg-white others">
                    <div class="pb-5 px-5 flex gap-12">
                        <div>
                            <small class="flex items-center gap-2">
                                QVMC
                                <article class="relative">
                                    <button type="button">
                                        <VectorsQuestion />
                                    </button>
                                    <p class="opacity-0 invisible absolute bg-white py-4 px-5 rounded">Preço definido pelo nosso sistem <br /> “Quanto Vale o Meu Carro?”</p>
                                </article>
                            </small>
                            <h3>{{ $formatCurrency(car.qvmc) }}</h3>
                        </div>
                        <div>
                            <small>Tabela FIPE</small>
                            <h3>{{ $formatCurrency(car.fipe) }}</h3>
                        </div>
                    </div>
                    <footer class="py-4 px-8 flex items-center justify-between">
                        <button @click="myCars.openModal = true" type="button">Editar</button>
                        <button type="button">Remover</button>
                    </footer>
                </div>
            </li>
        </ul>

        <ul class="flex flex-col gap-6 xl:hidden">
            <li v-for="(car, index) in myCars.cars" :key="index">
                <div class="bg-white">
                    <div class="pt-6 sm:pt-8 pb-8 px-6 sm:px-12">
                        <figure class="images relative w-full h-64 sm:h-96">
                            <template v-if="car.photos">
                                <swiper
                                    :modules="modules"
                                    :loop="car.photos.length > 1 ? true : false"
                                    :pagination="{ clickable: true, dynamicBullets: true }"
                                    :navigation="{
                                        prevEl: '.swiper .prev',
                                        nextEl: '.swiper .next',
                                    }"
                                    class="photos h-full"
                                >
                                    <swiper-slide v-for="(photo, index) in car.photos" :key="index">
                                        <img
                                            class="object-cover w-full h-full"
                                            :src="photo.url_path + '?w=300&q=80'"
                                            :alt="`Foto ${index + 1}`"
                                        >
                                    </swiper-slide>
                                    <button
                                        class="transition opacity-0 prev absolute top-1/2 left-4 hidden xl:block z-20 w-8 h-8"
                                        type="button"
                                    >
                                        <VectorsArrowPrevWhite class="w-full h-full" />
                                    </button>
                                    <button
                                        class="transition opacity-0 next absolute top-1/2 right-4 hidden xl:block z-20 w-8 h-8"
                                        type="button"
                                    >
                                        <VectorsArrowNextWhite class="w-full h-full" />
                                    </button>
                                </swiper>
                            </template>
                            <img v-else src="/images/general/default-image.svg" alt="Foto">
                        </figure>
                        <div class="pt-8">
                            <h4 class="uppercase">{{ car.name }}</h4>
                            <p class="mt-4">
                                {{ car.characteristics }}
                                <br>
                                {{ car.transmission }}
                            </p>
                        </div>
                        <div class="infos mt-8 pt-4 flex items-center justify-between">
                            <small>{{ car.build_year }}/{{ car.model_year }}</small>
                            <small>{{ $formatNumber(car.km) }}km</small>
                        </div>
                        <div class="pt-10 flex justify-between">
                            <div class="xl:mb-6">
                                <small class="flex items-center gap-2">
                                    QVMC
                                    <VectorsQuestion />
                                </small>
                                <h3>{{ $formatCurrency(car.qvmc) }}</h3>
                            </div>
                            <div>
                                <small>Tabela FIPE</small>
                                <h3>{{ $formatCurrency(car.fipe) }}</h3>
                            </div>
                        </div>
                    </div>
                    <footer class="py-4 px-6 sm:px-12 flex items-center justify-between">
                        <button @click="myCars.openModal = true" type="button">Editar</button>
                        <button type="button">Remover</button>
                    </footer>
                </div>
            </li>
        </ul>

        <article :class="`modal fixed left-0 top-0 z-50 w-full h-full opacity-0 invisible flex justify-end transition overflow-hidden ${myCars.openModal ? 'visible' : ''}`">
            <div class="box bg-white max-w-md w-full relative z-50 overflow-y-auto">
                <header class="pt-5 pb-5 sm:pb-0 sm:pt-7 px-6 sm:px-10 flex items-center justify-between flex-row-reverse sm:flex-row">
                    <h5 class="w-full text-center sm:text-left">Criar/Editar veículo</h5>
                    <button @click="myCars.openModal = false" type="button">
                        <VectorsClose />
                    </button>
                </header>
                <div class="px-6 sm:px-0">
                    <ElementsInterestForm
                        title="Dados do carro"
                        car
                    >
                        <template v-slot:button>
                            <ElementsButton class="button py-4 px-8">Continuar</ElementsButton>
                        </template>
                    </ElementsInterestForm>
                </div>
            </div>

            <div @click="myCars.openModal = false" class="overlay fixed top-0 left-0 w-full h-full z-40"></div>
        </article>
    </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Pagination, A11y, Navigation];

const myCars = reactive({
    openModal: false,
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
            build_year: 2018,
            model_year: 2019,
            km: 100000,
            qvmc: 125900,
            fipe: 139610
        },
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
            ],
            name: "BMW M3",
            characteristics: "2.0 16V Diesel Limited 4X4",
            transmission: "Automático",
            build_year: 2018,
            model_year: 2019,
            km: 100000,
            qvmc: 125900,
            fipe: 139610
        },
    ]
})

definePageMeta({
    layout: "area-cliente"
})

useHead({
    title: `b.car | Meus carros`,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/area-cliente';

li {
    @media screen and (min-width: $tablet) {
        border-bottom: 2px solid $white;
        &:hover {
            box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
            border-color: $blue;
        }
    }
    .others {
        margin: -4px 0 0 0;
    }
    div {
        small {
            color: $grey-4;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            button {

                &:hover {

                    & ~ p {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
            p {
                bottom: -16px;
                left: 50%;
                transform: translate(-50%, 100%);
                color: $dark;
                font: 500 14px/22px $inter;
                max-width: 270px;
                min-width: 270px;
                width: 100%;
                filter: drop-shadow(0px 8px 20px rgba(23, 44, 86, 0.10));
                transition: .4s;

                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    background: $white;
                    width: 16px;
                    height: 16px;
                }
            }
        }
        h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
        }
    }
    footer {
        border-top: 4px solid $grey-1;
        border-radius: 0 0 4px 4px;
        @media (max-width: $tablet) {
            border-radius: 0;
        }
        button {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }
    h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
    }
    .infos {
        border-top: 1px solid $grey-2;
    }
}

.modal {
    &.visible {
        opacity: 1;
        visibility: visible;
    }

    header {
        @media screen and (max-width: $mobile) {
            border-bottom: 4px solid $grey-1;
        }
    }

    h5 {
        color: $grey-4;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        @media screen and (max-width: $mobile) {
            color: $dark;
        }
    }

    .overlay {
        background: rgba(0, 0, 0, 0.6);
    }
}
</style>