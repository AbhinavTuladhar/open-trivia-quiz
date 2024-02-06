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
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &__image {
    width: clamp(6.438rem, 4.598rem + 9.196vw, 12.875rem);
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
