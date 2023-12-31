export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            formatStringSimple: (text) => {
                return text
                    .toString()
                    .toLowerCase()
                    .normalize('NFD')
                    .trim()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-');
            }
        }
    }
});