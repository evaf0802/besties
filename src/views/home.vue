<template>
  <div id="homepage">
    <h1 class="title">The Three Besties in Demon Slayer</h1>
    <div id="buttons">
      <button @click="$router.push('tanjiro')" class="btn" id="tan">
        Tanjiro
      </button>
      <button @click="$router.push('zenitsu')" class="btn" id="zen">
        Zenitsu
      </button>
      <button @click="$router.push('inosuke')" class="btn" id="ino">
        Inosuke
      </button>
    </div>
    <div id="images">
      <img src="../assets/tanjiro.jpeg" class="img" id="tanpic" />
      <img src="../assets/zenitsu.jpeg" class="img" id="zenpic" />
      <img src="../assets/inosuke.jpeg" class="img" id="inopic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.title {
  position: relative;
  text-align: center;
  font-family: monospace;
  font-size: 50px;
  font: bold;
}
.btn {
  font-family: monospace;
  font-size: 25px;
  text-align: center;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 220px;
  border-radius: 20%;
}
#tan {
  left: 239px;
  border-color: green;
  background-color: crimson;
}
#zen {
  left: 612px;
  border-color: white;
  background-color: yellow;
}
#ino {
  left: 993px;
  border-color: grey;
  background-color: cornflowerblue;
}
.img {
  position: absolute;
  top: 120px;
  width: 300px;
  height: 375px;
  border-radius: 10%;
}
#tanpic {
  left: 200px;
  border: 10px solid crimson;
}
#zenpic {
  left: 566px;
  border: 10px solid yellow;
}
#inopic {
  left: 940px;
  border: 10px solid cornflowerblue;
}
</style>
