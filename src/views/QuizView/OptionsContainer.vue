<template>
  <section class="options-container">
    <OptionBox
      v-for="{ label: inputLabel, options, modeller } in optionsData"
      :key="inputLabel"
      :input-label="inputLabel"
      :options="options"
      :modeller="modeller"
    />
  </section>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import OptionBox from './OptionBox.vue'

const { category, difficulty, questionType } = storeToRefs(useOptionsStore())

interface SelectedOption {
  label: string
  value: string
}

interface OptionsInterface {
  label: string
  modeller: Ref
  options: Array<SelectedOption>
}

const categoryData: OptionsInterface = {
  label: 'Select category',
  modeller: category,
  options: [
    { value: 'any', label: 'Any category' },
    { value: '9', label: 'General Knowledge' },
    { value: '10', label: 'Entertainment: Books' },
    { value: '11', label: 'Entertainment: Films' },
    { value: '12', label: 'Entertainment: Music' },
    { value: '13', label: 'Entertainment: Musicals and theatre' },
    { value: '14', label: 'Entertainment: Television' },
    { value: '15', label: 'Entertainment: Video games' },
    { value: '16', label: 'Entertainment: Board games' },
    { value: '17', label: 'Science and Nature' },
    { value: '18', label: 'Science: Computers' },
    { value: '19', label: 'Science: Mathematics' },
    { value: '20', label: 'Mythology' },
    { value: '21', label: 'Sports' },
    { value: '22', label: 'Geography' },
    { value: '23', label: 'History' },
    { value: '24', label: 'Politics' },
    { value: '25', label: 'Art' },
    { value: '26', label: 'Celebrities' },
    { value: '27', label: 'Animals' },
    { value: '28', label: 'Vehicles' },
    { value: '29', label: 'Entertainment: Comics' },
    { value: '30', label: 'Science: Gadgets' },
    { value: '31', label: 'Entertainment: Japanese Anime and Manga' },
    { value: '32', label: 'Entertainment: Cartoon and Animations' }
  ]
}

const difficultyData: OptionsInterface = {
  label: 'Select difficulty',
  modeller: difficulty,
  options: [
    { value: 'any', label: 'Any difficulty' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ]
}

const questionTypeData: OptionsInterface = {
  label: 'Select question type',
  modeller: questionType,
  options: [
    { value: 'any', label: 'Any type' },
    { value: 'multiple', label: 'Multiple choice questions' },
    { value: 'boolean', label: 'True / False' }
  ]
}

const optionsData: Array<OptionsInterface> = [categoryData, difficultyData, questionTypeData]
</script>

<style scoped lang="scss">
.options-container {
  > * + * {
    margin-top: 1.25rem;
  }
}
</style>
