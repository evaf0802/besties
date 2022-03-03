<template>
  <div class="flexCon">
    <div class="image" v-for="boxes in imagesButtons" v-bind:key="boxes.url">
      <img v-bind:src="boxes.url">
    </div>
    <div class="btn" v-for="boxes in imagesButtons" v-bind:key="boxes.button">
      <button>{{ boxes.button }}</button>
    </div>
  </div>
</template>

<script>
import imagesButtons from "../json/images.json";
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.flexCon{
  display: flex;
  justify-content: space-around;
}
.image {
  border: 10px solid;
}
.btn {
  font-family: monospace;
  font-size: 25px;
  text-align: center;
  border-radius: 20%;
}


</style>
