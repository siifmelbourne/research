<template>
  <div>
    <h1>Enter Password</h1>
    <input v-model="password" type="password" />
    <button @click="login">Login</button>
    <p v-if="error">Wrong password</p>
  </div>
</template>

<script setup>
const password = ref('')
const error = ref(false)

const login = async () => {
  const res = await $fetch('/api/login', {
    method: 'POST',
    body: { password: password.value }
  })

  if (res.success) {
    navigateTo('/')
  } else {
    error.value = true
  }
}
</script>
