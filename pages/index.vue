<template>
  <main class="home">
    <section class="header pt-big">
      <ElementsContainer block>
        <section class="call xl:flex items-end justify-between">
          <aside class="pb-16 xl:pb-0">
            <h1 class="h1">compre, venda ou troque seu carro</h1>
            <p class="mt-8 xl:mt-10">Tudo de forma inteligente, <br> segura e simplificada.</p>
            <div class="mt-8 xl:mt-12 w-full">
              <ElementsButton href="/comprar" class="h-16 md:h-20 flex items-center justify-between mb-3 md:mb-4">
                Comprar ou trocar
                <VectorsArrowRightBig />
              </ElementsButton>
              <ElementsButton href="/vender" class="h-16 md:h-20 mt-3 flex items-center justify-between" outline>
                Vender
                <VectorsArrowLeftBig />
              </ElementsButton>
            </div>
          </aside>

          <figure class="w-full">
            <div class="car relative xl:pr-10 xl:pt-16 pb-6 xl:pb-16 bg-white">
              <article class="relative z-20 flex items-center xl:justify-center gap-6 xl:gap-8 mb-6 xl:mb-12 xl:pl-36 pb-7 xl:pb-0">
                <VectorsFirst />
                <p>A autotech mais bem avaliada <br> do segmento</p>
              </article>
              <img class="relative z-20 pr-6 xl:pr-0" src="/images/home/car-header.png" alt="Carro">
            </div>
            <div class="thumb ml-auto w-full">
              <ElementsVideo video="https://www.youtube.com/embed/dYk_2QXpkgc">
                <img class="h-full w-full object-cover opacity-60" src="/images/home/thumbnail.jpg" alt="Foto">
                <div class="text absolute top-1/2 left-8 md:left-20 flex items-center gap-6">
                  <div class="transition h-19 w-19">
                    <VectorsPlay />
                  </div>
                  <p class="text-white text-left">Veja como <br> funciona</p>
                </div>
              </ElementsVideo>
            </div>
          </figure>
        </section>
      </ElementsContainer>
    </section>

    <section class="about pt-24 xl:pt-36 pb-32 xl:pb-48" id="sobre">
      <ElementsContainer block>
        <div class="text flex items-center gap-8 xl:gap-12 mb-20 xl:mb-36">
          <VectorsIconLogo />
          <p class="w-full">Há 10 anos resolvendo a vida de quem quer comprar ou vender um seminovo com garantia e segurança.</p>
        </div>
        <h2 class="title mb-8 md:mb-12 xl:mb-20">visite nossas <br> lojas em brasília</h2>
        <section class="cards flex justify-between gap-6 md:gap-8 overflow-x-auto xl:overflow-x-visible px-6 md:px-12 xl:px-0">
          <div class="card w-full">
            <img class="object-cover w-full h-60 xl:h-72" src="/images/general/terraco.jpg" alt="Foto">
            <div class="pt-6 xl:p-10 xl:bg-white">
              <header class="mb-6 flex justify-between xl:block">
                <aside>
                  <h3 class="mb-1">Terraço Shopping</h3>
                  <h6>Sudoeste, Brasília/DF</h6>
                </aside>
                <a class="inline-block xl:hidden underline mt-1" href="##" target="_blank">Ver no maps</a>
              </header>
              <p>
                <strong>Seg a Sex:</strong> 8h30 às 18h
                <br>
                <strong>Sáb:</strong> 9h às 14h
              </p>
              <a class="hidden xl:inline-block underline mt-6" href="##" target="_blank">Ver no maps</a>
            </div>
          </div>
          <div class="card w-full">
            <img class="object-cover w-full h-60 xl:h-72" src="/images/general/boulevard.jpg" alt="Foto">
            <div class="pt-6 xl:p-10 xl:bg-white">
              <header class="mb-6 flex justify-between xl:block">
                <aside>
                  <h3 class="mb-1">Boulevard Shopping</h3>
                  <h6>Sudoeste, Brasília/DF</h6>
                </aside>
                <a class="inline-block xl:hidden underline mt-1" href="##" target="_blank">Ver no maps</a>
              </header>
              <p>
                <strong>Seg a Sex:</strong> 8h30 às 18h
                <br>
                <strong>Sáb:</strong> 9h às 14h
              </p>
              <a class="hidden xl:inline-block underline mt-6" href="##" target="_blank">Ver no maps</a>
            </div>
          </div>
          <div class="card w-full">
            <img class="object-cover w-full h-60 xl:h-72" src="/images/general/aguas-claras.jpg" alt="Foto">
            <div class="pt-6 xl:p-10 xl:bg-white">
              <header class="mb-6 flex justify-between xl:block">
                <aside>
                  <h3 class="mb-1">Águas Claras</h3>
                  <h6>Sudoeste, Brasília/DF</h6>
                </aside>
                <a class="inline-block xl:hidden underline mt-1" href="##" target="_blank">Ver no maps</a>
              </header>
              <p>
                <strong>Seg a Sex:</strong> 8h30 às 18h
                <br>
                <strong>Sáb:</strong> 9h às 14h
              </p>
              <a class="hidden xl:inline-block underline mt-6" href="##" target="_blank">Ver no maps</a>
            </div>
          </div>
        </section>
      </ElementsContainer>
    </section>

    <section class="services pb-28 xl:pb-48">
      <ElementsContainer class="gap-8">
        <aside class="bg-white mb-6 xl:mb-0">
          <header class="py-6 px-6 md:pt-10 md:pr-10 md:pb-14 md:pl-14">
            <VectorsBuy class="ml-auto mb-8" />
            <nuxt-link class="relative block" href="/comprar">
              <h5 class="mb-4">Eu quero</h5>
              <h2 class="uppercase">Comprar <br> ou trocar</h2>
              <div class="absolute bottom-3 right-7 xl:right-0 transition">
                <VectorsArrowRight class="w-5" />
              </div>
            </nuxt-link>
          </header>
          <ul>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsEye class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Carros 100% vistoriados</h6>
                <p>Especialistas experientes que irão lhe auxiliar durante todo o processo de compra.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsShield class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Garantia de 1 ano*</h6>
                <p>Todas as nossas transações são seguras com garantia de procedência.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsDolla class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Ótimos preços</h6>
                <p>Todos os veículos ofertados seguem o valor de mercado.</p>
              </div>
            </li>
          </ul>
        </aside>

        <aside class="bg-white">
          <header class="py-6 px-6 md:pt-10 md:pr-10 md:pb-14 md:pl-14">
            <VectorsSale class="ml-auto mb-8" />
            <nuxt-link class="relative block" href="/vender">
              <h5 class="mb-4">Eu quero</h5>
              <h2 class="uppercase">Vender <br> meu carro</h2>
              <div class="absolute bottom-3 right-7 xl:right-0 transition">
                <VectorsArrowRight class="w-5" />
              </div>
            </nuxt-link>
          </header>
          <ul>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsSmiley class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Sem dores de cabeça</h6>
                <p>Proteção contra falsos compradores hora de comprar o seu carro novo.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsNotebook class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Venda sem pagar nada</h6>
                <p>Cuidamos de tudo na hora de vender seu carro e você não paga nada por isso.</p>
              </div>
            </li>
            <li class="py-6 px-6 md:pt-10 md:pb-10 md:pl-14 md:pr-20 flex gap-6">
              <VectorsCar class="w-7" />
              <div class="w-full">
                <h6 class="mb-2">Deixe tudo com a gente</h6>
                <p>Resolvemos tudo por você na hora de vender seu carro e voce pode continuar usando ele.</p>
              </div>
            </li>
          </ul>
        </aside>
      </ElementsContainer>
    </section>
    
    <ElementsTestimonial
      photo="./images/home/man.png"
      name="Tiago Luchtenberg"
      description="Comprou seu BMW Vulcano"
    >
      Um ótimo negócio para quem deseja vender ou comprar seu carro sem dor de cabeça. Ótimo atendimento e colaboradores excepcionais. Indico de olhos fechados a b.car.
    </ElementsTestimonial>

    <section class="finance pb-24 xl:pb-36">
      <ElementsContainer center>
        <img class="mb-12 xl:mb-0 w-full" src="/images/home/finance.jpg" alt="Foto">
        <aside>
          <h6 class="mb-4 xl:mb-6">Financie com a gente</h6>
          <h2 class="mb-6 xl:mb-8">Agilidade e sem burocracia</h2>
          <p class="mb-6 xl:mb-8">Segurança, atendimento diferenciado e as melhores condições do mercado. Escolha o carro que deseja solicite um orçamento personalizado pelo nosso chat.</p>
          <ElementsButton href="/comprar">Escolher um carro</ElementsButton>
        </aside>
      </ElementsContainer>
    </section>

    <section class="blog pb-28 xl:pb-48">
      <ElementsContainer block>
        <section class="relative bg-white flex-col-reverse xl:flex-row flex xl:items-end justify-between pl-6 md:pl-10 xl:pl-0">
          <aside class="w-full py-10 xl:py-24 pr-14 xl:pl-24 flex flex-col items-start">
            <h2 class="mb-5 xl:mb-8">Conheça <br> a Car News</h2>
            <p class="mb-6 xl:mb-8 w-full">Veja as noticias e conteúdos mais relevantes do mercado automotivo.</p>
            <ElementsButton href="/news">Ver últimas notícias</ElementsButton>
            <footer class="hidden xl:flex mt-12 pt-8">
              <span class="flex items-center">Veículos</span>
              <span class="flex items-center">Carros</span>
              <span class="flex items-center">Esportivos</span>
              <span class="flex items-center">E mais</span>
            </footer>
          </aside>

          <img class="relative z-20" src="/images/home/blog.png" alt="Blog">
        </section>
      </ElementsContainer>
    </section>

    <ElementsTestimonial
      photo="./images/home/women.png"
      name="Luciana Gimenez"
      description="Vendeu seu Chevrolet Camaro"
    >
      Atendimento profissional, respeitoso, tanto com o cliente vendedor quanto para o cliente comprador. <br><br> Vendi o meu carro pela BCar e em todos os contatos fui muito bem orientada e recebi todos os feedbacks necessários para uma transação de qualidade.
    </ElementsTestimonial>

    <section class="discover pb-14 xl:pb-48 relative">
      <ElementsContainer block class="container relative z-20">
        <section class="overflow-hidden px-6 pt-24 xl:pt-28 xl:pr-8 pb-16 xl:pb-10 xl:pl-24">
          <div class="flex flex-col-reverse xl:flex-row justify-between items-center">
            <aside class="flex flex-col items-center xl:items-start w-full mt-16 xl:mt-0">
              <h2 class="text-center xl:text-left text-white !normal-case">DESCUBRA AGORA O SEU b.car IDEAL</h2>
              <p class="text-center xl:text-left mt-6 mb-8 xl:my-8 text-white">Responda o nosso questionário a seguir. Cada pergunta respondida representa um caminho pra você encontrar seu carro ideal.</p>
              <ElementsButton black href="/descubra">Descobrir meu carro</ElementsButton>
            </aside>
            <figure class="relative w-full">
              <img class="mix-blend-multiply relative z-20" src="/images/general/mystery-car.png" alt="Carro misterioso">
              <img class="absolute top-1/2 left-1/2 z-10" src="/images/general/graphism-mystery-car.svg" alt="Graphismo">
            </figure>
          </div>
          <h6 class="hidden xl:block text-white text-right pr-2 mt-3.5">Entre 200 veículos, <br> 1 com certeza tem a sua cara</h6>
        </section>
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
            <img class="relative z-20 hidden xl:block" src="/images/home/car-footer.png" alt="Carro">
          </figure>
          <aside class="w-full">
            <h2 class="h1 text-white mb-6 md:mb-10">Mais de <br> 200 carros pra você</h2>
            <p class="text-white w-full mb-8 md:mb-10">Veja nosso catálogo de veículos e fique a vontade para falar com a gente ou nos visitar em brasília.</p>
            <ElementsButton href="/comprar">Ver todos os carros</ElementsButton>
          </aside>
        </section>
      </ElementsContainer>
    </section>
  </main>
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

      p {
        font: 400 22px/30px $inter;
      }

      div {
        max-width: 375px;
        @media screen and (max-width: $tablet) {
          max-width: 100%;
        }
      }
    }

    figure {
      max-width: 632px;

      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }

      .car {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          height: 100%;
          background: $grey-1;
          width: 112px;

          @media screen and (max-width: $mobile) {
            width: 72px;
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

      .thumb {
        max-width: calc(100% - 112px);
        background: $dark;
        height: 136px;

        @media screen and (max-width: $tablet) {
          max-width: 100%;
          height: 140px;
        }

        .text {
          transform: translateY(-50%);

          div {
            animation: scale 3s ease infinite;
            width: 72px;
            height: 72px;

            @media screen and (max-width: $mobile) {
              width: 56px;
              height: 56px;
            }

            svg {
              width: 100%;
              height: 100%;
            }

            @keyframes scale {
                  0%, 40%, 80%, 100% {
                      transform: scale(1);
                  }
                  30% {
                      transform: scale(1.2);
                  }
                  60% {
                      transform: scale(1);
                  }
            }
          }

          p {
            font: 500 18px/24px $inter;

            @media screen and (max-width: $mobile) {
              font: 500 16px/22px $inter;
            }
          }
        }
      }
    }
  }
}

.about {
  .text {
    p {
      max-width: 375px;
      font: 400 18px/26px $inter;
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

  .title {
    @include titlePage;
  }

  .cards {

    @media screen and (max-width: $tablet) {
      width: calc(100% + 96px);
      transform: translateX(-48px);
    }

    @media screen and (max-width: $mobile) {
      width: calc(100% + 48px);
      transform: translateX(-24px);
    }

    .card {

      @media screen and (max-width: $tablet) {
        min-width: 330px;
        max-width: 330px;
      }

      @media screen and (max-width: 390px) {
        min-width: 305px;
        max-width: 305px;
      }

      h3 {
        font: 600 24px/32px $inter;

        @media screen and (max-width: $tablet) {
          font: 500 20px/28px $inter;
        }
      }

      h6 {
        font: 400 18px/26px $inter;
        color: $grey-5;
        
        @media screen and (max-width: $tablet) {
          font: 400 16px/22px $inter;
        }
      }

      p {
        font: 400 16px/24px $inter;

        @media screen and (max-width: $tablet) {
          font-size: 14px;
          line-height: 22px;
        }

        strong {
          font-weight: 500;
        }
      }

      a {
        font: 500 16px/24px $inter;

        @media screen and (max-width: $tablet) {
          font: 500 14px/20px $inter;
        }
      }
    }
  }
}

.services {

  aside {
    a {
      font: 700 40px/44px $gotham;
      @media screen and (max-width: $mobile) {
        font: 700 24px/28px $gotham;
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
      h6 {
        @include paragraph;
        font-weight: 600 !important;
      }
      p {
        font: 400 17px/25px $inter; 
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
        font: 700 28px/34px $gotham;
      }
    }
  }
}

.blog {

  section {

    &::before {
      content: "";
      background: $grey-1;
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;

      @media screen and (max-width: $mobile) {
        height: 28px;
      }
    }

    aside {
      h2 {
        @include titlePage;
      }
      p {
        max-width: 440px;
      }
      footer {
        border-top: 1px solid $grey-2;
        span {
          color: $grey-5;
          font: 500 18px/24px $inter;
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
    height: 180px;
    background: $dark;
    display: none;
    @media screen and (max-width: $tablet) {
      display: block;
    }
  }
  section {
    background: $orange;

    aside {
      max-width: 360px;

      @media screen and (max-width: $tablet) {
        max-width: 100%;
        padding: 0 8px;
      }
      h2 {
        @include titlePage;
      }
      p {
        @media screen and (max-width: $mobile) {
          font: 400 14px/22px $inter;
        }
      }
    }
    figure {
      max-width: 632px;
      img:last-of-type {
        transform: translate(-50%, -50%);
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