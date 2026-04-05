export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    return
  }

  const auth = useCookie('auth')
  console.log(auth)

  if (!auth.value || !auth.value.toString()) {
    return navigateTo('/login')
  }
})
