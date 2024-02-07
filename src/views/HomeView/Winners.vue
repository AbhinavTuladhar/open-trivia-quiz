<template>
  <section class="winners-section content-grid">
    <div class="winners-container">
      <div class="section-desc">
        <h2>Previous winners</h2>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam placerat tortor commodo lectus laoreet venenatis.
        </p>
      </div>
      <div class="winners-column">
        <div class="winners-column__row">
          <div class="winners-column__time-box">
            <h3>
              <span class="winners-column__time-text"> Weekly </span> <br />
              <span class="winners-column__winner-text"> Winner </span>
            </h3>
            <img :src="Arrow" alt="arrow" class="upper-arrow" />
          </div>
          <div class="last-child-offset">
            <img :src="WeeklyWinner" alt="The monthly winner" class="winners-column__image" />
          </div>
        </div>
        <div class="winners-column__row">
          <div class="upper-offset">
            <img :src="MonthlyWinner" alt="The monthly winner" class="winners-column__image" />
          </div>
          <div class="winners-column__time-box last-child-offset--half">
            <h3>
              <span class="winners-column__time-text"> Monthly </span> <br />
              <span class="winners-column__winner-text"> Winner </span>
            </h3>
            <img :src="Arrow" alt="arrow" class="lower-arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Arrow from '@/assets/images/curved_arrow.svg'
import MonthlyWinner from '@/assets/images/monthly_winner.jpg'
import WeeklyWinner from '@/assets/images/weekly_winner.jpg'
</script>

<style scoped lang="scss">
$offset: 2rem;
$gap: 2rem;

.winners-section {
  grid-column: full-width;
  background-color: $primary-100;
  padding-block: clamp(1rem, -0.143rem + 5.714vw, 5rem);
}

.winners-container {
  grid-column: content;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5vw;
}

.section-desc {
  p {
    font-size: clamp(1rem, 0.929rem + 0.357vw, 1.25rem);
    line-height: clamp(1em, 0.929em + 0.357vw, 1.25em);
  }

  > * + * {
    margin-top: 3.5rem;
  }
}

.winners-column {
  > * + * {
    margin-top: $gap;
  }

  &__row {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-end;
    gap: $gap;

    > * {
      // Set an equal, fluid width and height to all the children
      width: clamp(8.438rem, 2.411rem + 16.071vw, 16.875rem);
      height: clamp(8.438rem, 2.411rem + 16.071vw, 16.875rem);
    }
  }

  &__time-box {
    position: relative;
    display: grid;
    place-content: center;
    background-color: $primary-50;
    padding: 1.5rem 1rem;
    text-align: center;
  }

  &__time-text {
    font-size: clamp(2rem, 0.571rem + 3.81vw, 4rem);
  }

  &__winner-text {
    font-size: clamp(1.25rem, 1.071rem + 0.893vw, 1.875rem);
  }

  &__image {
    width: 100%;
    height: 100%;
  }
}

.upper-offset {
  margin-top: calc($offset * -1.5);
}

.last-child-offset {
  margin-top: calc($offset * 1.5);

  &--half {
    margin-top: calc($gap / 32);
  }
}

.upper-arrow {
  position: absolute;
  top: -10%;
  left: 80%;
}

.lower-arrow {
  position: absolute;
  inset: 0;
  transform: rotate(155deg);
  top: 75%;
  left: -50%;
}
</style>
