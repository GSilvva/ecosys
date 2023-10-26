<template>
  <main class="home pt-sm">
    <section class="header relative mb-32 my-14 xl:overflow-hidden">
      <ElementsContainer block>
        <section class="banner xl:flex items-center justify-between relative">
          <h1 class="text-white uppercase pl-4 sm:pl-0 xl:pl-10">
            <span class="text-white block">Chegou o novo</span>
            BMW X1 <br /> M1GT
          </h1>
          <figure class="xl:absolute">
            <picture>
              <source media="(max-width: 1180px)" srcset="/images/home/car-mob.png" />
              <img src="/images/home/car-desk.png" alt="Carro">
            </picture>
          </figure>
          <p class="text-white xl:flex items-end flex-col xl:text-right mt-12 xlmt-0 pl-4 sm:pl-0 sm:pr-8">
            Entrada de 20 mil <br /> s/ juros
            <nuxt-link class="text-white block pt-5 xl:pt-6" to="/comprar">Saiba mais</nuxt-link>
          </p>
        </section>
        <form class="form bg-white pt-6 px-5 sm:p-8 rounded mt-12 xl:mt-20 z-10 relative" action="" method="GET">
          <header class="flex gap-1.5 xl:gap-2 mb-6">
            <label class="relative block cursor-pointer" for="comprar">
              <input class="opacity-0 absolute" id="comprar" name="typeSearch" type="radio" checked>
              <span class="capitalize rounded-full py-3 px-5 sm:px-6 block transition">Comprar <small class="hidden sm:inline">carros</small></span>
            </label>
            <label class="relative block cursor-pointer" for="vender">
              <input class="opacity-0 absolute" id="vender" name="typeSearch" type="radio" check>
              <span class="capitalize rounded-full py-3 px-5 sm:px-6 block transition">Vender <small class="hidden sm:inline">meu carro</small></span>
            </label>
            <label class="relative block cursor-pointer" for="financiar">
              <input class="opacity-0 absolute" id="financiar" name="typeSearch" type="radio">
              <span class="capitalize rounded-full py-3 px-5 sm:px-6 block transition"><small class="hidden sm:inline">Quero</small> financiar</span>
            </label>
          </header>
          <footer class="sm:flex gap-4">
            <fieldset class="w-full flex items-center relative">
              <div class="absolute">
                <VectorsSearch />
              </div>
              <input class="block w-full h-14 sm:h-full pr-4" type="search" placeholder="Digite marca ou modelo do carro">
            </fieldset>
            <ElementsButton class="whitespace-nowrap w-full sm:w-auto" submit>Ver ofertas (101.559)</ElementsButton>
          </footer>
        </form>
      </ElementsContainer>
    </section>

    <section class="cars pb-20 xl:pb-48" data-animate>
      <ElementsContainer block>
        <h2 class="mb-8 sm:mb-12">Destaques</h2>
      </ElementsContainer>
      <ElementsContainer class="container" block>
        <section class="cards grid gap-1 xl:gap-8">
          <ElementsCardCar
            v-for="(car, index) in cars"
            :key="index"
            :url="`/comprar/${car.brand}/${car.slug}`"
            :photos="car.photos"
            :name="car.name"
            :brand="car.brand"
            :characteristics="car.characteristics"
            :transmission="car.transmission"
            :price="car.price"
            :old_price="car.old_price"
            :build_year="car.build_year"
            :model_year="car.model_year"
            :km="car.km"
            :store="car.store"
          />
        </section>
      </ElementsContainer>
    </section>

    <section class="services pb-28 xl:pb-48" data-animate>
      <ElementsContainer class="gap-8">
        <aside data-animate class="bg-white mb-12 xl:mb-0">
          <header class="p-6 sm:pt-10 sm:pr-10 sm:pb-14 sm:pl-14">
            <VectorsBuy class="xl:ml-auto mb-8 w-16 h-16" />
            <nuxt-link class="relative block" href="/comprar">
              <h5 class="sm:mb-4">Eu quero</h5>
              <h2>Comprar <br> ou trocar</h2>
              <div class="absolute bottom-1 sm:bottom-3 right-0 transition">
                <VectorsArrowRight class="w-3 xl:w-5" />
              </div>
            </nuxt-link>
          </header>
          <ul>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsEye class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Carros 100% vistoriados</h6>
                <p>Especialistas experientes que irão lhe auxiliar durante todo o processo de compra.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsShield class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Garantia de 1 ano*</h6>
                <p>Todas as nossas transações são seguras com garantia de procedência.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsDolla class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Ótimos preços</h6>
                <p>Todos os veículos ofertados seguem o valor de mercado.</p>
              </div>
            </li>
          </ul>
        </aside>

        <aside data-animate class="bg-white">
          <header class="p-6 sm:pt-10 sm:pr-10 sm:pb-14 sm:pl-14">
            <VectorsSale class="xl:ml-auto mb-8 w-16 h-16" />
            <nuxt-link class="relative block" href="/vender">
              <h5 class="sm:mb-4">Eu quero</h5>
              <h2>Vender <br> meu carro</h2>
              <div class="absolute bottom-1 sm:bottom-3 right-0 transition">
                <VectorsArrowRight class="w-3 xl:w-5" />
              </div>
            </nuxt-link>
          </header>
          <ul>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsSmiley class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Sem dores de cabeça</h6>
                <p>Proteção contra falsos compradores hora de comprar o seu carro novo.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsNotebook class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Venda sem pagar nada</h6>
                <p>Cuidamos de tudo na hora de vender seu carro e você não paga nada por isso.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsCar class="min-w-min" />
              <div class="w-full">
                <h6 class="mb-2">Deixe tudo com a gente</h6>
                <p>Resolvemos tudo por você na hora de vender seu carro e voce pode continuar usando ele.</p>
              </div>
            </li>
          </ul>
        </aside>
      </ElementsContainer>
    </section>
    
    <ElementsTestimonial />

    <!-- <section class="blog pb-28 xl:pb-48">
      <ElementsContainer block>
        <section class="relative bg-white flex-col-reverse xl:flex-row flex xl:items-end justify-between pl-6 md:pl-10 xl:pl-0">
          <aside data-animate class="w-full py-10 xl:py-24 pr-14 xl:pl-24 flex flex-col items-start">
            <h2 class="mb-5 xl:mb-8">Conheça <br> a Car News</h2>
            <p class="mb-6 xl:mb-8 w-full">Veja as noticias e conteúdos mais relevantes do mercado automotivo.</p>
            <ElementsButton href="https://bcar-blog.fuselab.design/">Ver últimas notícias</ElementsButton>
            <footer class="hidden xl:flex mt-12 pt-8">
              <span class="flex items-center">Veículos</span>
              <span class="flex items-center">Carros</span>
              <span class="flex items-center">Esportivos</span>
              <span class="flex items-center">E mais</span>
            </footer>
          </aside>

          <img data-animate class="relative z-20" src="/images/home/blog.png" alt="Blog">
        </section>
      </ElementsContainer>
    </section> -->

    <section class="blog pb-28 xl:pb-48">
      <ElementsContainer class="container" block>
        <section class="relative bg-white flex-col-reverse xl:flex-row flex xl:items-end justify-between px-6 sm:pr-0 md:pl-10 xl:pl-0">
          <aside data-animate class="w-full py-10 xl:py-24 xl:pl-24 flex flex-col items-start">
            <h2 class="mb-5 xl:mb-8">Em breve o seu portal de notícias</h2>
            <p class="w-full">Estamos trabalhando para trazer para você as noticias e conteúdos mais relevantes do mercado automotivo.</p>
            <footer class="flex pt-4 xl:pt-8 mt-10 xl:mt-16 relative">
              <span class="flex items-center">Veículos</span>
              <span class="flex items-center">Carros</span>
              <span class="flex items-center">Esportivos</span>
              <span class="flex items-center">E mais</span>
            </footer>
          </aside>

          <img data-animate class="relative z-20" src="/images/home/blog2.png" alt="Mockup mão segurando celular">
        </section>
      </ElementsContainer>
    </section>

    <section class="finance pb-24 xl:pb-48">
      <ElementsContainer center>
        <img data-animate class="mb-12 xl:mb-0 w-full" src="/images/home/finance.jpg" alt="Foto">
        <aside data-animate>
          <h6 class="mb-4 xl:mb-6">Financie com a gente</h6>
          <h2 class="mb-6 xl:mb-8">Agilidade e <br/> sem burocracia</h2>
          <p class="mb-6 xl:mb-10">Segurança, atendimento diferenciado e as melhores condições do mercado. Escolha o carro que deseja solicite um orçamento personalizado pelo nosso chat.</p>
          <ElementsButton href="/comprar">Escolher um carro</ElementsButton>
        </aside>
      </ElementsContainer>
    </section>

    <section class="discover relative">
      <ElementsContainer block class="container relative z-20">
        <section data-animate class="pt-24 pb-20 sm:p-24 relative overflow-hidden flex flex-col-reverse xl:flex-row justify-between items-center">
          <aside class="flex flex-col items-center xl:items-start max-w-md w-full mt-16 xl:mt-0 px-8 sm:px-0 z-20">
            <h2 class="text-center xl:text-left text-white !normal-case">Descubra agora o seu carro ideal</h2>
            <p class="text-center xl:text-left mt-6 mb-8 sm:my-8 text-white">Responda o nosso questionário a seguir. <br /> Cada pergunta respondida representa um caminho pra você encontrar seu carro ideal.</p>
            <ElementsButton
              black
              @click="openDiscover = true"
            >
              Descobrir meu carro
            </ElementsButton>
          </aside>
          <figure class="relative xl:absolute top-0 right-0 z-10 xl:h-full flex items-center">
            <img class="relative z-20" src="/images/general/mystery-car.png" alt="Carro misterioso">
            <img class="absolute right-0 z-10" src="/images/general/graphism-mystery-car.svg" alt="Graphismo">
          </figure>
        </section>
      </ElementsContainer>
    </section>

    <section class="featured">
      <ElementsContainer block>
        <section class="xl:flex items-center justify-between py-16 xl:pt-48 xl:pb-36">
          <figure data-animate class="relative w-full xl:pl-7 xl:pt-20 xl:pb-16">
            <article class="relative z-20 flex items-center xl:justify-center gap-6 xl:gap-8 mb-4 pb-4 xl:pb-0 xl:mb-8 xl:pr-36">
              <VectorsFirst />
              <p class="text-white">A autotech mais bem avaliada <br /> do segmento</p>
            </article>
            <img class="relative z-20 hidden xl:block" src="/images/home/car-footer.png" alt="Carro">
          </figure>
          <aside data-animate class="w-full">
            <h2 class="h1 text-white mb-6 md:mb-10">Mais de <br /> 200 carros <br /> pra você</h2>
            <p class="text-white w-full mb-8 md:mb-10">Veja nosso catálogo de veículos e fique a vontade para falar com a gente.</p>
            <ElementsButton href="/comprar">Ver todos os carros</ElementsButton>
          </aside>
        </section>
      </ElementsContainer>
    </section>
  </main>

  <ElementsDiscoverModal v-model:open="openDiscover" />
</template>

<script setup lang="ts">
const openDiscover = ref(false)
const cars = [
  {
      brand: "BMW",
      slug: "",
      photos: [
          {
              url_path: "/images/general/card4.png",
          },
          {
              url_path: "/images/general/car3.png",
          },
          {
              url_path: "/images/general/car2.jpg",
          },
      ],
      name: "M3",
      characteristics: "2.0 16V Diesel Limited 4X4",
      transmission: "Automático",
      price: 125900,
      old_price: 999999,
      build_year: 2018,
      model_year: 2019,
      km: 100000,
      store: "Webmotors"
  },
  {
      brand: "Toyota",
      slug: "",
      photos: [
          {
              url_path: "/images/general/car3.png",
          },
      ],
      name: "Corolla",
      characteristics: "2.0 16V Diesel Limited 4X4",
      transmission: "Automático",
      price: 125900,
      old_price: 999999,
      build_year: 2018,
      model_year: 2019,
      km: 100000,
      store: "Webmotors"
  },
  {
      brand: "BMW",
      slug: "",
      photos: [
          {
              url_path: "/images/general/carnew.png",
          },
          {
              url_path: "/images/general/card4.png",
          },
      ],
      name: "M3",
      characteristics: "2.0 16V Diesel Limited 4X4",
      transmission: "Automático",
      price: 125900,
      old_price: 999999,
      build_year: 2018,
      model_year: 2019,
      km: 100000,
      store: "Webmotors"
  }
]
</script>

<style lang="scss" scoped>
.header {
  background: $blue;
  margin: 0 0 120px 0;

  @media (max-width: $mobile) {
    margin: 0 0 108px 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 136px;
    background: $grey-1;
    z-index: 1;

    @media (max-width: $mobile) {
      height: 176px;
    }
  }

  .banner {
    padding: 53px 0 0 0;

    @media (max-width: $mobile) {
      padding: 60px 0 0 0; 
    }

    h1 {
      font: 600 80px/70px $poppins;

      @media (max-width: $mobile) {
        font: 600 56px/48px $poppins;
      }

      span {
        font: 600 24px/70px $poppins;

        @media (max-width: $mobile) {
          font: 600 16px/1.6 $poppins;
        }
      }
    }

    figure {
      top: -57px;
      left: 277px;

      @media (max-width: $tablet) {
        margin-top: -120px;
        transform: translateX(-48px);
        min-width: calc(100% + calc(48px * 2));
        max-width: calc(100% + calc(48px * 2));

        img {
          width: 100%;
        }
      }

      @media (max-width: $mobile) {
        margin-top: -52px;
        transform: translateX(-24px);
        min-width: calc(100% + calc(24px * 2));
        max-width: calc(100% + calc(24px * 2));
      }

      @media (max-width: 340px) {
        margin-top: -36px;
      }
    }

    p {
      font: 600 20px/24px $poppins;

      a {
        font: 500 16px/24px $poppins;
      }
    }
  }

  .form {

    @media (max-width: $mobile) {
      width: calc(100% + 16px);
      transform: translateX(-8px);
    }

    header {

      @media (max-width: 340px) {
        overflow-x: auto;
      }
      
      label {

        &:hover {

          span {
            border-color: $dark;
          }
        }

        input {

          &:checked ~ span {
            border-color: $blue;
            color: $blue;
            background: rgba(0, 146, 253, 0.04);
          }
        }

        span {
          border: 1px solid $grey-2;

          &,
          & * {
            font: 500 16px/24px $inter;

            @media (max-width: $mobile) {
              font-size: 14px;
            }
          }
        }
      }
    }

    footer {

      fieldset {

        @media (max-width: $mobile) {
          margin: 0 0 -13px 0;
        }

        div {
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
        }
        
        input {
          font: 500 16px/24px $inter;
          padding-left: 52px;
          border: 1px solid $grey-2;
          border-radius: 5px;
          background: #F5F6F7;

          &::placeholder {
            opacity: 1;
            color: rgba(17, 18, 20, .4);
          }
        }
      }

      button {
        
        @media (max-width: $mobile) {
          transform: translateY(50%);
        }
      }
    }
  }
}

.cars {

  .container {
    @media screen and (max-width: $tablet) {
      padding: 0;
    }
  }

  h2 {
    font: 600 40px/44px $poppins;
    @media (max-width: $mobile) {
      font: 600 28px/34px $poppins;
    }
  }

  .cards {
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));

    &.col {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: $tablet) {
      grid-template-columns: 1fr;
    }
  }
}

.services {
  aside {
    header {
      & > svg {
        @media (min-width: $tablet) {
          width: 72px !important;
          height: 72px !important;
        }
      }
    }
    a {
      h2 {
        font: 600 40px/44px $poppins;

        @media screen and (max-width: $mobile) {
          font: 600 24px/28px $poppins;
        }

        br {

          @media (max-width: $tablet) {
            display: none;
          }
        }
      }
      
      h5 {
        font: 500 18px/26px $inter;
        color: $grey-5;

        @media screen and (max-width: $mobile) {
          font: 500 16px/24px $inter;
        }
      }

      &:hover {
        div {
          transform: translateX(4px);
        }
      }
    }
    li {
      border-top: 4px solid $grey-1;
      @media screen and (max-width: $tablet) {
        border-top-width: 5px;
      }
        svg {
          min-width: 28px;
          height: 28px;
        }
      h6 {
        @include paragraph;
        font-weight: 600 !important;

        @media screen and (max-width: $mobile) {
          font: 600 18px/28px $inter;
        }
      }
      p {
        font: 500 18px/26px $inter; 
        @media screen and (max-width: $mobile) {
          font: 400 16px/24px $inter;
        }
      }
    }
  }
}

.finance {
  img {
    max-width: 592px;
    @media screen and (max-width: $tablet) {
      max-width: 100%;
    }
  }
  aside {
    max-width: 480px;
    h6 {
      font: 500 24px/32px $inter;
      @media screen and (max-width: $mobile) {
        font: 500 18px/26px $inter;
      }
    }
    h2 {
      @include titlePage;
      @media screen and (max-width: $mobile) {
        font: 600 28px/34px $poppins;
      }
    }
    p {
      font: 500 18px/26px $inter;
      @media screen and (max-width: $mobile) {
        font: 400 16px/24px $inter;
      }
    }
  }
}

.blog {

  .container {
    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  section {

    &::before {
      content: "";
      background: $grey-1;
      width: 100%;
      height: 96px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;

      @media screen and (max-width: $mobile) {
        height: 32px;
      }
    }

    aside {
      h2 {
        @include titlePage;

        @media screen and (max-width: $mobile) {
          br {
            display: none;
          }
        }
      }
      p {
        font: 500 20px/28px $inter;
        max-width: 440px;
        @media (max-width: $mobile) {
          font: 400 16px/24px $inter;
        }
      }
      footer {
        border-top: 1px solid $grey-2;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          left: 0;
          background: $blue;
          height: 4px;
          width: 20px;
        }
        span {
          color: $grey-5;
          font: 500 18px/24px $inter;
          @media (max-width: $mobile) {
            font: 500 14px/22px $inter;
          }
          &:not(:last-of-type) {
            &::after {
              content: "";
              min-width: 4px;
              height: 4px;
              margin: 0 16px;
              background: rgba(15, 15, 15, .2);
              display: block;
            }
          }
        }
      }
    }
  }
}

.discover {
  .container {
    @media screen and (max-width: $mobile) {
      padding: 0 16px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 130px;
    background: $dark;
    @media (max-width: $mobile) {
      height: 140px;
    }
  }
  section {
    background: $blue;
    aside {
      max-width: 450px;
      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }
      h2 {
        @include titlePage;
      }
      p {
        font: 400 18px/28px $inter;
        @media screen and (max-width: $mobile) {
          font: 400 14px/22px $inter;
          br {
            display: none;
          }
        }
      }
    }
    figure {
      img {
        &:first-of-type {
          right: -100px;
          @media (max-width: $tablet) {
            right: unset;
          }
        }
        &:last-of-type {
          top: -48px;
          @media (max-width: $mobile) {
            max-width: 296px;
            top: -60px;
            left: 12px;
            right: unset;
            width: 100%;
          }
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
      background: rgba(86, 87, 89, .24);

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
      max-width: 400px;

      p {
        font: 400 18px/30px $inter;
        color: $grey-2;

        @media screen and (max-width: $mobile) {
          font: 400 14px/24px $inter;
        }
      }
    }
  }
}
</style>