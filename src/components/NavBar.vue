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

      <div class="btn-laptop">
        <RouterLink to="/quiz">
          <button class="transparent-btn transparent-btn--regular">Play now!</button>
        </RouterLink>
      </div>

      <!-- Mobile links -->
      <div class="mobile-container">
        <Accordion :is-open="isMenuOpen">
          <ul class="mobile-links">
            <li v-for="{ href, text } in linkData" :key="text">
              <RouterLink :to="href"> {{ text }} </RouterLink>
            </li>
          </ul>
          <div class="btn-mobile">
            <RouterLink to="/quiz">
              <button class="transparent-btn transparent-btn--regular">Play now!</button>
            </RouterLink>
          </div>
        </Accordion>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// Padding between items for only mobile view.
$vertical-padding: 0.5rem;

nav {
  grid-column: full-width;
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

  .btn-laptop {
    display: none;

    @include breakpoint-min(medium) {
      display: block;
    }
  }

  .btn-mobile {
    display: block;
    padding-block: $vertical-padding;

    @include breakpoint-min(medium) {
      display: none;
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
      padding-block: $vertical-padding;
    }
    > * + * {
      border-top: 1px solid $border-colour;
    }
  }
}
</style>
