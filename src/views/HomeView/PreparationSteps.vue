<template>
  <section class="preparation-steps">
    <div class="preparation-steps__header">
      <h2 ref="headerTarget">
        Let's Sharp Your <br />
        Preparation
      </h2>
      <button ref="buttonTarget" class="transparent-btn transparent-btn--large">EXPLORE ALL</button>
    </div>
    <div class="preparation-steps__grid-container">
      <!-- Making a different card which spans two columns. -->
      <article class="special-card" ref="specialCardTarget">
        <div class="special-card__left">
          <h3>Model Test</h3>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Etiam placerat tortor commodo lectus laoreet venenatis.
          </p>
        </div>
        <div class="special-card__right">
          <img :src="Studying" alt="A guy studying" />
        </div>
      </article>
      <PreparationStepCard
        v-for="({ image, title, alt }, index) in cardData"
        :key="index"
        :alt="alt"
        :image="image"
        :title="title"
        :background-color="index % 2 === 0 ? 'contrast' : 'green'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PreparationStepCard from '@/components/PreparationStepCard.vue'
import Studying from '@/assets/images/studying.jpg'
import Woman from '@/assets/images/muslim_woman.jpg'
import Class from '@/assets/images/virtual_class.jpg'
import Teacher from '@/assets/images/maths_teacher.jpg'
import Scientist from '@/assets/images/scientist.jpg'
import useFadeIn from '@/composables/useFadeIn'
import useSlideLeft from '@/composables/useSlideLeft'
import useSlideRight from '@/composables/useSlideRight'

const { target: headerTarget } = useSlideLeft(100)
const { target: buttonTarget } = useSlideRight(100)
const { target: specialCardTarget } = useFadeIn(200)

const cardData = [
  { image: Woman, alt: 'A Muslim Woman', title: 'Primary Exam' },
  { image: Class, alt: 'A guy teaching virtually', title: 'Bank Exam' },
  { image: Teacher, alt: 'Teacher teaching calculus', title: 'NSI Exam' },
  { image: Scientist, alt: 'A mad scientist', title: 'Advanced Exam' }
]
</script>

<style scoped lang="scss">
.preparation-steps {
  grid-column: content;
  padding-block: clamp(1rem, 0.429rem + 2.857vw, 3rem);

  > * + * {
    margin-top: 2rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    h2 {
      color: $primary-100;

      @include dark-mode {
        color: white;
      }
    }
  }

  &__grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 2rem;

    @include breakpoint-min(medium) {
      grid-auto-rows: 1fr;
    }
  }
}

.special-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 2rem;
  grid-column: auto;
  max-width: 100%;
  color: white;

  @include breakpoint-min(medium) {
    grid-column: span 2 / span 2;
    flex-direction: row;
    align-items: stretch;
  }

  > * {
    border-radius: 8px;
  }

  &__left {
    background-color: $primary-100;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding: 2rem 2.5rem;
    font-size: 1.25rem;
    line-height: clamp(1.2em, 0.971em + 1.143vw, 2em);
    height: 100%;
    flex: 1;
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &__right {
    display: flex;
    justify-content: center;

    @include breakpoint-min(medium) {
      justify-content: flex-end;
    }

    img {
      border-radius: 8px;
      height: clamp(13rem, 9.286rem + 18.571vw, 26rem);
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
</style>
