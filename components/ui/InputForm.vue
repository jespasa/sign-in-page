<template>
  <div class="input-group">
    <label :for="id">{{ labelValue }}</label>
    <input
      :id="id"
      v-model="inputValue"
      :class="['input', error ? 'input-error' : '']"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="handleInput" />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  id: { type: String, required: true },
  type: { type: String, default: "text" },
  labelValue: { type: String, default: "" },
  autocomplete: { type: String, default: "" },
  error: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  inputValue.value = target.value;
};
</script>

<style scoped>
label {
  font-size: 1rem;
  line-height: 100%;
}
@media (min-width: 1275px) {
  label {
    font-weight: 600;
  }
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 100%;
}
.input {
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.5em 0.75em;
  background: var(--input-bg);
  border: 2px solid var(--input-border);
  border-radius: 8px;
  transition: 180ms box-shadow ease-in-out;
}
.input:focus {
  border-color: hsl(
    var(--input-focus-h),
    var(--input-focus-s),
    var(--input-focus-l)
  );
  box-shadow: 0 0 0 2px
    hsla(
      var(--input-focus-h),
      var(--input-focus-s),
      calc(var(--input-focus-l) + 40%),
      0.8
    );
  outline: 3px solid transparent;
}
.error {
  color: #e11d48;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}
.input-error {
  border: 2px solid #e11d48;
}
</style>
