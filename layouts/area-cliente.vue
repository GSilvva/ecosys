<template>
  <div class="__app">
    <LayoutNavbar />
    <div class="pt-intern pb-12 xl:pb-16">
        <ElementsContainer class="xl:flex gap-16">
            <div>
              <LayoutSidebar class="sticky top-28" />
            </div>
            <div class="w-full">
                <slot />
            </div>
        </ElementsContainer>
    </div>
  </div>
</template>