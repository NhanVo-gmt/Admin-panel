import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const authRegexChecker = new RegExp('/auth/*');

    if (authRegexChecker.test(request.url))
    {
        console.log('Middle created at date: ' + new Date());
        console.log({url: request.url})
        console.log({pathname: request.nextUrl.pathname})
        console.log({method: request.method})
    }

  return NextResponse.redirect(new URL('', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }