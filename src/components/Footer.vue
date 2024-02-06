<template>
  <footer class="content-grid">
    <div class="footer-container">
      <div v-for="{ links, title } in footerData" :key="title" class="footer-container__column">
        <h3>{{ title }}</h3>
        <ul class="footer-container__link-list">
          <li v-for="link in links" :key="link" class="footer-link">
            <RouterLink to="/">
              {{ link }}
            </RouterLink>
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
  background-color: $primary-100;
}

.footer-container {
  grid-column: breakout;
  padding-block: clamp(1rem, 0.429rem + 2.857vw, 3rem);
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
      margin-top: 0.75rem;
    }
  }
}

.footer-link {
  position: relative;
  width: max-content;

  &::after {
    content: '';
    position: absolute;
    background-color: white;
    left: 0;
    bottom: -0.25rem;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform $transition-duration ease;
    transform-origin: right;
  }

  &:hover {
    cursor: pointer;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>
