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
      <form class="form">
        <InputForm
          :id="'inputEmail'"
          :label-value="'E-mail'"
          :type="'email'"
          :placeholder="'example@example.com'" />
        <InputForm
          :id="'inputPassword'"
          :label-value="'Password'"
          :type="'password'"
          :placeholder="'At least 8 characters'" />

        <a class="right" href="#">Forgot password?</a>
        <Button>Sign in</Button>
      </form>
    </section>
    <SignInWith />
    <FooterLayout />
  </main>
</template>

<script setup lang="ts">
import InputForm from "@/components/ui/InputForm.vue";
import Button from "@/components/ui/Button.vue";
import SignInWith from "@/components/SignInWith.vue";
import FooterLayout from "@/components/FooterLayout.vue";
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
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
.logo-img {
  height: 16vh;
  object-fit: cover;
  border-radius: 16px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.text--primary {
  font-size: var(--font-size-xxl);
  font-weight: 700;
  color: var(--color-primary);
}
.text--secondary {
  font-size: var(--font-size-base);
  font-weight: 400;
  color: var(--color-primary);
}
</style>
