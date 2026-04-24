import { clearStateCookie, readStateCookie, renderAuthResult } from './_utils'

export async function onRequestGet(context) {
  const { request, env } = context
  const clientId = env.GITHUB_CLIENT_ID
  const clientSecret = env.GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return new Response('Missing GitHub OAuth environment variables.', {
      status: 500,
      headers: { 'content-type': 'text/plain; charset=UTF-8' }
    })
  }

  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const returnedState = url.searchParams.get('state')
  const storedState = readStateCookie(request.headers.get('cookie'))

  if (!code) {
    return new Response(renderAuthResult('error', { message: 'Missing GitHub authorization code.' }), {
      status: 400,
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'Set-Cookie': clearStateCookie()
      }
    })
  }

  if (!returnedState || !storedState || returnedState !== storedState) {
    return new Response(renderAuthResult('error', { message: 'OAuth state validation failed.' }), {
      status: 401,
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'Set-Cookie': clearStateCookie()
      }
    })
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'user-agent': 'a-long-vacation-decap-auth'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: `${url.origin}/api/callback`
    })
  })

  const result = await tokenResponse.json()

  if (!tokenResponse.ok || result.error || !result.access_token) {
    const message = result.error_description || result.error || 'GitHub token exchange failed.'

    return new Response(renderAuthResult('error', { message }), {
      status: 401,
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'Set-Cookie': clearStateCookie()
      }
    })
  }

  return new Response(
    renderAuthResult('success', {
      token: result.access_token,
      provider: 'github'
    }),
    {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'Set-Cookie': clearStateCookie()
      }
    }
  )
}
