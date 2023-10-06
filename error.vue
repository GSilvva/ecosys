<template>
    <LayoutNavbar class="!shadow-none" />

    <main class="error min-h-screen py-28 md:py-0 block md:flex items-center">
        <ElementsContainer class="flex flex-col-reverse xl:flex-row items-flex-start xl:items-center">
            <aside class="flex flex-col items-start">
                <h1 class="w-full">Ops... <br class="hidden md:block"> Não encontramos essa página</h1>
                <p class="my-6 xl:my-8 w-full">A página que você procura não existe ou foi removida. Sugerimos ir para a homepage</p>
                <ElementsButton href="/">Ir para a home</ElementsButton>
            </aside>

            <figure class="mb-16 xl:mb-0"><VectorsWarningError /></figure>
        </ElementsContainer>
    </main>
</template>

<style lang="scss" scoped>
.error {
    svg {
        @media screen and (max-width: $tablet) {
            width: 180px;
            height: 180px;
        }
    }
    h1 {
        max-width: 450px;
        font: 700 48px/52px $poppins;

        @media screen and (max-width: $mobile) {
            font: 700 32px/36px $poppins;
        }
    }
    p {
        max-width: 460px;
    }
}
</style>
