<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Hamburger from '@/assets/images/hamburger.svg'
import Accordion from '@/components/Accordion.vue'

const router = useRouter()
const currentPath = router.currentRoute

// Close the mobile menu whenever the route changes.
watch(currentPath, () => {
  isMenuOpen.value = false
})

const isMenuOpen = ref(false)

const linkData = [
  { text: 'About', href: '/' },
  { text: 'Portfolio', href: '/' },
  { text: 'Services', href: '/' },
  { text: 'Blog', href: '/' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="content-grid">
    <div class="navbar-container">
      <RouterLink to="/">
        <h2>LOGO</h2>
      </RouterLink>

      <img :src="Hamburger" class="hamburger" @click="toggleMenu" />

      <!-- For desktop links -->
      <ul class="link-items desktop-links">
        <li v-for="{ href, text } in linkData" :key="text">
          <RouterLink :to="href"> {{ text }} </RouterLink>
        </li>
      </ul>

      <RouterLink to="/quiz" class="quiz-button">
        <button>Play now!</button>
      </RouterLink>

      <!-- Mobile links -->
      <div class="mobile-container">
        <Accordion :is-open="isMenuOpen">
          <ul class="mobile-links">
            <li v-for="{ href, text } in linkData" :key="text">
              <RouterLink :to="href"> {{ text }} </RouterLink>
            </li>
          </ul>
          <RouterLink to="/quiz" class="quiz-button quiz-button--mobile">
            <button>Play now!</button>
          </RouterLink>
        </Accordion>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  grid-column: full-width;
  // padding-inline: clamp(1rem, 0.571rem + 2.143vw, 2.5rem);
  padding-block: 1rem;
  color: white;
  border-bottom: 2px solid $surface-300;
}

.navbar-container {
  grid-column: breakout;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .hamburger {
    width: 1.5rem;
    height: 1.5rem;
    filter: invert(100%) sepia(0%) saturate(7444%) hue-rotate(39deg) brightness(114%) contrast(111%);

    &:hover {
      cursor: pointer;
    }

    @include breakpoint-min(medium) {
      display: none;
    }
  }

  .link-items {
    display: none;

    @include breakpoint-min(medium) {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  .quiz-button {
    display: none;
    border: 1px solid white;
    border-radius: 8px;

    button {
      padding: 0.5rem 1.5rem;
      background-color: transparent;
      color: white;
      justify-self: start;
      transition-duration: $transition-duration;
      border: none;
      border-radius: 4px;

      &:hover {
        color: $surface-100;
        background-color: white;
        cursor: pointer;
      }
    }

    @include breakpoint-min(medium) {
      display: block;
    }

    &--mobile {
      display: flex;
      justify-content: flex-start;
      margin-block: 1rem;

      @include breakpoint-min(medium) {
        display: none;
      }
    }
  }
}

.mobile-container {
  $border-colour: silver;

  display: block;
  width: 100%;

  > :first-child {
    border-top: 1px solid $border-colour;
  }

  > :last-child {
    border-bottom: 1px solid $border-colour;
  }

  @include breakpoint-min(medium) {
    display: none;
  }

  .mobile-links {
    border-bottom: 1px solid $border-colour;

    > * {
      padding-block: 0.5rem;
    }
    > * + * {
      border-top: 1px solid $border-colour;
    }
  }
}
</style>
