export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        const nav = document.querySelector(".nav")
        if (nav) {
            window.addEventListener("scroll", () => {
                if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) nav.classList.add("nav--fixed");
                else nav.classList.remove("nav--fixed");
            })
        }
    })
})