<template>
    <NuxtLayout>
        <main class="page pt-md pb-28">      
            <ElementsContainer class="container" block>
                <ElementsBreadcrumb class="hidden xl:flex mb-8" :links="carPage.links" />

                <section class="content xl:grid gap-8 pb-12 xl:pb-28">
                    <aside class="infos">
                        <figure class="images gap-4 hidden xl:grid">
                            <aside class="others flex flex-col gap-4">
                                <button @click="openModal = true" class="flex-1" type="button"><img src="@/images/home/article.jpg" alt="Foto" class="object-cover w-full h-full"></button>
                                <button @click="openModal = true" class="flex-1" type="button"><img src="@/images/home/article.jpg" alt="Foto" class="object-cover w-full h-full"></button>
                                <button @click="openModal = true" class="flex-1 relative" type="button">
                                    <img src="@/images/home/article.jpg" alt="Foto" class="object-cover w-full h-full opacity-50">
                                    <p class="absolute top-1/2 left-1/2 text-white">+12</p>
                                </button>
                            </aside>
                            <button @click="openModal = true" class="w-full h-full" type="button"><img class="object-cover w-full h-full" src="@/images/home/article.jpg" alt="Foto"></button>
                        </figure>

                        <figure class="carousel xl:hidden">
                            <swiper
                                :modules="modules"
                                :loop="carPage.photos.length > 1 ? true : false"
                                :pagination="{ clickable: true, dynamicBullets: true }"
                            >
                                <swiper-slide v-for="(photo, index) in carPage.photos" :key="index">
                                    <img
                                        class="object-cover w-full h-full"
                                        :src="photo.url_path"
                                        :alt="`Foto ${index + 1}`"
                                    >
                                </swiper-slide>
                            </swiper>
                        </figure>

                        <section class="box mt-0 xl:mt-8 px-6 sm:p-12 py-12 xl:p-10 bg-white">
                            <h2>BMW M3</h2>
                            <h5 class="mt-3 mb-6">3.0 V6 Gasolina Limited 4X4 <br> Automático</h5>
                            <div class="tags flex gap-2 flex-wrap">
                                <span class="uppercase py-2.5 px-3">Garantia de fábrica</span>
                                <span class="uppercase py-2.5 px-3">Único dono</span>
                                <span class="uppercase py-2.5 px-3">Sem passagem por leilão</span>
                            </div>
                            <ul class="mt-12 grid grid-cols-5 gap-y-8">
                                <li>
                                    <p>Ano</p>
                                    <p><strong>2019/2020</strong></p>
                                </li>
                                <li>
                                    <p>KM</p>
                                    <p><strong>30.000</strong></p>
                                </li>
                                <li>
                                    <p>Motor</p>
                                    <p><strong>3.0 V6</strong></p>
                                </li>
                                <li>
                                    <p>Carroceria</p>
                                    <p><strong>Sedan</strong></p>
                                </li>
                                <li>
                                    <p>Câmbio</p>
                                    <p><strong>CVT</strong></p>
                                </li>
                                <li>
                                    <p>Combustível</p>
                                    <p><strong>Gasolina</strong></p>
                                </li>
                                <li>
                                    <p>Cor</p>
                                    <p><strong>Prata</strong></p>
                                </li>
                            </ul>
                        </section>

                        <section class="box mt-1.5 xl:mt-8 px-6 sm:p-12 py-12 xl:p-10 bg-white">
                            <h4 class="uppercase mb-4 sm:mb-8">Opcionais</h4>
                            <ul class="grid grid-cols-2 gap-y-3 gap-x-16">
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>AEB - Sistema Autônomo de frenagem de emergência</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Controle de Tração e Estabilidade</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Air bag duplo</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Pára-choques na cor do veículo</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Alarme</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Sensor de estacionamento dianteiro</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Ar condicionado</strong></p>
                                </li>
                                <li class="flex gap-4">
                                    <VectorsCheck class="mt-0.5" />
                                    <p class="w-full"><strong>Travas elétricas</strong></p>
                                </li>
                            </ul>
                        </section>
                        
                        <section class="box mt-1.5 xl:mt-8 px-6 sm:p-12 py-12 xl:p-10 bg-white">
                            <h4 class="uppercase mb-4 sm:mb-8">Sobre o veículo</h4>
                            <p class="about">
                                Um verdadeiro rastro de elegância e classe é deixado por onde passa, chamando a atenção e captando os olhares de todos. em seu aspecto visual externo, são diversos detalhes que fazem desse, um sinônimo de luxo.
                                <br>
                                <br>
                                Além de contar com uma grade imponente em black-piano e uma iluminação de outro mundo, o carro também é equipado com sensores de estacionamento dianteiro, sensor de chuva e até mesmo os crepusculares.
                                <br>
                                <br>
                                Faróis escurecidos e led nas lanternas traseiras chamam mais uma vez a atenção para o design bem ajustado do modelo, e com uma nomenclatura escura na traseira remetendo à versão, a esportividade não passará despercebida por aqui.
                                <br>
                                <br>
                                São absurdos 340 cavalos de potência nessa motorização 3.0 à gasolina.
                            </p>
                        </section>
                    </aside>

                    <article class="add-infos fixed xl:relative bottom-0 left-0 w-full h-16 sm:h-20 xl:h-full z-10">
                        <div class="xl:sticky bg-white xl:px-8 xl:py-10 grid grid-cols-2 xl:block h-full xl:h-max">
                            <h2 class="flex items-center sm:justify-center xl:block pl-6 sm:pl-0">R$ 125.900</h2>
                            <h6 class="mt-8 mb-5 hidden xl:block">Visita disponível:</h6>
                            <div class="local gap-5 mb-8 hidden xl:flex">
                                <VectorsMapBlack />
                                <p>
                                    Terraço Shoping
                                    <a class="underline block" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                                </p>
                            </div>
                            <ElementsButton class="w-full hidden xl:block">Tenho interesse</ElementsButton>
                            <footer class="mt-8 pt-8 justify-between items-center hidden xl:flex">
                                <p>147 pessoas viram <br> esse anúncio nas últimas 24h</p>
                                <VectorsViews />
                            </footer>
                            <button
                                class="btn-mob text-white xl:hidden"
                                type="button"
                            >
                                Tenho interesse
                            </button>
                        </div>                    
                    </article>
                </section>

                <section class="relateds">
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
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination, A11y]

const { slug } = useRoute().params
const id = slug.toString().substr(slug.length - 8)

const { data: car } = await useFetch(`/anuncios/${id}`, {
    baseURL: useRuntimeConfig().public.apiBase,
})

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
            text: car.value.name,
        }
    ],
    photos: [
        {
            url_path: "../../images/home/article.jpg"
        },
        {
            url_path: "../../images/home/article.jpg"
        },
        {
            url_path: "../../images/home/article.jpg"
        },
        {
            url_path: "../../images/home/article.jpg"
        },
        {
            url_path: "../../images/home/article.jpg"
        }
    ],
    openModal: false
});

useHead({
    title: `${car.value.name} | b.car`
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
        height: 443px;

        button {
            background: $dark;

            p {
                font-weight: 500;
                transform: translate(-50%, -50%);
            }
        }
    }

    .box {

        @media screen and (max-width: $tablet) {
            border-bottom: 5px solid $grey-1;
        }

        h2 {
            font: 700 32px/38px $gotham;
        }

        h4 {
            color: $grey-3;
            font: 700 16px/24px $gotham;
        }

        h5 {
            font: 500 18px/26px $inter;
        }

        .tags {

            span {
                border: 1px solid $dark;
                font: 700 12px/10px $gotham;
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

    .local {

        * {
            color: $dark;
            font: 500 18px/26px $inter;
        }
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
</style>