<template>
  <article
    class="step-card"
    :class="{ green: backgroundColor === 'green', dark: backgroundColor === 'dark' }"
  >
    <div>
      <img :src="image" :alt="alt" class="step-card__image" />
    </div>
    <h3>{{ title }}</h3>
  </article>
</template>

<script setup lang="ts">
interface StepCardProps {
  image: string
  title: string
  alt: string
  backgroundColor: 'green' | 'dark'
}

const { image, title, alt } = defineProps<StepCardProps>()
</script>

<style scoped lang="scss">
.step-card {
  display: grid;
  place-content: center;
  gap: 2rem;
  border-radius: 12px;
  padding-block: 2rem;

  &__image {
    border-radius: 100%;
  }
}

.green {
  background-color: $primary-100;
}

.dark {
  background-color: $surface-200;
}
</style>
