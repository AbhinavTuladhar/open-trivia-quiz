<template>
  <section class="question-card">
    <div class="question-card__header">
      <span> {{ index + 1 }}. </span>
      <span> {{ decodeHtml(category) }}</span>
    </div>
    <div class="question-card__body">
      <span class="question-text"> {{ decodeHtml(question) }}</span>
      <div class="answers-container">
        <AnswerCell
          v-for="answer in shuffledArray"
          :key="answer"
          :text="answer"
          :is-correct="answer === correctAnswer"
          :is-selected="answer === selectedAnswer"
          :is-attempted="isAttempted"
          @answer-change="handleAnswerClick"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import decodeHtml from '@/helpers/decodeHtml'
import AnswerCell from './AnswerCell.vue'

interface QuestionCardProps {
  index: number
  category: string
  correct_answer: string
  incorrect_answers: Array<string>
  question: string
}

const props = defineProps<QuestionCardProps>()
const {
  index,
  category,
  correct_answer: correctAnswer,
  incorrect_answers: incorrectAnswers,
  question
} = toRefs(props)

const answersList = ref<Array<string>>([correctAnswer.value, ...incorrectAnswers.value])
const selectedAnswer = ref<string>()
const isAttempted = ref(false)

const shuffledArray = answersList.value
  .map((answer) => ({ value: answer, key: Math.random() }))
  .sort((a, b) => a.key - b.key)
  .map((row) => row.value)

const handleAnswerClick = (answer: string) => {
  selectedAnswer.value = answer
  isAttempted.value = true
}
</script>

<style scoped lang="scss">
.question-card {
  $padding: 1rem;

  background-color: $surface-200;
  border: 1px solid silver;
  border-radius: 8px;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: $padding;
    border-bottom: 1px solid silver;
  }

  &__body {
    padding: $padding;

    > * + * {
      margin-top: 0.5rem;
    }
  }
}

.question-text {
  font-size: 1.25rem;
  font-weight: 600;
}

.answers-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 1rem;

  @include breakpoint-max(small) {
    grid-template-columns: 1fr;
  }
}
</style>
