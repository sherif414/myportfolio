<template>
  <div class="text-secondary-1 grid grid-rows-[2.5rem,1fr,2rem] h-screen">
    <header class="border-b relative grid grid-cols-12 text-sm items-center">
      <div class="col-span-2 border-r py-2 pl-4">_Shareef-Hassan</div>
      <router-link class="border-r nav-link" to="/">_home
      </router-link>
      <router-link class="border-r nav-link" to="/about">_about-me</router-link>
      <router-link class="border-r nav-link" to="/projects">_projects</router-link>
      <router-link class="border-l nav-link col-start-12" to="/contact">_contact-me
      </router-link>
    </header>
    <TransitionPage>
      <router-view />
    </TransitionPage>
    <footer class="border-t flex items-center text-sm">
      <div class="border-r p-2 h-full">find me at:</div>
      <a class="border-r nav-link p-2" href="#"><i class="i ri:facebook-fill"></i></a>
      <a class="border-r nav-link p-2" href="#"><i class="i ri:twitter-fill"></i></a>
      <a class="border-r nav-link p-2" href="#"><i class="i ri:github-fill"></i></a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import TransitionPage from './components/transitions/TransitionPage.vue';
</script>

<style>
@import "./assets/styles/ri.css";

body {
  font-family: "Fira Code" monospace;
  background-color: theme("colors.primary-2");
}
</style>
