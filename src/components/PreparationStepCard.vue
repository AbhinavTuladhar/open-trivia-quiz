<template>
  <article
    class="step-card"
    :class="{ green: backgroundColor === 'green', contrast: backgroundColor === 'contrast' }"
  >
    <div class="step-card__image-container">
      <img :src="image" :alt="alt" class="step-card__image" />
    </div>
    <h3 class="step-card__title">{{ title }}</h3>
  </article>
</template>

<script setup lang="ts">
interface StepCardProps {
  image: string
  title: string
  alt: string
  backgroundColor: 'green' | 'contrast'
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

  &__image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 100%;
  }

  &__image {
    width: clamp(6.438rem, 4.598rem + 9.196vw, 12.875rem);
    border-radius: 100%;
  }

  &__title {
    font-size: clamp(1.25rem, 0.893rem + 1.786vw, 2.5rem);
  }
}

.green {
  background-color: $primary-100;
  color: white;
}

.contrast {
  background-color: $pink-50;
  color: $primary-100;

  @include dark-mode {
    background-color: $surface-200;
    color: white;
  }
}
</style>
