<template>
    <main class="profile">
        <h2 class="title title--mrg">Meu perfil</h2>

        <form
            class="bg-white sm:p-8"
            action=""
            method="POST"
        >
            <fieldset class="fieldset mb-6">
                <label for="nomeCompleto">Nome completo</label>
                <input id="nomeCompleto" name="nomeCompleto" type="text" required v-model="profile.nome">
            </fieldset>
            <fieldset class="fieldset mb-6">
                <label for="celular">Celular</label>
                <div class="flex items-center gap-6">
                    <input disabled required id="celular" name="celular" type="tel" v-model="profile.celular" @input="maskPhone($event)" maxlength="15">
                    <button @click="toggleDisabled($event)" class="underline" type="button">trocar</button>
                </div>
            </fieldset>
            <fieldset class="fieldset mb-6">
                <label for="email">E-mail</label>
                <div class="flex items-center gap-6">
                    <input disabled required id="email" name="email" type="email" v-model="profile.email">
                    <button @click="toggleDisabled($event)" class="underline" type="button">trocar</button>
                </div>
            </fieldset>
            <fieldset class="fieldset">
                <label for="cpf">CPF</label>
                <div class="flex items-center gap-6">
                    <input disabled id="cpf" name="cpf" type="text" v-model="profile.cpf">
                </div>
            </fieldset>
            <ElementsButton submit class="mt-8 !py-4">Salvar</ElementsButton>
        </form>
    </main>
</template>

<script setup lang="ts">
function toggleDisabled(event: any) {
    event.target.previousElementSibling.disabled = false
    event.target.remove()
}

function maskPhone(event: any) {
    const mask = event.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d)/,"($1) $2")
                                    .replace(/(\d)(\d{4})$/,"$1-$2")
    event.target.value = mask
}

const profile = reactive({
    nome: "Tiago Luchtenberg",
    celular: "(47) 94589-1234",
    email: "tiagoluchtenberg@gmail.com",
    cpf: "••• ••• 459 - 02"
})

definePageMeta({
    layout: "area-cliente"
})

useHead({
    title: `b.car | Perfil`,
    bodyAttrs: {
        class: "body"
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/area-cliente';

.profile {
    @media screen and (max-width: $mobile) {
        border-top: 4px solid $grey-1;
        width: calc(100% + 48px);
        transform: translateX(-24px);
        padding: 28px 24px 0 24px;
        margin: -32px 0 0 0;
    }
}

.fieldset {
    label {
        line-height: 1;
    }
    input {
        max-width: 400px;
        height: 48px;
    }
    button {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
    }
}
</style>

<style lang="scss">
.body {
  @media screen and (max-width: $mobile) {
    background: $white;
  }
}
</style>
