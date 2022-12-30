<template>
    <div class="top-0 left-0 fixed w-full h-full transition z-40">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
div {
	background: rgba(0, 0, 0, 0.6);
	opacity: 0;
	visibility: hidden;

	&.visible {
		opacity: 1;
		visibility: visible;
	}
}
</style>