export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) document.querySelector(".nav").classList.add("nav--fixed");
            else document.querySelector(".nav").classList.remove("nav--fixed");
        });
    })
})