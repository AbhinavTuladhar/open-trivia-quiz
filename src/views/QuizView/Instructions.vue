<template>
  <div class="instruction-div">
    <h2>Set up your preferences!</h2>
    <ul class="instruction-div__text">
      <li>The quiz will have 20 questions.</li>
      <li>You can choose your preferred quiz category, their difficulty and the type of questions.</li>
      <li>Please note that you have to choose either just one or all categories. No in-between.</li>
      <li>Multiple choice questions will have four possible options.</li>
      <li>Once you start the quiz, you CANNOT change the options until you quit.</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.instruction-div {
  > * + * {
    margin-top: 0.75rem;
  }

  &__text {
    > * + * {
      margin-top: 0.5rem;
    }
  }
}
</style>
