<template>
  <div class="box">
    <div class="g-container">
      <div class="g-group">
        <div class="item item-right"></div>
        <div class="item item-left"></div>
        <div class="item item-top"></div>
        <div class="item item-bottom"></div>
        <div class="item item-middle"></div>
      </div>
      <!--    <div class="g-group">-->
      <!--      <div class="item item-right"></div>-->
      <!--      <div class="item item-left"></div>-->
      <!--      <div class="item item-top"></div>-->
      <!--      <div class="item item-bottom"></div>-->
      <!--      <div class="item item-middle"></div>-->
      <!--    </div>-->
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.box{
  width: 100vw;
  height: calc(100vh - 3.5rem);
  overflow: hidden;
  background-color: black;
  display: flex;
}
.g-container {
  position: relative;
  perspective: 4px;
  perspective-origin: 50% 50%;
  margin: auto;
  //animation: hueRotate 21s infinite linear;
}

.g-group {
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: -500px;
  left: -500px;
  margin: auto;
  transform-style: preserve-3d;
  animation: star 12s linear infinite;
}

.g-group:nth-child(2) {
  //animation: star 12s linear infinite;
  //animation-delay: -6s;
}

.item {
  position: absolute;
  width: 100%;
  height: 100%;
  //background: rgba(255, 255, 255, .5);
  background: url("https://z3.ax1x.com/2021/08/20/fLwuMd.jpg");
  background-size: cover;
  opacity: 1;
  //animation: fade 12s infinite linear;
  //animation-delay: 0s;
}

.g-group .item {
  //animation-delay: -6s;
}

.item-right {
  background: red;
  transform: rotateY(90deg) translateZ(500px);
}

.item-left {
  background: green;
  transform: rotateY(-90deg) translateZ(500px);
}

.item-top {
  background: blue;
  transform: rotateX(90deg) translateZ(500px);
}

.item-bottom {
  background: deeppink;
  transform: rotateX(-90deg) translateZ(500px);
}

.item-middle {
  background: #FF8A00FF;
  transform: rotateX(180deg) translateZ(1000px);
}

@keyframes star {
  0% {
    transform: translateZ(-500px) rotate(0deg);
  }
  100% {
    transform: translateZ(500px) rotate(0deg);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  25%,
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes hueRotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
