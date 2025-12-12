import './index.css'
import { AppShell } from './App'

export function Root(props: { url: URL }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>QCUland — Promotional Site</title>
      </head>
      <body className="font-sans">
        <div id="root">
          <AppShell />
        </div>
      </body>
    </html>
  )
}

