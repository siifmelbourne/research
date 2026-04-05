export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const correctPassword = "ilovesiifmelbourne"

  if (body.password === correctPassword) {
    setCookie(event, 'auth', 'true', {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    })

    return { success: true }
  }

  return { success: false }
})
