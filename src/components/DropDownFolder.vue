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
  store.openFolders.set(props.title, isOpen.value)


}
</script>
