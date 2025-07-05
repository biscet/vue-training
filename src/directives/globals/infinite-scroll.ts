import type { ObjectDirective } from "vue";
import type { InfiniteEl } from "./types";

const infiniteScroll: ObjectDirective<InfiniteEl, () => void> = {
  mounted(el, { value }) {
    el.cb = value;

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.cb?.();
    });

    io.observe(el);
  },
  updated(el, { value }) {
    el.cb = value;
  },
  beforeUnmount(el) {
    el.cb = undefined;
  },
};

export default infiniteScroll;
