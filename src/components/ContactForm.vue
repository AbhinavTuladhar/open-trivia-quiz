<template>
  <main class="content-grid">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="contact-form__input-group">
        <label for="name"> Name </label>
        <input v-model="formData.name" id="name" type="text" class="contact-form__input-field" />
      </div>

      <div class="contact-form__input-group">
        <label for="email"> Email </label>
        <input v-model="formData.email" id="email" type="email" class="contact-form__input-field" />
      </div>

      <div class="contact-form__input-group">
        <label for="message"> Your message </label>
        <textarea v-model="formData.message" id="message" class="contact-form__input-field" />
      </div>

      <button class="submit-btn">Submit</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log(formData.value)
  alert('We have received your message and will get back to you shortly.')
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  grid-column: full-width;
  background-color: $surface-100;
  padding: clamp(2rem, 1.071rem + 4.643vw, 5.25rem);
  width: clamp(280px, 155px + 39.286vw, 720px);
  margin-inline: auto;
  border-radius: 8px;

  > * + * {
    margin-top: 1rem;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    gap: 0.25rem;

    input,
    textarea {
      width: 100%;
    }

    textarea {
      height: 8rem;
      resize: none;
    }
  }

  &__input-field {
    padding: 0.5rem 0.25rem;
    border-radius: 8px;
  }
}
</style>
