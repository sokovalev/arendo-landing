import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

import { AUTH_COOKIE_NAME } from "@/constants";

const protectedPaths = [{ path: "/api/leads", method: "GET" }];

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev-secret-key"
);

export async function middleware(request: NextRequest) {
  const isProtectedPath = protectedPaths.some(
    (path) =>
      request.nextUrl.pathname.startsWith(path.path) &&
      request.method === path.method
  );

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  console.log("token to verify", token);
  if (!token) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    // Verify the token
    const { payload } = await jwtVerify(token, JWT_SECRET);
    // Add the decoded token to the request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-data", JSON.stringify(payload));

    // Return the response with the modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error("token verification error", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: "/api/:path*",
};
