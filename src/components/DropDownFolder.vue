<template>
  <div>
    <div @click="handleClick" class="flex items-center highlight gap-2 mb-2">
      <i :class="{ 'transform rotate-90': isOpen }" class="i ri:arrow-right-s-line duration-300" />
      <i :class="['i ri:folder-fill', color]" /> {{ title }}
    </div>
    <TransitionDrop>
      <div v-show="isOpen">
        <slot></slot>
      </div>
    </TransitionDrop>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TransitionDrop from '../components/transitions/TransitionDrop.vue';
import { useStore } from '../store/mainStore';

const isOpen = ref(false);
const store = useStore();
const props = defineProps<{
  title: string,
  color?: string
}>();
const handleClick = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    if (props.title === 'bio') {
      store.openFolders.bio = true
    } else if (props.title === 'education') {
      store.openFolders.education = true
    } else if (props.title === 'interests') {
      store.openFolders.interests = true
    }
  } else {
    if (props.title === 'bio') {
      store.openFolders.bio = false
    } else if (props.title === 'education') {
      store.openFolders.education = false
    } else if (props.title === 'interests') {
      store.openFolders.interests = false
    }
  }


}
</script>
