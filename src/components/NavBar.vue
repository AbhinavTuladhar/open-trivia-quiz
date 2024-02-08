<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Hamburger from '@/assets/images/hamburger.svg'
import Accordion from '@/components/Accordion.vue'
import DarkModeSwitch from './DarkModeSwitch.vue'

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

      <!-- Show the mode toggle and hamburger item on mobile -->
      <div class="mobile-right-items">
        <DarkModeSwitch />
        <img :src="Hamburger" class="hamburger" @click="toggleMenu" />
      </div>

      <!-- For desktop links -->
      <ul class="link-items desktop-links">
        <li v-for="{ href, text } in linkData" :key="text" class="desktop-link">
          <RouterLink :to="href"> {{ text }} </RouterLink>
        </li>
      </ul>

      <!-- Mode toggle and play now button on laptop -->
      <div class="btn-laptop">
        <DarkModeSwitch />
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
  $border-colour: $surface-600;

  grid-column: full-width;
  padding-block: 1rem;
  color: $surface-100;
  border-bottom: 2px solid $border-colour;

  @include dark-mode {
    border-color: $surface-300;
    color: white;
  }
}

.navbar-container {
  grid-column: breakout;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .mobile-right-items {
    display: flex;
    gap: 2rem;

    @include breakpoint-min(medium) {
      display: none;
    }
  }

  .hamburger {
    width: 1.5rem;
    height: 1.5rem;

    @include dark-mode {
      filter: invert(100%) sepia(0%) saturate(7444%) hue-rotate(39deg) brightness(114%)
        contrast(111%);
    }

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
      display: flex;
      gap: 2rem;
      align-items: center;
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

.desktop-link {
  position: relative;
  transition: all 0.6s ease;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    bottom: -0.5rem;
    height: 2px;
    background-color: $surface-100;
    transition: all $transition-duration ease-in-out;

    @include dark-mode {
      background-color: white;
    }
  }

  &:hover::after {
    width: 100%;
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
