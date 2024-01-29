<script setup lang="ts">
const linkData = [
  { text: 'About', href: '/' },
  { text: 'Portfolio', href: '/' },
  { text: 'Services', href: '/' },
  { text: 'Blog', href: '/' }
]
</script>

<template>
  <nav>
    <h2>LOGO</h2>

    <ul>
      <li v-for="link in linkData" :key="link.text">
        <a :href="link.href"> {{ link.text }} </a>
      </li>
    </ul>

    <button>Play now!</button>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  grid-column: full-width;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: clamp(1rem, 0.571rem + 2.143vw, 2.5rem);
  padding-block: 1rem;
  background-color: royalblue;
  color: white;

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
  }
}
</style>
