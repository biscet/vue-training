<template>
  <div  style="margin-top: 15px;">
    <h1>Нативный&nbsp;input — все способы</h1>

    <!-- 1. v-model -->
    <input v-model="vModelValue" placeholder="v-model" />

    <!-- 2. :value + @input -->
    <input
      :value="manualValue"
      @input="manualValue = ($event.target as HTMLInputElement).value"
      placeholder="value + input"
    />

    <!-- 3. ref + @input -->
    <input ref="refEl" placeholder="ref" @input="takeFromRef" />

    <!-- 4. computed setter -->
    <input v-model="computedValue" placeholder="computed" />

    <pre>{{ { vModelValue, manualValue, refValue, computedValue } }}</pre>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  /* -------- способ 1 -------- */
  const vModelValue = ref('');

  /* -------- способ 2 -------- */
  const manualValue = ref('');

  /* -------- способ 3 -------- */
  const refEl   = ref<HTMLInputElement | null>(null);
  const refValue = ref('');
  const takeFromRef = () => {
    refValue.value = refEl.value?.value ?? '';
  };

  /* -------- способ 4 -------- */
  const _inner = ref('');
  const computedValue = computed({
    get: () => _inner.value,
    set: (v) => (_inner.value = v.toUpperCase())
  });
</script>

<style scroped lang="scss">
    input {
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