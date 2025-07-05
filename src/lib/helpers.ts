import components from "../components/globals";
import directives from "../directives/globals";
import stores from "../store";
import type { App } from "vue";

export function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  directives.forEach(({ name, directive }) => app.directive(name, directive));

  app.use(stores);
}
