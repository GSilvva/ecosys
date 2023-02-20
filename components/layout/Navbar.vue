<template>
  <nav :class="`nav bg-white fixed top-0 left-0 w-full transition z-40 ${openMenu ? 'nav--open' : ''} ${shadow ? 'shadow' : ''}`">
    <ElementsContainer :class="`h-full flex ${full ? 'full' : ''}`" center>
      <aside class="content flex items-center xl:gap-20 h-full">
        <button
          @click="openMenu = !openMenu"
          class="hamb flex items-center w-10 h-10 xl:hidden relative z-40 transition"
          type="button"
        >
          <div class="relative transition"></div>
        </button>
        
        <nuxt-link class="logo relative z-40" to="/"><VectorsLogotype /></nuxt-link>

        <article :class="`menu h-full w-full bg-white top-0 right-0 opacity-0 translate-x-full xl:translate-x-0 xl:opacity-100 transition fixed xl:relative z-20 ${userName ? 'pt-16 diff' : 'pt-28'} xl:p-0 overflow-y-scroll xl:overflow-y-visible`">
          <div class="xl:h-full px-6 md:px-12 xl:p-0 md:flex md:flex-col md:items-start xl:block">

            <div v-if="userName" class="xl:hidden pt-6 pb-10 mb-10 px-6 sm:px-12 account">
              <h6 class="mb-6 subtitle">Área do cliente</h6>
              <ul class="links flex xl:items-center flex-col xl:flex-row gap-6 xl:gap-8 xl:h-full">
                <li
                  class="h-full flex items-center relative pl-8 xl:pl-0"
                  v-for="link in navigationLinksClient"
                  :key="link.text"
                >
                  <nuxt-link
                    @click="openMenu = false"
                    class="transition"
                    :to="link.url"
                    :target="link.newLayer ? '_blank' : ''"
                  >
                    {{ link.text }}
                  </nuxt-link>
                  <span class="absolute bottom-0 left-0 transition opacity-0 w-0.5 h-full xl:h-0.5 xl:w-full"></span>
                </li>
              </ul>
            </div>

            <h6 v-if="userName" class="mb-6 subtitle xl:hidden">Navegação</h6>

            <ul class="links flex xl:items-center flex-col xl:flex-row gap-6 xl:gap-8 xl:h-full">
              <li :class="`h-full flex items-center relative pl-8 xl:pl-0 ${link.mobile ? 'xl:hidden' : ''} ${!link.active ? 'disabled' : ''}`" v-for="(link, index) in navigationLinks" :key="index">
                <nuxt-link
                  @click="openMenu = false"
                  :class="`transition ${!link.active ? 'flex items-center gap-2.5' : ''}`"
                  :to="link.active ? link.url : ''"
                  :target="link.newLayer ? '_blank' : ''"
                >
                  {{ link.text }}
                  <small v-if="!link.active" class="uppercase inline-block px-2 py-1.5">EM BREVE</small>
                </nuxt-link>
                <span class="absolute bottom-0 left-0 transition opacity-0 w-0.5 h-full xl:h-0.5 xl:w-full"></span>
              </li>
            </ul>

            <a class="call flex items-center gap-12 xl:hidden my-12 py-2.5 pl-3 rounded-full md:pr-14" href="tel:+551199999999" target="_blank">
              <VectorsPhone />
              Ligar para a b.car
            </a>
          </div>

          <footer class="stores pt-8 pb-10 px-6 md:px-12 xl:hidden">
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

      <aside :class="`actions flex items-center gap-12 relative z-40`">
        <nuxt-link class="support hidden md:flex items-center gap-2 transition opacity-50 hover:opacity-100" to="/central-ajuda" @click="$scrollBody">
          <VectorsSupport />
          Central de ajuda
        </nuxt-link>
        <nuxt-link
          class="login rounded-full flex items-center gap-3 sm:gap-4 py-2 pl-1.5 sm:pl-2 pr-4 sm:pr-5 transition h-11 sm:h-12"
          :to="userName ? '/area-cliente/compra' : '/area-cliente'"
          @click="$scrollBody"
          @mouseenter="submenu = true"
          @mouseleave="submenu = false"
        >
          <VectorsLogin />
          <template v-if="userName">
            {{ userName }}
          </template>
          <template v-else> 
            Entrar
          </template>
        </nuxt-link>
        <div
          v-if="userName"
          :class="`submenu invisible pt-3 opacity-0 transition hidden xl:block ${submenu ? '!visible !opacity-100' : ''}`"
          @mouseenter="submenu = true"
          @mouseleave="submenu = false"
        >
          <div class="box pt-2.5 bg-white flex flex-col">
            <nuxt-link
              class="w-full transition py-2.5 px-6"
              :to="link.url"
              :target="link.newLayer ? '_blank' : ''"
              v-for="link in navigationLinksClient"
              :key="link.text"
            >
              {{ link.text }}
            </nuxt-link>
            <div class="px-6 pt-2.5">
              <nuxt-link to="/area-cliente/entrar" class="w-full transition py-5 block">Sair</nuxt-link>
            </div>
          </div>
        </div>
      </aside>
    </ElementsContainer>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const openMenu = ref(false);
const userName = ref("Tiago")
const submenu = ref(false)
const navigationLinks = [
  {
    text: "Estoque",
    url: "/comprar",
    newLayer: false,
    mobile: false,
    active: true,
  },
  {
    text: "Venda seu carro",
    url: "/vender",
    newLayer: false,
    mobile: false,
    active: true,
  },
  {
    text: "Descubra",
    url: "/descubra",
    newLayer: false,
    mobile: false,
    active: true,
  },
  {
    text: "News",
    url: "",
    newLayer: false,
    mobile: false,
    active: false,
  },
  {
    text: "Dúvidas e sugestões",
    url: "/central-ajuda",
    newLayer: false,
    mobile: true,
    active: true,
  },
];
const navigationLinksClient = [
  {
    text: "Favoritos",
    url: "/area-cliente/favoritos",
    newLayer: false,
  },
  {
    text: "Compra",
    url: "/area-cliente/compra",
    newLayer: false,
  },
  {
    text: "Venda",
    url: "/area-cliente/venda",
    newLayer: false,
  },
  {
    text: "Meus carros",
    url: "/area-cliente/meus-carros",
    newLayer: false,
  },
  {
    text: "Perfil",
    url: "/area-cliente/perfil",
    newLayer: false,
  }
];

defineProps({
  full: Boolean,
  shadow: Boolean,
})
</script>

<style lang="scss" scoped>
.nav {
  height: 88px;

  @media screen and (max-width: $tablet) {
    height: 72px;
  }

  @media screen and (max-width: $mobile) {
    height: 64px;
  }

  &.nav--fixed {
    height: 72px;
    box-shadow: $nav;

    @media screen and (max-width: $mobile) {
      height: 64px;
    }
  }

  &.nav--open {
    .hamb {
      
      div {
        background: $white;
        transform: rotate(180deg);

        &::before {
          transform: translateY(7px) rotate(-45deg);
        }

        &::after {
          transform: translateY(-7px) rotate(45deg);
        }
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
}

.shadow {
  box-shadow: $nav;
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
  
  div {
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
}

.links {
  @media screen and (max-width: $tablet) {
    border-left: 1px solid $grey-2;
  }
  
  li {

    &.disabled {

      a {
        cursor: not-allowed;
        color: rgba(125, 126, 128, .5);

        &:hover,
        &.router-link-active {
          color: rgba(125, 126, 128, .5);
        }

        small {
          font: 700 10px/1 $gotham;
          color: rgba(125, 126, 128, .5);
          border: 1px solid $grey-2;
        }
      }
    }

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

.account {
  border-top: 4px solid $grey-1;
  border-bottom: 4px solid $grey-1;
  width: calc(100% + 96px);
  transform: translateX(-48px);
  @media screen and (max-width: $mobile) {
    width: calc(100% + 48px);
    transform: translateX(-24px);
  }
}

.subtitle {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: $grey-4;
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

.submenu {
  max-width: 250px;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);

  .box {
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $grey-4;

      &:hover {
        color: $dark;
        background: #F5F6F7;
      }
    }
    div {
      a {
        border-top: 1px solid $grey-2;
        &:hover {
          background: $white;
        }
      }
    }
  }
}

.diff {
  @media (min-width: $mobile) and (max-width: $tablet) {
    padding-top: 72px;
  }
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