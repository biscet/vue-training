<template>
    <div class="page">
        <my-button @click="show = true">Открыть форму</my-button>

        <my-modal v-model="show">
            <form class="demo-form" @submit.prevent="handleSubmit">
                <h2>Форма обратной связи</h2>

                <my-input
                    v-model="name"
                    placeholder="Ваше имя"
                    class="demo-form__field"
                />

                <my-input
                    v-model="email"
                    type="email"
                    placeholder="E-mail"
                    class="demo-form__field"
                />

                <my-button type="submit">Отправить</my-button>
            </form>
        </my-modal>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const show  = ref(false);
    const name  = ref('');
    const email = ref('');

    const handleSubmit = () => {
        alert(`Имя: ${name.value}\nE-mail: ${email.value}`);
        show.value = false;  
    }
</script>

<style scoped lang="scss">
    .page {
        max-width: 640px;
        margin: 40px auto;
        text-align: center;

        button{
            color: red;
        }
    }

    .demo-form {
        display: grid;
        gap: 12px;
        color: black;

        input{
            color: black;

            &::placeholder{
                color: rgba(0,0,0,0.8);
            }
        }

        &__field {
            width: 100%;
        }
    }
</style>
