<template>
  <div class="game-board">
    <div id="game" class="bg-[#011627] rounded-lg"></div>
    <div class=""></div>
  </div>
  <div class="grid fixed overflow-hidden w-50vw h-100vh">
    <svg viewBox="0 0 1114 1030" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.4" filter="url(#filter0_f_64_1234)">
        <path
          d="M723.946 855.519L510.032 804.132L420.663 739.469L447.226 568.957L622.649 549.391L621.041 427.647L823.309 373.392L953.602 404.691L871.165 670.797L743.892 703.987L723.946 855.519Z"
          fill="#4D5BCE"
        />
      </g>
      <g opacity="0.4" filter="url(#filter1_f_64_1234)">
        <path
          d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
          fill="#43D9AD"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_64_1234"
          x="246.664"
          y="199.392"
          width="880.938"
          height="830.128"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1234" />
        </filter>
        <filter
          id="filter1_f_64_1234"
          x="0"
          y="0.827728"
          width="863.983"
          height="782.77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1234" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
  //import "../game/game.js";
</script>

<style>
  .game-board {
    background: linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%);
    border: 1px solid #0c1616;
    box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(64px);
    border-radius: 8px;
    z-index: 10;
    width: 35vw;
    height: 30vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }
  #game {
    display: grid;
    grid-template-rows: repeat(21, 1fr);
    grid-template-columns: repeat(21, 1fr);
  }
  .food {
    background-color: hsl(50, 100%, 50%);
    border: 0.25vmin solid black;
  }
  .snake {
    background-color: hsl(200, 100%, 50%);
    border: 0.25vmin solid black;
  }
</style>
