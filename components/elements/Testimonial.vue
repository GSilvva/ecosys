<template>
    <section data-animate class="testimonials pb-20 xl:pb-32">
        <ElementsContainer class="container" block>
            <div class="relative">
                <swiper
                    :modules="modules"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                        el: '.testimonials .pagination'
                    }"
                    :navigation="{
                        prevEl: '.testimonials .prev',
                        nextEl: '.testimonials .next',
                    }"
                    class="swiper"
                >
                    <swiper-slide>
                        <div class="slide flex flex-col-reverse xl:flex-col gap-10 sm:gap-12 w-full mx-auto">
                            <div class="flex items-center justify-center gap-5 xl:gap-8">
                                <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" src="/images/home/women.png" alt="Foto">
                                <div>
                                    <h6 class="mb-0.5">Luciana Gimenez</h6>
                                    <small>Comprou um Chevrolet Camaro</small>
                                </div>
                            </div>
                            <p class="text-center">Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide flex flex-col-reverse xl:flex-col gap-10 sm:gap-12 w-full mx-auto">
                            <div class="flex items-center justify-center gap-5 xl:gap-8">
                                <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" src="/images/home/women.png" alt="Foto">
                                <div>
                                    <h6 class="mb-0.5">Luciana Gimenez</h6>
                                    <small>Comprou um Chevrolet Camaro</small>
                                </div>
                            </div>
                            <p class="text-center">Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide flex flex-col-reverse xl:flex-col gap-10 sm:gap-12 w-full mx-auto">
                            <div class="flex items-center justify-center gap-5 xl:gap-8">
                                <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" src="/images/home/women.png" alt="Foto">
                                <div>
                                    <h6 class="mb-0.5">Luciana Gimenez</h6>
                                    <small>Comprou um Chevrolet Camaro</small>
                                </div>
                            </div>
                            <p class="text-center">Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide flex flex-col-reverse xl:flex-col gap-10 sm:gap-12 w-full mx-auto">
                            <div class="flex items-center justify-center gap-5 xl:gap-8">
                                <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" src="/images/home/women.png" alt="Foto">
                                <div>
                                    <h6 class="mb-0.5">Luciana Gimenez</h6>
                                    <small>Comprou um Chevrolet Camaro</small>
                                </div>
                            </div>
                            <p class="text-center">Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slide flex flex-col-reverse xl:flex-col gap-10 sm:gap-12 w-full mx-auto">
                            <div class="flex items-center justify-center gap-5 xl:gap-8">
                                <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" src="/images/home/women.png" alt="Foto">
                                <div>
                                    <h6 class="mb-0.5">Luciana Gimenez</h6>
                                    <small>Comprou um Chevrolet Camaro</small>
                                </div>
                            </div>
                            <p class="text-center">Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.</p>
                        </div>
                    </swiper-slide>
                </swiper>
                <button
                    class="cursor-pointer transition prev absolute left-0 hidden xl:block"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24" fill="white"/>
                        <path d="M26 19C25.6 19.4 22.5 22.5 21 24L26 29" stroke="black" stroke-width="2"/>
                    </svg>
                </button>
                <button
                    class="cursor-pointer transition next absolute right-0 hidden xl:block"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="24" transform="rotate(-180 24 24)" fill="white"/>
                        <path d="M22 29C22.4 28.6 25.5 25.5 27 24L22 19" stroke="black" stroke-width="2"/>
                    </svg>
                </button>
            </div>

            <div class="pagination"></div>

            <div class="rating mt-16 xl:mt-20 flex justify-center items-center gap-8 xl:gap-12">
                <div class="flex items-center gap-2.5">
                    <VectorsStar />
                    <h3 class="uppercase"><strong>4.8</strong>/5</h3>
                </div>
                <p class="flex flex-col items-start">
                    Avaliação no Google
                    <a class="transition underline" href="##" target="_blank">Ver todas</a>
                </p>
            </div>
        </ElementsContainer>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Pagination, A11y, Navigation];

defineProps({
    text: String,
    photo: String,
    name: String,
    description: String
});
</script>

<style lang="scss" scoped>
.container {
    @media (max-width: $mobile) {
        padding: 0;
    }
}
.swiper {
    max-width: 865px;
}
.slide {
    h6 {
        font: 600 20px/28px $inter;

        @media (max-width: $mobile) {
            font: 600 16px/24px $inter;
        }
    }

    small {
        font: 400 18px/26px $inter;
        color: $grey-5;

        @media (max-width: $mobile) {
            font: 400 14px/22px $inter;
        }
    }

    p {
        color: $dark;
        font: 500 32px/39px $inter;

        @media (max-width: $mobile) {
            font: 500 20px/28px $inter;
        }
    }
}
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 56px 0 0 0;

    @media (max-width: $mobile) {
        margin: 64px 0 0 0;
    }
}
.prev,
.next {
    top: 70%;
    transform: translateY(-50%);
}
.rating {
    h3 {
        font: 500 32px/1 $poppins;
        color: $grey-3;
        strong {
            font-weight: 800;
            color: $dark;
        }
    }
    p,
    a {
        font: 500 18px/26px $inter;
        color: $dark;

        @media (max-width: $mobile) {
            font-size: 14px;
            line-height: 22px;
        }
    }
    a {
        font-weight: 400;
        color: $dark;
    }
}
</style>

<style lang="scss">
.testimonials {

    .pagination {

        span  {
            width: 6px;
            height: 6px;
            opacity: 1;
            margin: 0 !important;
            background: #D9D9D9;
            transition: .3s;

            &.swiper-pagination-bullet-active {
                background: $dark;
            }
        }
    }
}
</style>