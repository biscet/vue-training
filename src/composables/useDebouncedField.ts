import { ref, watch } from "vue";
import { debounce } from "../lib/lodash";

export const useDebouncedField = <K extends string = string>(
  fieldName: K,
  delay = 300
) => {
  const value = ref("");
  const debounced = ref("");

  const update = debounce((v: string) => {
    debounced.value = v.trim().toLowerCase();
  }, delay);

  watch(value, update);

  return {
    [fieldName]: value,
    debounced,
  } as Record<K, typeof value> & { debounced: typeof debounced };
};
