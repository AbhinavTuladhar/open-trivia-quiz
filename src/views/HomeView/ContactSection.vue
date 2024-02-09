<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact__header">
        <h3 class="contact__subtitle">Contact us</h3>
        <h2 class="contact__title">Get In Touch</h2>
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
    color: $primary-100;

    @include dark-mode {
      color: white;
    }

    > * + * {
      margin-top: 1rem;
    }
  }

  &__title {
    font-weight: bold;
    font-size: clamp(1.75rem, 1.071rem + 3.393vw, 4.125rem);
  }

  &__subtitle {
    font-weight: normal;
    font-size: 1.125rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__form-container {
    background: conic-gradient(white 0deg 90deg, $primary-100 90deg 270deg, white 270deg 360deg);

    @include dark-mode {
      background: conic-gradient(
        $surface-100 0deg 90deg,
        $primary-100 90deg 270deg,
        $surface-100 270deg 360deg
      );
    }
  }
}

.contact-container {
  > * + * {
    margin-top: 1.75rem;
  }

  p {
    padding-inline: 1rem;
  }
}
</style>
