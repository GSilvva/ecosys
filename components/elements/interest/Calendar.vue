<template>
    <div :class="`modal fixed left-0 top-0 z-50 w-full h-full opacity-0 invisible flex items-center justify-center transition overflow-hidden ${calendar.open ? 'visible' : ''}`">
        <div class="max-w-md w-full m-auto bg-white relative z-40 p-10">
            <h3 class="month-year uppercase py-6 text-center">
                {{
                    new Intl
                        .DateTimeFormat('pt-BR', { month: 'long' })
                        .format(new Date(0, availability.month, 0))
                }}
                {{ availability.year }}
            </h3>

            <div class="calendar p-5">
                <div class="days row grid grid-cols-7 gap-x-2 mb-5">
                    <span>D</span>
                    <span>S</span>
                    <span>T</span>
                    <span>Q</span>
                    <span>Q</span>
                    <span>S</span>
                    <span>S</span>
                </div>

                <div class="numbers row grid grid-cols-7 gap-y-1 gap-x-2">
                    <span
                        v-for="previousDay in firstDayOfMonthIndex"
                        :key="previousDay"
                    ></span>
                    <template
                        v-for="day in daysInMonth"
                        :key="day"
                    >
                        <label
                            v-if="verifyDayAvailable(day)"
                            :class="verifyDayAvailable(day) ? 'avaliable' : ''"
                            :for="`dia${day}`"
                        >
                            <input
                                :id="`dia${day}`"
                                class="absolute opacity-0"
                                name="day"
                                type="radio"
                                :value="day"
                                @change="daySelected"
                                v-model="calendar.selectedDay"
                            >
                            <span>{{ day }}</span>
                        </label>
                        <span v-else>{{ day }}</span>
                    </template>
                </div>
            </div>

            <ElementsFormSelect
                class="mt-10"
                floating
                label="Horário"
                :options="['Selecione', ...calendar.schedules]"
                required
            />

            <div class="actions mt-8 flex items-center justify-between">
                <ElementsButton
                    @click="calendar.open = false"
                    outline
                    small
                >
                    Voltar
                </ElementsButton>
                <ElementsButton
                    @click="calendar.open = false"
                    small
                >
                    Continuar
                </ElementsButton>
            </div>
        </div>

        <div
            @click="calendar.open = false"
            @click.prevent="$preventScrollBody"
            class="overlay fixed top-0 left-0 w-full h-full z-30"
        ></div>
    </div>
</template>

<script setup lang="ts">
const availability = {
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
const daysInMonth = new Date(availability.year, availability.month, 0).getDate()
const daysInMonthArr: any[] = []
const pushingDays = () => {
    for (let index = 0; index <= daysInMonth; index++) {
        daysInMonthArr.push(index)
    }

    return daysInMonthArr
}
const firstDayOfMonthIndex = new Date(availability.year, availability.month - 1, 1).getDay()

function verifyDayAvailable(day: number) {
    let is

    availability.days.forEach(el => el.day === day ? is = true : false)

    return is
}

function daySelected() {
    availability.days.filter(el => el.day === calendar.selectedDay ? calendar.schedules = el.schedules : [])
}

const calendar = reactive({
    selectedDay: 0,
    schedules: [],
    open: false,
})
</script>

<style lang="scss" scoped>
.visible {
    opacity: 1;
    visibility: visible;
}

.month-year {
    font: 700 24px/28px $gotham;
    border: 1px solid $grey-2;
}

.calendar {
    border-left: 1px solid $grey-2;
    border-right: 1px solid $grey-2;
    border-bottom: 1px solid $grey-2;

    span {
        font: 500 16px/1 $inter;
        text-align: center;
    }

    .days {

        span {
            color: $grey-5;
        }
    }

    .numbers {

        label {

            &.avaliable {

                span {
                    cursor: pointer;
                    color: $dark;

                    &:hover {
                        border-color: $grey-2;
                    }
                }
            }

            input:checked ~ span {
                cursor: initial;
                color: $white;
                border-color: $orange;
                background: $orange;

                &:hover {
                    border-color: $orange;
                }
            }
        }

        span {
            cursor: not-allowed;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1000px;
            color: $grey-3;
            border: 1px solid $white;
            transition: .4s;
        }
    }
}

.overlay {
    background: rgba(0, 0, 0, 0.2);

    @media screen and (max-width: $tablet) {
        background: rgba(0, 0, 0, 1);
    }
}
</style>
