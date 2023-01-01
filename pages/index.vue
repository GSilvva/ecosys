<template>
  <NuxtLayout>
    <section class="header pt-big">
      <ElementsContainer block>
        <section class="call xl:flex justify-between">
          <aside class="xl:pt-12 pb-8 xl:pb-28">
            <h1 class="h1">compre, venda ou troque seu carro</h1>
            <p class="mt-8 xl:mt-10">Tudo de forma inteligente, <br> segura e simplificada.</p>
            <div class="mt-8 xl:hidden">
              <ElementsButton href="/comprar" class="h-16 flex items-center justify-between md:justify-center gap-6">
                Catálogo de carros
                <VectorsArrowRightBig />
              </ElementsButton>
              <ElementsButton href="/vender" class="h-16 mt-4" outline>Vender meu carro</ElementsButton>
            </div>
          </aside>

          <figure class="relative w-full xl:pr-10 pb-6 xl:pt-14 xl:pb-24 bg-white">
            <article class="relative z-20 flex items-center xl:justify-center gap-6 xl:gap-8 mb-6 xl:mb-12 xl:pl-36 pb-6 xl:pb-0">
              <VectorsFirst />
              <p>A autotech mais bem <br> avaliada do segmento</p>
            </article>
            <img class="relative z-20 pr-6 xl:pr-0" src="@/images/home/car-header.png" alt="Carro">
          </figure>
        </section>

        <footer class="actions xl:flex">
          <a class="more bg-white w-full h-full items-center justify-center gap-4 hidden xl:flex" href="#sobre"><VectorsArrowBottom class="transition" /> Veja mais</a>
          <div class="thumb w-full h-full" type="button">
            <ElementsVideo
              thumbnail="./images/home/thumbnail.jpg"
              video="https://www.youtube.com/embed/dYk_2QXpkgc"
            />
          </div>
          <nuxt-link class="big-btn w-full overflow-hidden relative h-full hidden xl:block" to="/comprar">
            <span class="text-white flex items-center justify-center gap-24 h-full relative z-10">
              Catálogo de carros
              <VectorsArrowRightBig class="transition" />
            </span>
          </nuxt-link>
        </footer>
      </ElementsContainer>
    </section>

    <section class="about pt-32 pb-32 xl:pt-48 xl:pb-48" id="sobre">
      <ElementsContainer block>
        <section class="w-full mx-auto">
          <p class="mb-12 xl:mb-20">A b.car está há mais 10 anos no marcado foi a primeira marketplace de veículos seminovos do país e possui expertise no mercado de veículos para proporcionar a todos os clientes um bom negócio.</p>
          <div class="flex items-center gap-8 xl:gap-20">
            <VectorsIconLogo />
            <p class="w-full">Nossa missão é te ajudar a realizar o sonho de comprar um seminovo com garantia, qualidade e segurança.</p>
          </div>
        </section>
      </ElementsContainer>
    </section>

    <section class="services pb-48">
      <ElementsContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut in dolor consequatur quas recusandae maxime aliquam corrupti, quaerat voluptatibus dicta ea commodi amet odio, sint nam modi facilis iste.</p>
      </ElementsContainer>
    </section>

    <section class="featured">
      <ElementsContainer block>
        <section class="xl:flex items-center justify-between py-16 xl:pt-40 xl:pb-32">
          <figure class="relative w-full xl:pl-7 xl:pt-20 xl:pb-16">
            <article class="relative z-20 flex items-center xl:justify-center gap-6 xl:gap-8 mb-6 pb-6 xl:pb-0 xl:mb-8 xl:pr-36">
              <VectorsFirst />
              <p class="text-white">A autotech mais bem <br> avaliada do segmento</p>
            </article>
            <img class="relative z-20 hidden xl:block" src="@/images/home/car-footer.png" alt="Carro">
          </figure>
          <aside class="flex flex-col items-start w-full">
            <h2 class="h1 text-white mb-6 md:mb-10">Mais de <br> 200 carros pra você</h2>
            <p class="text-white w-full mb-8 md:mb-10">Veja nosso catálogo de veículos e fique a vontade para falar com a gente ou nos visitar em brasília.</p>
            <ElementsButton href="/comprar">Ver todos os carros</ElementsButton>
          </aside>
        </section>
      </ElementsContainer>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.header {
  .call {
    aside {
      max-width: 465px;
      width: 100%;
      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }
    }

    figure {
      max-width: 632px;

      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 112px;
        height: 100%;
        background: $grey-1;

        @media screen and (max-width: $mobile) {
          widows: 72px;
        }
      }

      article {
        @media screen and (max-width: $tablet) {
          background: $grey-1;
        }

        @media screen and (max-width: $mobile) {          
          svg {
            width: 48px;
            height: 48px;
          }
        }

        p {
          color: $dark;
          font: 400 18px/26px $inter;

          @media screen and (max-width: $mobile) {
            font: 400 14px/20px $inter;
          }
        }
      }
    }
  }

  .actions {
    height: 120px;

    @media screen and (max-width: $tablet) {
      height: 140px;
    }
    
    .more {
      font: 500 18px/24px $inter;

      svg {
        animation: bounce 3s ease infinite;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-12px);
        }
        60% {
          transform: translateY(-6px);
        }
      }
    }

    .thumb {
      max-width: 344px;

      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }
    }

    .big-btn {
      max-width: 520px;
      min-width: 520px;
      background: $orange;

      span {
        font: 500 18px/24px $inter;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -50px;
        bottom: 0;
        left: 0;
        border-right: 50px solid transparent;
        border-top: 120px solid $light-orange;
        transform: translateX(-100%);
        z-index: 1;
        transition: .5s ease;
      }

      &:hover {
        &::before {
          transform: translateX(0);
        }
        svg {
          transform: translateX(6px);
        }
      }
    }
  }
}

.about {
  section {
    max-width: 750px;
    
    & > p {
      font: 500 40px/48px $inter;
      color: $dark;
      @media screen and (max-width: $mobile) {
        font: 500 24px/32px $inter;
      }
    }

    div {
      p {
        max-width: 420px;
        @media screen and (max-width: $mobile) {
          font: 400 14px/20px $inter;
        }
      }

      svg {
        min-width: 72px;
        max-width: 72px;
        height: 72px;

        @media screen and (max-width: $mobile) {
          min-width: 56px;
          max-width: 56px;
          height: 56px;
        }
      }
    }
  }
}

.featured {
  background: $dark;

  section {
    border-bottom: 1px solid rgba(86, 86, 89, .2);

    figure {
      max-width: 640px;
      background: rgba(86, 86, 89, .24);

      @media screen and (max-width: $tablet) {
        background: transparent;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        width: 120px;
        height: 100%;
        background: $dark;
      }

      article {
        @media screen and (max-width: $mobile) {
          svg {
            width: 48px;
            height: 48px;
          }
        }

        p {
          font: 400 18px/26px $inter;

          @media screen and (max-width: $mobile) {
            font: 400 14px/20px $inter;
          }
        }
      }
    }

    aside {
      max-width: 495px;

      p {
        font: 400 22px/30px $inter;
        max-width: 420px;

        @media screen and (max-width: $mobile) {
          font: 400 18px/26px $inter;
        }
      }
    }
  }
}
</style>