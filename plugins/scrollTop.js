export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            scrollTop: () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            }
        }
    }
});