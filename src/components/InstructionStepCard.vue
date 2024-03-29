<template>
  <article class="instruction-card" ref="target">
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
import useFadeIn from '@/composables/useFadeIn'

interface CardProps {
  stepNumber: number
  bodyText: string
  image: string
  delay: number
}

const { bodyText, image, stepNumber, delay } = withDefaults(defineProps<CardProps>(), {
  delay: 0
})

const { target } = useFadeIn(delay)
</script>

<style scoped lang="scss">
.instruction-card {
  // Make it larger on large screens, smaller on small screens
  $bottom-padding: clamp(0.75rem, -0.679rem + 7.143vw, 5.75rem);

  padding: 0.75rem 1.125rem $bottom-padding 1.125rem;
  background-color: white;
  border: 1px solid silver;
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.4) 0px 10px 10px -5px;

  > * + * {
    margin-top: 3.375rem;
  }

  @include dark-mode {
    background-color: $surface-200;
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
      color: rgb(239, 239, 239);
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
