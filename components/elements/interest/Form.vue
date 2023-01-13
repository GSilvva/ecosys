<template>
    <div class="form w-full bg-white p-10">
        <h2 class="title uppercase mb-12">{{ title }}</h2>

        <form
            class="fields"
            action=""
            method="POST"
        >
            <template v-if="car">
                <ElementsFormInput
                    classesFieldset="mb-3"
                    floating
                    label="Placa do carro"
                    required
                />
                <ElementsFormCheckbox form label="Não sei a placa" />
                <ElementsFormSelect
                    class="my-8"
                    floating
                    label="Marca"
                    :options="[]"
                    required
                />
                <ElementsFormSelect
                    class="mb-8"
                    floating
                    label="Modelo"
                    :options="[]"
                    required
                />
                <div class="grid grid-cols-2 gap-6 mb-6">
                    <ElementsFormSelect
                        floating
                        label="Ano"
                        :options="[]"
                        required
                    />
                    <ElementsFormSelect
                        floating
                        label="Fabricação"
                        :options="[]"
                        required
                    />
                </div>
                <div class="options mb-8">
                    <div class="flex items-center justify-between">
                        <h6 class="w-full">Sabe a versão?</h6>

                        <div class="flex gap-2">
                            <ElementsFormOption
                                @click="formComponent.version = true"
                                label="Sim"
                                name="optVersion"
                            />
                            <ElementsFormOption
                                @click="formComponent.version = false"
                                label="Não"
                                name="optVersion"
                                checked
                            />
                        </div>
                    </div>

                    <ElementsFormSelect
                        class="mt-8"
                        v-if="formComponent.version"
                        floating
                        label="Versão"
                        :options="[]"
                        required
                    />
                </div>
            </template>

            <template v-else>
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
                />
                <div class="options mb-8">
                    <div class="flex items-center justify-between">
                        <h6 class="w-full">Deseja pré-aprovar o financiamento?</h6>

                        <div class="flex gap-2">
                            <ElementsFormOption
                                @click="formComponent.financing = true"
                                label="Sim"
                                name="optFinanciamento"
                            />
                            <ElementsFormOption
                                @click="formComponent.financing = false"
                                label="Não"
                                name="optFinanciamento"
                                checked
                            />
                        </div>
                    </div>

                    <ElementsFormInput
                        v-if="formComponent.financing"
                        classesFieldset="mt-8"
                        floating
                        label="CPF"
                        type="text"
                        required
                    />
                </div>
                <div class="options">
                    <div class="flex items-center justify-between">
                        <h6 class="w-full">Deseja enviar uma mensagem?</h6>

                        <div class="flex gap-2">
                            <ElementsFormOption
                                @click="formComponent.message = true"
                                label="Sim"
                                name="optMessage"
                            />
                            <ElementsFormOption
                                @click="formComponent.message = false"
                                label="Não"
                                name="optMessage"
                                checked
                            />
                        </div>
                    </div>

                    <ElementsFormInput
                        v-if="formComponent.message"
                        classesFieldset="mt-8"
                        floating
                        label="Mensagem"
                        textarea
                        required
                    />
                </div>
            </template>

            <footer class="bottom mt-8 flex items-center justify-between">
                <div class="w-full">
                    <small v-if="car">Todos os campos são obrigatórios</small>
                </div>
                <slot name="button"></slot>
            </footer>
        </form>
    </div>
</template>

<script setup lang="ts">
const formComponent: object = reactive({
    financing: false,
    message: false,
    version: false,
})

defineProps({
    title: String,
    textButton: String,
    car: Boolean,
    continue: Boolean,
})
</script>


<style lang="scss" scoped>
.form {
    max-width: 450px;

    .title {
        font: 700 24px/28px $gotham;
    }

    .fields {

        .options {

            h6 {
                max-width: 150px;
                font: 500 16px/24px $inter;
            }
        }
    }

    .bottom {

        small {
            font: 500 14px/20px $inter;
            max-width: 145px;
            width: 100%;
            color: $grey-4;
        }

        .button {
            font: 500 16px/24px $inter;
        }
    }
}
</style>