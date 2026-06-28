import { NextResponse, type NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/go/:slug*' };

export async function middleware(request: NextRequest) {
    const slug = request.nextUrl.pathname
        .replace(/^\/go\//, '')
        .replace(/\/$/, '');

    const links = await get<Record<string, string>>('qr_links');
    const destination = links?.[slug] ?? links?.default;

    // 307 = temporaire → la destination reste reprogrammable
    if (destination) {
        return NextResponse.redirect(destination, 307);
    }
    return NextResponse.next();
}