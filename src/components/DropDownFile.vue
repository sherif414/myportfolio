<template>
  <div @click="store.currSheet = props.title" :class="[classes, 'highlight ml-5']">
    <i class="i ri:file-user-fill mr-2"></i>{{ title }}
  </div>
</template>
<script setup lang="ts">
import { useStore } from '../store/mainStore';
import { computed } from '@vue/reactivity';
const props = defineProps({
  title: String,
});
const store = useStore();
const classes = computed(() => ({ "text-secondary-4": store.currSheet === props.title }));
</script>
