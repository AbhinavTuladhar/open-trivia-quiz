<script setup lang="ts">
const linkData = [
  { text: 'About', href: '/' },
  { text: 'Portfolio', href: '/' },
  { text: 'Services', href: '/' },
  { text: 'Blog', href: '/' }
]
</script>

<template>
  <nav class="content-grid">
    <div class="navbar-container">
      <RouterLink to="/">
        <h2>LOGO</h2>
      </RouterLink>

      <ul>
        <li v-for="{ href, text } in linkData" :key="text">
          <RouterLink :to="href"> {{ text }} </RouterLink>
        </li>
      </ul>

      <RouterLink to="/quiz">
        <button>Play now!</button>
      </RouterLink>
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

  ul {
    display: flex;
    gap: 2rem;
  }

  button {
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 8px;
    transition-duration: $transition-duration;

    &:hover {
      color: $surface-100;
      background-color: white;
      cursor: pointer;
    }
  }
}
</style>
