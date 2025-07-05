import type { DebouncedFn } from "./types";

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 300
): DebouncedFn<T> => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced as DebouncedFn<T>;
};
