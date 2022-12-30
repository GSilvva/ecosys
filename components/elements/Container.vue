<template>
    <div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    div {
        max-width: calc(1216px + 80px);
        width: 100%;
        padding: 0 40px;
        margin: 0 auto;
        
        @media screen and (max-width: 640px) {
            padding: 0 24px;
        }
    }

</style>