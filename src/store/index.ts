import { createStore } from "vuex";
import { todoModule } from "./todo";

const stores = createStore({
  modules: { todo: todoModule },
});

export default stores;
