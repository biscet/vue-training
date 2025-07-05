import router from "../../router/routes";
import type { ObjectDirective } from "vue";
import type { RouteLocationRaw } from "vue-router";
import type { NavEl } from "./types";

const go: ObjectDirective<NavEl, RouteLocationRaw> = {
  mounted(el, binding) {
    el.goValue = binding.value;

    el.goHandler = (e) => {
      if (e.ctrlKey || e.metaKey || e.button !== 0) return;

      const to = el.goValue;

      if (to) {
        router.push(to);
      }
    };

    el.addEventListener("click", el.goHandler);

    if (!el.style.cursor) {
      el.style.cursor = "pointer";
    }
  },

  updated(el, binding) {
    el.goValue = binding.value;
  },

  beforeUnmount(el) {
    el.removeEventListener("click", el.goHandler!);
  },
};

export default go;
