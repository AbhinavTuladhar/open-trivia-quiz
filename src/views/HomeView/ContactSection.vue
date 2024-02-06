<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact__header">
        <h3>Contact us</h3>
        <h2>Get In Touch</h2>
      </div>
      <p>Lorem Ipsum decided to leave for the far world of grammar</p>
      <div class="contact__form-container">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped lang="scss">
.contact {
  grid-column: full-width;
  text-align: center;
  padding-top: 2rem;

  &__header {
    > * + * {
      margin-top: 1rem;
    }
  }

  &__form-container {
    background: conic-gradient(
      $surface-100 0deg 90deg,
      $primary-100 90deg 270deg,
      $surface-100 270deg 360deg
    );
  }
}

.contact-container {
  > * + * {
    margin-top: 1.75rem;
  }
}
</style>
