<template>
  <div>
    <button @click="router.push('/')" id="homeButton">
      <router-link to="/">Home</router-link>
    </button>
    <div class="container">
      <div v-for="character in characters" v-bind:key="character.id">
        <span class="title">
          <h>About {{ character.name }}</h>
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
    </div>
  </div>
</template>

<script>
import facts from "../json/facts.json";
export default {
  data() {
    return {
      characters: facts.character,
      descript: facts.character.desc,
    };
  },
};
</script>
  </div>
<style scoped>
#homeButton {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 100px;
  height: 50px;
  border-radius: 20%;
  font-family: monospace;
  background-color: wheat;
}
.container {
  display: flex;
  font-family: monospace;
  gap: 20px;
}
.title {
  font-size: 60px;
}

</style>
