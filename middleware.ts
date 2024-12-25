import { NextRequest, NextResponse } from "next/server";

// Middleware란? 요청과 응답 사이에 위치합니다.
export function middleware(request: NextRequest) {
  const currentUrl = request.nextUrl.clone();

  // 1. Redirect to a new path
  // if (request.nextUrl.pathname === "/ping") {
  //   currentUrl.pathname = "/pong";
  //   return NextResponse.rewrite(currentUrl);
  // }
}

// export const config = {
//   matcher: '/about/:path*',
// }
