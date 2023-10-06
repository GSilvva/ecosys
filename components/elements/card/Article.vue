<template>
    <article :class="`card-article ${mobile ? 'mobile' : ''} ${small ? 'small' : ''}`">
        <ElementsContainer block class="container">
            <nuxt-link class="block w-full m-auto" :to="link">
                <figure class="relative mb-6 xl:mb-8">
                    <img
                        class="h-44 md:h-80 object-cover w-full"
                        alt="Foto"
                        :src="thumbnail ? thumbnail : './images/general/default-image.svg'"
                    >
                    <h6 class="absolute bottom-0 left-6 md:left-12 xl:left-0 text-white uppercase py-2 px-3">{{ category }}</h6>
                </figure>
                <section class="w-full px-6 md:px-12 xl:px-0">
                    <h2 class="transition">{{ title }}</h2>
                    <p class="mt-4 xl:mt-6 transition">{{ resume }}</p>
                    <footer class="mt-6 xl:mt-8 flex items-center gap-4">
                        <small>{{ date }}</small>
                        <div class="w-1 h-1"></div>
                        <small>{{ reading }} min para ler</small>
                    </footer>
                </section>
            </nuxt-link>
        </ElementsContainer>
    </article>
</template>

<script setup lang="ts">
defineProps({
    link: String,
    thumbnail: String,
    title: String,
    category: String,
    resume: String,
    date: String,
    reading: String,
    mobile: Boolean,
    small: Boolean
});
</script>


<style lang="scss" scoped>
.card-article {
    a {
        max-width: 730px;

        @media screen and (max-width: $tablet) {
            max-width: 100%;
        }

        h6 {
            font: 700 12px/10px $poppins;
            background: $grey-5;

            @media screen and (max-width: $mobile) {
                font-size: 11px;
            }
        }

        h2 {
            font: 500 32px/40px $inter;

            @media screen and (max-width: $tablet) {
                font: 500 20px/28px $inter;
            }
        }

        p {
            font: 400 18px/26px $inter;

            @media screen and (max-width: $tablet) {
                font: 400 16px/24px $inter;
            }
        }

        footer {
            small {
                color: $grey-5;
                font: 400 16px/24px $inter;
            }

            div {
                background: $grey-3;
            }
        }

        section {
            max-width: 630px;
        }
    }

    &:not(:last-of-type) {
        margin: 0 0 64px 0;

        @media screen and (max-width: $tablet) {
            margin: 0 0 48px 0;
        }
    }

    a:hover {
        h2 {
            text-decoration: underline;
        }
        
        p {
            color: $dark;
        }
    }

    @media screen and (max-width: $tablet) {
        .container {
            padding: 0;
        }
    }

    &.small {
        &:not(:last-of-type) {
            margin: 0 0 48px 0;
        }

        a {
            max-width: 1010px;
            display: flex;
            align-items: center;
            gap: 48px;

            @media screen and (max-width: $tablet) {
                display: block;
                max-width: 100%;
            }

            figure {
                margin: 0;
                max-width: 385px;
                width: 100%;

                @media screen and (max-width: $tablet) {
                    max-width: 100%;
                    margin: 0 0 32px 0;
                }

                @media screen and (max-width: $mobile) {
                    margin: 0 0 24px 0;
                }
            }

            img {
                height: 170px;

                @media screen and (max-width: $tablet) {
                    height: 320px;
                }

                @media screen and (max-width: $mobile) {
                    height: 176px;
                }
            }

            h6 {
                display: none;

                @media screen and (max-width: $tablet) {
                    display: block;
                }
            }

            section {
                max-width: 475px;

                @media screen and (max-width: $tablet) {
                    max-width: 630px;
                }
            }

            h2 {
                font: 500 24px/32px $inter;

                @media screen and (max-width: $mobile) {
                    font: 500 20px/28px $inter;
                }
            }

            p {
                margin: 16px 0 0 0;
                font: 400 16px/24px $inter;

                @media screen and (max-width: $mobile) {
                    font: 400 16px/24px $inter;
                }
            }

            footer {
                display: none;

                @media screen and (max-width: $tablet) {
                    display: flex;
                }
            }
        }
    }

    &.mobile {

        .container {
            padding: 0;
        }

        a {

            figure {
                margin: 0 0 20px 0;
            }

            img {
                height: 165px;
            }

            h6 {
                padding: 6px 10px;
                font-size: 11px;
                left: 20px;
            }

            h2 {
                font: 500 18px/24px $inter;
            }

            p {
                font: 400 14px/20px $inter;
                margin: 14px 0 0 0;
            }

            section {
                padding: 0 20px;
            }

            footer {
                margin: 20px 0 0 0;
                gap: 12px;

                small {
                    font: 400 14px/20px $inter;
                }
            }
        }
    }
}
</style>