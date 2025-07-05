import { createRouter, createWebHistory } from "vue-router";
import {
  AboutPage,
  GeneralPage,
  UserPage,
  CalculatorPage,
  TodoPage,
} from "../pages";
import PATHS from "./constants";

const routes = [
  {
    path: PATHS.GENERAL,
    component: GeneralPage,
  },
  {
    path: PATHS.ABOUT,
    component: AboutPage,
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
];

const router = createRouter({
  routes,
  history: createWebHistory(PATHS.BASE),
});

export default router;
