<template>
  <div class="switch" @click="handleClick">
    <div class="switch__circle" />
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped lang="scss">
$switch-width: 52px;
$switch-height: 24px;
$gap: 2px;
$ball-radius: calc($switch-height - $gap * 2);

.switch {
  position: relative;
  width: $switch-width;
  height: $switch-height;
  background-color: $surface-600;
  border-radius: 100vw;
  transition-duration: $transition-duration;

  &:hover {
    cursor: pointer;
  }

  @include dark-mode {
    background-color: white;
  }

  &__circle {
    position: absolute;
    top: $gap;
    right: calc(100% - ($ball-radius + $gap));
    width: $ball-radius;
    height: $ball-radius;
    background-color: white;
    border-radius: 100%;
    transition: all ease $transition-duration;

    @include dark-mode {
      background-color: $surface-100;
      right: $gap;
    }
  }
}
</style>
