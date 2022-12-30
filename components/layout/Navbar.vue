<template>
  <nav :class="`nav bg-white fixed top-0 left-0 w-full transition ${openMenu ? 'nav--open' : ''}`">
    <ElementsContainer class="h-full" center>
      <aside class="content flex items-center gap-5 xl:gap-20 h-full">
        <button
          @click="openMenu = !openMenu"
          class="hamb flex xl:hidden relative z-40 transition"
          type="button"
        ></button>
        
        <nuxt-link class="logo relative z-40" to="/"><VectorsLogotype /></nuxt-link>

        <article class="menu h-full w-full bg-white top-0 right-0 opacity-0 translate-x-full xl:translate-x-0 xl:opacity-100 transition fixed xl:relative z-20 pt-28 xl:p-0 overflow-y-scroll lg:overflow">
          <div class="xl:h-full px-6 md:px-10 xl:p-0 md:flex md:flex-col md:items-start xl:block">
            <ul class="links flex xl:items-center flex-col xl:flex-row gap-6 xl:gap-8 xl:h-full">
              <li :class="`h-full flex items-center relative pl-8 xl:pl-0 ${link.mobile ? 'xl:hidden' : ''}`" v-for="(link, index) in navigationLinks" :key="index">
                <nuxt-link
                  class="transition"
                  :to="link.url"
                  :target="link.newLayer ? '_blank' : ''"
                >
                  {{ link.text }}
                </nuxt-link>
                <span class="absolute bottom-0 left-0 transition opacity-0 w-0.5 h-full xl:h-0.5 xl:w-full"></span>
              </li>
            </ul>

            <a class="call flex items-center gap-12 xl:hidden my-12 py-2.5 pl-3 rounded-full md:pr-14" href="tel:+551199999999" target="_blank">
              <VectorsPhone />
              Ligar para a b.car
            </a>
          </div>

          <footer class="stores pt-8 pb-10 px-6 md:px-10 xl:hidden">
            <div class="flex items-center gap-4 mb-5">
              <VectorsMap />
              <h6>Nossas lojas</h6>
            </div>
            <div class="flex flex-col gap-6">
              <p class="flex items-center justify-between">
                <span>
                  Terraço Shopping
                  <a class="block" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                </span>
                <VectorsArrowRight class="w-1.5" />
              </p>
              <p class="flex items-center justify-between">
                <span>
                  Boulevard Shopping
                  <a class="block" href="##" target="_blank">Sudoeste, Brasília/DF</a>
                </span>
                <VectorsArrowRight class="w-1.5" />
              </p>
              <p class="flex items-center justify-between">
                <span>
                  Águas Claras
                  <a class="block" href="##" target="_blank">Av. Jacarandá, 29, Brasília/DF</a>
                </span>
                <VectorsArrowRight class="w-1.5" />
              </p>
            </div>
          </footer>
        </article>
      </aside>

      <aside class="actions flex items-center gap-12 relative z-10">
        <nuxt-link class="support hidden md:flex items-center gap-2 transition opacity-50 hover:opacity-100" to="/central-ajuda">
          <VectorsSupport />
          Central de ajuda
        </nuxt-link>
        <nuxt-link class="login rounded-full flex items-center gap-3 sm:gap-4 py-2 pl-1.5 sm:pl-2 pr-4 sm:pr-5 transition h-11 sm:h-12" to="/area-cliente">
          <VectorsLogin />
          Entrar
        </nuxt-link>
      </aside>
    </ElementsContainer>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const openMenu = ref(false);

const navigationLinks = [
  {
    text: "Estoque",
    url: "/comprar",
    newLayer: false,
    mobile: false
  },
  {
    text: "Venda seu carro",
    url: "/vender",
    newLayer: false,
    mobile: false
  },
  {
    text: "Descubra",
    url: "/descubra",
    newLayer: false,
    mobile: false
  },
  {
    text: "CN News",
    url: "/cn-news",
    newLayer: false,
    mobile: false
  },
  {
    text: "Dúvidas e sugestões",
    url: "/cn-news",
    newLayer: false,
    mobile: true
  },
];
</script>

<style lang="scss" scoped>
.nav {
  height: 88px;
  box-shadow: $nav;

  &.nav--fixed {
    height: 72px;
  }

  &.nav--open {
    .hamb {
      background: $white;
      transform: rotate(180deg);

      &::before {
        transform: translateY(7px) rotate(-45deg);
      }
      &::after {
        transform: translateY(-7px) rotate(45deg);
      }
    }
    
    .menu {
      opacity: 1;
      transform: translateX(0);
    }

    @media screen and (max-width: $tablet) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 30;
        background: $white;
      }
    }
  }

  @media screen and (max-width: $mobile) {
    height: 64px;
  }
}

.logo {

  svg {
    @media screen and (max-width: $mobile) {
      width: 79px;
      height: 28px;
    }
  }
}

.hamb {
  &,
  &::before,
  &::after {
    background: $dark;
    height: 2px;
    min-width: 20px;
    max-width: 20px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: .3s ease;
  }

  &::before {
    top: -7px;
  }

  &::after {
    bottom: -7px;
  }
}

.links {
  @media screen and (max-width: $tablet) {
    border-left: 1px solid $grey-2;
  }
  
  li {

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $grey-4;

      @media screen and (max-width: $tablet) {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }

      &:hover {
        color: $dark;
      }

      &.router-link-active {
        color: $dark;

        & ~ span {
          opacity: 1;
        }
      }
    }

    span {
      background: $orange;

      @media screen and (max-width: $tablet) {
        left: -1px;
      }
    }
  }
}

.call {
  border: 1px solid $grey-2;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.stores {
  background: $grey-1;

  div {

    h6 {
      color: $grey-5;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    p {
      color: $dark;

      span {
        color: $dark;
      }
    }
  }
}

.support {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.login {
  border: 1px solid $grey-2;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: $mobile) {
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    background: $orange;
    border-color: $orange;
    color: $white;
  }
}
</style>