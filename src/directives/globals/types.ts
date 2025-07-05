import type { ObjectDirective } from "vue";
import type { RouteLocationRaw } from "vue-router";

// Go
export interface NavEl extends HTMLElement {
  goHandler?: (e: MouseEvent) => void;
  goValue?: RouteLocationRaw;
}

export interface NamedDirective {
  name: string;
  directive: ObjectDirective;
}

//infinite

export interface InfiniteEl extends HTMLElement {
  cb?: () => void;
}
