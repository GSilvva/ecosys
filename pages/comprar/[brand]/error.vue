<template>
  <main class="client-area">
    <ElementsContainer block>
      <div class="content flex flex-col justify-center items-center h-screen max-w-xl m-auto">
        <h1 class="text-center">Provavelmente <br> vendemos esse carro</h1>
        <p class="text-center mt-6 mb-8">O anúncio foi encerrado, não existe ou houve um erro.</p>
        <ElementsButton href="/comprar">Ver catálogo de carros</ElementsButton>
      </div>
    </ElementsContainer>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simple",
})

useHead({
  title: `b.car | Anúncio não encontrado`,
});
</script>

<style lang="scss" scoped>
.content {

  h1 {
    @include titlePageNormal;

    @media screen and (max-width: $mobile) {
      font: 700 24px/32px $gotham;
    }
  }

  p {
    font: 400 16px/24px $inter;
  }
}
</style>
