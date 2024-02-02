<template>
  <div class="accordion" :class="{ hide: !isOpen, show: isOpen }">
    <div class="accordion__children">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const { isOpen } = toRefs(props)
</script>

<style scoped lang="scss">
.accordion {
  display: grid;
  transition: all ease-in-out $transition-duration;

  &.hide {
    grid-template-rows: 0fr;
    opacity: 0;
  }

  &.show {
    margin-top: 1rem;
    grid-template-rows: 1fr;
    opacity: 1;
  }

  &__children {
    overflow: hidden;
  }
}
</style>
