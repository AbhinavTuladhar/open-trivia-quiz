<template>
  <article class="article-card" ref="target">
    <div class="article-cad__image-container">
      <img :src="image" class="article-card__image" />
    </div>
    <h3 class="article-card__title">{{ title }}</h3>
    <time> {{ date }}</time>
  </article>
</template>

<script setup lang="ts">
import useSlideAnimation from '@/composables/useSlideAnimation'

interface CardProps {
  image: string
  title: string
  date: string
}

const { date, image, title } = defineProps<CardProps>()

const { target } = useSlideAnimation('up', 200)
</script>

<style scoped lang="scss">
.article-card {
  $spacing: 1.5rem;

  > * + * {
    margin-top: $spacing;
  }

  &__title {
    display: inline;
    background-image: linear-gradient(white, white);
    background-size: 15% 1px;
    background-repeat: no-repeat;
    background-position: left 1.25rem;
    transition: all ease-out $transition-duration;

    &:hover {
      background-size: 100% 1px;
      cursor: pointer;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: $spacing;
  }

  time {
    display: block;
  }
}
</style>
