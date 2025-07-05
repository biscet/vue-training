<template>
    <label class="tip-input">
      {{ label }}
      <my-input
        v-model.number="model"
        :type="type"
        :min="min"
        :placeholder="placeholder"
      />
    </label>
  </template>
  
  <script setup lang="ts">
    import { computed } from 'vue';
    
    const props = defineProps<{
        label: string;
        type?: string;
        min?: number;
        placeholder?: string;
        modelValue: number;
    }>();
    
    const emit = defineEmits<{
        (e: 'update:modelValue', value: number): void;
    }>();
    
    const model = computed({
        get: () => props.modelValue,
        set: (v) => emit('update:modelValue', v),
    });
  </script>
  
  <style scoped>
    .tip-input {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
  </style>
  