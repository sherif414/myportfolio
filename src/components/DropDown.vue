<template>
  <div class="text-sm grid grid-rows-[min-content,min-content,min-content]">
    <div class="mb-2 border-b text-secondary-4 flex items-center px-2 py-1">
      <i class="mr-2 i ri:arrow-down-s-fill" /> personal-info
    </div>
    <div class="ml-2 text-xs flex flex-col gap-2">
      <DropDownFolder v-for="folder in folders" :key="folder.title + 'folder'" :color="folder.color"
        :title="folder.title">
        <DropDownFile v-for="file in folder.files" :key="file" :title="file" />
      </DropDownFolder>
    </div>
    <div class="border-b mt-4">
    </div>
  </div>
</template>
<script setup lang="ts">
import DropDownFile from './DropDownFile.vue';
import DropDownFolder from './DropDownFolder.vue';

const folders = [
  { title: "bio", files: ["personal", "skills"], color: "text-accent-1" },
  { title: "education", files: ["formal", "non-formal"], color: "text-accent-2" },
  { title: "interests", files: ["gaming", "free time"], color: "text-accent-4" },
];
</script>
