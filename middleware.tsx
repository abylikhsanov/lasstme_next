import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { CheckAuth } from "./app/api/AuthenticationAPI";
import { useUser } from "./app/context/UserContext";

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith("/auth")) {
    try {
      const authenticated = false;

      if (!authenticated) {
        console.error("Not signed in");
        return NextResponse.rewrite(new URL("/login", request.url));
      }
    } catch (error) {
      console.error(`error`);
    }
  } else if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
