import go from "./go";
import type { NamedDirective } from "./types";

const directives = [{ name: "go", directive: go }] as NamedDirective[];

export default directives;
