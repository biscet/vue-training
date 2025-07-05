<template>
    <section class="todo-page">
      <h1>Мои задачи</h1>
      <todo-input />
      <todo-list />
    </section>
  </template>
  
  <script setup lang="ts">
   import { TodoList, TodoInput } from '../components';
  </script>
  
  <style scoped>
  .todo-page {
    max-width: 480px;
    margin: 40px auto;
  }
  </style>
  