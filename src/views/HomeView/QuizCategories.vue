<template>
  <section class="quiz-categories">
    <div class="quiz-categories__header">
      <h2 ref="headerTarget">Explore our quiz categories</h2>
      <button ref="buttonTarget" class="transparent-btn transparent-btn--large">EXPLORE ALL</button>
    </div>
    <div class="quiz-categories__card-container">
      <QuizCategoryCard
        v-for="({ alt, image, title, body }, index) in quizCategoryData"
        :key="index"
        :alt="alt"
        :image="image"
        :title="title"
        :description="body"
        :delay="delays[index]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Abascus from '@/assets/images/abascus.png'
import English from '@/assets/images/english.png'
import Microscope from '@/assets/images/microscope.png'
import Books from '@/assets/images/books.png'
import QuizCategoryCard from '@/components/QuizCategoryCard.vue'
import makeDelay from '@/helpers/makeDelay'
import useSlideAnimation from '@/composables/useSlideAnimation'

const { target: headerTarget } = useSlideAnimation('left', 100)
const { target: buttonTarget } = useSlideAnimation('right', 100)

const quizCategoryData = [
  {
    image: Abascus,
    alt: 'An abascus',
    title: 'Mathematics',
    body: 'Challenge your maths skills with fun problems!'
  },
  {
    image: English,
    alt: 'Guy standing in front of a board',
    title: 'English',
    body: 'Explore English words and grammar!'
  },
  {
    image: Microscope,
    alt: 'A weird microscope',
    title: 'Science',
    body: 'Discover the wonders of physics, chemistry, biology and more!'
  },
  {
    image: Books,
    alt: 'A pile of books',
    title: 'General knowledge',
    body: 'Test your awareness on diverse topics!'
  }
]

const delays = makeDelay(4, 300, 200)
</script>
<style scoped lang="scss">
.quiz-categories {
  grid-column: content;
  padding-block: clamp(1rem, 0.429rem + 2.857vw, 3rem);

  h2 {
    color: $primary-100;

    @include dark-mode {
      color: white;
    }
  }

  > * + * {
    margin-top: 2rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }

  &__card-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    > * {
      flex: 1 1 200px;
    }
  }
}
</style>
