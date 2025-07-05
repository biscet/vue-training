<template>
    <input
      class="input"
      v-bind="restAttrs"
      :type="type"
      :disabled="disabled"
      v-model="model"
    />
</template>
  
<script setup lang="ts">
    import { ref, watch, useAttrs } from 'vue';
    import type { InputProps } from './types';

    defineOptions({ name: 'my-input' });

    const {
        type = 'text',
        disabled = false,
        modelValue = '',
    } = defineProps<InputProps>();

    const emit = defineEmits<{
        (e: 'update:modelValue', value: string): void;
    }>();

    const model = ref(modelValue);

    watch(model, (v) => emit('update:modelValue', v));
    watch(() => modelValue, (v) => (model.value = v));

    const restAttrs = useAttrs();
</script> 
  
<style scoped lang="scss">
    .input {
        padding: 10px 15px;
        background: none;
        color: white;
        border: 1px solid red;
        outline: none;
        cursor: text;

        &::placeholder{
            color: white;
            opacity: 0.8;
        }
    
        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    
        &:focus {
            border-color: teal;
        }
    }
</style>
  