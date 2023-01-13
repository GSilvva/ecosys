<template>
    <div class="scheduling">
        <ElementsContainer :class="`container ${full ? 'full !p-0' : ''}`">
            <section class="content w-full m-auto bg-white p-10">
                <h2 class="title uppercase mb-10 text-center">Agende sua avaliação e visita</h2>

                <section class="filiais grid grid-cols-3 gap-8">
                    <div
                        class="filial"
                        v-for="(filial, index) in scheduling.filiais"
                        :key="index"
                    >
                        <img
                            class="object-cover w-full h-52"
                            :src="filial.image"
                            :alt="filial.name"
                        >
                        <div class="pt-6 pb-9 pl-8 pr-2 flex flex-col items-start">
                            <h4 class="mb-4">{{ filial.name }}</h4>
                            <p>
                                {{ filial.address }}, {{ filial.city }}/{{ filial.state }}
                                <br>
                                Seg a Sex: {{ filial.week }}
                                <br>
                                Sáb: {{ filial.finalWeek }}
                            </p>
                            <a
                                class="mt-3 mb-8 inline-block underline"
                                :href="filial.url"
                                target="_blank"
                            >
                                Ver no Maps
                            </a>
                            <ElementsButton
                                outline
                                small
                                @click="openCalendar = true"
                            >
                                Selecionar
                            </ElementsButton>
                        </div>
                    </div>
                </section>

                <ElementsInterestCalendar />
            </section>
        </ElementsContainer>
    </div>
</template>

<script setup lang="ts">
const scheduling = reactive({
    filiais: [
        {
            image: "../../images/general/terraco.jpg",
            name: "Terraço Shopping",
            address: "Sudoeste",
            city: "Brasília",
            state: "DF",
            week: "8h30 às 18h",
            finalWeek: "9h às 14h",
            url: "https://www.google.com.br/maps/preview",
        },
        {
            image: "../../images/general/boulevard.jpg",
            name: "Boulevard Shopping",
            address: "Asa Norte",
            city: "Brasília",
            state: "DF",
            week: "8h30 às 18h",
            finalWeek: "9h às 14h",
            url: "https://www.google.com.br/maps/preview",
        },
        {
            image: "../../images/general/aguas-claras.jpg",
            name: "Águas Claras",
            address: "Av. Jacarandá, 29",
            city: "Brasília",
            state: "DF",
            week: "8h30 às 18h",
            finalWeek: "9h às 14h",
            url: "https://www.google.com.br/maps/preview",
        },
    ],
    openCalendar: false,
})

defineProps({
    full: Boolean,
})
</script>

<style lang="scss" scoped>
.content {
    max-width: 1010px;
}

.title {
    font: 700 24px/28px $gotham;
}

.filial {
    border: 1px solid $grey-2;

    h4 {
        font: 600 20px/28px $inter;
    }

    p {
        font: 400 16px/24px $inter;
        color: $grey-5;
    }

    a {
        font: 500 16px/24px $inter;
    }
}
</style>