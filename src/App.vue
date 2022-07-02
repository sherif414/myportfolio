<template>
  <div class="text-secondary-1 grid grid-rows-[2.5rem,1fr,2rem] h-screen <lg:hidden">
    <header class="border-b relative grid grid-cols-12 text-sm items-center">
      <div class="col-span-2 border-r h-full place-items-center grid">_Shareef-Hassan</div>
      <router-link class="border-r nav-link" to="/">_index
      </router-link>
      <router-link class="border-r nav-link" to="/about">_about-me</router-link>
      <router-link class="border-r nav-link" to="/projects">_projects</router-link>
      <router-link class="border-l nav-link col-start-12" to="/contact">_contact-me
      </router-link>
    </header>

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="border-t flex items-center text-sm">
      <div class="border-r p-2 h-full">find me at:</div>
      <a class="border-r nav-link p-2" target="_blank" href="https://www.fb.com"><i class="i ri:facebook-fill"></i></a>
      <a class="border-r nav-link p-2" target="_blank" href="https://www.twitter.com"><i
          class="i ri:twitter-fill"></i></a>
      <a class="border-r nav-link p-2" target="_blank" href="https://www.github.com"><i
          class="i ri:github-fill"></i></a>
    </footer>
  </div>
  <div class="lg:hidden <lg:(grid place-items-center h-screen text-secondary-4)"> mobile devices are not supported yet
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import "./assets/styles/ri.css";

body {
  font-family: "Fira Code" monospace;
  background-color: theme("colors.primary-2");
}
</style>
