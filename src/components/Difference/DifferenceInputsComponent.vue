<template>
    <div style="margin-top: 15px;">
        <h1>my-input — все варианты</h1>

        <!-- 1. базовый v-model (modelValue/update:modelValue) -->
        <my-input v-model="basic" placeholder="v-model" />

        <!-- 2. v-model + .trim модификатор -->
        <my-input v-model.trim="trimmed" placeholder="with .trim" />

        <!-- 3. :modelValue + @update:modelValue вручную -->
        <my-input
            :modelValue="manual"
            @update:modelValue="manual = $event"
            placeholder="modelValue + update"
        />

        <!-- 4. v-model:customField (если компонент поддерживает) -->
        <my-input
            v-model:raw="raw"
            placeholder="v-model:raw (кастом-field)"
        />

        <pre>{{ { basic, trimmed, manual, raw } }}</pre>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const basic   = ref('');
    const trimmed = ref('');
    const manual  = ref('');
    const raw     = ref('');
</script>