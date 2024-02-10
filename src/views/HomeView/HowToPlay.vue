<template>
  <section class="instruction-container content-grid">
    <div class="main-content" ref="target">
      <h2>How to Play</h2>
      <div class="card-container">
        <InstructionStepCard
          v-for="{ index, text, image } in instructionData"
          :key="index"
          :image="image"
          :body-text="text"
          :step-number="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InstructionStepCard from '@/components/InstructionStepCard.vue'
import Step1 from '@/assets/images/step1.png'
import Step2 from '@/assets/images/step2.png'
import Step3 from '@/assets/images/step3.png'
import useFadeIn from '@/composables/useFadeIn'

const { target } = useFadeIn(100)

const instructionData = [
  { index: 1, text: 'Click on the topic.', image: Step1 },
  { index: 2, text: 'A question will have two or four options.', image: Step2 },
  { index: 3, text: 'Click on the correct option!', image: Step3 }
]
</script>

<style lang="scss" scoped>
.instruction-container {
  grid-column: full-width;
  padding-block: clamp(2rem, -1.839rem + 10.238vw, 7.375rem);
  background-color: $primary-100;
}

.main-content {
  grid-column: content;

  h2 {
    color: white;
  }

  > * + * {
    margin-top: 2rem;
  }
}

.card-container {
  grid-column: content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  gap: 2rem;
}
</style>
