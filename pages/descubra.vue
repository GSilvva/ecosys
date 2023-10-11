<template>
  <main class="discover">
    <div class="page pt-sm">
      <section class="content pt-28 xl:pt-32 pb-36 xl:pb-52">
        <ElementsContainer class="container items-center flex flex-col-reverse xl:flex-row">
          <aside class="text w-full relative z-20 flex flex-col items-center xl:items-start pt-16 xl:pt-0">
            <h1 class="text-white !normal-case text-center xl:text-left">Descubra agora o seu carro ideal</h1>
            <p class="text-white my-6 xl:my-8 text-center xl:text-left">Responda o nosso questionário a seguir. Cada pergunta respondida representa um caminho pra você encontrar seu carro ideal.</p>
            <ElementsButton
              @click="discover.openModal = true"
              black
            >
              Descobrir meu carro
            </ElementsButton>
          </aside>
          <figure class="image relative">
            <img class="relative z-20" src="/images/general/mystery-car-page.png" alt="Carro misterioso">
            <img class="absolute z-10" src="/images/general/graphism-mystery-car.svg" alt="Gragfismo">
          </figure>
        </ElementsContainer>
      </section>
    </div>

    <ElementsDiscoverModal v-model:open="discover.openModal" />
  </main>
</template>

<script setup lang="ts">
const discover: object = reactive({
  openModal: false,
})
</script>

<style lang="scss" scoped>
.page {
  background: $blue;

  .container {

    @media (max-width: $mobile) {
      padding: 0 16px;
    }
  }

  .text {
    max-width: 440px;

    h1 {
      font: 600 48px/1 $poppins;

      @media screen and (max-width: $mobile) {
        font: 600 28px/34px $poppins;
      }
    }
  }

  .image {
    
    img {

      &:last-of-type {
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 537px;

        @media (max-width: $mobile) {
          width: 290px;
          top: unset;
          bottom: -8px;
          transform: unset;
          left: 0;
        }
      }
    }
  }
}
</style>