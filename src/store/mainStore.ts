import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("main", () => {
  const currSheet = ref("personal");
  const score = ref(0);
  const openFolders = ref(new Map());
  openFolders.value.set("bio", false).set("interests", false).set("education", false);

  return {
    currSheet,
    openFolders,
    score,
  };
});
