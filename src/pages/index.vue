<template>
  <main class="grid grid-cols-12 h-full">
    <section class="col-start-3 col-span-4 self-center text-sm">
      <div class="text-secondary-4 text-1rem">Yo, it's</div>
      <h1 class="text-secondary-4 font-bold my-2 text-5xl">Shareef Hassan</h1>
      <div class="text-secondary-3 text-2xl mb-8">&gt; frontend web developer</div>
      <div>// surf around to know more about me and what I do</div>
      <div class="mb-2">// you can also checkout my github page</div>
      <div class="text-secondary-4">
        <span class="text-secondary-3">const</span> <span class="text-secondary-2">githubLink</span> =
        <a target="_blank" href="https://github.com/sherif414" class=""
          ><span class="text-accent-3 underline">"https://github.com/sherif414"</span></a
        >
      </div>
    </section>
    <section class="col-start-8 grid place-items-center col-span-4 h-full">
      <game-board />
    </section>
  </main>
</template>
<script setup lang="ts">
  import GameBoard from "../components/GameBoard.vue";
</script>
