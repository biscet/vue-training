<template>
    <ul class="todo-list">
      <todo-item v-for="t in tasks" :key="t.id" :task="t" />
    </ul>
  </template>
  
<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import TodoItem from './TodoItem.vue';
    import type { Task } from '../store/types';

    const store = useStore();
    const tasks = computed<Task[]>(() => {
      return store.getters['todo/tasks']
    });
</script>

<style scoped>
    .todo-list {
        margin-top: 16px;
        list-style: none;
        padding: 0;
    }
</style>
