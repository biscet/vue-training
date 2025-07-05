<template>
  <button
    class="button"
    v-bind="restAttrs"
    :type="type"
    :disabled="disabled"
  >
    <slot>***</slot>
  </button>
</template>

<script setup lang="ts">
  import { useAttrs } from 'vue';
  import type { ButtonProps } from './types'

  defineOptions({ name: 'my-button' });

  const { type = 'button', disabled = false } = defineProps<ButtonProps>();

  const restAttrs = useAttrs();
</script>

<style scoped lang="scss">
  .button {
    padding: 10px 15px;
    background: none;
    color: black;
    border: 1px solid red;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
</style>
