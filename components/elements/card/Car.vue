<template>
    <nuxt-link
        :to="url"
        :class="`max-h-36 sm:max-h-fit relative flex xl:block card-car w-full transition ${small ? 'small' : ''} ${!nohover ? 'hover' : ''}`"
        target="_blank"
    >
        <ElementsFavorite :favorited="favorited" class="absolute top-3 right-3 z-20" />

        <figure :class="`images relative w-full ${paid_out || nohover ? 'xl:!h-52' : ''}`">
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

        <article :class="`content transition flex flex-col justify-between w-full py-3 sm:pt-6 sm:pb-6 xl:pb-5 xl:px-8`">
            <div class="title px-3 sm:px-8 xl:px-0">
                <h3 class="uppercase pr-5 xl:pr-0">
                    <strong>{{ brand }}</strong>
                    {{ name }}
                </h3>
                <p class="mt-1 sm:mt-4">
                    {{ characteristics }}
                    <br>
                    {{ model_year }} • {{ transmission }}
                </p>
                <div class="infos flex items-end justify-between">
                    <ClientOnly>
                        <p>{{ $formatNumber(km) }}km</p>
                        <p><strong v-if="price">{{ $formatCurrency(price) }}</strong></p>
                    </ClientOnly>
                </div>
            </div>
            <div v-if="!clean" class="store flex items-center gap-2 sm:gap-4 pt-3 sm:pt-6 xl:pt-0 mt-3 sm:mt-6 px-3 sm:px-8 xl:px-0">
                <VectorsSaleFor class="w-6 h-6 sm:h-12 sm:w-12" />
                <span>
                    <small class="block mb-1.5">Vendido por</small>
                    {{ store ? store : "Webmotors" }}
                </span>
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
    brand: String,
    characteristics: String,
    transmission: String,
    price: Number,
    old_price: Number,
    build_year: Number,
    model_year: Number,
    km: Number,
    paid_out: Number,
    nohover: Boolean,
    favorited: Boolean,
    clean: Boolean,
    store: String,
    small: Boolean
});
</script>

<style lang="scss" scoped>
.card-car {
    background: $white;

    .images {
        height: 250px;

        @media (max-width: 1400px) {
            height: 225px;
        }

        @media (max-width: $tablet) {
            height: 100%;
        }

        @media (max-width: $mobile)  {
            height: 138px;
        }

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
            font: 600 12px/10px $poppins;

            @media screen and (max-width: $mobile) {
                font-size: 10px;
            }

            &.recent {
                background: $blue;
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
    
        .title {

            h3 {
                font: 600 20px/28px $poppins;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;

                @media screen and (max-width: $mobile) {
                    font: 600 12px/16px $poppins;
                }

                strong {
                    color: $blue;
                }
            }

            p {
                font: 500 16px/24px $inter;
                color: $grey-4;

                @media screen and (max-width: $mobile) {
                    font: 500 10px/14px $inter;
                }
            }
        }

        .infos {

            p {
                font: 500 16px/24px $inter;
                color: $grey-4;

                @media screen and (max-width: $mobile) {
                    font: 500 10px/14px $inter;
                }

                &:last-of-type {
                    margin: -4px 0 0 0;

                    @media (max-width: $mobile) {
                        margin: 0;
                    }
                }

                strong {
                    color: $dark;
                    font: 600 18px/28px $poppins;

                    @media (max-width: $mobile) {
                        font: 600 10px/14px $poppins;
                    }
                }
            }
        }

        .store {
            
            @media (max-width: $tablet) {
                border-top: 1px solid $grey-2;
            }

            span {
                font: 500 16px/1 $inter;

                @media (max-width: $mobile) {
                    font: 500 10px/8px $inter;
                }

                small {
                    color: $grey-4;
                    font: 400 12px/1 $inter;

                    @media (max-width: $mobile) {
                        font: 400 8px/1 $inter;
                        margin: 0 0 2px 0 !important;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $tablet) {
        .images {
            min-width: 340px !important;
            max-width: 340px !important;
        }
    }

    @media screen and (max-width: $mobile) {
        .images {
            min-width: 190px !important;
            max-width: 190px !important;
        }
    }

    @media (max-width: 350px) {
        .images {
            min-width: 160px !important;
            max-width: 160px !important;
        }
    }

    @media screen and (min-width: $tablet) {
        overflow: hidden;
        border-radius: 0 0 4px 4px;

        &.nohover {
            border-radius: 0;
        }

        &.hover {

            .content {
                border-bottom: 2px solid $white;
            }

            &:hover {
                box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);

                .content {
                    border-color: $blue;
                }
            }
        }

        &.small {

            .images {
                height: 208px;
            }

            .content {
                padding: 20px;
            }

            .title {
    
                h3 {
                    font: 600 16px/26px $poppins;
                }
    
                & > p {
                    margin-top: 8px;
                }
    
                p {
                    font: 500 14px/22px $inter !important;

                    strong {
                        font: 600 16px/24px $poppins I !important;   
                    }
                }

                .infos {
                    
                    p {

                        &:last-of-type {
                            margin: -6px 0 0 0;
                        }
                    }
                }
            }
        }
    }
}
</style>