import { ref, computed } from "vue";
import axios from "axios";
import type { Post } from "./types";

const PAGE_SIZE = 10;

export const usePosts = () => {
  const list = ref<Post[]>([]);
  const page = ref(1);
  const loading = ref(false);
  const finished = ref(false);
  const sortBy = ref<"id" | "title">("id");

  const fetchPage = async () => {
    if (loading.value || finished.value) return;
    loading.value = true;

    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      { params: { _limit: PAGE_SIZE, _page: page.value } }
    );

    if (!data.length) finished.value = true;
    list.value.push(...data);
    loading.value = false;
  };

  const loadMore = () => {
    page.value += 1;
    fetchPage();
  };

  const sorted = computed(() =>
    [...list.value].sort((a, b) =>
      sortBy.value === "id" ? a.id - b.id : a.title.localeCompare(b.title)
    )
  );

  fetchPage();

  return { sorted, loading, finished, sortBy, loadMore };
};
