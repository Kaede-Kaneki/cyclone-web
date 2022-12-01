<template>
  <main>
    <div class="flex flex-col items-center justify-center h-base-screen bg-gradient-to-br ">
      <span class="text-3xl pb-4 md:text-5xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-br from-[#32c5ff] via-[#b620e0] via-[#f7b500] to-[#20e050] animate-roll cursor-default">
        Cyclone
      </span>
      <span class="text-2xl md:text-4xl select-none">
        千山鸟飞绝，万径人踪灭
      </span>
    </div>
    <div class="relative perspective-4 perspective-origin">
      <div class="absolute w-96 h-96 left-10 top-10">
        <div class="absolute w-full h-full bg-amber-400 rotate-y-90 translate-z-50" />
        <div class="absolute w-full h-full bg-blue-400 -rotate-y-90 translate-z-50" />
        <div class="absolute w-full h-full bg-emerald-400 rotate-x-90 translate-z-50" />
        <div class="absolute w-full h-full bg-fuchsia-400 -rotate-x-90 translate-z-50" />
        <div class="absolute w-full h-full bg-yellow-400 rotate-x-180 translate-z-50" />
      </div>
    </div>
    <div class="g-container">
      <div class="g-group">
        <div class="item item-right"></div>
        <div class="item item-left"></div>
        <div class="item item-top"></div>
        <div class="item item-bottom"></div>
        <div class="item item-middle"></div>
      </div>
    </div>
    <div class="m-auto pt-32 max-w-6xl px-3">
      <div
        class="flex items-center box-border flex-col flex-col-reverse md:odd:flex-row md:even:flex-row-reverse h-80 mb-32"
        v-for="item in 10" :key="item">
        <div class="h-1/3 md:h-64 w-full md:w-1/2 rounded-lg border-dashed border-2 p-4 box-border ">
          <div class="w-full indent-8 line-clamp-3 md:line-clamp-4">
            庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。
            予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
            若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。
            至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。
            嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？
            时六年九月十五日。
          </div>
        </div>
        <div class="h-2/3 md:h-full w-full md:w-1/2 rounded-lg  bg-[url('assets/images/bg.png')] bg-no-repeat bg-cover">2</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.g-container {
  position: relative;
  perspective: 4px;
  perspective-origin: 50% 50%;
}
.g-group {
  position: absolute;
  width: 100px;
  height: 100px;
  left: -100px;
  top: -100px;
  transform-style: preserve-3d;
}
.item {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .5);
}
.item-right {
  background: red;
  transform: rotateY(90deg) translateZ(50px);
}
.item-left {
  background: green;
  transform: rotateY(-90deg) translateZ(50px);
}
.item-top {
  background: blue;
  transform: rotateX(90deg) translateZ(50px);
}
.item-bottom {
  background: deeppink;
  transform: rotateX(-90deg) translateZ(50px);
}
.item-middle {
  background: rgba(255, 255, 255, 0.5);
  transform: rotateX(180deg) translateZ(50px);
}
</style>
