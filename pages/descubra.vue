<template>
  <main class="discover">
    <div class="page pt-sm min-h-screen xl:h-screen xl:overflow-hidden">
      <ElementsContainer class="items-center h-full flex flex-col-reverse xl:flex-row">
        <aside class="text w-full relative z-20 flex flex-col items-center xl:items-start pt-16 xl:pt-0 pb-40 xl:pb-0">
          <h1 class="text-white !normal-case text-center xl:text-left">DESCUBRA AGORA O SEU b.car IDEAL</h1>
          <p class="text-white my-6 xl:my-8 text-center xl:text-left">Responda o nosso questionário a seguir. Cada pergunta respondida representa um caminho pra você encontrar seu carro ideal.</p>
          <ElementsButton
            @click="discover.openModal = true"
            @click.prevent="$preventScrollBody"
            black
          >
            Descobrir meu carro
          </ElementsButton>
        </aside>
        <figure class="image relative mt-32 xl:mt-0">
          <img class="mix-blend-multiply relative z-20 hidden xl:block" src="/images/general/mystery-car-page.png" alt="Carro misterioso">
          <img class="mix-blend-multiply relative z-20 xl:hidden" src="/images/general/mystery-car.png" alt="Carro misterioso">
          <img class="absolute top-1/2 z-10 xl:max-w-max" src="/images/general/graphism-mystery-car.svg" alt="Graphismo">
        </figure>
      </ElementsContainer>
    </div>

    <ElementsDiscoverModal v-model:open="discover.openModal" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simple",
})

const discover: object = reactive({
  openModal: false,
})
</script>

<style lang="scss" scoped>
.page {
  background: $orange;

  .text {
    max-width: 440px;

    h1 {
      @include titlePage;

      @media screen and (max-width: $mobile) {
        font: 700 28px/34px $gotham;
      }
    }
  }

  .image {
    img {
      &:last-of-type {
        transform: translateY(-50%);
        right: -220px;

        @media screen and (max-width: $tablet) {
          transform: translate(-50%, -50%);
          left: 50%;
        }
      }
    }
  }
}
</style>