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

interface CellProps {
  text: string
  isCorrect: boolean
  isSelected: boolean
  isAttempted: boolean
}

const props = defineProps<CellProps>()
const emit = defineEmits(['answer-change'])

const { text, isCorrect, isSelected, isAttempted } = toRefs(props)

// Giving the user only one chance to answer the question.
const handleClick = () => {
  if (!isSelected.value && !isAttempted.value) {
    emit('answer-change', text.value)
  }
}
</script>

<style scoped lang="scss">
.answer-cell {
  padding: 1rem 1.25rem;
  border: 1px solid silver;
  border-radius: 6px;
  transition-duration: $transition-duration;

  &:hover {
    background-color: $surface-300;
    color: white;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.985, 0.985);
  }
}

@mixin feedback-style($colour) {
  background-color: $colour;

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
