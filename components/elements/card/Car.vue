<template>
    <div class="card-car">
        <figure>
            <div class="flex">
                <span v-if="recent">Novo</span>
                <span v-if="promotion">Promoção</span>
            </div>
            <template v-if="photos">
                <img v-for="(photo, index) in photos" :key="index" :src="photo.url_path" :alt="`Foto ${index + 1}`">
            </template>
            <img v-else src="@/images/general/default-image.svg" alt="Foto">
        </figure>
        <h3>{{ name }}</h3>
        <p>{{ characteristics }}</p>
        <section>
            <h4>{{ price }}</h4>
            <h6>{{ old_price }}</h6>
        </section>
        <footer>
            <small>{{ build_year }}/{{ model_year }}</small>
            <small>{{ km }}km</small>
        </footer>
    </div>
</template>

<script setup lang="ts">
defineProps({
    photos: Array,
    recent: Boolean,
    promotion: Boolean,
    name: String,
    characteristics: String,
    price: Number,
    old_price: Number,
    build_year: Number,
    model_year: Number,
    km: Number,
});
</script>

<style lang="scss" scoped>

</style>