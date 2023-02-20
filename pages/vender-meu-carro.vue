<template>
    <LayoutNavbarActions v-if="!saleCar.resume">
        <div class="steps flex items-center gap-4 sm:gap-8 xl:pl-6">
            <div
                v-for="(step, index) in saleCar.steps"
                :key="step"
                :class="`
                    flex items-center gap-3 
                    ${index + 1 === saleCar.actualStep ? 'active' : ''}
                    ${saleCar.actualStep > index + 1 ? 'checked' : ''}
                `"
            >
                <span class="number rounded-full w-7 xl:w-8 h-7 xl:h-8 flex items-center justify-center">
                    <VectorsCheckSmall v-if="index + 1 < saleCar.actualStep" />
                    <template v-else>{{ index + 1 }}</template>
                </span>

                <span class="label hidden xl:block">{{ step }}</span>
                <span v-if="index + 1 === saleCar.actualStep" class="label xl:hidden">{{ step }}</span>
            </div>
        </div>
    </LayoutNavbarActions>
    <LayoutNavbar v-else/>

    <main class="sale pt-big sm:pb-20">
        <ElementsContainer class="container" block>
            <ElementsInterestForm
                v-if="saleCar.actualStep === 1 && !saleCar.resume"
                title="Dados do carro"
                textButton="Continuar"
                car
                class="form-data sm:m-auto"
            >
                <template v-slot:button>
                    <ElementsButton
                        @click="saleCar.actualStep = 2"
                        class="button py-4 px-8"
                    >
                        Continuar
                    </ElementsButton>
                </template>
            </ElementsInterestForm>

            <ElementsInterestScheduling
                v-if="saleCar.actualStep === 2 && !saleCar.resume"
                :event="prox"
                title="Agende sua visita"
                left
                full
            />

            <ElementsInterestForm
                v-if="saleCar.actualStep === 3 && !saleCar.resume"
                title="Seus dados"
                template
                class="form-data sm:m-auto"
            >
                <ElementsFormInput
                    classesFieldset="mb-8"
                    floating
                    label="Nome"
                    required
                />
                <ElementsFormInput
                    classesFieldset="mb-8"
                    floating
                    label="E-mail"
                    type="email"
                    required
                />
                <ElementsFormInput
                    classesFieldset="mb-8"
                    floating
                    label="Telefone"
                    type="tel"
                    required
                    mask="(##) #####-####"
                />
                <footer class="flex justify-between gap-2">
                    <ElementsButton
                        @click="saleCar.actualStep = 2"
                        outline
                        small
                    >
                        Voltar
                    </ElementsButton>
                    <ElementsButton
                        @click="saleCar.resume = true"
                        class="button py-4 px-0 w-full"
                        green
                    >
                        Finalizar agendamento
                    </ElementsButton>
                </footer>
            </ElementsInterestForm>

            <ElementsInterestResume
                v-if="saleCar.resume"
                name="Tiago"
                sale
            />
        </ElementsContainer>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
})

const saleCar = reactive({
    resume: false,
    actualStep: 1,
    steps: [
        "Veículo",
        "Agendar",
        "Seus dados",
    ],
})

function prox() {
    saleCar.actualStep = 3
}
</script>

<style lang="scss" scoped>
.form-data {
    @media screen and (max-width: $mobile) {
        margin-top: -43px;
        width: 100%;
        transform: unset;
    }
}

.container {
    @media screen and (max-width: $mobile) {
        padding: 0;
    }
}

.steps {

    span {
        font: 500 16px/24px $inter;

        @media screen and (max-width: $mobile) {
            font: 500 14px/22px $inter;
        }
    }

    .number {
        color: $grey-3;
        border: 1px solid $grey-2;
    }

    .label {
        color: $grey-4;
    }

    .active {
        
        .number {
            background: $dark;
            border-color: $dark;
            color: $white;
        }
    
        .label {
            color: $dark;
        }
    }

    .checked {

        .number {
            border-color: $grey-1;
            background: $grey-1;
        }
    }
}
</style>