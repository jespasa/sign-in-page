<template>
  <section class="sign-in-with-section">
    <div class="divider">
      <span>Or sign in with</span>
    </div>
    <div class="social-buttons">
      <Button variant="secondary" class="icon-button">
        <img src="@/public/icons/google.svg" alt="Google logo" class="icon" />
        Google
      </Button>
      <Button variant="secondary" class="icon-button">
        <img
          src="@/public/icons/facebook.svg"
          alt="Facebook logo"
          class="icon" />
        Facebook
      </Button>
    </div>
    <p class="center text--secondary">
      Don't you have an account? <a href="#">Sign up</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>
<style scoped>
.sign-in-with-section {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.divider {
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--color-primary);
  opacity: 0.7;
}
.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #cbd5e1; /* o var(--color-muted) */
  margin: 0 1em;
}
.divider span {
  white-space: nowrap;
  font-size: var(--font-size-base);
}
.social-buttons {
  display: flex;
  gap: 1em;
  justify-content: space-between;
}
@media (min-width: 1275px) {
  .social-buttons {
    flex-direction: column;
  }
}

.text--secondary {
  font-size: var(--font-size-base);
  font-weight: 400;
  color: var(--color-primary);
}

.text--custom {
  font-size: var(--font-size-base);
  font-weight: 400;
  color: var(--color-primary);
}
</style>
