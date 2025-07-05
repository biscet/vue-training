<template>
    <transition-group
      name="todo"          
      tag="ul"             
      class="todo-list"
    >
      <todo-item v-for="t in tasks" :key="t.id" :task="t" />
    </transition-group>
  </template>
  
<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import TodoItem from './TodoItem.vue';
    import type { Task } from '../../store/types';

    const store = useStore();
    const tasks = computed<Task[]>(() => {
      return store.getters['todo/tasks']
    });
</script>

<style scoped lang="scss">
  .todo-list {
    margin-top: 16px;
    list-style: none;
    padding: 0;
  }

  .todo {
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(-8px);
    }

    &-enter-active,
    &-leave-active {
      transition: 0.25s ease;
    }

    &-leave-active {
      position: absolute;
    }

    &-move {
      transition: transform 0.25s ease;
    }
  }
</style>
