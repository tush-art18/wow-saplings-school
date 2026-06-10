import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function POST(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function PUT(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

async function handleProxy(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  try {
    const accessToken = request.cookies.get("access_token")?.value;
    
    // Await params for Next.js 15+ compatibility
    const resolvedParams = await params;
    const path = resolvedParams.path.join("/");
    
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams.toString();
    const targetUrl = `${API_BASE}/dashboard/${path}/${searchParams ? `?${searchParams}` : ""}`;

    const headers = new Headers();
    
    // Forward original Content-Type (important for multipart boundary)
    const contentType = request.headers.get("content-type");
    if (contentType) {
      headers.set("Content-Type", contentType);
    } else {
      headers.set("Content-Type", "application/json");
    }

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    // Determine request details
    const method = request.method;
    let body = undefined;

    if (method !== "GET" && method !== "HEAD") {
      // Forward the raw body buffer to preserve multipart boundaries and files
      body = await request.arrayBuffer();
    }

    const res = await fetch(targetUrl, {
      method,
      headers,
      body,
    });

    if (res.status === 204 || res.status === 205) {
      return new Response(null, { status: res.status });
    }

    let data;
    const responseContentType = res.headers.get("content-type");
    if (responseContentType && responseContentType.includes("application/json")) {
      data = await res.json();
    } else {
      const text = await res.text();
      data = { error: "Backend returned a non-JSON error", details: text.substring(0, 200) };
    }
    
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("Dashboard BFF proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error in dashboard proxy", details: error.message },
      { status: 500 }
    );
  }
}
