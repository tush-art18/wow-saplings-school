import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function handleProxy(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const accessToken = request.cookies.get("access_token")?.value;
    const path = params.path.join("/");
    
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams.toString();
    const targetUrl = `${API_BASE}/dashboard/${path}/${searchParams ? `?${searchParams}` : ""}`;

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    // Determine request details
    const method = request.method;
    let body = undefined;

    if (method !== "GET" && method !== "HEAD") {
      const contentType = request.headers.get("content-type") || "";
      if (contentType.includes("multipart/form-data")) {
        // Forward multipart form data directly (e.g. for image uploads)
        const formData = await request.formData();
        
        // Remove Content-Type header so fetch sets it automatically with the correct boundary
        headers.delete("Content-Type");
        
        const res = await fetch(targetUrl, {
          method,
          headers,
          body: formData,
        });
        
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
      } else {
        body = await request.text();
      }
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
