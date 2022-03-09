<template>
  <div>
    <div class="container">
      <v-img class="pic" :src="getImgUrl(character.img)"></v-img>
      <span class="title">
        <h>About {{ character.name }}</h>
        <p>{{ character.img }}</p>
      </span>
      <span class="list">
        <ul>
          <li v-for="text in character.desc" v-bind:key="text">
            {{ text }}
          </li>
        </ul>
      </span>
      <div class="qt">
        <p>{{ character.quote }}</p>
      </div>
    </div>
    <button @click="router.push('/')" id="homeButton">
      <router-link to="/">Home</router-link>
    </button>
  </div>
</template>

<script>
import facts from "../json/facts.json";
export default {
  //  props: { id },
  data() {
    return {
      character: facts.character[0]//.find((name) => name === id),
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style scoped>
@media all and (max-width: 500px) {
  .container {
    flex-shrink: 6;
  }
}
#homeButton {
  justify-content: flex-end;
  top: 20px;
  width: 300px;
  height: 50px;
  border-radius: 20%;
  font-family: monospace;
  background-color: wheat;
}
.container {
  display: flex;
  flex-basis: 30%;
  font-family: monospace;
  gap: 30px;
  margin: 20px;
  flex-wrap: nowrap;
}
.list,
.qt {
  font-size: 18px;
}
.title {
  font-size: 60px;
}
.list {
  display: flex;
  align-self: flex-start;
}
.pic {
  position: relative;
  margin-top: 30px;
  width: 100px;
  height: 234px;
  border: 10px solid;
}
</style>
