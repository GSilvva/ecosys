<template>
  <main class="client-area">
    <ElementsContainer block>
      <div class="content flex flex-col justify-center items-center h-screen max-w-xl m-auto">
        <h1 class="text-center">Área em construção</h1>
        <p class="text-center mt-6 mb-8">Estamos trabalhando em uma área do cliente especialmente feita pra você. Enquanto isso, que tal continuar na busca pelo seu carro ideal?</p>
        <ElementsButton href="/comprar">Ver catálogo de carros</ElementsButton>
      </div>
    </ElementsContainer>
  </main>

  <!-- <article class="box box--code w-full m-auto sm:p-10 bg-transparent sm:bg-white" v-if="validPhone">
    <header>
      <h2 class="mb-4 sm:mb-6 uppercase">Informe o código</h2>
      <p class="mb-8">Enviamos um código de confirmação para contato@fuselab.com</p>
    </header>
    <form>
      <ElementsFormLabel class="mb-2.5" label="Digite o código" />
      <div class="flex items-end">
        <ElementsFormInput
          classesFieldset="sm:!w-20"
          name="digito1"
          big
          required
        />
        <ElementsFormInput
          classesFieldset="sm:!w-20"
          name="digito2"
          big
          required
        />
        <ElementsFormInput
          classesFieldset="sm:!w-20"
          name="digito3"
          big
          required
        />
        <ElementsFormInput
          classesFieldset="sm:!w-20"
          name="digito4"
          big
          required
        />
      </div>
    </form>
    <footer class="flex justify-between mt-8">
      <button class="underline" type="button">Não recebi o código</button>
      <button class="underline" @click="validPhone = false" type="button">Editar celular</button>
    </footer>
  </article> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simple",
})

const validPhone = ref(false);

useHead({
  title: `b.car | Área do Cliente`,
});
</script>

<style lang="scss" scoped>
.header {

  aside {
    transform: translateY(-50%);
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: $inter;
  }
}

.box {
  
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-family: $gotham;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  fieldset {
    &:not(:last-of-type) {
      margin: 0 -1px 0 0;
    }

    &:focus,
    &:focus-visible,
    &:hover,
    &:target,
    &:focus-within,
    &:active {
      z-index: 10;
    }
  }

  &--phone {
    max-width: 730px;

    img {
      max-width: 273px;
    }
  }

  &--code {
    max-width: 480px;

    button {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
}

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
