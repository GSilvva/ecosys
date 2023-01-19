<template>
    <main class="sale">
        <ElementsContainer block>
            <header class="header pt-big flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-0">
                <aside class="w-full">
                    <h1 class="uppercase">Venda <br> seu carro</h1>
                    <p class="my-4 sm:my-8">Agende uma avaliação gratuita e venda seu carro pelo melhor preço. <br> Seguro e rápido.</p>
                    <ElementsButton href="/vender-meu-carro">Agendar avaliação</ElementsButton>
                </aside>
                <aside class="thumb">
                    <ElementsVideo video="https://www.youtube.com/embed/dYk_2QXpkgc">
                        <div class="transition absolute left-1/2 top-1/2 z-20">
                            <VectorsPlay />
                        </div>
                        <img class="h-full w-full object-cover opacity-80" src="/images/vender/thumbnail.jpg" alt="Foto">
                    </ElementsVideo>
                </aside>
            </header>

            <section class="cards py-12 sm:pt-16 sm:pb-28 flex flex-wrap gap-1">
                <div class="py-6 px-5 sm:p-10 bg-white w-1/2 xl:w-full xl:flex-1">
                    <VectorsCarSale class="w-6 sm:w-max" />
                    <p class="mt-6 sm:mt-8">O carro pode ficar <br> com você</p>
                </div>
                <div class="py-6 px-5 sm:p-10 bg-white w-1/2 xl:w-full xl:flex-1">
                    <VectorsUser class="w-6 sm:w-max" />
                    <p class="mt-6 sm:mt-8">Acompanhe tudo <br> pela área do cliente</p>
                </div>
                <div class="py-6 px-5 sm:p-10 bg-white w-1/2 xl:w-full xl:flex-1">
                    <VectorsMoney class="w-6 sm:w-max" />
                    <p class="mt-6 sm:mt-8">Tenha mais dinheiro <br> no seu bolso</p>
                </div>
                <div class="py-6 px-5 sm:p-10 bg-white w-1/2 xl:w-full xl:flex-1">
                    <VectorsShieldCheck class="w-6 sm:w-max" />
                    <p class="mt-6 sm:mt-8">Simples, rápido <br> e com segurança</p>
                </div>
            </section>
        </ElementsContainer>
    </main>
</template>

<style lang="scss" scoped>
.header {

    @media screen and (max-width: $tablet) {
        padding-top: 64px;
    }

    aside {
        max-width: 350px;

        @media screen and (max-width: $tablet) {
            max-width: 100%;
        }

        h1 {
            @include titlePage;

            @media screen and (max-width: $mobile) {
                font: 700 28px/34px $gotham;
            }
        }
    }

    .thumb {
        max-width: 730px;
        background: $dark;
        height: 408px;

        @media screen and (max-width: $tablet) {
            max-width: initial;
            width: calc(100% + 96px);
        }

        @media screen and (max-width: $mobile) {
            max-width: initial;
            width: calc(100% + 48px);
            height: 220px;
        }

        div {
            animation: scale 3s ease infinite;

            @keyframes scale {
                0%, 40%, 80%, 100% {
                    transform: translate(-50%, -50%) scale(1);
                }
                30% {
                    transform: translate(-50%, -50%) scale(1.2);
                }
                60% {
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        }
    }
}

.cards {

    div {
        @media screen and (max-width: $tablet) {
            width: calc(50% - 2px);
        }
    }
    
    p {
        font: 500 18px/26px $inter;
        color: $dark;

        @media screen and (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }
}
</style>