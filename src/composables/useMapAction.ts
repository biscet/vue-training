import { useStore } from "vuex";

export const useMapAction = () => {
  const store = useStore();

  const mapAction =
    <T extends (...args: any[]) => any>(type: string) =>
    (...args: Parameters<T>): ReturnType<T> =>
      store.dispatch(type, ...args) as ReturnType<T>;

  return mapAction;
};
