<template>
  <div
    class="answer-cell"
    :class="{
      correct: isCorrect && isAttempted,
      wrong: isSelected && !isCorrect && isAttempted
    }"
    @click="handleClick"
  >
    <span> {{ decodeHtml(text) }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import decodeHtml from '@/helpers/decodeHtml'
import { useProgressStore } from '@/stores/progress'

interface CellProps {
  text: string
  isCorrect: boolean
  isSelected: boolean
  isAttempted: boolean
}

const props = defineProps<CellProps>()
const emit = defineEmits(['answer-change'])

const { text, isCorrect, isSelected, isAttempted } = toRefs(props)

const progressStore = useProgressStore()
const { handleClick: handleScoreChange } = progressStore

// Giving the user only one chance to answer the question.
const handleClick = () => {
  if (isAttempted.value) {
    alert('You have already attempted this question.')
  }
  if (!isSelected.value && !isAttempted.value) {
    emit('answer-change', text.value)
    // Change the number of attempted and correct questions in the store.
    handleScoreChange(isCorrect.value)
  }
}
</script>

<style scoped lang="scss">
.answer-cell {
  padding: 1rem 1.25rem;
  border: 1px solid silver;
  border-radius: 6px;
  transition-duration: $transition-duration;
  color: black;

  &:hover {
    background-color: rgb(255, 217, 181);
    cursor: pointer;
  }

  @include dark-mode {
    color: white;
    &:hover {
      background-color: $surface-300;
    }
  }

  &:active {
    transform: scale(0.985, 0.985);
  }
}

@mixin feedback-style($colour) {
  background-color: $colour;
  color: white;

  &:hover {
    background-color: $colour;
  }
}

.correct {
  @include feedback-style(green);
}

.wrong {
  @include feedback-style(red);
}
</style>
