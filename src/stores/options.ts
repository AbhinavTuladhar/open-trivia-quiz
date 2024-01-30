import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('options', () => {
  const questionCount = ref(10)

  type DifficultyType = 'Easy' | 'Medium' | 'Hard' | 'Any'
  type QuestionType = 'MCQ' | 'TrueFalse' | 'Any'

  const difficulty = ref<DifficultyType>('Any')
  const questionType = ref<QuestionType>('Any')
  const category = ref<string>('')

  return { questionCount, difficulty, questionType, category }
})