<template>
  <section class="card">
    <div class="card__header">
      <slot name="header" />
    </div>
    <div class="card__content">
      <slot />
    </div>
    <div class="card__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});
</script>
<style scoped>
@import url("./card.css");
.card {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}
</style>
