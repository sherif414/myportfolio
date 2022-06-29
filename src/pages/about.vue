<template>
  <main class="grid grid-cols-12">
    <div class="col-span-2 border-r grid grid-cols-[2.5rem,1fr]">
      <div class="border-r flex flex-col items-center pt-6 gap-4">
        <i :class="['i ri:terminal-box-line', { 'text-secondary-4': store.openFolders.bio }]" /><i
          :class="['i ri:book-mark-line', { 'text-secondary-4': store.openFolders.education }]" /><i
          :class="['i ri:gamepad-line', { 'text-secondary-4': store.openFolders.interests }]" />
      </div>
      <DropDown />
    </div>
    <div class="col-span-5 border-r grid grid-cols-[1fr,1rem]">
      <div class="border-r">
        <Sheets />
      </div>
      <div class="p-1">
        <div class="w-full h-1 bg-secondary-1"></div>
      </div>
    </div>
    <div class="col-span-5 grid grid-cols-[1fr,1rem]">
      <div class="border-r px-8 py-4">
        <div class="">// code snippet showcase</div>
        <CodeSnippet>
        </CodeSnippet>
      </div>
      <div class="p-1">
        <div class="w-full h-1 bg-secondary-1"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import DropDown from '../components/DropDown.vue'
import { useStore } from '../store/mainStore';
import CodeSnippet from '../components/CodeSnippet.vue';
import Sheets from '../components/Sheets.vue';

const store = useStore()


</script>
