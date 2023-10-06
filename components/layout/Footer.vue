<template>
  <footer class="footer">
    <header class="top py-16 xl:py-32">
      <ElementsContainer class="justify-between">
        <aside class="logo flex justify-between flex-col mb-16 xl:m-0">
          <VectorsIconLogo />
          <p class="mt-9 xl:mt-0 text-white">Compre, troque <br> ou anuncie seu carro</p>
        </aside>

        <aside class="links flex justify-between flex-wrap gap-y-16 xl:gap-24">
          <article class="w-6/12 md:w-max">
            <h6 class="mb-6">Navegação</h6>
            <div class="flex flex-col gap-3.5 xl:gap-3">
              <nuxt-link class="transition" to="/">Início</nuxt-link>
              <nuxt-link class="transition" to="/comprar">Comprar</nuxt-link>
              <nuxt-link class="transition" to="/revendedor">Sou lojista</nuxt-link>
              <nuxt-link class="text-white transition" to="/descubra">Descubra</nuxt-link>
              <nuxt-link class="transition" to="https://bcar-blog.fuselab.design/">News</nuxt-link>
              <nuxt-link class="transition" to="/qvmc">QVMC</nuxt-link>
            </div>
          </article>
          <article class="w-6/12 md:w-max">
            <h6 class="mb-6">Ecosys Auto</h6>
            <div class="flex flex-col gap-3.5 xl:gap-3">
              <nuxt-link class="transition" to="/central-ajuda">Central de ajuda</nuxt-link>
              <nuxt-link class="transition" to="/politica-termos">Política de privacidade</nuxt-link>
              <nuxt-link class="transition" to="/politica-termos">Termos de uso</nuxt-link>
              <nuxt-link class="transition" to="/central-ajuda">Política de cookies</nuxt-link>
            </div>
          </article>
        </aside>
      </ElementsContainer>
    </header>

    <footer class="bottom py-8 xl:py-10">
      <ElementsContainer center>
        <p class="w-full mb-8 xl:mb-0">B.car © 2023 • Desenvolvido por <a class="hover:text-white transition" href="https://fuselab.design/" target="_blank">Fuselab</a> <br> CNPJ 26.161.413/0001-41</p>
        <div class="w-full flex items-center justify-between flex-row-reverse xl:flex-row">
          <button @click="$scrollTop" class="flex items-center text-white gap-3" type="button">Voltar ao topo <VectorsArrowTop class="transition" /></button>
          <aside class="flex items-center gap-2">
            <a class="transition flex items-center justify-center w-12 h-12" href="https://fb.com/bcar.brasil" target="_blank"><VectorsFacebook /></a>
            <a class="transition flex items-center justify-center w-12 h-12" href="https://instagram.com/bcar.br" target="_blank"><VectorsInstagram /></a>
            <a class="transition flex items-center justify-center w-12 h-12" href="https://www.youtube.com/channel/UC-pm81K8kFR4XsXe6rfcsTg" target="_blank"><VectorsYoutube /></a>
          </aside>
        </div>
      </ElementsContainer>
    </footer>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $dark;

}

.logo {
  p {
    font: 500 24px/32px $inter;
  }
}

.links {

  h6 {
    color: $grey-3;
    opacity: .5;
    font-weight: 400 !important;
  }

  h6,
  p,
  a {
    font: 500 16px/24px $inter;

    @media screen and (max-width: $mobile) {
      font: 500 14px/22px $inter;
    }
  }

  p,
  a {
    color: $grey-3;
  }

  a {
    &:hover {
      color: $white;
    }
  }

  p {
    a {
      color: $grey-4;
    }
  }
}

.bottom {
  background: rgba(86, 86, 89, .08);

  p {
    font: 500 14px/22px $inter;
    color: $grey-4;
  }

  button {
    font: 500 16px/24px $inter;
    color: $grey-3;

    @media screen and (max-width: $mobile) {
      font-size: 14px;
    }

    &:hover svg {
      transform: translateY(-4px);
    }
  }

  aside {

    a {
      background: rgba(86, 86, 89, .24);

      &:hover {
        background: rgba(86, 86, 89, .48);
      }
    }
  }
}
</style>
