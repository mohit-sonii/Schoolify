import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl
  if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
    return NextResponse.next()
  }
  const { userId } = await auth()
  if (!userId) {
    const url = new URL('/sign-in', req.url)
    return NextResponse.redirect(url)
  }
  if (pathname === "/") {
    const url=new URL('/dashboard/home',req.url)
    return NextResponse.redirect(url)
  }
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};