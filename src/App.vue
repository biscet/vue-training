<template>
  <nav-bar />

  <router-view v-slot="{ Component }">
    <keep-alive include="UserPage" max="3">
      <component :is="Component" :key="userPageKey" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
  import { NavBar } from './components';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import PATHS from './router/constants'

  const route = useRoute();

  const userPageKey = computed(() =>
    route.name === PATHS.USER.replace('/','') ? String(route.params.id) : undefined,
  );
</script>

<style scoped>
</style>
