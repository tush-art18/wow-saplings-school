import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore login page and assets
  if (pathname.startsWith("/dashboard/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    const accessToken = request.cookies.get("access_token")?.value;
    const refreshToken = request.cookies.get("refresh_token")?.value;

    // Both missing -> redirect to login
    if (!accessToken && !refreshToken) {
      return NextResponse.redirect(new URL("/dashboard/login", request.url));
    }

    // Access token expired but we have a refresh token -> refresh it
    if (!accessToken && refreshToken) {
      try {
        const res = await fetch(`${API_BASE}/auth/token/refresh/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        });

        if (res.ok) {
          const data = await res.json();
          const response = NextResponse.next();

          // Set new access token cookie
          response.cookies.set({
            name: "access_token",
            value: data.access,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60, // 15 minutes
          });

          if (data.refresh) {
            response.cookies.set({
              name: "refresh_token",
              value: data.refresh,
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
              path: "/",
              maxAge: 7 * 24 * 60 * 60, // 7 days
            });
          }

          return response;
        } else {
          // Refresh token expired or blacklisted -> redirect to login
          const response = NextResponse.redirect(new URL("/dashboard/login", request.url));
          response.cookies.delete("access_token");
          response.cookies.delete("refresh_token");
          return response;
        }
      } catch (error) {
        console.error("Auth middleware refresh failed:", error);
        return NextResponse.redirect(new URL("/dashboard/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
