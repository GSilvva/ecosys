<template>
    <section class="pb-28 xl:pb-48">
        <ElementsContainer class="flex flex-col-reverse xl:flex-row">
            <article data-animate class="mt-20 xl:mt-0">
                <div class="mb-6 flex items-center gap-2">
                    <VectorsStar />
                    <h3 class="uppercase pt-1"><strong>4.8</strong>/5</h3>
                </div>
                <p class="mb-0.5 xl:mb-1">Avaliação no Google</p>
                <a class="transition" href="##" target="_blank">Ver todas</a>
            </article>
            <aside data-animate class="w-full">
                <p><slot>{{ text }}</slot></p>
                <footer class="mt-8 xl:mt-10 flex items-center gap-5 xl:gap-8">
                    <img class="w-16 h-16 xl:w-20 xl:h-20 rounded-full object-cover" :src="photo" :alt="name">
                    <div>
                        <h6 class="mb-0.5">{{ name }}</h6>
                        <small>{{ description }}</small>
                    </div>
                </footer>
            </aside>
        </ElementsContainer>
    </section>
</template>

<script setup lang="ts">
defineProps({
    text: String,
    photo: String,
    name: String,
    description: String
});
</script>

<style lang="scss" scoped>
article {
    h3 {
        font: 700 32px/1 $gotham;
        color: $grey-3;
        strong {
            color: $dark;
        }
    }
    p,
    a {
        font-size: 18px;
        line-height: 26px;
        @media screen and (max-width: $mobile) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    p {
        color: $dark;
        font-weight: 400;
    }
    a {
        text-decoration: underline;
        font-weight: 500;
        &:hover {
            color: $orange;
        }
    }
}
aside {
    max-width: 745px;
    p {
        color: $dark;
        font: 500 32px/40px $inter;
        @media screen and (max-width: $mobile) {
            font: 500 20px/28px $inter;
        }
    }
    h6 {
        font: 600 20px/28px $inter;
        @media screen and (max-width: $mobile) {
            font: 600 16px/24px $inter;
        }
    }
    small {
        font: 400 18px/26px $inter;
        color: $grey-5;
        @media screen and (max-width: $mobile) {
            font: 400 14px/22px $inter;
        }
    }
}
</style>