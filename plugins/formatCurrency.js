export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            formatCurrency: (value) => {
                const number = parseFloat(value)                

                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(number)
            }
        }
    }
});