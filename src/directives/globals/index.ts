import go from "./go";
import infiniteScroll from "./infinite-scroll";
import type { NamedDirective } from "./types";

const directives = [
  { name: "go", directive: go },
  { name: "infinite-scroll", directive: infiniteScroll },
] as NamedDirective[];

export default directives;
