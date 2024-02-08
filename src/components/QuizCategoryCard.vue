<template>
  <article class="quiz-card">
    <div>
      <img :src="image" :alt="alt" class="quiz-card__image" />
    </div>
    <h3 class="quiz-card__title">{{ title }}</h3>
    <p class="quiz-card__desc">{{ description }}</p>
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
  background-color: $pink-50;
  color: $primary-100;
  border: 1px solid azure;
  border-radius: 8px;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition-duration: $transition-duration;

  @include dark-mode {
    background-color: $surface-200;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 25px;
  }

  > * + * {
    margin-top: 1.25rem;
  }

  &__title {
    color: $primary-100;

    @include dark-mode {
      color: white;
    }
  }

  &__desc {
    color: $placeholder;

    @include dark-mode {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &__image {
    border-radius: 100%;
  }
}
</style>
