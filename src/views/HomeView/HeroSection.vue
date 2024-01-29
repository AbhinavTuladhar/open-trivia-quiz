<template>
  <section className="hero">
    <div className="col-1">
      <h1>Play Online Quizzes and Win Prizes Daily!</h1>
      <p>Win upto Rs.5000 monthly!</p>
    </div>

    <div>
      <img :src="Hero" alt="something" />
    </div>
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
  justify-items: end;
  grid-template-columns: repeat(auto-fill, minmax(483px, 1fr));
  justify-content: center;
  column-gap: 8.5rem;
}

.col-1 {
  > * + * {
    margin-block: 1rem;
  }

  p {
    font-size: clamp(1.125rem, 1rem + 0.625vw, 1.563rem);
  }
}
</style>
