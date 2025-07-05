<template>
  <li class="todo-item" :class="{ done: task.completed }">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="toggle"
    />

    <span v-if="!editing" @dblclick="startEdit">
      {{ task.text }}
    </span>

    <my-input
      v-else
      v-model="draft"
      @keyup.enter="save"
      @blur="save"
      class="todo-item__edit"
    />

    <button @click="deleteTask(task.id)" class="todo-item__del">X</button>
  </li>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useMapAction } from '../composables/';
  import type { Task } from '../store/types';

  const props = defineProps<{ task: Task }>();

  const mapAction  = useMapAction();
  const deleteTask = mapAction<(id: number) => void>('todo/deleteTask');
  const toggleTask = mapAction<(id: number) => void>('todo/toggleTask');
  const updateTask = mapAction<(p: { id: number; text: string }) => void>('todo/updateTask');

  const editing = ref(false);
  const draft   = ref(props.task.text);

  watch(
    () => props.task.text,
    (v) => (draft.value = v),
  );

  const toggle = () => {
    toggleTask(props.task.id);
    editing.value = false;
  };

  const startEdit = () => {
    if (!props.task.completed) editing.value = true;
  };

  const save = () => {
    if (!editing.value) return;

    const txt = draft.value.trim();
    if (txt) updateTask({ id: props.task.id, text: txt });

    editing.value = false;
  };
</script>

<style scoped lang="scss">
  .todo-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;

    &.done span {
      text-decoration: line-through;
      opacity: 0.6;
    }

    &__edit {
      flex: 1;
    }

    &__del {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }
  }
</style>
