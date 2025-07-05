<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</template>

<script setup lang="ts">
    import type { Post } from '../../composables/types';

    defineProps<{ post: Post }>();
</script>

<style scoped lang="scss">
    .post { 
        border-bottom: 1px solid #eee; 
        padding: 12px 0; 
    }
</style>
