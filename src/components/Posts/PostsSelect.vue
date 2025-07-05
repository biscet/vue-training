<template>
    <label class="select">
        Сортировка

        <select v-model="model">
            <option value="id">ID</option>
            <option value="title">Заголовку</option>
        </select>
    </label>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{ modelValue: 'id' | 'title' }>();
    const emit  = defineEmits<{ (e: 'update:modelValue', v: 'id' | 'title'): void }>();

    const model = computed({
        get: () => props.modelValue,
        set: (v) => emit('update:modelValue', v),
    });
</script>

<style scoped lang="scss">
    .select { 
        display: flex; 
        gap: 4px; 
        align-items: center; 

        select { 
            padding: 4px 6px; 
        }
    }
</style>
