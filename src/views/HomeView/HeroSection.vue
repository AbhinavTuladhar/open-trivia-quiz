<template>
  <section className="hero">
    <div className="col-1">
      <h1>Play Online Quizzes and Win Prizes Daily!</h1>
      <p>Win upto Rs.5000 monthly!</p>
      <button class="col-1__register-btn">Register now!</button>

      <div class="col-1__users-div">
        <span class="col-1__users-title">Number of active users right now</span>
        <span class="col-1__users-count">20,000+</span>
      </div>
    </div>

    <img class="hero__image" :src="Hero" alt="something" />
  </section>
</template>

<script setup lang="ts">
import Hero from '@/assets/images/hero.jpg'
</script>

<style scoped lang="scss">
.hero {
  grid-column: content;
  padding-block: clamp(1rem, 0.714rem + 1.429vw, 2rem);
  display: grid;
  align-items: center;
  // justify-items: end;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  justify-content: center;
  column-gap: 5rem;

  &__image {
    // width: min(693px, 100%);
    width: 100%;
  }
}

.col-1 {
  > * + * {
    margin-top: 1.5rem;
  }

  p {
    font-size: clamp(1.125rem, 1rem + 0.625vw, 1.563rem);
  }

  &__register-btn {
    padding: 1rem 2.5rem;
    background-color: transparent;
    color: white;
    font-size: clamp(1.125rem, 1.089rem + 0.179vw, 1.25rem);
    border: 1px solid white;
    border-radius: 4px;
    transition-duration: $transition-duration;

    &:hover {
      color: $primary-colour;
      background-color: white;
      cursor: pointer;
    }

    &:active {
      transform: scale(0.975, 0.975);
    }
  }

  &__users-div {
    @include flex-box($direction: column, $gap: 1rem, $align-items: center, $justify-content: flex-start);
    text-align: center;
    width: fit-content;
  }

  &__users-title {
    font-size: clamp(1.125rem, 1rem + 0.625vw, 1.5625rem);
    text-transform: uppercase;
  }

  &__users-count {
    font-size: clamp(1.5rem, 0.946rem + 2.768vw, 3.438rem);
    font-weight: bold;
  }
}
</style>
