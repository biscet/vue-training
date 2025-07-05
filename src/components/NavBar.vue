<template>
    <div class="navbar">
        <router-link :to="PATHS.GENERAL" class="navbar__link">Vue App Test</router-link>

        <div class="navbar__buttons">
            <my-button @click="navigateToPath(PATHS.GENERAL)">Главная</my-button>
            <my-button @click="navigateToPath(PATHS.ABOUT)">Разное</my-button>
            <my-button @click="navigateToPath(PATHS.CALCULATOR)">Калькулятор</my-button>
            <my-button @click="navigateToPath(PATHS.TODO)">Todo</my-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import PATHS from '../router/constants';

    const router = useRouter();

    const navigateToPath = (path: string) => {
        router.push(path);
    };
</script>

<style scoped lang="scss">
    .navbar {
        height: 50px;
        background-color: lightgray;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

        &__buttons {
            display: flex;
            gap: 8px;
        }

        &__link {
            color: black;
            text-decoration: none;

            &:hover{
                opacity: 0.7;
            }
        }

    }
</style>
