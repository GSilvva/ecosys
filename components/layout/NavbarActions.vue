<template>
  <nav class="nav bg-white fixed top-0 left-0 w-full transition z-40">
    <ElementsContainer class="h-full flex" center>
        <nuxt-link class="logo relative z-40" to="/"><VectorsLogotype /></nuxt-link>

        <slot />

        <nuxt-link class="login rounded hidden xl:flex items-center gap-3 sm:gap-4 py-2 pl-1.5 sm:pl-2 pr-4 sm:pr-5 transition h-11 sm:h-12" to="/area-cliente" @click="$scrollBody">
          <VectorsLogin />
          Entrar
        </nuxt-link>
    </ElementsContainer>
  </nav>
</template>

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
}

.logo {

  svg {
    @media screen and (max-width: $mobile) {
      width: 79px;
      height: 28px;
    }
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
    background: $blue;
    border-color: $blue;
    color: $white;
  }
}
</style>