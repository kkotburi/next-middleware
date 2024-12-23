import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUrl = request.nextUrl.clone();
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// export const config = {
//   matcher: '/about/:path*',
// }
