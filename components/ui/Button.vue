<template>
  <button :class="['base-button', variantClass]">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary", // 'primary' | 'secondary'
  },
});

const variantClass = computed(() => {
  return props.variant === "secondary" ? "secondary-button" : "primary-button";
});
</script>

<style scoped>
.base-button {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

/* Primary style */
.primary-button {
  background: var(--color-primary);
  color: var(--color-secondary);
}
.primary-button:hover {
  background: var(--color-accent);
  color: #fff;
}

/* Secondary style */
.secondary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  background: var(--color-secondary);
  color: var(--color-primary);
}
.secondary-button:hover {
  background: var(--color-muted);
  color: var(--color-primary);
}
</style>
