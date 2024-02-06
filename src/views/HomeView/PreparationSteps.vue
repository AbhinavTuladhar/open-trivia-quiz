<template>
  <section class="preparation-steps">
    <div class="preparation-steps__header">
      <h2>
        Let's Sharp Your <br />
        Preparation
      </h2>
      <button class="transparent-btn transparent-btn--large">Explore All</button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.preparation-steps {
  grid-column: content;
  padding-block: clamp(1rem, 0.429rem + 2.857vw, 3rem);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
}
</style>
