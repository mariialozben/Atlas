import { Link } from "react-router"

function NotFound() {
  return (
    <div data-el="not-found" className="flex min-h-svh items-center justify-center">
      <div className="text-center">
        <h1 data-el="not-found-title" className="text-4xl font-bold tracking-tight">404</h1>
        <p data-el="not-found-subtitle" className="mt-2 text-muted-foreground">Page not found</p>
        <Link data-el="not-found-home-link" to="/" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-primary">
          Go home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
