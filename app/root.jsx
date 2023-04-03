import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import globalStyles from '~/styles/global.css'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Mi primera app con Remix',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = () => {
  return ({
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.simplecss.org/simple.min.css'
  })
}

function Layout () {
  return (
    <main>
      <header>
      <Link to='/'>
        <h2>Remix</h2>
      </Link>
      </header>
      <Outlet />
      <footer><small>Copyright</small></footer>
    </main>
  )
}

export default function App () {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
