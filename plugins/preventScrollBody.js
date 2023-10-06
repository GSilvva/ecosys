export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            preventScrollBody: () => {
                document.body.classList.toggle("overflow-hidden");
                document.documentElement.classList.toggle("overflow-hidden");
            }
        }
    }
});