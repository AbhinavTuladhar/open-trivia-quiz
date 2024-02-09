<template>
  <div>
    <RouterLink :to="urlLink">
      <button>
        <slot />
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRef } from 'vue'

interface ButtonProps {
  direction: 'previous' | 'next'
}

const { direction } = defineProps<ButtonProps>()

const route = useRoute()
const id = toRef(route.params.id as string)

const urlLink =
  direction === 'previous' ? `/quiz/question/${+id.value - 1}` : `/quiz/question/${+id.value + 1}`
</script>

<style scoped></style>
