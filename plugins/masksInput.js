export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            masksInput: (text) => {
                console.log(text);
            }
        }
    }
});