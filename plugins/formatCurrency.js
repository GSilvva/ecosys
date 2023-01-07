export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            formatCurrency: (value) => {
                return value
                    .toLocaleString(
                        'pt-br',
                        {
                            style: 'currency',
                            currency: 'BRL',
                            maximumFractionDigits: 0
                        });
            }
        }
    }
});