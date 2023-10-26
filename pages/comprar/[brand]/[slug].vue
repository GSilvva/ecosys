<template>
    <main class="car">
        <section class="page pt-md xl:pb-28">      
            <ElementsContainer class="container" block>
                <ElementsBreadcrumb class="hidden xl:flex mb-8" :links="carPage.links" />

                <section class="content xl:grid gap-8 xl:pb-28">
                    <aside class="infos">
                        <figure class="images gap-4 xl:grid">
                            <aside class="others hidden xl:flex flex-col gap-4 h-full">
                                <button
                                    @click="carPage.openModal = true, carPage.slide = 2"
                                    type="button"
                                >
                                    <img
                                        :src="carData.photos[1].url_path"
                                        alt="Foto"
                                        class="object-cover w-full h-full"
                                    >
                                </button>
                                <button
                                    @click="carPage.openModal = true, carPage.slide = 3"
                                    type="button"
                                >
                                    <img
                                        :src="carData.photos[2].url_path"
                                        alt="Foto"
                                        class="object-cover w-full h-full"
                                    >
                                </button>
                                <button
                                    @click="carPage.openModal = true, carPage.slide = 4"
                                    class="relative"
                                    type="button"
                                >
                                    <img
                                        :src="carData.photos[3].url_path"
                                        alt="Foto" class="object-cover w-full h-full opacity-50"
                                    >
                                    <p class="absolute top-1/2 left-1/2 text-white">
                                        +{{ thumbsDesktop.length }}
                                    </p>
                                </button>
                            </aside>

                            <div class="carousel relative w-full h-full block">
                                <button
                                    class="prev absolute top-1/2 left-6 z-20"
                                    type="button"
                                    @click="carPage.imageActive === 0 ? carPage.imageActive = carData.photos.length - 1 : carPage.imageActive--"
                                >
                                    <VectorsArrowPrevWhite />
                                </button>

                                <img
                                    class="z-10 relative object-cover w-full h-full cursor-pointer"
                                    :src="carData.photos[carPage.imageActive].url_path"
                                    :alt="`Foto ${carPage.imageActive + 1}`"
                                    @click="carPage.openModal = true, carPage.slide = carPage.imageActive + 1"
                                >

                                <button
                                    class="next absolute top-1/2 right-6 z-20"
                                    type="button"
                                    @click="carPage.imageActive === carData.photos.length - 1 ? carPage.imageActive = 0 : carPage.imageActive++"
                                >
                                    <VectorsArrowNextWhite />
                                </button>
                            </div>
                        </figure>

                        <section class="box mt-0 xl:mt-8 px-6 sm:px-12 xl:px-10 pt-6 pb-12 sm:py-12 xl:p-10 bg-white">
                            <div class="flex items-start justify-between">
                                <h1>{{ carData.car.model.brand.name }} <strong>{{ carData.name }}</strong></h1>
                                <ElementsFavorite class="mt-1 ml-4" />
                            </div>
                            <h5 class="mt-4 xl:mt-3 mb-6">
                                {{ carData.car.version.engine }} {{ carData.car.version.fuel }} {{ carData.car.version.name }} <br> {{ carData.car.version.transmission }}
                            </h5>
                            <div class="tags flex gap-2 flex-wrap">
                                <span class="rounded uppercase py-1.5 sm:py-2.5 px-3">Garantia de fábrica</span>
                                <span class="rounded uppercase py-1.5 sm:py-2.5 px-3">Único dono</span>
                                <span class="rounded uppercase py-1.5 sm:py-2.5 px-3">Sem passagem por leilão</span>
                            </div>
                            <div class="xl:hidden store flex items-center gap-4 mt-8">
                                <VectorsSaleFor />
                                <span>
                                    <small class="block mb-1.5">Vendido por</small>
                                    Webmotors
                                </span>
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
                                    <VectorsCheck style="min-width: 20px;max-width: 20px;" class="mt-0.5" />
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
                        <div class="xl:sticky bg-white xl:px-8 xl:pt-8 xl:pb-6 grid grid-cols-2 xl:block h-full xl:h-max">
                            <div class="hidden xl:flex store items-center gap-2 sm:gap-4 mb-8">
                                <VectorsSaleFor class="w-6 h-6 sm:h-12 sm:w-12" />
                                <span>
                                    <small class="block mb-1.5">Vendido por</small>
                                    Webmotors
                                </span>
                            </div>
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
                                class="w-full hidden xl:block"
                            >
                                Tenho interesse
                            </ElementsButton>
                            <footer class="mt-8 pt-8 items-center hidden xl:flex gap-6">
                                <VectorsViews />
                                <p>147 pessoas viram <br> esse anúncio nas últimas 24h</p>
                            </footer>
                            <button
                                @click="carPage.openInterest = true"
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
                            small
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
                            small
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
                            small
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
                            small
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
                            :modules="modulesCarousel"
                            :loop="true"
                            :thumbs="{ swiper: thumbsSwiper }"
                            @swiper="onSwiper"
                            :navigation="{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }"
                        >
                            <swiper-slide
                                class="flex items-center justify-center"
                                v-for="(photo, index) in carData.photos" :key="index"
                            >
                                <img
                                    class="object-cover w-full"
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
                        :modules="modulesCarousel"
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

                <div @click="carPage.openModal = false" class="overlay fixed top-0 left-0 w-full h-full z-40"></div>
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
import { Lazy, Navigation, Thumbs, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modulesCarousel = [Lazy, Navigation, Thumbs, Pagination, A11y]

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

const carPage = reactive({
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
    slide: 0,
    imageActive: 0,
})

const swiperRef: any = ref(null)
const { slide } = toRefs(carPage)
watch(slide, () => {
    if(swiperRef.value !== null) {
        swiperRef.value.slideTo(carPage.slide)
    }
})

const onSwiper = (swiper: any) => {
    swiperRef.value = swiper
}

useHead({
    title: `${carData.name} | Ecosys Auto`
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
        grid-template-columns: 1fr 600px;

        .others {
            
            button {
                height: 138px;
                background: $dark;

                p {
                    font-weight: 500;
                    transform: translate(-50%, -50%);
                }
            }
        }

        .carousel {
            height: 446px;
            background: $dark;

            @media screen and (max-width: $tablet) {
                height: 385px;
            }

            @media screen and (max-width: $mobile) {
                height: 285px;
            }

            .prev,
            .next {
                transform: translateY(-50%);
            }
        }
    }

    .box {

        @media screen and (max-width: $tablet) {
            border-bottom: 6px solid $grey-1;
        }

        h1 {
            
            &,
            & * {
                font: 600 32px/38px $poppins;

                @media screen and (max-width: $mobile) {
                    font: 600 24px/32px $poppins;
                }
            }

            strong {
                color: $blue;
            }
        }

        h4 {
            color: $grey-3;
            font: 600 16px/24px $poppins;
        }

        h5 {
            font: 500 18px/26px $inter;
            
            @media screen and (max-width: $mobile) {
                font: 500 16px/24px $inter;
            }
        }

        .tags {

            span {
                background: rgba(53, 146, 251, 0.10);
                font: 600 12px/10px $poppins;
                color: $blue;

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

    & > div {
        top: 105px;
    }

    h2 {
        font: 600 32px/40px $poppins;

        @media screen and (max-width: $mobile) {
            font: 600 20px/1 $poppins;
        }
    }

    h3 {
        font: 500 16px/24px $inter;
    }

    footer {
        border-top: 1px solid $grey-2;

        p {
            font: 500 14px/22px $inter;
        }
    }

    .btn-mob {
        font: 500 20px/1 $inter;
        background: $blue;

        @media screen and (max-width: $mobile) {
            font-size: 16px;
        }
    }
}

.store {

    span {
        font: 500 16px/1 $inter;

        small {
            color: $grey-4;
            font: 400 12px/1 $inter;
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

    @media screen and (max-height: 480px) {

        .close {
            position: absolute;
            top: 24px;
            right: 24px;
            z-index: 9;
            margin: 0;
        }

        .principal {
            padding-bottom: 0;
            height: 100vh;

            .carousel {
                height: 100%;
            }
        }

        .thumbs {
            display: none;
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