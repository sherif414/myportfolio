import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
    const currSheet = ref('personal')
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