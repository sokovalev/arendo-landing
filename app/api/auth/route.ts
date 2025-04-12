import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

// Cookie settings
const AUTH_COOKIE_NAME = "auth_token";
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev-secret-key"
);
const JWT_EXPIRES_IN = "1d";

async function safeCompare(a: string, b: string): Promise<boolean> {
  if (a.length !== b.length) return false;

  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);

  let result = 0;
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i];
  }
  return result === 0;
}

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expectedPassword = process.env.ADMIN_PASSWORD || "";

  if (typeof password !== "string") {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  if (!(await safeCompare(password, expectedPassword))) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Create JWT token
  const token = await new SignJWT({
    authenticated: true,
    role: "admin",
    iat: Math.floor(Date.now() / 1000),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(JWT_SECRET);

  const response = NextResponse.json({ authenticated: true });

  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
