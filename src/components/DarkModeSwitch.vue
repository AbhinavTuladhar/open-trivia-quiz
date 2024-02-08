<template>
  <div class="switch" @click="handleClick">Test</div>
</template>

<script setup lang="ts">
const handleClick = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped lang="scss">
.switch {
  width: 4rem;
  padding: 0.25rem;
  border-radius: 100vw;
  border: 1px solid $surface-300;

  @include dark-mode {
    border-color: white;
  }
}
</style>
