import { NextResponse } from "next/server";

export function middleware(request) {
  // const url = request.nextUrl.clone();
  // if (
  //   url.pathname.startsWith("/images/") ||
  //   url.pathname.startsWith("/assets/fonts")
  // ) {
  //   const response = NextResponse.next();
  //   response.headers.set(
  //     "Cache-Control",
  //     "public, max-age=31536000, immutable"
  //   );
  //   return response;
  // }
  // return NextResponse.next();
}
