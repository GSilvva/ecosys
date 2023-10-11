<template>
    <div class="car-preview mb-10 xl:mb-8 flex items-center gap-6 sm:gap-8">
        <img
            class="w-full object-cover h-24 sm:h-32 w-36 sm:w-40"
            :src="carImage"
            :alt="carName"
        >
        <div>
            <h5 class="mb-0.5">{{ carName }}</h5>
            <h6 class="mb-4 sm:mb-5">{{ $formatCurrency(carPrice) }}</h6>
            <footer class="flex gap-4 sm:gap-2 items-center">
                <small>{{ carBuildYear }}/{{ carModelYear }}</small>
                <div class="square"></div>
                <small>{{ $formatNumber(carKM) }}km</small>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    carImage: String,
    carName: String,
    carPrice: Number,
    carBuildYear: Number,
    carModelYear: Number,
    carKM: Number,
})
</script>

<style lang="scss" scoped>
.car-preview {

    h5 {
        font: 600 24px/32px $poppins;

        @media screen and (max-width: $mobile) {
            font: 600 16px/24px $poppins;
        }
    }

    h6 {
        font: 500 16px/24px $inter;
        color: $grey-5;

        @media screen and (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }

    small {
        font: 500 14px/24px $inter;
        color: $grey-4;
    }

    .square {
        display: block;
        width: 2px;
        height: 2px;
        background: $grey-4;

        @media screen and (max-width: $mobile) {
            display: none;
        }
    }
}
</style>
