<template>
    <div class="result" v-if="bill">
      <p>Размер чаевых: {{ tipTotal.toFixed(2) }} ₽</p>
      <p>Итого к оплате: {{ grandTotal.toFixed(2) }} ₽</p>
      <p v-if="people > 1">
        На человека: {{ perPerson.toFixed(2) }} ₽
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps<{
        bill: number;
        tipTotal: number;
        grandTotal: number;
        perPerson: number;
        people: number;
    }>();
  </script>
  
  <style scoped>
    .result {
        margin-top: 16px;
        font-weight: 600;
    }
  </style>
  