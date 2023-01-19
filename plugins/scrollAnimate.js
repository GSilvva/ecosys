export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        function scrollAnimateElements() {
            document.querySelectorAll("[data-animate]").forEach(element => {
              if(element.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / 1.1) element.classList.add("active")
            })
        }

        ["DOMContentLoaded", "scroll", "load"].forEach(eventHandler => window.addEventListener(eventHandler, () => scrollAnimateElements()))
    })
})