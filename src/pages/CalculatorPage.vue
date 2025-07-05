<template>
  <section class="tip-calculator">
    <h1>Калькулятор чаевых</h1>

    <tip-input
      v-model.number="form.bill"
      label="Сумма счёта"
      :min="0"
      placeholder="0"
    />

    <tip-input
      v-model.number="form.tipPercent"
      label="Процент чаевых"
      :min="0"
      placeholder="10"
    />

    <tip-input
      v-model.number="form.people"
      label="Количество гостей"
      :min="1"
      placeholder="1"
    />

    <tip-results
      :bill="form.bill"
      :tip-total="tipTotal"
      :grand-total="grandTotal"
      :per-person="perPerson"
      :people="form.people"
    />
  </section>
</template>

<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import { TipInput, TipResults } from '../components';

  const form = reactive({
    bill: 0,
    tipPercent: 10,
    people: 1,
  });

  const tipTotal   = computed(() => (form.bill * form.tipPercent) / 100);
  const grandTotal = computed(() => form.bill + tipTotal.value);
  const perPerson  = computed(() => form.people ? grandTotal.value / form.people : 0);
</script>

<style scoped>
  .tip-calculator {
    max-width: 320px;
    margin: 40px auto;
    display: grid;
    gap: 12px;
  }
</style>
