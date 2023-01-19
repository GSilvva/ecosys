<template>
    <main class="car">
        <section class="page pt-md xl:pb-28">      
            <ElementsContainer class="container" block>
                <ElementsBreadcrumb class="hidden xl:flex mb-8" :links="carPage.links" />

                <section class="content xl:grid gap-8 xl:pb-28">
                    <aside class="infos">
                        <figure class="images gap-4 hidden xl:grid">
                            <aside class="others flex flex-col gap-4 h-full">
                                <button
                                    @click="carPage.openModal = true"
                                    type="button"
                                >
                                    <img
                                        :src="carData.photos[1].url_path"
                                        alt="Foto"
                                        class="object-cover w-full h-full"
                                    >
                                </button>
                                <button @click="carPage.openModal = true" type="button"><img :src="carData.photos[2].url_path" alt="Foto" class="object-cover w-full h-full"></button>
                                <button @click="carPage.openModal = true" class="relative" type="button">
                                    <img :src="carData.photos[3].url_path" alt="Foto" class="object-cover w-full h-full opacity-50">
                                    <p class="absolute top-1/2 left-1/2 text-white">+{{ thumbsDesktop.length }}</p>
                                </button>
                            </aside>
                            <button @click="carPage.openModal = true" class="w-full h-full block" type="button"><img class="object-cover w-full h-full" :src="carData.photos[0].url_path" alt="Foto"></button>
                        </figure>

                        <figure class="carousel xl:hidden">
                            <swiper
                                class="h-72 sm:h-96"
                                :modules="modules"
                                :loop="carData.photos.length > 1 ? true : false"
                                :pagination="{ clickable: true, dynamicBullets: true }"
                            >
                                <swiper-slide
                                    @click="carPage.openModal = true"
                                    v-for="(photo, index) in carData.photos" :key="index"
                                >
                                    <img
                                        class="object-cover w-full h-full"
                                        :src="photo.url_path"
                                        :alt="`Foto ${index + 1}`"
                                    >
                                </swiper-slide>
                            </swiper>
                        </figure>

                        <section class="box mt-0 xl:mt-8 px-6 sm:px-12 xl:px-10 pt-6 pb-12 sm:py-12 xl:p-10 bg-white">
                            <h1>{{ carData.name }}</h1>
                            <h5 class="mt-4 xl:mt-3 mb-6">
                                {{ carData.car.version.engine }} {{ carData.car.version.fuel }} {{ carData.car.version.name }} <br> {{ carData.car.version.transmission }}
                            </h5>
                            <div class="tags flex gap-2 flex-wrap">
                                <span class="uppercase py-1.5 sm:py-2.5 px-3">Garantia de fábrica</span>
                                <span class="uppercase py-1.5 sm:py-2.5 px-3">Único dono</span>
                                <span class="uppercase py-1.5 sm:py-2.5 px-3">Sem passagem por leilão</span>
                            </div>
                            <div class="local xl:hidden mt-12">
                                <h6 class="mb-5">Visita disponível:</h6>
                                <div class="flex gap-4">
                                    <VectorsMapBlack />
                                    <p>
                                        Terraço Shoping
                                        <a class="underline block transition" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                                    </p>
                                </div>
                            </div>
                            <ul class="mt-12 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-y-6 xl:gap-y-8">
                                <li>
                                    <p>Ano</p>
                                    <p><strong>{{ carData.car.build_year }}/{{ carData.car.model_year }}</strong></p>
                                </li>
                                <li>
                                    <p>KM</p>
                                    <p><strong>{{ $formatNumber(carData.km) }}</strong></p>
                                </li>
                                <li>
                                    <p>Motor</p>
                                    <p><strong>{{ carData.car.version.engine }}</strong></p>
                                </li>
                                <li>
                                    <p>Carroceria</p>
                                    <p><strong>{{ carData.car.category }}</strong></p>
                                </li>
                                <li>
                                    <p>Câmbio</p>
                                    <p><strong>{{ carData.car.version.transmission }}</strong></p>
                                </li>
                                <li>
                                    <p>Combustível</p>
                                    <p><strong>{{ carData.car.version.transmission }}</strong></p>
                                </li>
                                <li>
                                    <p>Cor</p>
                                    <p><strong>{{ carData.car.color }}</strong></p>
                                </li>
                            </ul>
                        </section>

                        <section class="box xl:mt-8 px-6 sm:px-12 xl:px-10 py-12 xl:p-10 bg-white">
                            <h4 class="uppercase mb-8">Opcionais</h4>
                            <ul class="grid xl:grid-cols-2 gap-y-3 gap-x-16">
                                <li
                                    v-for="feature in carData.car.features"
                                    :key="feature"
                                    class="flex gap-4"
                                >
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>{{ feature }}</strong></p>
                                </li>
                            </ul>
                        </section>
                        
                        <section class="box xl:mt-8 px-6 sm:px-12 xl:px-10 py-12 xl:p-10 bg-white">
                            <h4 class="uppercase mb-4 sm:mb-8">Sobre o veículo</h4>
                            <p class="about">{{ carData.special_features }}</p>
                        </section>
                    </aside>

                    <article class="add-infos fixed xl:relative bottom-0 left-0 w-full h-16 sm:h-20 xl:h-full z-30">
                        <div class="xl:sticky bg-white xl:px-8 xl:py-10 grid grid-cols-2 xl:block h-full xl:h-max">
                            <h2 class="flex items-center sm:justify-center xl:block pl-6 sm:pl-0">{{ $formatCurrency(carData.price) }}</h2>
                            <div class="local hidden xl:block my-8">
                                <h6 class="mb-5">Visita disponível:</h6>
                                <div class="flex gap-5">
                                    <VectorsMapBlack />
                                    <p>
                                        Terraço Shoping
                                        <a class="underline block transition" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                                    </p>
                                </div>
                            </div>
                            <ElementsButton
                                @click="carPage.openInterest = true"
                                @click.prevent="$preventScrollBody"
                                class="w-full hidden xl:block"
                            >
                                Tenho interesse
                            </ElementsButton>
                            <footer class="mt-8 pt-8 justify-between items-center hidden xl:flex">
                                <p>147 pessoas viram <br> esse anúncio nas últimas 24h</p>
                                <VectorsViews />
                            </footer>
                            <button
                                @click="carPage.openInterest = true"
                                @click.prevent="$preventScrollBody"
                                class="btn-mob text-white xl:hidden"
                                type="button"
                            >
                                Tenho interesse
                            </button>
                        </div>                    
                    </article>
                </section>

                <section class="py-12 pb-28 bg-white xl:bg-transparent relateds">
                    <h2 class="ml-6 sm:ml-12 xl:ml-0 mb-8 sm:mb-12">Carros <br class="block xl:hidden"> semelhantes</h2>

                    <div class="grid grid-cols-1 xl:grid-cols-4 gap-1 xl:gap-6 2xl:gap-8">
                        <ElementsCardCar
                            url="##"
                            :photos="[{ url_path: '../../images/home/article.jpg' }]"
                            :recent="false"
                            :promotion="true"
                            name="BMW M3"
                            characteristics="2.0 16V Diesel Limited 4X4"
                            transmission="Automático"
                            :price="125900"
                            :old_price="0"
                            :build_year="2019"
                            :model_year="2020"
                            :km="158836"
                        />
                        <ElementsCardCar
                            url="##"
                            :photos="[{ url_path: '../../images/home/article.jpg' }]"
                            :recent="false"
                            :promotion="false"
                            name="BMW M3"
                            characteristics="2.0 16V Diesel Limited 4X4"
                            transmission="Automático"
                            :price="125900"
                            :old_price="0"
                            :build_year="2019"
                            :model_year="2020"
                            :km="158836"
                        />
                        <ElementsCardCar
                            url="##"
                            :photos="[{ url_path: '../../images/home/article.jpg' }]"
                            :recent="false"
                            :promotion="false"
                            name="BMW M3"
                            characteristics="2.0 16V Diesel Limited 4X4"
                            transmission="Automático"
                            :price="125900"
                            :old_price="0"
                            :build_year="2019"
                            :model_year="2020"
                            :km="158836"
                        />
                        <ElementsCardCar
                            url="##"
                            :photos="[{ url_path: '../../images/home/article.jpg' }]"
                            :recent="true"
                            :promotion="false"
                            name="BMW M3"
                            characteristics="2.0 16V Diesel Limited 4X4"
                            transmission="Automático"
                            :price="125900"
                            :old_price="0"
                            :build_year="2019"
                            :model_year="2020"
                            :km="158836"
                        />
                    </div>
                </section>
            </ElementsContainer>

            <article :class="`modal fixed left-0 top-0 z-50 w-full h-full opacity-0 invisible flex items-center justify-between flex-col transition overflow-hidden pb-8 2xl:pb-14 ${carPage.openModal ? 'visible' : ''}`">
                <div class="principal relative z-50 w-full pb-8">
                    <button
                        class="close rounded-full py-1 px-3 transition mt-6 xl:mt-3 mr-6 xl:mr-0 mb-6 xl:mb-3 block ml-auto"
                        @click="carPage.openModal = false"
                        @click.prevent="$scrollBody"
                        type="button"
                    >
                        Fechar
                    </button>

                    <div class="relative w-full carousel">
                        <button
                            class="prev absolute top-1/2 hidden xl:block"
                            type="button"
                        >
                            <VectorsArrowPrev />
                        </button>

                        <swiper
                            class="h-full"
                            :modules="modules"
                            :loop="true"
                            :thumbs="{ swiper: thumbsSwiper }"
                            :navigation="{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }"
                        >
                            <swiper-slide
                                v-for="(photo, index) in carData.photos" :key="index"
                            >
                                <img
                                    class="object-cover w-full h-full"
                                    :src="photo.url_path"
                                    :alt="`Foto ${index + 1}`"
                                >
                            </swiper-slide>
                        </swiper>

                        <button
                            class="next absolute top-1/2 hidden xl:block"
                            type="button"
                        >
                            <VectorsArrowNext />
                        </button>
                    </div>
                </div>
                
                <div class="thumbs relative z-50 w-full">
                    <swiper
                        class="w-full h-full"
                        :modules="modules"
                        :loop="true"
                        :freeMode="true"
                        slides-per-view="auto"
                        :space-between="16"
                        watch-slides-progress
                        @swiper="setThumbsSwiper"
                    >
                        <swiper-slide
                            class="cursor-pointer"
                            v-for="(photo, index) in carData.photos" :key="index"
                        >
                            <img
                                class="object-cover w-full h-full"
                                :src="photo.url_path"
                                :alt="`Foto ${index + 1}`"
                            >
                        </swiper-slide>
                    </swiper>
                </div>

                <div @click="carPage.openModal = false" @click.prevent="$preventScrollBody" class="overlay fixed top-0 left-0 w-full h-full z-40"></div>
            </article>
        </section>

        <ElementsInterestModal
            :carImage="carData.photos[0].url_path"
            :carName="carData.name"
            :carPrice="carData.price"
            :carBuildYear="carData.car.build_year"
            :carModelYear="carData.car.model_year"
            :carBrand="carData.car.model.brand.name"
            :carColor="carData.car.color"
            :carModel="carData.car.version.name"
            :carVersion="carData.car.version.engine + ' ' + carData.car.version.fuel"
            :carKM="carData.km"
            localeName="Terraço Shopping"
            localeAddress="QS 1 Rua 210, 24, Lote, Areal (Águas claras)"
            localeRegion="Sudoeste, Brasília/DF"
            localeURL="https://www.google.com.br/maps"
            v-model:open="carPage.openInterest"
        />
    </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation';

const modules = [Navigation, Thumbs, Pagination, A11y]

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper
}

const { slug } = useRoute().params
const id = slug.toString().substr(slug.length - 8)

const { data: car } = await useFetch(`/anuncios/${id}`, {
    baseURL: useRuntimeConfig().public.apiBase,
})

const carData: any = car.value
const thumbsDesktop = carData.photos.slice(4, carData.photos.length)

const carPage: object = reactive({
    links: [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "Comprar",
            url: "/comprar"
        },
        {
            text: carData.name,
        }
    ],
    openModal: false,
    openInterest: false,
});

useHead({
    title: `${carData.name} | b.car`
})
</script>

<style lang="scss" scoped>
.page {

    @media screen and (max-width: $tablet) {
        padding-top: 72px;
    }

    @media screen and (max-width: $mobile) {
        padding-top: 64px;
    }
}

.container {
    @media screen and (max-width: $tablet) {
        padding: 0;
    }
}

.content {
    grid-template-columns: 1fr 385px;
}

.infos {

    .images {
        grid-template-columns: 175px 1fr;

        aside {

            button {
                height: 138px;
            }
        }

        button {
            height: 446px;
            background: $dark;

            p {
                font-weight: 500;
                transform: translate(-50%, -50%);
            }
        }
    }

    .box {

        @media screen and (max-width: $tablet) {
            border-bottom: 6px solid $grey-1;
        }

        h1 {
            font: 700 32px/38px $gotham;

            @media screen and (max-width: $mobile) {
                font: 700 24px/32px $gotham;
            }
        }

        h4 {
            color: $grey-3;
            font: 700 16px/24px $gotham;
        }

        h5 {
            font: 500 18px/26px $inter;
            color: $grey-4;
            
            @media screen and (max-width: $mobile) {
                font: 500 16px/24px $inter;
            }
        }

        .tags {

            span {
                border: 1px solid $dark;
                font: 700 12px/10px $gotham;

                @media screen and (max-width: $mobile) {
                    font-size: 10px;
                }
            }
        }
        
        p {
            color: $grey-4;
            font: 400 16px/24px $inter;

            strong {
                font-weight: 500;
                color: $dark;
            }

            &.about {
                color: $dark;
                font: 400 18px/24px $inter;

                @media screen and (max-width: $mobile) {
                    font-size: 16px;
                }
            }
        }
    }
}

.relateds {
    h2 {
        @include titlePageNormal;
    }
}

.add-infos {

    @media screen and (max-width: $tablet) {
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: $mobile) {
        height: 72px;
    }

    & > div {
        top: 105px;
    }

    h2 {
        font: 600 32px/40px $gotham;

        @media screen and (max-width: $mobile) {
            font: 700 20px/1 $gotham;
        }
    }

    h3 {
        font: 500 16px/24px $inter;
    }

    footer {
        border-top: 1px solid $grey-2;

        p {
            font: 500 14px/20px $inter;
        }
    }

    .btn-mob {
        font: 500 20px/1 $inter;
        background: $orange;

        @media screen and (max-width: $mobile) {
            font-size: 16px;
        }
    }
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
            font: 500 18px/26px $inter !important;
            
            @media screen and (max-width: $mobile) {
                font: 500 16px/24px $inter !important;
            }
        }

        a {
            color: $grey-4;

            &:hover {
                color: $dark;
            }
        }
    }
}

.modal {
    &.visible {
        opacity: 1;
        visibility: visible;
    }

    .principal {
        max-width: 805px;
        height: calc(100% - 110px);

        @media screen and (max-width: 1500px) {
            height: calc(100% - 88px);
        }

        @media screen and (max-width: $mobile) {
            height: calc(100% - 72px);
        }

        .carousel {
            height: calc(100% - 28px - 12px - 12px);

            @media screen and (max-width: $tablet) {
                height: calc(100% - 28px - 24px - 24px);
            }
        }

        .close {
            font: 500 12px/20px $inter;
            background: $grey-1;
            
            &:hover {
                background: $grey-2;
            }
        }

        .prev {
            transform: translate(-100%, -50%);
            left: -46px;
        }

        .next {
            transform: translate(100%, -50%);
            right: -46px;
        }
    }

    .overlay {
        background: $dark;
    }
}
</style>

<style lang="scss">
.modal .thumbs .swiper-slide {
    width: 148px;
    height: 110px;
    
    @media screen and (max-width: 1500px) {
        width: 120px;
        height: 88px;
    }

    @media screen and (max-width: $mobile) {
        width: 98px;
        height: 72px;
    }
}
</style>