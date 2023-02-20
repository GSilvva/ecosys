<template>
    <aside class="w-full hidden xl:block bg-white pt-6 pb-7">
        <h3 class="mb-7 pl-6">Minha conta</h3>
        <nuxt-link class="mb-4 block px-6 py-1 transition flex items-center justify-between" to="/area-cliente/compra">Compra</nuxt-link>
        <nuxt-link class="mb-4 block px-6 py-1 transition flex items-center justify-between" to="/area-cliente/venda">Venda <span class="text-white rounded-full flex justify-center items-center w-4 h-4">1</span></nuxt-link>
        <nuxt-link class="mb-4 block px-6 py-1 transition flex items-center justify-between" to="/area-cliente/favoritos">Favoritos</nuxt-link>
        <nuxt-link class="mb-4 block px-6 py-1 transition flex items-center justify-between" to="/area-cliente/meus-carros">Meus carros</nuxt-link>
        <nuxt-link class="block px-6 py-1 transition flex items-center justify-between" to="/area-cliente/perfil">Perfil</nuxt-link>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    max-width: 250px;
    min-width: 250px;
}

h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
}

a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $grey-4;
    border-left: 2px solid $white;

    &.router-link-active {
        border-color: $orange;
        color: $dark;
    }

    &:hover {
        color: $dark;
    }
    
    span {
        font-weight: 500;
        font-size: 10px;
        background: $orange;
    }
}
</style>