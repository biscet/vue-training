<template>
    <form class="todo-input" @submit.prevent="add">
      <my-input
        v-model="text"
        placeholder="Новая задача…"
        class="todo-input__field"
      />

      <my-button @click="add" :disabled="!text.trim()">Добавить</my-button>
    </form>
  </template>
  
<script setup lang="ts">
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const text  = ref('');

    const add = () => {
        if (text.value.trim()) {
          store.dispatch('todo/addTask', text.value.trim());
          text.value = '';
        }
    }
</script>

<style scoped lang="scss">
  .todo-input {
      display: flex;
      gap: 8px;

      &__field {
          flex: 1;
      }

      button {
          color: red;
      }
  }
</style>
