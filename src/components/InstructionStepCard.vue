<template>
  <article class="instruction-card">
    <div class="instruction-card__image">
      <img :src="image" alt="some instruction" />
    </div>
    <div class="instruction-card__text">
      <h3>Step {{ stepNumber }}</h3>
      <p>{{ bodyText }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface CardProps {
  stepNumber: number
  bodyText: string
  image: string
}

const { bodyText, image, stepNumber } = defineProps<CardProps>()
</script>

<style scoped lang="scss">
.instruction-card {
  // Make it larger on large screens, smaller on small screens
  $bottom-padding: clamp(0.75rem, -0.679rem + 7.143vw, 5.75rem);

  padding: 0.75rem 1.125rem $bottom-padding 1.125rem;
  border: 1px solid silver;
  border-radius: 8px;

  > * + * {
    margin-top: 3.375rem;
  }

  &__image {
    position: relative;
    margin-inline: auto;

    img {
      width: 100%;
    }

    &::after {
      content: ' ';
      width: 80%;
      height: 2px;
      color: silver;
      background-color: rgb(239, 239, 239);
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__text {
    > * + * {
      margin-top: 1.25rem;
    }
  }
}
</style>
