<template>
  <div class="user-page">
    <template v-if="loading">Загрузка…</template>

    <div v-else-if="user">
      <h1>{{ user.name }}</h1>

      <ul>
        <li><strong>E-mail:</strong> {{ user.email }}</li>
        <li><strong>Телефон:</strong> {{ user.phone }}</li>
        <li><strong>Сайт:</strong> {{ user.website }}</li>
        <li><strong>Компания:</strong> {{ user.company.name }}</li>
      </ul>
    </div>

    <p v-else>Пользователь не найден</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { debounce } from '../lib/lodash';       
  import type { SingleUser} from './types'

  defineOptions({ name: 'UserPage' });

  const route   = useRoute();
  const user    = ref<SingleUser | null>(null);
  const loading = ref(false);
  const cache   = new Map<string, SingleUser>();

  const fetchFromServer = debounce(async (id: string) => {
    try {
      const { data } = await axios.get<SingleUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
      cache.set(id, data);
      user.value = data;
    } finally {
      loading.value = false;
    }
  }, 300);

  watch(
    () => route.params.id,
    (id) => {
      if (!id) return;

      const key = String(id);

      if (cache.has(key)) {
        user.value  = cache.get(key)!;
        loading.value = false;
        fetchFromServer.cancel?.();       
        return;
      }

      user.value  = null;
      loading.value = true;
      fetchFromServer(key);
    },
    { immediate: true },
  );
</script>

<style scoped lang="scss">
  .user-page {
    max-width: 480px;
    margin: 40px auto;
  }
</style>
