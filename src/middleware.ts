import { WithAuthArgs, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("pathname", req.nextUrl.pathname);
    console.log("role", req.nextauth?.token);

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token &&
      req.nextauth.token.role
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin", "/profile", "/create-user"],
};
