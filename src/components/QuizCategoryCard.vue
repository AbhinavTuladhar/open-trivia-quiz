<template>
  <article class="quiz-card">
    <div>
      <img :src="image" :alt="alt" class="quiz-card__image" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
interface QuizCategoryCardProps {
  alt: string
  image: string
  title: string
  description: string
}

const { alt, description, image, title } = defineProps<QuizCategoryCardProps>()
</script>

<style scoped lang="scss">
.quiz-card {
  padding: 2rem;
  background-color: $surface-200;
  border: 1px solid azure;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 25px;
  transition-duration: $transition-duration;

  > * + * {
    margin-top: 1.25rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.015, 1.015);
  }

  &__image {
    border-radius: 100%;
  }
}
</style>
