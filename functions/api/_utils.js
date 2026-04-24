const STATE_COOKIE = 'decap_oauth_state'

export const githubScopes = 'repo user'

export const buildState = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(18))
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export const createStateCookie = (state) =>
  `${STATE_COOKIE}=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`

export const clearStateCookie = () =>
  `${STATE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`

export const readStateCookie = (cookieHeader = '') => {
  const value = cookieHeader
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${STATE_COOKIE}=`))

  return value ? value.slice(STATE_COOKIE.length + 1) : null
}

export const renderAuthResult = (status, content) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Decap CMS Auth</title>
  </head>
  <body>
    <script>
      (function () {
        const content = ${JSON.stringify(content)};

        function receiveMessage(event) {
          window.opener.postMessage(
            'authorization:github:${status}:' + JSON.stringify(content),
            event.origin || '*'
          );
          window.removeEventListener('message', receiveMessage, false);
          window.close();
        }

        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`
