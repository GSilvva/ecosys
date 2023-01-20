<template>
  <main class="client-area">
    <header class="header relative bg-white mb-16 py-5 sm:hidden">
      <ElementsContainer>
        <aside class="absolute top-2/4 left-6">
          <button
            class="w-10 h-10 flex items-center"
            v-if="validPhone"
            @click="validPhone = false"
            type="button"
          >
            <VectorsBack />
          </button>
          <nuxt-link
            class="w-10 h-10 flex items-center"
            v-else
            to="/"
          >
            <VectorsClose />
          </nuxt-link>
        </aside>
        <h4 class="text-center w-full">Entrar</h4>
      </ElementsContainer>
    </header>

    <section class="content sm:flex items-center justify-center min-h-screen">
      <ElementsContainer block>
        <article class="box box--phone flex w-full m-auto bg-transparent sm:bg-white" v-if="!validPhone">
          <aside class="sm:p-10">
            <header>
              <h2 class="mb-4 sm:mb-6 uppercase">Área do cliente</h2>
              <p class="mb-9">Digite o número do seu celular. Você vai receber um código para entrar sem precisar de senha.</p>
            </header>
            <form class="flex flex-col items-end" @submit.prevent="validPhone = true">
              <div class="flex mb-6 w-full">
                <ElementsFormInput
                  classesFieldset="!w-20"
                  label="DDD"
                  required
                />
                <ElementsFormInput
                  @input="$masksInput('test')"
                  classes="!pl-6 !pr-6"
                  label="Telefone"
                  placeholder="9 9999 9999"
                  required
                />
              </div>
              <ElementsButton submit>Acessar</ElementsButton>
            </form>
          </aside>
          <img class="object-cover w-full hidden sm:block" src="/images/area-cliente/foto.jpg" alt="Foto">
        </article>

        <article class="box box--code w-full m-auto sm:p-10 bg-transparent sm:bg-white" v-if="validPhone">
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
        </article>
      </ElementsContainer>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
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
</style>
