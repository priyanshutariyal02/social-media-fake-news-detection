import { NextResponse } from "next/server";

const publicRoutes = ["/login"];
const protectedRoutes = ["/"];

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );

  const sessionToken =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value ||
    "";

  if (isPublicRoute && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...publicRoutes, "/protectedRoutes/:path*"],
};
