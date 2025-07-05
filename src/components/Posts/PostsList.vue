<template>
    <div class="posts">
        <post-item v-for="post in list" :key="post.id" :post="post" />

        <div
            v-infinite-scroll="loadMore"
            class="loader"
        >
        <span v-if="loading">Загрузка…</span>
        <span v-else-if="finished">Больше нет постов</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ComputedRef, computed } from 'vue';
    import PostItem from './PostItem.vue';
    import type { Post } from '../../composables/types';

    const props = defineProps<{
        posts:  Post[] | ComputedRef<Post[]>;
        loading: boolean;
        finished: boolean;
        loadMore: () => void;
    }>();

    const list = computed<Post[]>(() =>
        Array.isArray(props.posts) ? props.posts : props.posts.value,
    );
</script>

<style scoped>
    .posts { 
        max-width: 640px; 
        margin: 0 auto; 
    }

    .loader { 
        text-align: center; 
        padding: 16px; 
        color: #888; 
    }
</style>
