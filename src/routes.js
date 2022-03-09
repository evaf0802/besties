import Home from "./views/home.vue";
import Character from "./views/characters.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/tanjiro",
    component: Character,
    props: { id: "Tanjiro" },
  },
  {
    path: "/zenitsu",
    component: Character,
    props: { id: "Zenitsu" },
  },
  {
    path: "/inosuke",
    component: Character,
    props: { id: "Inosuke" },
  },
];

export default routes;
