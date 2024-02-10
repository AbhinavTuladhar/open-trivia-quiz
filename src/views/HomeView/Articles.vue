<template>
  <section class="articles-section content-grid">
    <div class="articles-container">
      <h2 ref="target">Check the Latest Articles!</h2>
      <div class="articles-card-container">
        <ArticleCard
          v-for="({ date, image, title }, index) in cardData"
          :key="index"
          :date="date"
          :image="image"
          :title="title"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Article1 from '@/assets/images/article_1.jpg'
import Article2 from '@/assets/images/article_2.jpg'
import Article3 from '@/assets/images/article_3.jpg'
import ArticleCard from '@/components/ArticleCard.vue'
import useSlideUp from '@/composables/useSlideUp'

const { target } = useSlideUp(200)

const cardData = [
  {
    image: Article1,
    title: 'Even the all-powerful Pointing has no control about',
    date: '16 Oct 2020'
  },
  {
    image: Article2,
    title: 'Almost unorthographic life on day however a small line',
    date: '14 Oct 2020'
  },
  {
    image: Article3,
    title: 'Lorem ipsum decided to leave for the far world of grammar',
    date: '10 Oct 2020'
  }
]
</script>

<style scoped lang="scss">
.articles-section {
  grid-column: full-width;
  padding-block: clamp(1rem, 0.429rem + 2.857vw, 3rem);
  background-color: $primary-100;
  color: white;
}

.articles-container {
  // A clamp is used becuase of the large margin in figma file
  $top-margin: clamp(1rem, 0.089rem + 4.554vw, 4.188rem);

  grid-column: content;

  > * + * {
    margin-top: 1rem;
  }
}

.articles-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(208px, 100%), 1fr));
  gap: 1.5rem;
}
</style>
