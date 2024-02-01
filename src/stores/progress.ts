import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', () => {
  const attemptedCount = ref(0)
  const correctCount = ref(0)

  const handleClick = (isCorrect: boolean) => {
    attemptedCount.value++
    if (isCorrect) {
      correctCount.value++
    }
  }

  const resetCounts = () => {
    attemptedCount.value = 0
    correctCount.value = 0
  }

  return { attemptedCount, correctCount, handleClick, resetCounts }
})
