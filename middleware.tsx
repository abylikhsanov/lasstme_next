import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/home', request.url));
    }
}

export const config = {
    matcher: ['/']
}