<template>
    <teleport to="body">
        <div v-if="modelValue" class="modal-overlay" @click.self="close">
            <div class="modal-window">
                <slot />
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
    defineOptions({ name: 'my-modal' });

    defineProps<{ modelValue: boolean }>();

    const emit  = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>();

    const close = () => emit('update:modelValue', false);
</script>

<style scoped lang="scss">
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .modal-window {
        min-width: 320px;
        padding: 24px;
        background: #fff;
        border-radius: 8px;
    }
</style>
