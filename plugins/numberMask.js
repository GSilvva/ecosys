export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            numbersMask: (event) => {
                const mask = event.target.value.replace(/\D/g, '');
                event.target.value = mask;
            }
        }
    }
});