<template>
  <div>
    <div class="flexImages">
      <div v-for="character in characters" v-bind:key="character.name">
        <img
          :src="getImgUrl(character.name.toLowerCase())"
          class="image"
          :style="{ 'border-color': character.color }"
        />
        <button
          @click="$router.push(character.name.toLowerCase())"
          class="btn"
          :style="{ 'background-color': character.color }"
        >
          {{ character.name }}
        </button>
      </div>
    </div>
    <!--    <div class="flexBtns">
      <div v-for="character in characters" v-bind:key="character.name">
        <button
          @click="$router.push(character.name.toLowerCase())"
          class="btn"
          :style="{ 'background-color': character.color }"
        >
          {{ character.name }}
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
import facts from "../json/facts.json";
const tanjiro = require("../assets/tanjiro.jpeg");
const zenitsu = require("../assets/zenitsu.jpeg");
const inosuke = require("../assets/inosuke.jpeg");
export default {
  data() {
    return {
      characters: facts.character,
    };
  },
  methods: {
    getImgUrl(pic) {
      return { tanjiro, zenitsu, inosuke }[pic];
    },
  },
};
</script>

<style scoped>
.flexImages,
.flexBtns {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 200px;
  margin-left: 200px;
}
.image {
  border: 10px solid;
  border-radius: 20%;
  margin-top: 100px;
  margin-bottom: 10px;
}
.btn {
  font-family: monospace;
  font-size: 25px;
  text-align: center;
  border-radius: 20%;
  width: 150px;
  height: 80px;
}
</style>
