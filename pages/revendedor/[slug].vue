<template>
    <main class="dealer">
        <header class="header">
            <nav class="nav py-4 sm:py-6">
                <ElementsContainer class="flex items-center justify-between">
                    <nuxt-link class="block logo" to="/">
                        <VectorsLogoWhite class="w-24 sm:w-32 h-8 sm:h-10" />
                    </nuxt-link>
                    <nuxt-link class="fav flex items-center gap-3 text-white" to="/area-cliente/favoritos">
                        <VectorsFavoriteWhite />
                        Favoritos
                    </nuxt-link>
                </ElementsContainer>
            </nav>
            <div class="title py-6 sm:py-8">
                <ElementsContainer class="flex xl:items-center justify-between flex-col xl:flex-row gap-8 xl:gap-0">
                    <div class="name flex items-center">
                        <span class="flex items-center justify-center rounded-full text-white">J</span>
                        <h1 class="text-white ml-4 xl:ml-6 mr-3">Joinville Veículos</h1>
                        <VectorsVerify />
                    </div>
                    <div class="buttons flex gap-3">
                        <a class="block text-white flex items-center gap-3 rounded py-3 px-6" href="##" target="_blank">
                            <VectorsWhatsapp />
                            WhatsApp
                        </a>
                        <a class="block text-white flex items-center gap-3 rounded py-3 px-6" href="##" target="_blank">
                            <VectorsPhoneButton />
                            Ligar
                        </a>
                    </div>
                </ElementsContainer>
            </div>
        </header>
        <section class="content py-6 pb-0 sm:py-12">
            <ElementsContainer>
                <h2 class="mb-6 sm:mb-10">Meus veículos</h2>
            </ElementsContainer>
            <ElementsContainer class="container cards !grid gap-1 xl:gap-6 2xl:gap-8">
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
            </ElementsContainer>
        </section>
    </main>
</template>

<script setup lang="ts">
const api_url = `${useRuntimeConfig().public.apiBase}/anuncios`

const { pending, data: adverts } = useLazyAsyncData("adverts", () => $fetch(api_url))
const { data } = await useFetch(api_url)

useHead({
    title: `Joinville Veículos | Ecosys Auto`
})

definePageMeta({
  layout: "empty",
})
</script>

<style lang="scss" scoped>
.dealer {

    .header {
        background: $dark;

        .nav {
            border-bottom: 1px solid rgba(255, 255, 255, .16);
        }

        .fav {
            font: 500 16px/24px $inter;
        }

        .name {

            span {
                width: 68px;
                height: 68px;
                background: $blue;
                font: 600 32px/1 $poppins;

                @media (max-width: $mobile) {
                    font: 600 24px/1 $poppins;
                    width: 48px;
                    height: 48px;
                }
            }

            h1 {
                font: 600 32px/40px $poppins;

                @media (max-width: $mobile) {
                    font: 600 20px/28px $poppins;
                }
            }
        }
        
        .buttons {
            
            a {
                font: 500 16px/24px $inter;
                background: $blue;
            }
        }
    }

    .content {

        h2 {
            font: 600 24px/32px $poppins;

            @media (max-width: $mobile) {
                font: 600 20px/28px $poppins;
            }
        }

        .container {
            grid-template-columns: repeat(4, 1fr);

            @media screen and (max-width: 1400px) {
                zoom: .9;
            }

            @media screen and (max-width: $tablet) {
                grid-template-columns: 1fr;
                zoom: 1;
                padding: 0;
            }
        }
    }
}
</style>