<template>
  <div class="answer-cell">
    <span> {{ decodeHtml(text) }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import decodeHtml from '@/helpers/decodeHtml'

interface CellProps {
  text: string
  isCorrect: boolean
}

const props = defineProps<CellProps>()
const { text, isCorrect } = toRefs(props)
</script>

<style scoped lang="scss">
.answer-cell {
  padding: 1rem 1.25rem;
  border: 1px solid silver;
  border-radius: 6px;
}
</style>
