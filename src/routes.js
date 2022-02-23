import Home from "./views/home.vue";
import Character from "./views/characters.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/tanjiro", name: "tanjiro", component: Character },
  { path: "/zenitsu", name: "zenitsu", component: Character },
  { path: "/inosuke", name: "inosuke", component: Character },
];

export default routes;
