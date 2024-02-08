<template>
  <div>
    <RouterLink :to="nextLink">
      <button>Next question</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRef } from 'vue'

const route = useRoute()
const id = toRef(route.params.id as string)

const nextLink = `/quiz/question/${+id.value + 1}`
</script>

<style scoped></style>
