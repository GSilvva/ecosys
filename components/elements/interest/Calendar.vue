<template>
    <form
        @submit.prevent="event"
        method="POST"
        action=""
        :class="`modal fixed left-0 top-0 z-50 w-full h-full flex items-end sm:items-center justify-end sm:justify-center transition overflow-hidden opacity-0 invisible ${open ? 'visible' : ''}`"
    >
        <div class="max-w-md w-full sm:m-auto bg-white relative z-40 pt-6 px-6 pb-8 sm:p-10 overflow-y-auto sm:overflow-y-hidden">
            <header class="month-year py-5 px-8 flex items-center justify-between">
                <button
                    @click="month - 1 !== new Date().getMonth() ? prevMonth() : false"
                    :class="`transition rotate-180 flex items-center justify-end w-8 h-8 ${month - 1 === new Date().getMonth() ? 'disabled' : ''}`"
                    type="button"
                >
                    <VectorsArrowCalendar />
                </button>
                <h3 class="uppercase text-center">
                    {{
                        new Intl
                            .DateTimeFormat('pt-BR', { month: 'long' })
                            .format(new Date(0, month, 0))
                    }}
                    {{ date().realMonthIndex === 12 ? date().year - 1 : date().year }}
                </h3>
                <button
                    @click="nextMonth"
                    class="transition flex items-center justify-end w-8 h-8"
                    type="button"
                >
                    <VectorsArrowCalendar />
                </button>
            </header>

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
                        v-for="day in date().firstDayOfMonthIndex"
                        :key="day"
                    ></span>
                    <template
                        v-for="day in date().days"
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
                                required
                            >
                            <span>{{ day }}</span>
                        </label>
                        <span v-else>{{ day }}</span>
                    </template>
                </div>
            </div>

            <ElementsFormSelect
                class="mt-8 sm:mt-10"
                floating
                label="Horário"
                :options="calendar.schedules"
                required
            />

            <div class="actions mt-8 flex items-center justify-end sm:justify-between gap-2 sm:gap-0">
                <ElementsButton
                    @click="$emit('update:open', false)"
                    outline
                    small
                >
                    Voltar
                </ElementsButton>
                <ElementsButton
                    small
                    submit
                >
                    Continuar
                </ElementsButton>
            </div>
        </div>

        <div
            @click="$emit('update:open', false)"
            class="overlay fixed top-0 left-0 w-full h-full z-30"
        ></div>
    </form>
</template>

<script setup lang="ts">
const calendar = reactive({
    selectedDay: 0,
    schedules: ["Selecione"],
    availability: [
        {
            day: 15,
            month: 2,
            year: 2023,
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
            month: 2,
            year: 2023,
            schedules: [
                "13:30",
                "11:30",
                "18:40"
            ]
        },
        {
            day: 19,
            month: 3,
            year: 2023,
            schedules: [
                "16:30",
                "16:45",
                "20:00",
            ]
        },
        {
            day: 20,
            month: 4,
            year: 2023,
            schedules: [
                "09:20",
                "10:50",
                "13:50",
            ]
        },
        {
            day: 21,
            month: 4,
            year: 2023,
            schedules: [
                "15:30",
                "16:00",
                "18:00",
            ]
        },
        {
            day: 22,
            month: 4,
            year: 2023,
            schedules: [
                "12:30",
                "13:00",
                "19:00",
            ]
        },
        {
            day: 23,
            month: 5,
            year: 2023,
            schedules: [
                "19:30",
                "17:20",
                "17:40",
            ]
        },
        {
            day: 26,
            month: 9,
            year: 2023,
            schedules: [
                "14:30",
                "15:00",
                "15:30",
            ]
        },
        {
            day: 27,
            month: 9,
            year: 2023,
            schedules: [
                "09:00",
                "10:00",
                "11:00",
            ]
        },
        {
            day: 28,
            month: 10,
            year: 2023,
            schedules: [
                "08:30",
                "16:30",
                "17:00",
            ]
        },
        {
            day: 29,
            month: 10,
            year: 2023,
            schedules: [
                "12:30",
            ]
        },
        {
            day: 14,
            month: 11,
            year: 2023,
            schedules: [
                "09:00",
                "09:30"
            ]
        },
        {
            day: 22,
            month: 12,
            year: 2023,
            schedules: [
                "09:00",
                "09:30"
            ]
        },
        {
            day: 9,
            month: 3,
            year: 2024,
            schedules: [
                "19:30",
                "17:20",
                "17:40",
            ]
        }
    ]
})

function verifyDayAvailable(day: number) {
    let is

    calendar.availability.forEach(el => el.day === day && el.month === date().realMonthIndex && el.year === date().realYearIndex ? is = true : false)

    return is
}

function daySelected() {
    calendar.availability.filter(el => el.day === calendar.selectedDay ? calendar.schedules = el.schedules : [])
}

// MONTHS
let month = ref(new Date().getMonth() + 1)
let date = () => {
    const days = new Date(new Date().getFullYear(), month.value, 0).getDate()
    const monthIndex = new Date(new Date().getFullYear(), month.value).getMonth()
    const realMonthIndex = monthIndex === 0 ? 12 : monthIndex
    const year = new Date(new Date().getFullYear(), month.value).getFullYear()
    const realYearIndex = realMonthIndex === 12 ? year - 1 : year
    const firstDayOfMonthIndex = new Date(year, month.value - 1, 1).getDay()

    return { days, year, firstDayOfMonthIndex, realMonthIndex, realYearIndex }
}

function prevMonth() {
    month.value--
    date()
}

function nextMonth() {
    month.value++
    date()
}

defineProps({
    open: Boolean,
    event: Function,
})

defineEmits(["update:open"])
</script>

<style lang="scss" scoped>
.visible {
    opacity: 1;
    visibility: visible;
}

.month-year {
    border: 1px solid $grey-2;
    
    h3 {
        font: 700 24px/28px $gotham;

        @media screen and (max-width: $mobile) {
            font: 700 16px/1 $gotham;
        }
    }

    button {
        
        &.disabled {
            cursor: not-allowed;
            opacity: .2;
        }
    }
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
}
</style>