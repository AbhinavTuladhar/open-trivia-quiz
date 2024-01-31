<template>
  <div class="options-group">
    <span> {{ inputLabel }}</span>
    <select v-model="modeller">
      <option v-for="{ label, value } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { toRefs } from 'vue'

interface OptionsBoxProps {
  inputLabel: string
  modeller: Ref<string>
  options: Array<{ label: string; value: string }>
}

const props = defineProps<OptionsBoxProps>()
const { inputLabel, modeller, options } = toRefs(props)
</script>

<style scoped lang="scss">
.options-group {
  > * + * {
    margin-top: 0.25rem;
  }

  select {
    width: 100%;
    padding: 1rem;
  }
}
</style>
