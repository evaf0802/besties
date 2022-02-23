<template>
  <div id="characters">
    <button @click="router.push('/')" id="homeButton"><router-link to="/">Home</router-link></button>
    <div v-show="$route.name == 'tanjiro'">
      <h1 class="title">About Tanjiro</h1>
      <img src="../assets/tanjiro.jpeg" id="tan" class="images" />
      <ul class="info">
        <li v-for="facts in tanFacts" v-bind:key="facts.text">
          {{ facts.text }}
        </li>
      </ul>
      <p class="qt">
        "{{ quotes.tanjiro }}"
      </p>
    </div>
    <div v-show="$route.name == 'zenitsu'">
      <h1 class="title">About Zenitsu</h1>
      <img src="../assets/zenitsu.jpeg" class="images" id="zen" />
      <ul class="info">
        <li v-for="facts in zenFacts" v-bind:key="facts.text">
          {{ facts.text }}
        </li>
      </ul>
      <p class="qt">
        "{{ quotes.zenitsu }}"
      </p>
    </div>
    <div v-show="$route.name == 'inosuke'">
      <h1 class="title">About Inosuke</h1>
      <img src="../assets/inosuke.jpeg" class="images" id="ino" />
      <ul class="info">
        <li v-for="facts in inoFacts" v-bind:key="facts.text">
          {{ facts.text }}
        </li>
      </ul>
      <p class="qt">
       "{{ quotes.inosuke }}"
      </p>
    </div>
  </div>
</template>

<script>
import factsJson from "../json/facts.json";
export default {
  data() {
    return {
      tanFacts: factsJson.tanjiro,
      zenFacts: factsJson.zenitsu,
      inoFacts: factsJson.inosuke,
      quotes: factsJson.quotes,
    };
  },
};
</script>

<style scoped>
.qt {
  position: absolute;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  width: 600px;
  font-size: 25px;
  left: 740px;
  top: 335px;
}
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
.info {
  position: absolute;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  width: 600px;
  font-size: 25px;
  left: 740px;
}

#tan {
  border-color: crimson;
}
#zen {
  border-color: yellow;
}
#ino {
  border-color: cornflowerblue;
}
.images {
  position: absolute;
  width: 300px;
  left: 350px;
  height: 375px;
  border-radius: 10%;
  border: 10px solid;
}
.title {
  position: relative;
  text-align: center;
  font-family: monospace;
  font-size: 70px;
  font: bold;
}
</style>
