<template>
    <div class="scheduling">
        <ElementsContainer :class="`container ${full ? 'full !p-0' : ''}`">
            <section class="content w-full m-auto bg-white pt-8 pb-10 px-6 sm:p-10">
                <h2 :class="`title mb-6 xl:mb-10 xl:text-center ${left ? 'xl:!text-left' : ''}`">{{ title }}</h2>
                
                <p class="text mb-6 xl:hidden">Selecione um local</p>

                <section class="filiais grid grid-cols-1 gap-4 xl:gap-6">
                    <div
                        @click="scheduling.openCalendar = true"
                        class="filial cursor-pointer flex items-center"
                        v-for="(filial, index) in scheduling.filiais"
                        :key="index"
                    >
                        <img
                            class="object-cover w-36 xl:w-full h-full"
                            :src="filial.image"
                            :alt="filial.name"
                        >
                        <div class="flex w-full p-5 pr-0 xl:p-10">
                            <aside class="w-full">
                                <h4 class="xl:mb-4">{{ filial.name }}</h4>
                                <p>
                                    {{ filial.address }}, {{ filial.city }}/{{ filial.state }}
                                    <span class="hidden xl:block">
                                        Seg a Sex: {{ filial.week }} - Sáb: {{ filial.finalWeek }}
                                    </span>
                                </p>
                                <a
                                    class="mt-2.5 xl:mt-3 inline-block underline"
                                    :href="filial.url"
                                    target="_blank"
                                >
                                    Ver no Maps
                                </a>
                            </aside>
                            <aside class="hidden xl:flex flex-col justify-between items-end">
                                <p>Há {{ filial.km }}km</p>
                                <ElementsButton outline small>Selecionar</ElementsButton>
                            </aside>
                        </div>
                    </div>
                </section>

                <ElementsInterestCalendar
                    v-model:open="scheduling.openCalendar"
                    :event="event"
                />
            </section>
        </ElementsContainer>
    </div>
</template>

<script setup lang="ts">
const scheduling = reactive({
    filiais: [
        {
            image: "../../images/general/terraco.jpg",
            name: "Revendedor 1",
            address: "Sudoeste",
            city: "Brasília",
            state: "DF",
            week: "8h30 às 18h",
            finalWeek: "9h às 14h",
            url: "https://www.google.com.br/maps/preview",
            km: 1,
            availability: {
                year: 2022,
                month: 9,
                days: [
                    {
                        day: 15,
                        schedules: [
                            "10:30",
                            "11:00",
                            "11:30",
                            "12:30",
                            "13:30",
                            "18:40"
                        ]
                    },
                    {
                        day: 16,
                        schedules: [
                            "13:30",
                            "11:30",
                            "18:40"
                        ]
                    },
                    {
                        day: 19,
                        schedules: [
                            "16:30",
                            "16:45",
                            "20:00",
                        ]
                    },
                    {
                        day: 20,
                        schedules: [
                            "09:20",
                            "10:50",
                            "13:50",
                        ]
                    },
                    {
                        day: 21,
                        schedules: [
                            "15:30",
                            "16:00",
                            "18:00",
                        ]
                    },
                    {
                        day: 22,
                        schedules: [
                            "12:30",
                            "13:00",
                            "19:00",
                        ]
                    },
                    {
                        day: 23,
                        schedules: [
                            "19:30",
                            "17:20",
                            "17:40",
                        ]
                    },
                    {
                        day: 26,
                        schedules: [
                            "14:30",
                            "15:00",
                            "15:30",
                        ]
                    },
                    {
                        day: 27,
                        schedules: [
                            "09:00",
                            "10:00",
                            "11:00",
                        ]
                    },
                    {
                        day: 28,
                        schedules: [
                            "08:30",
                            "16:30",
                            "17:00",
                        ]
                    },
                    {
                        day: 29,
                        schedules: [
                            "12:30",
                        ]
                    },
                    {
                        day: 30,
                        schedules: [
                            "09:00",
                            "09:30"
                        ]
                    },
                ],
            }
        },
        {
            image: "../../images/general/boulevard.jpg",
            name: "Revendedor 2",
            address: "Asa Norte",
            city: "Brasília",
            state: "DF",
            week: "8h30 às 18h",
            finalWeek: "9h às 14h",
            url: "https://www.google.com.br/maps/preview",
            km: 15,
            availability: {
                year: 2022,
                month: 9,
                days: [
                    {
                        day: 21,
                        schedules: [
                            "15:30",
                            "16:00",
                            "18:00",
                        ]
                    },
                    {
                        day: 27,
                        schedules: [
                            "09:00",
                            "10:00",
                            "11:00",
                        ]
                    },
                    {
                        day: 28,
                        schedules: [
                            "08:30",
                            "16:30",
                            "17:00",
                        ]
                    },
                    {
                        day: 29,
                        schedules: [
                            "12:30",
                        ]
                    },
                    {
                        day: 30,
                        schedules: [
                            "09:00",
                            "09:30"
                        ]
                    },
                ],
            }
        }
    ],
    openCalendar: false,
    finished: false,
})

defineProps({
    title: String,
    full: Boolean,
    event: Function,
    left: Boolean,
})
</script>

<style lang="scss" scoped>
.scheduling {
    @media screen and (max-width: $tablet) {
        margin-top: -43px;
    }
}

.content {
    max-width: 1010px;
}

.title {
    font: 600 24px/28px $poppins;

    @media screen and (max-width: $tablet) {
        font: 600 20px/28px $poppins;
        max-width: 245px;
        width: 100%;
    }
}

.text {
    font: 500 16px/24px $inter;
    color: $dark;
}

.filial {
    border: 1px solid $grey-2;

    @media screen and (max-width: $tablet) {
        height: 108px;
    }

    img {
        
        @media (min-width: $mobile) {
            max-width: 290px;
        }
    }

    h4 {
        font: 600 20px/28px $inter;
    
        @media screen and (max-width: $tablet) {
            font: 600 14px/22px $inter;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    p {
        &,
        & * {
            font: 400 16px/24px $inter;
            color: $grey-5;

            @media screen and (max-width: $tablet) {
                font: 400 14px/20px $inter;
            }
        }

        @media screen and (max-width: $mobile) {
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
        }
    }

    a {
        font: 500 16px/24px $inter;
        
        @media screen and (max-width: $tablet) {
            font: 500 14px/20px $inter;
        }
    }
}
</style>