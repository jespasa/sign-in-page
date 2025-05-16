<template>
  <main class="app-layout">
    <aside class="logo" aria-hidden="true">
      <img
        class="logo-img"
        src="@/public/img/login-img.jpg"
        alt="Login Image" />
    </aside>
    <section class="main-section" aria-label="Login">
      <h1 class="text--primary">Welcome Back</h1>
      <div>
        <h2 class="text--secondary">
          Today is a new day. It's your day. You shape it.
        </h2>
        <h2 class="text--secondary">
          Sign in to start managing your projects.
        </h2>
      </div>
      <form class="form" @submit.prevent="handleSubmit">
        <InputForm
          v-for="field in fields"
          :id="field.id"
          :key="field.id"
          v-model="form[field.id]"
          :label-value="field.label"
          :type="field.type"
          :placeholder="field.placeholder"
          :autocomplete="field.autocomplete"
          :error="errors[field.id]" />

        <a class="right" href="#">Forgot password?</a>
        <Button>Sign in</Button>
      </form>
      <SignInWith />
    </section>
  </main>
  <FooterLayout />
</template>

<script setup lang="ts">
import InputForm from "@/components/ui/InputForm.vue";
import Button from "@/components/ui/Button.vue";
import SignInWith from "@/components/SignInWith.vue";
import FooterLayout from "@/components/FooterLayout.vue";

const fields = [
  {
    id: "email",
    label: "E-mail",
    type: "email",
    placeholder: "example@example.com",
    autocomplete: "username",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "At least 8 characters",
    autocomplete: "current-password",
  },
];

const form = ref<Record<string, string>>({
  email: "",
  password: "",
});
const errors = ref<Record<string, string>>({});

function validate() {
  errors.value = {};
  if (!form.value.email) {
    errors.value.email = "E-mail is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.value.email)) {
    errors.value.email = "Invalid e-mail";
  }
  if (!form.value.password) {
    errors.value.password = "Password is required";
  } else if (form.value.password.length < 8) {
    errors.value.password = "Password must be at least 8 characters";
  }
  return Object.keys(errors.value).length === 0;
}

function handleSubmit() {
  if (validate()) {
    alert("Form is valid!");
  }
}
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3vh 0;
  gap: 1em;
}

.main-section {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.logo {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 1275px) {
  .app-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
    align-items: center;
    padding: 0 0;
  }
  .logo {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-section {
    order: 1;
    justify-content: center;
    padding: 0 3vw;
    min-height: 80vh;
    gap: 2em;
  }
}
.logo-img {
  height: 16vh;
  object-fit: cover;
  border-radius: 16px;
}
@media (min-width: 1275px) {
  .logo-img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.text--primary {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
}
.text--secondary {
  font-size: var(--font-size-base);
  font-weight: 400;
  color: var(--color-primary);
}

@media (min-width: 1275px) {
  .text--primary {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary);
  }
  .text--secondary {
    font-size: var(--font-size-lg);
    font-weight: 400;
    color: var(--color-primary);
  }
}
</style>
