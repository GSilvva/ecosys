<template>
    <main class="sale">
        <h2 class="title">Venda</h2>
        <ElementsTabs :tabs="venda.tabs" full small>
            <template v-slot:tab-1>
                <div class="flex flex-col xl:grid grid-cols-2 gap-12">
                    <aside>
                        <h2 class="subtitle">Vistorias</h2>
                        <ul class="flex flex-col gap-y-6">
                            <li class="flex flex-col gap-y-1">
                                <div class="bg-white px-6 sm:px-12 xl:px-8 py-6 sm:py-8">
                                    <div class="flex items-start justify-between">
                                        <p class="mb-6"><strong>Segunda, 10 out 2023 <br> 16:15 horas</strong></p>
                                        <ElementsTag confirmed green />
                                    </div>
                                    <p class="mb-2"><strong>Onde levar seu carro</strong></p>
                                    <p>Avenida Epitácio Pessoa, 2566 <br> Lagoa, Chapecó, SC</p>
                                    <p class="mt-4"><a href="##" target="_blank">Como chegar</a></p>
                                    <div class="mt-8 flex gap-2">
                                        <ElementsButton small outline>Desativar</ElementsButton>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <div class="market-value flex items-center justify-between py-3.5 px-6 mb-8">
                                        <h2>R$ 59.000</h2>
                                        <small>Valor de mercado</small>
                                    </div>
                                    <div class="grid grid-cols-2 gap-y-6">
                                        <p>
                                            Marca
                                            <strong>Mitsubishi</strong>
                                        </p>
                                        <p>
                                            Modelo
                                            <strong>Outlander V6 3.0</strong>
                                        </p>
                                        <p>
                                            Versão
                                            <strong>V6 3.0 GT</strong>
                                        </p>
                                        <p>
                                            Ano
                                            <strong>2012/2013</strong>
                                        </p>
                                        <p>
                                            KM
                                            <strong>148.500</strong>
                                        </p>
                                        <p>
                                            Cor
                                            <strong>Prata</strong>
                                        </p>
                                        <p>
                                            Placa
                                            <strong>Não sei a placa</strong>
                                        </p>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Quem vai te atender</h6>
                                    <div class="flex items-center gap-6">
                                        <img class="rounded-full object-cover w-16 h-16" src="/images/home/man.png" alt="Foto">
                                        <div>
                                            <p><strong>Tiago Luchtenberg</strong></p>
                                            <p>Vendedor</p>
                                            <p class="mt-0.5">+55 (47) 9 4893 7169</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white pt-6 px-6 sm:px-12 xl:px-8 pb-6 sm:pb-8">
                                    <h6 class="mb-6">Importante</h6>
                                    <div class="flex items-center gap-6">
                                        <VectorsDoc />
                                        <div>
                                            <p><strong>Leve seu documento de <br> identificação com foto</strong></p>
                                            <p>RG, CPF ou carteira de motorista.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </aside>

                    <aside>
                        <h2 class="subtitle">Anúncios</h2>
                        <ul class="flex flex-col gap-y-6">
                            <li>
                                <div class="bg-white px-6 sm:px-12 xl:px-8 py-6 sm:py-8">
                                    <div class="mb-6 flex justify-between items-start">
                                        <img
                                            class="w-40 h-32"
                                            src="/images/general/car.jpg"
                                            alt="Foto"
                                        >
                                        <ElementsTag active />
                                    </div>
                                    <h3 class="mb-4">BMW M3</h3>
                                    <p class="mb-8">2.0 16V Diesel Limited 4X4 <br> Automático</p>
                                    <div class="infos-car">
                                        <small>Valor anunciado</small>
                                        <h2>R$ 125.900</h2>
                                        <div class="pt-4 mt-6 flex justify-between">
                                            <small>2018/2019</small>
                                            <small>158.836km</small>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex justify-between">
                                        <ElementsButton small outline>Desativar</ElementsButton>
                                        <ElementsButton
                                            small
                                            outline
                                            @click="venda.openModal = true"
                                        >
                                            Editar
                                        </ElementsButton>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="bg-white px-6 sm:px-12 xl:px-8 py-6 sm:py-8">
                                    <div class="mb-6 flex justify-between items-start">
                                        <img
                                            class="w-40 h-32"
                                            src="/images/general/car.jpg"
                                            alt="Foto"
                                        >
                                        <ElementsTag disabled />
                                    </div>
                                    <h3 class="mb-4">BMW M3</h3>
                                    <p class="mb-8">2.0 16V Diesel Limited 4X4 <br> Automático</p>
                                    <div class="infos-car">
                                        <small>Valor anunciado</small>
                                        <h2>R$ 125.900</h2>
                                        <div class="pt-4 mt-6 flex justify-between">
                                            <small>2018/2019</small>
                                            <small>158.836km</small>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex justify-between">
                                        <ElementsButton small>Ativar</ElementsButton>
                                        <ElementsButton
                                            small
                                            outline
                                            @click="venda.openModal = true"
                                        >
                                            Editar
                                        </ElementsButton>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>
            </template>
            <template v-slot:tab-2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto laudantium illum ipsam exercitationem labore nisi, consequatur modi quo officiis architecto eum minima doloribus necessitatibus assumenda corporis, quas praesentium! Alias?
            </template>
            <template v-slot:tab-3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto laudantium illum ipsam exercitationem labore nisi, consequatur modi quo officiis architecto eum minima doloribus necessitatibus assumenda corporis, quas praesentium! Alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur modi ad nisi itaque, placeat in recusandae, expedita sint distinctio nobis quam facilis praesentium voluptate quas sed eius vero ratione.
            </template>
        </ElementsTabs>

        <ElementsModal
            title="Editar anúncio"
            v-model:open="venda.openModal"
        >
            <div class="fields mb-10">
                <div class="flex gap-6 mb-7">
                    <fieldset class="fieldset floating">
                        <label for="ajuste1">Ajustar para</label>
                        <input
                            name="ajuste1"
                            id="ajuste1"
                            type="text"
                            ref="inputRef"
                            :value="'R$ ' + venda.slider1.value"
                        >
                    </fieldset>
                    <ElementsFormInput
                        label="Valor atual"
                        name="valorAtual1"
                        :valueInput="$formatCurrency(124000)"
                        floating
                        disabled
                    />
                </div>
                <Slider
                    v-model="venda.slider1.value"
                    :min="venda.slider1.min"
                    :max="venda.slider1.max"
                    :step="venda.slider1.step"
                    :lazy="false"
                />
                <small class="mt-5">O mínimo de ajuste é 25%</small>
            </div>
            <div class="fields mb-10">
                <div class="flex gap-6 mb-7">
                    <ElementsFormInput
                        label="Mínimo"
                        name="minimo"
                        :valueInput="$formatNumber(158836) + 'km'"
                        floating
                        disabled
                    />
                    <fieldset class="fieldset floating">
                        <label for="ajuste2">Ajustar para</label>
                        <input
                            name="ajuste2"
                            id="ajuste2"
                            type="text"
                            :value="venda.slider2.value + 'km'"
                        >
                    </fieldset>
                </div>
                <Slider
                    v-model="venda.slider2.value"
                    :min="venda.slider2.min"
                    :max="venda.slider2.max"
                    :lazy="false"
                    :format-data="(n, v) => ({[n]: console.log(n, v) })"
                />
                <small class="mt-5">O mínimo de ajuste é 25%</small>
            </div>
            <div class="flex justify-end mt-1.5">
                <ElementsButton @click="venda.openModal = false">Salvar</ElementsButton>
            </div>
        </ElementsModal>
    </main>
</template>

<script setup lang="ts">
import { useCurrencyInput } from 'vue-currency-input'
import Slider from '@vueform/slider'

const opts: any = {
    "locale": "pt-BR",
    "currency": "BRL",
    "currencyDisplay": "symbol",
    "valueRange": {},
    "hideCurrencySymbolOnFocus": true,
    "hideGroupingSeparatorOnFocus": true,
    "hideNegligibleDecimalDigitsOnFocus": true,
    "autoDecimalDigits": false,
    "useGrouping": true,
    "accountingSign": false
}
const { inputRef } = useCurrencyInput(opts)

const venda = reactive({
    tabs: ["Anúncios", "Em negociação", "Vendidos"],
    openModal: true,
    slider1: {
        value: 0,
        min: 0,
        max: 124000,
        step: 50
    },
    slider2: {
        value: 158836,
        min: 0,
        max: 300000
    },
})

definePageMeta({
    layout: "area-cliente"
})

useHead({
    title: `b.car | Venda`,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins/area-cliente';

.fields {
    
    small {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: $grey-4;
    }
}

.market-value {
    background: #F5F6F7;

    h2 {
        font-weight: 500;
        font-size: 24px;
    }

    small {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
}

.infos-car {

    small {
        color: $grey-4;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
    }

    div {
        border-top: 1px solid $grey-2;
    }
}

h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
}

h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
}

h6 {
    color: $grey-4;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
}
</style>
