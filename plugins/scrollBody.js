export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            scrollBody: () => {
                document.body.classList.remove("overflow-hidden");
                document.documentElement.classList.remove("overflow-hidden");
            }
        }
    }
});