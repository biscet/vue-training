import { createRouter, createWebHistory } from "vue-router";
import {
  DifferencePage,
  GeneralPage,
  UserPage,
  CalculatorPage,
  TodoPage,
  PostsPage,
} from "../pages";
import PATHS from "./constants";

const routes = [
  {
    path: PATHS.GENERAL,
    component: GeneralPage,
  },
  {
    path: PATHS.DIFFERENCE,
    component: DifferencePage,
  },
  {
    path: `${PATHS.USER}/:id`,
    props: true,
    name: PATHS.USER.replace("/", ""),
    component: UserPage,
  },
  {
    path: PATHS.CALCULATOR,
    component: CalculatorPage,
  },
  {
    path: PATHS.TODO,
    component: TodoPage,
  },
  {
    path: PATHS.POSTS,
    component: PostsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(PATHS.BASE),
});

export default router;
