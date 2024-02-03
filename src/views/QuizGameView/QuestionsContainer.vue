<template>
  <section class="questions-container">
    <QuestionCard
      v-for="({ category, correct_answer, incorrect_answers, question }, index) in questionData"
      :index="index"
      :category="category"
      :correct_answer="correct_answer"
      :incorrect_answers="incorrect_answers"
      :question="question"
      :key="index"
    />
  </section>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import type { QuestionData } from '@/types'

interface ContainerProps {
  questionData: Array<QuestionData>
}

const props = defineProps<ContainerProps>()
const { questionData } = toRefs(props)
</script>

<style scoped lang="scss">
.questions-container {
  > * + * {
    margin-top: 1rem;
  }
}
</style>
