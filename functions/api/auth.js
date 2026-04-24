import { buildState, createStateCookie, githubScopes } from './_utils'

export async function onRequestGet(context) {
  const { request, env } = context
  const clientId = env.GITHUB_CLIENT_ID

  if (!clientId) {
    return new Response('Missing GITHUB_CLIENT_ID environment variable.', { status: 500 })
  }

  const url = new URL(request.url)
  const state = buildState()
  const redirectUrl = new URL('https://github.com/login/oauth/authorize')

  redirectUrl.searchParams.set('client_id', clientId)
  redirectUrl.searchParams.set('redirect_uri', `${url.origin}/api/callback`)
  redirectUrl.searchParams.set('scope', githubScopes)
  redirectUrl.searchParams.set('state', state)

  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl.toString(),
      'Set-Cookie': createStateCookie(state)
    }
  })
}
