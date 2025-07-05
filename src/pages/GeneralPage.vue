<template>
    <div class="general">
        <my-input
            class="general__input"
            v-model="search"
            type="text"
            placeholder="Введите имя пользователя"
        />

        <div
            v-if="debounced && filteredUsers.length"
            class="general__list list"
        >
            <div 
                class="list__item" 
                v-for="user in filteredUsers" 
                v-go="userRoute(user.id)"
                :key="user.id"
             >
                {{ user.name }} — {{ user.email }}
            </div>
        </div>

        <p v-else-if="debounced">Пользователи не найдены</p>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import axios from 'axios';
    import PATHS from '../router/constants'
    import { useDebouncedField } from '../composables';
    import type { User } from './types';

    const userRoute = (id: number | string) => ({
        name: PATHS.USER.replace('/',''),
        params: { id },
    });

    const users = ref<User[]>([]);
    const { search, debounced } = useDebouncedField('search');

    const filteredUsers = computed(() =>
        users.value.filter((u) =>
            u.name.toLowerCase().includes(debounced.value),
        ),
    );

    onMounted(async () => {
        const { data } = await axios.get<User[]>( 'https://jsonplaceholder.typicode.com/users');
        users.value = data;
    });
</script>

<style scoped lang="scss">
    .general {
        &__input {
            width: 100%;
        }

        &__list {
            margin-top: 12px;
            list-style: none;
            padding: 0;
        }

        .list{
            &__item{
                border: 1px solid red;
                padding: 10px 15px;
                cursor: pointer;
            }
        }
    }
</style>
