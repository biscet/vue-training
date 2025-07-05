import type { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import type { TodoState, RootState } from "./types";

const state = (): TodoState => ({
  tasks: [],
});

const getters: GetterTree<TodoState, RootState> = {
  tasks: (state) => {
    return state.tasks;
  },
};

const mutations: MutationTree<TodoState> = {
  ADD_TASK(state, text: string) {
    state.tasks.push({ id: Date.now(), text, completed: false });
  },
  UPDATE_TASK(state, payload: { id: number; text: string }) {
    const t = state.tasks.find((t) => t.id === payload.id);
    if (t) t.text = payload.text;
  },
  DELETE_TASK(state, id: number) {
    state.tasks = state.tasks.filter((t) => t.id !== id);
  },
  TOGGLE_TASK(state, id: number) {
    const t = state.tasks.find((t) => t.id === id);
    if (t) t.completed = !t.completed;
  },
};

const actions: ActionTree<TodoState, RootState> = {
  addTask({ commit }, text: string) {
    commit("ADD_TASK", text);
  },
  updateTask({ commit }, payload: { id: number; text: string }) {
    commit("UPDATE_TASK", payload);
  },
  deleteTask({ commit }, id: number) {
    commit("DELETE_TASK", id);
  },
  toggleTask({ commit }, id: number) {
    commit("TOGGLE_TASK", id);
  },
};

export const todoModule: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
