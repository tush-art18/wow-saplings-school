import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function handleProxy(request: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
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

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Dashboard BFF proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error in dashboard proxy" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest, context: any) {
  return handleProxy(request, context);
}

export async function POST(request: NextRequest, context: any) {
  return handleProxy(request, context);
}

export async function PATCH(request: NextRequest, context: any) {
  return handleProxy(request, context);
}

export async function PUT(request: NextRequest, context: any) {
  return handleProxy(request, context);
}

export async function DELETE(request: NextRequest, context: any) {
  return handleProxy(request, context);
}
