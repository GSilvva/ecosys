<template>
  <NuxtLayout>
    <section class="header pt-big">
      <ElementsContainer block>
        <section class="call xl:flex justify-between">
          <aside class="xl:pt-12 pb-16 xl:pb-28">
            <h1 class="h1">compre, venda ou troque seu carro</h1>
            <p class="mt-8 xl:mt-10">Tudo de forma inteligente, <br> segura e simplificada.</p>
            <div class="mt-8 xl:hidden">
              <ElementsButton href="/comprar" class="h-16 flex items-center justify-between md:justify-center gap-6">
                Catálogo de carros
                <VectorsArrowRightBig />
              </ElementsButton>
              <ElementsButton href="/vender" class="h-16 mt-3 flex items-center justify-between md:justify-center gap-6" outline>
                Vender meu carro
                <VectorsArrowLeftBig />
              </ElementsButton>
            </div>
          </aside>

          <figure class="relative w-full xl:pr-10 pb-6 xl:pt-14 xl:pb-24 bg-white">
            <article class="relative z-20 flex items-center xl:justify-center gap-6 xl:gap-8 mb-6 xl:mb-12 xl:pl-36 pb-7 xl:pb-0">
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
              medium
              thumbnail="./images/home/thumbnail.jpg"
              video="https://www.youtube.com/embed/dYk_2QXpkgc"
            />
          </div>
          <nuxt-link class="big-btn w-full overflow-hidden relative h-full hidden xl:block" to="/comprar">
            <span class="text-white flex items-center justify-center gap-24 h-full relative z-10">
              Catálogo de carros
              <div class="transition"><VectorsArrowRightBig /></div>
            </span>
          </nuxt-link>
        </footer>
      </ElementsContainer>
    </section>

    <section class="about pt-28 pb-28 xl:pt-48 xl:pb-48" id="sobre">
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

    <section class="finance pb-28 xl:pb-48">
      <ElementsContainer center>
        <img class="mb-12 xl:mb-0 w-full" src="@/images/home/finance.jpg" alt="Foto">
        <aside class="flex items-start flex-col">
          <h6 class="mb-4 xl:mb-6">Financie com a gente</h6>
          <h2 class="mb-6 xl:mb-8">Agilidade e sem burocracia</h2>
          <p class="mb-6 xl:mb-8">Segurança, atendimento diferenciado e as melhores condições do mercado. Escolha o carro que deseja solicite um orçamento personalizado pelo nosso chat.</p>
          <ElementsButton href="/comprar">Escolher um carro</ElementsButton>
        </aside>
      </ElementsContainer>
    </section>

    <section class="blog pb-28 xl:pb-48">
      <ElementsContainer block class="container">
        <section class="bg-white px-6 md:px-12 xl:pr-0 pt-12 xl:pl-24 xl:pt-16 flex-col-reverse xl:flex-row flex xl:items-end">
          <aside class="flex flex-col items-start w-full pt-12 pb-12 xl:pt-10 xl:pb-28">
            <h2 class="mb-5 xl:mb-8">Conheça <br> a Car News</h2>
            <p class="mb-6 xl:mb-8">Veja as noticias e conteúdos mais relevantes do mercado automotivo.</p>
            <ElementsButton href="/cn-news">Ver últimas notícias</ElementsButton>
            <footer class="hidden xl:flex justify-between mt-12 pt-8">
              <span class="flex items-center">Veículos</span>
              <span class="flex items-center">Carros</span>
              <span class="flex items-center">Esportivos</span>
              <span class="flex items-center">E mais</span>
            </footer>
          </aside>

          <figure class="w-full flex justify-center">
            <div class="relative w-full md:w-max flex">
              <VectorsMockupBlogDesktop class="h-max" />
              <ElementsCardArticle
                class="absolute left-0 top-36 px-3.5 md:px-3.5"
                mobile
                link="/cn-news"
                thumbnail="./images/home/article.jpg"
                category="Esportivos"
                title="O novo BMW M5 2023 traz novidades que você não esperava"
                resume="Bayerische Motoren Werke AG é uma empresa alemã, fabricante de automóveis e motocicletas, sediada em Munique, Baviera."
                date="27 janeiro"
                reading="5"
              />
            </div>
          </figure>
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
              <h2 class="text-center xl:text-left text-white">Descubra o b.car ideal pRa você</h2>
              <p class="text-center xl:text-left mt-6 mb-8 xl:my-8 text-white">Responda o nosso questionário a seguir. Cada pergunta respondida representa um caminho a seguir. Assim, fica mais fácil encontrar seu carro ideal.</p>
              <ElementsButton black href="/descubra">Descobrir meu carro</ElementsButton>
            </aside>
            <figure class="relative">
              <img class="mix-blend-multiply relative z-20" src="@/images/general/mystery-car.png" alt="Carro misterioso">
              <img class="absolute top-1/2 left-1/2 z-10" src="@/images/general/graphism-mystery-car.svg" alt="Graphismo">
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
        div {
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
        font: 400 18px/26px $inter; 
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
  .container {
    @media screen and (max-width: $mobile) {
      padding: 0 16px;

      .card-article {
        zoom: .75;
      }
    }
  }
  aside {
    max-width: 445px;
    h2 {
      @include titlePage;
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