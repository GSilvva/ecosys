<template>
    <nav class="nav fixed top-0 left-0 w-full z-50 py-3 sm:py-5 transition">
        <ElementsContainer class="flex items-center">
            <a class="logo" href="/">
                <VectorsIconLogo class="w-full h-9 sm:h-10" />
            </a>
            <ul class="links hidden xl:flex items-center gap-8">
                <li>
                    <a class="text-white transition" href="#como-funciona">Como funciona</a>
                </li>
                <li>
                    <a class="text-white transition" href="#diferenciais">Diferenciais</a>
                </li>
                <li>
                    <a class="text-white transition" href="#depoimentos">Depoimentos</a>
                </li>
                <li>
                    <a class="text-white transition" href="#plano">Plano</a>
                </li>
                <li>
                    <a class="text-white transition" href="#sobre">Sobre nós</a>
                </li>
                <li>
                    <a class="text-white transition" href="#faq">FAQ</a>
                </li>
            </ul>
            <ElementsButton
                class="btn !py-2 sm:!py-3 !px-4 sm:!px-6"
                outlineWhite
                small
                href="#demonstracao"
            >
                Tenho interesse
            </ElementsButton>
        </ElementsContainer>
    </nav>

    <section class="banner pt-28 sm:pt-40">
        <ElementsContainer block>
            <h1 class="text-center text-white max-w-2xl w-full mx-auto px-6 sm:px-0">O <span class="relative">único</span> ecossistema para revenda de veículos</h1>
            <p class="text-white text-center mt-6 mx-auto w-full max-w-screen-sm opacity-80">Gestão, marketing e vendas em uma única plataforma, com um preço e eficiência que você nunca viu. Ideal para revendedores, concessionárias e vendedores autônomos</p>
            <div class="mt-8 sm:mt-10 mb-16 sm:mb-24 flex flex-col xl:flex-row justify-center items-center gap-2 relative z-10">
                <ElementsButton href="#demonstracao">Agendar demonstração</ElementsButton>
                <ElementsButton class="hidden xl:block" lightBlack href="#recursos">Ver recursos  ↓</ElementsButton>
            </div>
            <div class="relative video">
                <ElementsVideo video="https://www.youtube.com/embed/dYk_2QXpkgc">
                    <div class="image w-full mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
                        <div class="transition w-14 h-14 sm:w-16 sm:h-16">
                            <VectorsPlay class="w-full h-full" />
                        </div>
                        <p class="text-center text-white">Ideal para revendas, concessionárias <br/> e vendedores autônomos</p>
                    </div>
                </ElementsVideo>
            </div>
        </ElementsContainer>
    </section>

    <section class="cf py-20 sm:py-32" id="como-funciona">
        <ElementsContainer class="gap-24 xl:gap-0 flex-col-reverse xl:flex-row flex items-center container">
            <div class="w-full max-w-sm">
                <h2>Único com financiamento automatizado e integrado</h2>
                <p class="mt-4 sm:mt-6 mb-6">Conte com um departamento de financiamento e seguro para agilizar os financiamentos da sua revenda e potencializar suas vendas. Simulação multibanco com resultados em 30 segundos.</p>
                <ElementsButton href="#demonstracao">Agendar demonstração</ElementsButton>
            </div>
            <img src="/images/revendedor/cf.png" alt="Santander, C6Bank, Bradesco, Creditas, Banco PAN, Itaú">
        </ElementsContainer>
    </section>

    <section class="diff bg-white py-20 sm:py-40" id="recursos">
        <ElementsContainer block>
            <header class="max-w-2xl mx-auto w-full">
                <h6 class="subtitle xl:text-center">Diferenciais</h6>
                <h2 class="xl:px-8 mb-4 sm:mb-8 xl:text-center">Conheça todos os recursos do ecosys</h2>
                <p class="xl:text-center">Economize tempo e dinheiro com uma gestão digital e simplificada, finalmente tenha tempo para focar nas vendas.</p>
            </header>
            <section id="integracao" class="pt-20 sm:pt-24 flex items-center flex-col xl:flex-row mb-16 xl:mb-0">
                <header class="w-full xl:hidden flex items-center gap-4 mb-4">
                    <VectorsRevendedorIntegracoes />
                    <div>
                        <h6 class="opacity-80">Ecosys</h6>
                        <h2>Integrações nativas</h2>
                    </div>
                </header>
                <img class="w-full" src="/images/revendedor/dif1.jpg" alt="Casal sorrindo">
                <aside class="w-full">
                    <div class="xl:px-24">
                        <h6 class="opacity-80 hidden xl:block">Ecosys</h6>
                        <h2 class="hidden xl:block">Integrações nativas</h2>
                        <ul class="mt-6 xl:mt-12">
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorInt1 />
                                <p>Gestão simplificada de documentos</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorInt2 />
                                <p>Avaliação e vistória</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorInt3 />
                                <p>Controle de estoque como CRM</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorInt4 />
                                <p>Gestão financeira completa</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorInt5 />
                                <p>Painel em modo Kanban</p>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
            <section class="flex items-center flex-col xl:flex-row-reverse">
                <img class="w-full" src="/images/revendedor/dif2.jpg" alt="Webmotors, Facebook, Instagram, OLX, Google, TikTok">
                <aside class="w-full">
                    <div class="xl:px-24">
                        <h2 class="mt-8 xl:mt-0">Anúncios vão e <br class="hidden sm:block" /> leads voltam em <br class="hidden sm:block" /> um só lugar</h2>
                        <p class="mt-5 xl:mt-9 mb-6">Integração de anúncios automatizado <br /> e multiplataforma</p>
                        <ElementsButton href="#demonstracao">Agendar demonstração</ElementsButton>
                    </div>
                </aside>
            </section>
            <section id="vendas" class="pt-20 xl:pt-0 flex items-center flex-col xl:flex-row mb-16 xl:mb-0">
                <header class="w-full xl:hidden flex items-center gap-4 mb-4">
                    <VectorsRevendedorAutomacao />
                    <div>
                        <h6 class="opacity-80">Ecosys</h6>
                        <h2>Automações e vendas</h2>
                    </div>
                </header>
                <img class="w-full" src="/images/revendedor/dif3.jpg" alt="Homem trabalhando com carros">
                <aside class="w-full">
                    <div class="xl:px-24">
                        <h6 class="opacity-80 hidden xl:block">Ecosys</h6>
                        <h2 class="hidden xl:block">Automações e vendas</h2>
                        <ul class="mt-6 xl:mt-12">
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut1 />
                                <p>Geração de leads e funil de vendas</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut2 />
                                <p>Integração de anuncios  automatizado </p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut3 />
                                <p>Vinculo de avaliação de seminovo</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut4 />
                                <p>Intermediação automatizada</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut5 />
                                <p>Qr code de cada veículo no estoque</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorAut6 />
                                <p>Sistema pra avaliação e preparação do veículo</p>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
            <section class="flex items-center flex-col xl:flex-row-reverse">
                <img class="w-full" src="/images/revendedor/dif4.jpg" alt="Revendedor">
                <aside class="w-full">
                    <div class="xl:px-24">
                        <h2 class="mt-8 xl:mt-0">Portal que integra o cliente com sua revenda</h2>
                        <p class="mt-5 xl:mt-9 mb-6">Sua revenda com um portal completo, fácil de usar e intuitivo, com área do cliente, vitrine para expor seus veículos e agendar visitas para quem quer comprar ou vender.</p>
                        <ElementsButton href="#demonstracao">Agendar demonstração</ElementsButton>
                    </div>
                </aside>
            </section>
            <section id="gestao" class="pt-20 xl:pt-0 flex items-center flex-col xl:flex-row">
                <header class="w-full xl:hidden flex items-center gap-4 mb-4">
                    <VectorsRevendedorGestao />
                    <div>
                        <h6 class="opacity-80">Ecosys</h6>
                        <h2>Gestão e produtividade</h2>
                    </div>
                </header>
                <img class="w-full" src="/images/revendedor/dif5.jpg" alt="Mulher mexendo no tablet">
                <aside class="w-full">
                    <div class="xl:px-24">
                        <h6 class="opacity-80 hidden xl:block">Ecosys</h6>
                        <h2 class="hidden xl:block">Gestão e produtividade</h2>
                        <ul class="mt-6 xl:mt-12">
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorGest1 />
                                <p>Controle de estoque como CRM</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorGest2 />
                                <p>Fluxo de caixa automatizado</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorGest3 />
                                <p>Usuários ilimitados</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorGest4 />
                                <p>Gestão simplificada de documentos</p>
                            </li>
                            <li class="flex items-center gap-5 sm:gap-4">
                                <VectorsRevendedorGest5 />
                                <p>Permissões para cada usuário</p>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        </ElementsContainer>
    </section>

    <section class="prod pb-16 xl:pb-0 pt-10 sm:pt-11">
        <ElementsContainer class="container flex items-center xl:items-start flex-col-reverse xl:flex-row">
            <div class="relative z-10 xl:pt-28 px-6 xl:px-0 flex flex-col items-center xl:items-start max-w-md w-full">
                <h2 class="text-center xl:text-left text-white">Aumente a produtividade da sua revenda em até 70%</h2>
                <p class="text-center xl:text-left text-white mt-6 mb-6 xl:mb-8">Sua loja mais organizada, integrada com o digital, com mais visibilidade e mais vendas.</p>
                <ElementsButton black href="#demonstracao">Agendar demonstração</ElementsButton>
            </div>
            <figure class="relative">
                <picture>
                    <source media="(max-width: 1180px)" srcset="/images/revendedor/prod-mob.png" />
                    <img src="/images/revendedor/prod-desk.png" alt="Mulher sorrindo">
                </picture>
                <img class="absolute" src="/images/revendedor/arrow.svg" alt="Seta">
            </figure>
        </ElementsContainer>
    </section>

    <section class="diff2 py-20 sm:py-40" id="diferenciais">
        <ElementsContainer class="container" block>
            <header class="header mb-12 xl:mb-20 px-2 xl:px-0">
                <h6 class="xl:text-center subtitle text-white">Diferenciais</h6>
                <h2 class="text-white xl:text-center w-full mx-auto max-w-3xl">A integração entre o físico e o digital, de forma simplificada</h2>
            </header>
            <section class="cards grid grid-cols-1 xl:grid-cols-2 gap-1">
                <ul class="flex flex-col xl:gap-1">
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard1 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Único com F&I automatizado <br /> e integrado</h5>
                            <p class="text-white opacity-80">Conte com um departamento de financiamento e seguro para agilizar os financiamentos da sua revenda e potencializar suas vendas.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard3 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Zero papel</h5>
                            <p class="text-white opacity-80">Sua revenda 100% digitalizada com todos os arquivos e dados em nuvem, acessível a qualquer hora e lugar.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard5 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Treinamento e implementação </h5>
                            <p class="text-white opacity-80">Conte com uma equipe especializada para integrar sua revenda com o mundo digital, com treinamento especializado.</p>
                            <small class="mt-8 xl:mt-0 text-white opacity-30 text-right">Sem custos adicionais</small>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard7 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Suporte humanizado</h5>
                            <p class="text-white opacity-80">Sem atendimentos engessados, tenha todo apoio necessário para integrar sua revenda física com o operações digitais.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard9 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Intermediação</h5>
                            <p class="text-white opacity-80">Veículos de terceiros disponíveis no seu estoque de forma virtual, ampliando suas opções, aumentando seu alcance e suas vendas.</p>
                        </div>
                    </li>
                </ul>
                <ul class="flex flex-col xl:gap-1">
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard2 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Gestão simplificada</h5>
                            <p class="text-white opacity-80">Sua revenda mais organizada, integrada com o digital e muito mais fácil de usar, comparado as plataformas comuns disponíveis no mercado.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard4 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Metodologia Kanban</h5>
                            <p class="text-white opacity-80">Fluxos de trabalho com a função arrasta e solta, mais praticidade no gerenciamento de seus processos gerando mais produtividade para sua revenda.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard6 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Segurança e privacidade</h5>
                            <p class="text-white opacity-80">Seus dados estarão seguros, elevando a credibilidade da sua revenda, levando mais tranquilidade para os seus clientes.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12">
                        <VectorsRevendedorCard8 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Custo mensal acessível</h5>
                            <p class="text-white opacity-80">Tudo que você precisa para integrar sua revenda com o digital, por um preço que você não encontra em nenhum outro lugar.</p>
                        </div>
                    </li>
                    <li class="flex flex-col sm:flex-row flex-start gap-6 sm:gap-12 p-8 sm:p-12 sm:!pr-10">
                        <VectorsRevendedorCard10 />
                        <div class="w-full sm:pt-2 flex flex-col">
                            <h5 class="text-white mb-6 xl:mb-4">Tudo em um único ecossistema</h5>
                            <p class="text-white opacity-80">Conte com um departamento de financiamento e seguro para agilizar os financiamentos da sua revenda e potencializar suas vendas.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="destaque flex flex-col xl:flex-row items-center justify-between pt-12 pb-16 pl-8 pr-6 xl:py-24 xl:px-28 mt-12 gap-14">
                <h3 class="text-white max-w-lg w-full">Gestão, marketing e vendas em uma única plataforma, com um preço e eficiência que você nunca viu.</h3>
                <div class="flex flex-col-reverse xl:flex-col items-start xl:items-end w-full xl:w-auto xl:gap-8 gap-6">
                    <ElementsButton black href="#demonstracao">Agendar demonstração</ElementsButton>
                    <p class="opacity-80 xl:opacity-100 xl:text-right text-white">O ecosys é ideal para revendas, <br /> concessionárias, vendedores autônomos.</p>
                </div>
            </section>
        </ElementsContainer>
    </section>

    <section class="testimonials pt-20 sm:pt-40 overflow-hidden" id="depoimentos">
        <ElementsContainer class="container" block>
            <header class="max-w-2xl w-full header xl:px-24 mb-12 sm:mb-20">
                <h6 class="subtitle hidden sm:block">Depoimentos</h6>
                <h2 class="text-center sm:text-left">O que estão falando sobre o ecosys</h2>
            </header>
            <swiper
                class="swiper"
                :modules="modules"
                :navigation="{
                    prevEl: '.testimonials .prev',
                    nextEl: '.testimonials .next',
                }"
                :pagination="{
                    clickable: true,
                    el: '.testimonials .pagination'
                }"
                :breakpoints="{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    },
                    1180: {
                        slidesPerView: 1.5,
                        spaceBetween: 32
                    }
                }"
                @slideChange="swiper => index = swiper.realIndex + 1"
            >
                <swiper-slide
                    class="slide !h-auto bg-white p-8 sm:pt-16 sm:pb-14 sm:px-16"
                    v-for="(item, index) in testimonials"
                    :key="index"
                >
                    <div class="flex flex-col h-full">    
                        <VectorsQuote />
                        <p class="my-8 sm:mt-14 w-full max-w-lg">{{ item.text }}</p>
                        <footer class="flex items-center gap-3 xl:gap-6">
                            <img
                                class="w-10 h-10 xl:w-20 xl:h-20 object-cover rounded-full"
                                :src="item.image"
                                :alt="item.name"
                            >
                            <span>
                                <strong class="block mb-1 xl:mb-0.5">{{ item.name }}</strong>
                                {{ item.subtext }}
                            </span>
                        </footer>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="mt-6 pagination flex justify-center gap-2 sm:hidden"></div>
            <footer class="controls mt-12 hidden sm:flex items-center justify-between xl:px-24">
                <span class="opacity-30">
                    {{ index < 10 ? "0" : "" }}{{ index }}
                    /
                    {{ testimonials.length < 10 ? "0" : "" }}{{ testimonials.length }}
                </span>
                <div class="flex gap-2">
                    <button class="prev transition" type="button">
                        <VectorsArrowPrevRev />
                    </button>
                    <button class="next transition" type="button">
                        <VectorsArrowNextRev />
                    </button>
                </div>
            </footer>
        </ElementsContainer>
    </section>

    <section class="plan pt-32 sm:pt-52 pb-20 sm:pb-40" id="plano">
        <ElementsContainer class="container xl:grid grid-cols-2">
            <figure>
                <img class="w-full relative z-10" src="/images/revendedor/man.png" alt="Homem sorrindo">
                <div class="relative z-20 pb-8 sm:pb-20 px-8 sm:px-20">
                    <h6 class="subtitle text-white">Plano</h6>
                    <h2 class="text-white mb-6">O ecossistema completo para sua revenda.</h2>
                    <p class="text-white">Ideal para revendas, concessionárias e vendedores autônomos. Praticidade e eficiência por um preço muito acessível</p>
                </div>
            </figure>
            <aside class="py-8 sm:py-16 pl-6 sm:pl-20 pr-6 sm:pr-20 xl:pr-12 bg-white flex flex-col">
                <h5 class="mb-6 sm:mb-7">Gestão, marketing e vendas</h5>
                <ul>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Geração de leads e funil de vendas</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Integração de anuncios automatizado e multiplataforma </p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Intermediação automatizada</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Vinculo de avaliação de seminovo</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Sistema pra avaliação e preparação do veículo</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Qr code de cada veículo no estoque</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Portal exclusivo para sua loja</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Ecossistema completo</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Painel em modo Kanban</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Gestão financeira</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Gestão simplificada de documentos</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <VectorsCheckBlue />
                        <p>Financiamento integrado</p>
                    </li>
                </ul>
                <footer class="pt-6 sm:pt-7 mt-8 sm:mt-14">
                    <h6 class="text-center">De <span class="line-through">1499,00</span> <strong>por a partir 499,00</strong></h6>
                    <p class="mt-2 mb-7 text-center">para 20 veículos anunciados.</p>
                    <ElementsButton class="w-full" green href="#demonstracao">Agendar demonstração</ElementsButton>
                </footer>
            </aside>
        </ElementsContainer>
    </section>

    <section class="about py-20 sm:pb-40 sm:pt-32" id="sobre">
        <ElementsContainer class="flex flex-col xl:flex-row-reverse items-center xl:items-start gap-12">
            <div class="xl:pt-10 max-w-md w-full">
                <h6 class="subtitle text-white">Sobre nós</h6>
                <h2 class="text-white mb-12 sm:mb-10">O ecosys é o ecossistema para revenda de veículos mais completo do mercado.</h2>
                <p class="text-white">
                    <strong>Unimos tecnologia, serviços e inovação, com um preço e eficiência que você nunca viu.</strong>
                    <br><br>
                    Nossa missão é acelerar a digitalização do setor automotivo com soluções que integram o presencial com o digital, simplificando o dia a dia do lojista.
                    <br><br>
                    Gestão ágil e digital, marketing e vendas em uma única plataforma, gerando mais visibilidade para sua revenda e aceleração dos seus resultados.
                </p>
            </div>
            <img src="/images/revendedor/graph.svg" alt="Gráfico">
            <h5 class="xl:hidden text-white pl-8 w-full max-w-md">Unimos tecnologia, serviços e inovação, com um preço e eficiência que você nunca viu.</h5>
        </ElementsContainer>
    </section>

    <section class="faq py-20 sm:py-40 bg-white" id="faq">
        <ElementsContainer class="container" block>
            <h2 class="mb-6 sm:mb-12">Ficou com <br /> alguma dúvida?</h2>
            <dl v-for="(f, index) in faq" :key="index">
                <dt
                    :class="`cursor-pointer flex items-start justify-between gap-8 py-6 sm:py-8 ${activeFaq === f.question ? 'active' : ''}`"
                    @click="activeFaq === f.question ? activeFaq = '' : activeFaq = f.question"
                >
                    {{ f.question }}
                    <VectorsArrowExp class="mt-2 sm:mt-3" />
                </dt>
                <dd
                    v-if="activeFaq === f.question"
                    class="pb-6 sm:pb-8 sm:pr-20"
                >
                    <p>{{ f.answer }}</p>
                </dd>
            </dl>
            <footer>
                <p class="mt-12">
                    Se houver alguma questão que gostaria de esclarecimento,
                    <br />
                    <a class="underline font-semibold" href="##" target="_blank">Fale conosco</a>
                </p>
            </footer>
        </ElementsContainer>
    </section>

    <footer class="footer pb-28 pt-20 sm:py-32" id="demonstracao">
        <ElementsContainer class="container">
            <aside class="xl:pt-20 pb-12 xl:pb-8 w-full flex flex-col">
                <VectorsLogoWhite class="relative z-20" />
                <h2 class="relative text-white mt-16 mb-6 sm:mb-8 sm:pr-2">
                    <span class="relative z-10">Aumente a produtividade da sua revenda em até 70%</span>
                </h2>
                <p class="text-white sm:pr-8">Sua loja mais organizada, integrada com o digital, com mais visibilidade e mais vendas.</p>
                <small class="text-white hidden xl:block opacity-80">© 2022 Controlle Tecnologia - Desenvolvido por <a class="underline" href="##" target="_blank">Ecosys</a> <br /> Todos os direitos reservados</small>
            </aside>
            <form class="w-full bg-white py-6 px-8" action="" method="POST">
                <fieldset class="mb-6 w-full">
                    <ElementsFormLabel label="Nome" />
                    <input
                        class="block w-full h-12 sm:h-14 p-4"
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Nome completo"
                        required
                    >
                </fieldset>
                <fieldset class="mb-6">
                    <ElementsFormLabel label="E-mail" />
                    <input
                        class="block w-full h-12 sm:h-14 p-4"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="O seu melhor e-mail"
                        required
                    >
                </fieldset>
                <fieldset class="mb-6">
                    <ElementsFormLabel label="WhatsApp" />
                    <input
                        class="block w-full h-12 sm:h-14 p-4"
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="DDD + Número"
                        required
                        maxlength="15"
                        @input="maskPhone($event)"
                    >
                </fieldset>
                <fieldset class="mb-6">
                    <ElementsFormLabel label="Mensagem" />
                    <textarea
                        class="h-32 block w-full p-4"
                        id="mensagem"
                        name="mensagem"
                        placeholder="Digite aqui.."
                    ></textarea>
                </fieldset>
                <ElementsButton class="w-full" black submit>Agendar demonstração</ElementsButton>
            </form>
            <small class="mt-16 text-center sm:text-left text-white xl:hidden opacity-80">© 2022 Controlle Tecnologia - Desenvolvido por <a class="underline" href="##" target="_blank">Ecosys</a> <br /> Todos os direitos reservados</small>
        </ElementsContainer>
    </footer>

    <article class="flex items-center justify-center bar pt-2.5 pb-4 bg-white fixed bottom-0 left-0 w-full xl:hidden z-50">
        <a class="flex-1 flex flex-col items-center gap-1" href="#vendas">
            <VectorsVendas />
            <span class="block text-center">Vendas</span>
        </a>
        <a class="flex-1 flex flex-col items-center gap-1" href="#gestao">
            <VectorsVendas />
            <span class="block text-center">Gestão</span>
        </a>
        <a class="flex-1 flex flex-col items-center gap-1" href="#integracao">
            <VectorsIntegracao />
            <span class="block text-center">Integração</span>
        </a>
    </article>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, A11y } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [A11y, Navigation, Pagination]
const index = ref(1)
const activeFaq = ref("")

const testimonials = [
    {
        "text": "Tínhamos um problema de pós venda devido ao alto volume, todas as reclamações foram sanadas com a ajuda do Ecosistema completo, só temos a agradecer e recomendar.",
        "name": "Luciana Gimenez",
        "subtext": "Comprou um Chevrolet Camaro",
        "image": "/images/home/women.png"
    },
    {
        "text": "Tínhamos um problema de pós venda devido ao alto volume, todas as reclamações foram sanadas com a ajuda do Ecosistema completo, só temos a agradecer e recomendar.",
        "name": "Luciana Gimenez",
        "subtext": "Comprou um Chevrolet Camaro",
        "image": "/images/home/women.png"
    },
    {
        "text": "Tínhamos um problema de pós venda devido ao alto volume, todas as reclamações foram sanadas com a ajuda do Ecosistema completo, só temos a agradecer e recomendar.",
        "name": "Luciana Gimenez",
        "subtext": "Comprou um Chevrolet Camaro",
        "image": "/images/home/women.png"
    },
    {
        "text": "Tínhamos um problema de pós venda devido ao alto volume, todas as reclamações foram sanadas com a ajuda do Ecosistema completo, só temos a agradecer e recomendar.",
        "name": "Luciana Gimenez",
        "subtext": "Comprou um Chevrolet Camaro",
        "image": "/images/home/women.png"
    },
    {
        "text": "Tínhamos um problema de pós venda devido ao alto volume, todas as reclamações foram sanadas com a ajuda do Ecosistema completo, só temos a agradecer e recomendar.",
        "name": "Luciana Gimenez",
        "subtext": "Comprou um Chevrolet Camaro",
        "image": "/images/home/women.png"
    }
]

const faq = [
    {
        "question": "O ecosys também serve para concessionárias?",
        "answer": "Sim! Com a diferença de que ela vem com Inteligência Artificial acoplada e permite com que você crie resumos, recortes e mapas mentais, automaticamente."
    },
    {
        "question": "O sistema pode ser acessado de qualquer computador?",
        "answer": "Sim! Com a diferença de que ela vem com Inteligência Artificial acoplada e permite com que você crie resumos, recortes e mapas mentais, automaticamente."
    },
    {
        "question": "É possível criar usuários com limitação de acesso?",
        "answer": "Sim! Com a diferença de que ela vem com Inteligência Artificial acoplada e permite com que você crie resumos, recortes e mapas mentais, automaticamente."
    },
    {
        "question": "É possível integrar meu site com outras plataformas?",
        "answer": "Sim! Com a diferença de que ela vem com Inteligência Artificial acoplada e permite com que você crie resumos, recortes e mapas mentais, automaticamente."
    },
    {
        "question": "Tenho dificuldade com tecnologia, vocês oferecem treinamento?",
        "answer": "Sim! Com a diferença de que ela vem com Inteligência Artificial acoplada e permite com que você crie resumos, recortes e mapas mentais, automaticamente."
    }
]

function maskPhone(event: any) {
    const mask = event.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d)/,"($1) $2")
                                    .replace(/(\d)(\d{4})$/,"$1-$2")
    event.target.value = mask
}

definePageMeta({
  layout: "empty",
})

useHead({
    title: "Ecosys Auto | O único ecossistema para revenda de veículos"
})
</script>

<style lang="scss" scoped>
.nav {
    background: $dark;

    .logo {
        width: 126px;

        @media (max-width: $mobile) {
            width: 114px;
        }
    }

    .links {

        li {

            a {

                &:hover {
                    color: $blue;
                }
            }
        }
    }

    .btn {
        font: 500 14px/24px $inter;

        @media (max-width: $mobile) {
            font: 500 12px/22px $inter;
        }
    }

    &--fixed {
        box-shadow: $nav;
    }
}

.banner {
    background: $dark;

    h1 {
        font: 600 46px/56px $poppins;

        @media (max-width: $mobile) {
            font: 600 34px/36px $poppins;
        }

        span {

            &::after {
                content: "";
                background: $blue;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% + 18px);
                height: 4px;

                @media (max-width: $mobile) {
                    height: 3px;
                    width: calc(100% + 13px);
                }
            }
        }
    }

    .video {

        @media (max-width: $mobile) {
            width: calc(100% + 48px);
            margin-left: -24px;
        }

        &::after {
            content: "";
            position: absolute;
            top: -124px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            max-width: 1200px;
            width: 100%;
            height: 445px;
            background: url("/images/revendedor/pattern.svg") center/cover;

            @media (max-width: $mobile) {
                max-width: calc(100% - 48px);
                height: 420px;
                top: -310px;
            }
        }

        :global(.thumbnail) {
            z-index: 5;
        }

        .image {
            max-width: 1005px;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url("/images/revendedor/thumbnail.png") center/cover no-repeat;
            height: 565px;
            
            @media (max-width: $mobile) {
                height: 220px;
            }

            div {
                animation: scale 3s ease infinite;
    
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

                @media (max-width: $mobile) {
                    font: 500 14px/20px $inter;
                }
            }
        }
    }
}

.cf {

    .container {
        max-width: calc(1020px + 96px);
    }

    h2 {
        font: 600 32px/40px $poppins;

        @media (max-width: $mobile) {
            font: 600 20px/28px $poppins;
        }
    }

    p {
        font: 500 16px/24px $inter;
        color: $dark;

        @media (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }
}

.subtitle {
    text-transform: uppercase;
    font: 600 16px/1 $poppins;
    margin: 0 0 48px 0;

    @media (max-width: $mobile) {
        font-size: 12px;
        margin: 0 0 32px 0;
    }

    &--white {
        color: $white;
    }
}

.diff {

    header {

        h2 {
            font: 600 40px/44px $poppins;

            @media (max-width: $mobile) {
                font: 600 28px/34px $poppins;
            }
        }
    }

    section {

        img {

            @media (max-width: $mobile) {
                min-width: calc(100% + 48px);
            }
        }

        h6 {
            font: 500 16px/24px $inter;
            
            @media (max-width: $mobile) {
                font: 500 12px/20px $inter;
            }
        }

        h2 {
            font: 600 32px/44px $poppins;

            @media (max-width: $mobile) {
                font: 600 20px/28px $poppins;
            }
        }

        ul {

            li {

                &:not(:last-of-type) {
                    margin: 0 0 12px 0;

                    @media (max-width: $tablet) {
                        border-bottom: 1px solid rgba(0, 0, 0, .2);
                        padding: 0 0 12px 8px;
                    }
                }

                @media (max-width: $tablet) {
                    padding-left: 8px;

                    svg {
                        width: 28px;
                        height: 28px;
                    }
                }

                p {
                    color: $dark;
                    font: 500 16px/24px $inter;
                }
            }
        }
    }
}

.prod {
    background: $blue;

    .container {
        max-width: calc(1020px + 96px);

        @media (max-width: $mobile) {
            padding: 0;
        }

        div {

            @media (max-width: $tablet) {
                margin: -96px 0 0 0;
            }

            h2 {
                font: 600 40px/44px $poppins;

                @media (max-width: $mobile) {
                    font: 600 28px/34px $poppins;
                }
            }
        }

        figure {

            picture {
                position: relative;
                z-index: 5;
            }

            & > img {
                min-width: 783px;
                top: 34px;
                right: -94px;
                z-index: 1;

                @media (max-width: $tablet) {
                    display: none;
                }
            }
        }
    }
}

.diff2 {
    background: $dark;

    .container {
        
        @media (max-width: $mobile) {
            padding: 0 16px;
        }
    }

    .header {
        
        h2 {
            font: 600 40px/44px $poppins;

            @media (max-width: $mobile) {
                font: 600 28px/34px $poppins;
            }
        }
    }

    .cards {

        ul {

            &:first-of-type {

                li {
                    background: rgba(255, 255, 255, 0.07);
                    
                    &:nth-of-type(even) {
                        background: rgba(255, 255, 255, 0.04);
                    }
                }
            }

            &:last-of-type {

                li {
                    background: rgba(255, 255, 255, 0.04);
                    
                    &:nth-of-type(even) {
                        background: rgba(255, 255, 255, 0.07);
                    }
                }
            }

            li {
                
                @media (min-width: $mobile) {
                    height: 285px;
                }

                svg {
                    min-width: 64px;
                    max-width: 64px;
                    height: 64px;

                    @media (max-width: $mobile) {
                        min-width: 48px;
                        max-width: 48px;
                        height: 48px;
                    }
                }

                h5 {
                    font: 600 24px/32px $poppins;

                    @media (max-width: $mobile) {
                        font: 600 20px/28px $poppins;

                        br {
                            display: none;
                        }
                    }
                }

                p {
                    flex: 2;
                }

                small {
                    font: 600 14px/1 $inter;
                }
            }
        }
    }

    .destaque {
        background: $blue;

        h3 {
            max-width: 473px;
            font: 600 32px/40px $inter;

            @media (max-width: $tablet) {
                max-width: 100%;
            }

            @media (max-width: $mobile) {
                font: 600 24px/30px $inter;
            }
        }
        
        p {
            font: 500 16px/26px $inter;

            @media (max-width: $mobile) {
                font: 500 14px/22px $inter;
            }
        }
    }
}

.testimonials {


    .header {

        h2 {
            font: 600 40px/44px $poppins;

            @media (max-width: $mobile) {
                font: 600 28px/34px $poppins;
            }
        }
    }

    .swiper {
        overflow: initial;

        .slide {
            min-height: 500px;

            @media (max-width: $mobile) {
                min-height: 365px;
                max-width: 330px;
            }

            p {
                flex: 2;
                color: $dark;
                font: 500 20px/30px $inter;

                @media (max-width: $mobile) {
                    font: 500 16px/24px $inter;
                }
            }

            span {
                color: $grey-5;
                font: 400 18px/26px $inter;

                @media (max-width: $mobile) {
                    font: 400 12px/14px $inter;
                }

                strong {
                    color: $dark;
                    font: 600 20px/28px $inter;

                    @media (max-width: $mobile) {
                        font: 500 16px/14px $inter;
                    }
                }
            }
        } 
    }

    .controls {
        
        span {
            font: 600 16px/1 $poppins;
            letter-spacing: -0.16px;
        }

        .prev,
        .next {

            &.swiper-button-disabled,
            &.swiper-button-lock {
                opacity: .5;
            }
        }
    }
}

.plan {

    .container {

        @media (max-width: $mobile) {
            padding: 0 16px;
        }
    }

    figure {
        background: #0092FD;

        img {
            transform: translateY(-96px);

            @media (max-width: $mobile) {
                transform: translateY(-44px);
            }
        }

        div {
            margin: -176px 0 0 0;

            @media (max-width: $mobile) {
                margin: -80px 0 0 0;
            }

            h2 {
                font: 600 40px/44px $poppins;

                @media (max-width: $mobile) {
                    font: 600 28px/34px $poppins;
                }
            }
        }
    }

    aside {

        h5 {
            font: 600 24px/28px $poppins;

            @media (max-width: $mobile) {
                font: 600 20px/28px $poppins;
            }
        }

        ul {
            flex: 2;

            li {

                &:not(:last-of-type) {
                    margin: 0 0 12px 0;
                }

                svg {
                    min-width: 20px;
                    max-width: 20px;
                }

                p {
                    color: $dark;
                    font: 500 16px/24px $inter;

                    @media (max-width: $mobile) {
                        font: 500 14px/22px $inter;
                    }
                }
            }
        }

        footer {
            border-top: 1px solid rgba(17, 18, 20, .2);

            h6 {

                &,
                & * {
                    font: 600 24px/48px $inter;

                    @media (max-width: $mobile) {
                        font: 600 18px/24px $inter;
                    }
                }

                &,
                & span {
                    color: $grey-4;
                }
            
                strong {
                    color: $dark;
                }
            }

            p {
                color: $grey-4;
                font: 600 12px/1 $inter;
                
                @media (max-width: $mobile) {
                    font: 600 10px/1 $inter;
                }
            }
        }
    }
}

.about {
    background: $dark;

    h2 {
        font: 600 40px/44px $poppins;

        @media (max-width: $mobile) {
            font: 600 28px/34px $poppins;
        }
    }

    p {
        color: #CCCCCC;

        strong {
            color: $white;
        }
    }

    h5 {
        font: 600 22px/24px $poppins;
        border-left: 4px solid $blue;
    }
}

.faq {

    .container {
        max-width: calc(700px + 96px);
    }

    h2 {
        font: 600 32px/36px $poppins;
        
        @media (max-width: $mobile) {
            font: 600 28px/34px $poppins;
            letter-spacing: -0.28px;
        }
    }

    dl {
        border-bottom: 1px solid $grey-3;

        dt {
            font: 600 20px/28px $poppins;

            @media (max-width: $mobile) {
                font: 600 16px/24px $poppins;
            }

            svg {
                min-width: 12px;
                max-width: 12px;
            }

            &.active {
                
                svg {
                    transform: scaleY(-1);
                }
            }
        }

        dd {
            margin: -8px 0 0 0;

            @media (max-width: $mobile) {
                margin: -12px 0 0 0;
            }

            p {
                font: 500 16px/26px $inter;
                
                @media (max-width: $mobile) {
                    font: 500 14px/20px $inter; 
                }
            }
        }
    }

    footer {

        p {
            color: $dark;

            br {
                
                @media (max-width: $mobile) {
                    display: none;
                }
            }
        }
    }
}

.footer {
    background: $blue;

    .container {
        max-width: calc(1010px + 96px);
    }

    aside {
        max-width: 490px;

        h2 {
            
            span {
                font: 600 48px/1 $poppins;

                @media (max-width: $mobile) {
                    font: 600 28px/32px $poppins;
                }
            }

            &::after {
                content: url("/images/revendedor/arrow-up.svg");
                position: absolute;
                top: -136px;
                left: -96px;
                z-index: 1;

                @media (max-width: $mobile) {
                    content: url("/images/revendedor/arrow-up-mob.svg");
                    top: -104px;
                    left: -24px;
                }
            }
        }

        p {
            flex: 2;
        }
    }

    form {
        max-width: 490px;

        input,
        textarea {
            color: $dark;
            background: $grey-1;
            resize: none;

            &::placeholder {
                opacity: 1;
                color: rgba(17, 18, 20, .3);
            }
        }

        button {

            &:hover {
                background: $blue;
                color: $white;
            }
        }
    }

    small {
        font: 400 12px/20px $inter;
    }
}

.bar {
    box-shadow: 0px 0px 20px 0px rgba(21, 77, 118, 0.10);

    a {

        span {
            font: 500 12px/18px $inter;
        }
    }
}
</style>

<style lang="scss">
.testimonials {

    .pagination {

        span  {
            width: 8px;
            height: 8px;
            opacity: 1;
            margin: 0 !important;
            background: $grey-3;
            transition: .3s;

            &.swiper-pagination-bullet-active {
                background: $dark;
            }
        }
    }
}
</style>