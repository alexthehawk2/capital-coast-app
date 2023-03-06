import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";
export async function middleware(request) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  if (request.nextUrl.pathname === "/signin") {
    if (request.cookies.has("token")) {
      const token = request.cookies.get("token")?.value;
      try {
        const { payload } = await jose.jwtVerify(token, secret);

        return NextResponse.redirect(
          new URL("/dashboard/profile", request.url)
        );
      } catch (e) {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }
  // console.log(request.cookies.has("token"));
  if (request.cookies.has("token")) {
    const token = request.cookies.get("token")?.value;
    try {
      const { payload } = await jose.jwtVerify(token, secret);
      if (!request.cookies.has("user")) {
        const requestHeaders = new Headers(request.headers);

        const response = NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });

        response.headers.set(
          "Set-Cookie",
          "user=" +
            JSON.stringify(payload) +
            "; Path=/; HttpOnly; SameSite=Strict; Secure max-age=3600"
        );
        return response;
      }
    } catch (e) {
      // return NextResponse.redirect(new URL("/signin", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/signin", "/dashboard/profile"],
};
