<template>
  <div class="flexImages">
    <div v-for="box in boxes" v-bind:key="box.id">
      <img class="image" :style="{'border-color': box.color}" :src='box.img' />
    </div>
  </div>
  <div class="flexBtns">
    <div v-for="box in boxes" v-bind:key="box.id">
      <button class="btn" :style="{'background-color': box.color}">{{ box.button }}</button>
    </div>
  </div>
</template>

<script>
import imagesButtons from "../json/images.json";
export default {
  data() {
    return {
      boxes: imagesButtons.boxes,
      clr: imagesButtons.boxes.color
    };
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
  flex-basis: 30%;
  margin-top: 100px;
  margin-bottom: 10px;
}
.btn {
  background-color: var(clr);
  font-family: monospace;
  font-size: 25px;
  text-align: center;
  border-radius: 20%;
  width: 150px;
  height: 80px;
}
</style>
