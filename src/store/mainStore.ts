import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
    const currSheet = ref<String>()
    const openFolders = ref({
        bio: false,
        education: false,
        interests: false
    })

    return {
        currSheet,
        openFolders,
    }
})