<template>
    <button @click="openVideo = true" class="thumbnail relative h-full w-full" type="button">
        <img class="h-full w-full object-cover opacity-80" :src="thumbnail" alt="Foto">
        <div class="absolute top-1/2 left-1/2 p-3 rounded-full"><VectorsPlay /></div>
    </button>
    
    <article :class="`modal fixed left-0 top-0 z-50 w-full h-full opacity-0 invisible flex items-center justify-center transition overflow-hidden ${openVideo ? 'visible' : ''}`">
        <button
            class="close absolute right-4 rounded-full py-1 px-3 transition xl:hidden z-50"
            @click="openVideo = false"
            type="button"
        >Fechar</button>
        <ElementsContainer block class="relative z-50">
            <div class="content transition relative">
                <button
                    class="close absolute right-0 rounded-full py-1 px-3 transition hidden xl:block"
                    @click="openVideo = false"
                    type="button"
                >Fechar</button>
                <div class="overflow-hidden relative"><iframe width="100%" height="100%" :src="`${video}${openVideo ? '?autoplay=1' : ''}`" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
        </ElementsContainer>
        <div @click="openVideo = false" class="overlay fixed top-0 left-0 w-full h-full z-40"></div>
    </article>
</template>

<script setup lang="ts">
const openVideo = ref(false);

defineProps({
    thumbnail: String,
    video: String,
});
</script>

<style lang="scss" scoped>
.thumbnail {
    background: $dark;

    div {
        border: 3px solid rgba(255, 255, 255, .8);
        animation: scale 4s ease infinite;

        @media screen and (max-width: $tablet) {
            width: 72px;
            height: 72px;
            border-width: 2px;
            svg {
                width: 100%;
                height: 100%;
            }
        }

        @keyframes scale {
            0%, 30%, 50%, 80%, 100% {
                transform: translate(-50%, -50%) scale(1);
            }
            40% {
                transform: translate(-50%, -50%) scale(1.2);
            }
            60% {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
}

.modal {
    &.visible {
        opacity: 1;
        visibility: visible;
        
        div {
            transform: translateY(0);
        }
    }

    .content {
        transform: translateY(-16px);

        div {
            @media screen and (min-width: $tablet) {
                max-height: 80vh;
            }

            @media screen and (max-width: $tablet) {
                width: 100vw;
                transform: translateX(-40px);
            }

            @media screen and (max-width: $mobile) {
                transform: translateX(-24px);
            }

            @media screen and (max-height: 480px) {
                max-width: calc(100% - 96px - 96px);
                transform: unset;
                margin: 0 auto;
            }

            &::after {
                content: "";
                display: block;
                padding-top: 56.25%;
            }
            
            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    .overlay {
        background: rgba(0, 0, 0, 0.6);

        @media screen and (max-width: $tablet) {
            background: rgba(0, 0, 0, 1);
        }
    }

    .close {
        font: 500 12px/20px $inter;
        background: $grey-1;
        top: -16px;
        transform: translateY(-100%);

        @media screen and (max-width: $tablet) {
            transform: unset;
            top: 16px;
        }
        
        &:hover {
            background: $grey-2;
        }
    }
}
</style>
