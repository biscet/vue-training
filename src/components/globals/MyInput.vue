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
    import { computed, useAttrs, defineProps, defineEmits } from 'vue';
    import type { InputProps } from './types';

    defineOptions({ name: 'my-input' });

    const props = defineProps<InputProps>();

    const emit = defineEmits<{
        (e: 'update:modelValue', value: string): void;
        (e: 'update:raw', value: string): void;
    }>();

    const model = computed<string>({
        get: () => (props.raw !== undefined ? props.raw : props.modelValue) ?? '',
        set: (v) => {
            if (props.raw !== undefined) emit('update:raw', v);
            else emit('update:modelValue', v);
        },
    });

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
  