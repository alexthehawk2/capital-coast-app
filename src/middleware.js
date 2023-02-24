import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";
export async function middleware(request) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  console.log(request.cookies.has("token"));
  if (request.cookies.has("token")) {
    const token = request.cookies.get("token")?.value;
    // console.log(token);
    const { payload } = await jose.jwtVerify(token, secret);
    console.log(payload);
  } else {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.rewrite(new URL("/dashboard", request.url));
}

export const config = {
  matcher: "/dashboard",
};
