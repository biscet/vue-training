<template>
    <div class="page">
        <h1>Посты</h1>

        <posts-select v-model="sortBy" />

        <posts-list
            :posts="sorted"
            :loading="loading"
            :finished="finished"
            :load-more="loadMore"
        />
    </div>
</template>

<script setup lang="ts">
    import { usePosts } from '../composables/usePosts';
    import { PostsList, PostsSelect} from '../components/'

    const { sorted, loading, finished, sortBy, loadMore } = usePosts();
</script>

<style scoped>
    .page { padding: 24px; }
</style>
