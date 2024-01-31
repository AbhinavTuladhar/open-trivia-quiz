<template>
  <footer class="content-grid">
    <div class="footer-container">
      <div v-for="{ links, title } in footerData" :key="title" class="footer-container__column">
        <h3>{{ title }}</h3>
        <ul class="footer-container__link-list">
          <li v-for="link in links" :key="link">
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerData = [
  { title: 'Explore', links: ['Home', 'About us', 'Contact', 'FAQs'] },
  { title: 'Categories', links: ['General knowledge', 'Entertainment', 'Science', 'History'] },
  { title: 'More about us!', links: ['Our story', 'Our team'] },
  { title: 'Other stuff!', links: ['Privacy policy', 'Terms of service'] }
]
</script>

<style scoped lang="scss">
footer {
  grid-column: full-width;
  background-color: $primary-green;
}

.footer-container {
  grid-column: breakout;
  padding-block: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 140px), 1fr));
  gap: 2rem;

  &__column {
    > * + * {
      margin-top: 1.5rem;
    }
  }

  &__link-list {
    > * + * {
      margin-top: 0.5rem;
    }
  }
}
</style>
