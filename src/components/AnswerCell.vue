<template>
  <div
    class="answer-cell"
    :class="{
      correct: isCorrect && isAttempted,
      wrong: isIncorrect
    }"
    @click="handleClick"
  >
    <span> {{ decodeHtml(text) }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
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

const isIncorrect = ref(isSelected.value && !isCorrect.value)

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

.correct {
  background-color: green;
}

.wrong {
  background-color: red;
}

.incorrect {
  background-color: green;
}
</style>
