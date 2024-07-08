import { auth } from "./auth"

export default auth((req) => {
  // If the user is not logged in and trying to access a protected route, redirect to login
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    return Response.redirect(new URL('/login', req.nextUrl.origin))
  }
})

// Optionally, you can export a config to specify which routes to run the middleware on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}