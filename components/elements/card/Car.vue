<template>
    <nuxt-link
        :to="url"
        :class="`flex xl:block card-car w-full transition h-36 md:h-60 xl:h-fit ${list ? 'horizontal' : ''}`"
        target="_blank"
    >
        <figure class="images relative h-full w-full xl:h-56 2xl:h-64">
            <div class="tags flex absolute top-0 left-0 z-20">
                <span class="recent px-2 md:px-3 pt-px h-7 text-white uppercase flex items-center" v-if="recent">Novo</span>
                <span class="promo px-2 md:px-3 pt-px h-7 text-white uppercase flex items-center" v-if="promotion">Promoção</span>
            </div>
            <template v-if="photos">
                <swiper
                    :modules="modules"
                    :loop="photos.length > 1 ? true : false"
                    :pagination="{ clickable: true, dynamicBullets: true }"
                    :navigation="{
                        prevEl: '.swiper .prev',
                        nextEl: '.swiper .next',
                    }"
                    class="photos"
                >
                    <swiper-slide v-for="(photo, index) in photos" :key="index">
                        <img
                            class="object-cover w-full h-full"
                            :src="photo.url_path"
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

        <article class="content transition px-4 pt-4 xl:pt-8 pb-4 md:px-8 flex flex-col justify-between w-full h-full">
            <div v-if="list" class="title">
                <div class="flex items-center justify-between mb-5">
                    <h3 class="uppercase">{{ name }}</h3>
                    <section class="price flex items-center gap-4">
                        <h4>{{ $formatCurrency(price) }}</h4>
                        <h6 v-if="old_price" class="line-through">{{ $formatCurrency(old_price) }}</h6>
                    </section>
                </div>
                <p class="mb-4">
                    {{ characteristics }}
                    <br>
                    {{ transmission }}
                </p>
            </div>
            <div v-else class="title relative">
                <h3 class="uppercase pr-5 xl:pr-8">{{ name }}</h3>
                <p class="mt-1 sm:mt-4">
                    {{ characteristics }}
                    <br>
                    {{ transmission }}
                </p>
                <ElementsFavorite class="absolute top-0.5 right-0 w-4 sm:w-6" />
            </div>
            <div class="bottom">
                <section v-if="!list" class="price xl:mt-12 flex items-center justify-between">
                    <h4>{{ $formatCurrency(price) }}</h4>
                    <h6 v-if="old_price" class="line-through">{{ $formatCurrency(old_price) }}</h6>
                </section>
                <footer class="infos mt-1 sm:mt-4 sm:pt-4 flex items-center justify-between">
                    <small>{{ build_year }}/{{ model_year }}</small>
                    <small>{{ $formatNumber(km) }}km</small>
                </footer>
            </div>
        </article>
    </nuxt-link>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Pagination, A11y, Navigation];

defineProps({
    url: String,
    photos: Array,
    recent: Boolean,
    promotion: Boolean,
    name: String,
    characteristics: String,
    transmission: String,
    price: Number,
    old_price: Number,
    build_year: Number,
    model_year: Number,
    km: Number,
    list: Boolean
});
</script>

<style lang="scss" scoped>
.card-car {
    background: $white;

    .images {

        .swiper,
        .swiper-slide {
            height: 100%;

            &:hover {

                .prev,
                .next {
                    opacity: 1;
                }
            }
        }
    }

    .tags {

        span {
            font: 700 12px/10px $gotham;

            @media screen and (max-width: $mobile) {
                font-size: 10px;
            }

            &.recent {
                background: $orange;
            }

            &.promo {
                background: $dark;
            }
        }
    }

    .prev,
    .next {
        transform: translateY(-50%);
    }

    .content {
        border-bottom: 2px solid $white;

        .title {

            h3 {
                font: 700 20px/28px $gotham;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;

                @media screen and (max-width: $mobile) {
                    font: 700 14px/22px $gotham;
                }
            }
            
            p {
                font: 500 16px/24px $inter;
                color: $grey-4;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;

                @media screen and (max-width: $mobile) {
                    font: 500 10px/14px $inter;
                }
            }
        }

        .price {
            h4 {
                font: 600 24px/1 $inter;

                @media screen and (max-width: $mobile) {
                    font: 600 14px/1 $inter;
                }
            }

            h6 {
                color: $grey-5;
                font: 400 16px/1 $inter;

                @media screen and (max-width: $mobile) {
                    font: 400 11px/1 $inter;
                }
            }
        }

        .infos {
            border-top: 1px solid $grey-2;

            @media screen and (max-width: $mobile) {
                border: unset;
            }

            small {
                color: $grey-4;
                font: 400 14px/24px $inter;

                @media screen and (max-width: $mobile) {
                    font: 400 10px/14px $inter;
                }
            }
        }
    }

    &.horizontal {
        display: flex;
        align-items: center;
        height: auto;

        .images {
            height: 100%;
            max-width: 305px;
            min-width: 305px;
        }
        
        .content {
            height: 100%;
            width: 100%;
            padding-bottom: 28px;
        }
    }

    @media screen and (max-width: $tablet) {
        .images {
            min-width: 330px !important;
            max-width: 330px !important;
        }
    }

    @media screen and (max-width: $mobile) {
        .images {
            min-width: 180px !important;
            max-width: 180px !important;
        }
    } 

    @media screen and (min-width: $tablet) {
        &:hover {
            box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);

            article {
                border-color: $orange;
            }
        }
    }
}
</style>