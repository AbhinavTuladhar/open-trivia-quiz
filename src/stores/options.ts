import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('options', () => {
  const questionCount = ref(10)

  type DifficultyType = 'easy' | 'medium' | 'hard' | 'any'
  type QuestionType = 'multiple' | 'boolean' | 'any'

  const difficulty = ref<DifficultyType>('any')
  const questionType = ref<QuestionType>('any')
  const category = ref<string>('any')

  return { questionCount, difficulty, questionType, category }
})