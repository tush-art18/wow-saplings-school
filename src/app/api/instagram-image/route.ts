import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "https://wow-saplings-school-backend.onrender.com/api";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get("url");
  const permalink = searchParams.get("permalink");
  const postId = searchParams.get("id");

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  };

  // Helper to fetch an image buffer and return response
  async function returnImage(imageUrl: string) {
    try {
      const imgRes = await fetch(imageUrl, {
        headers,
        redirect: "follow",
      });
      if (imgRes.ok) {
        const contentType = imgRes.headers.get("content-type") || "image/jpeg";
        const buffer = await imgRes.arrayBuffer();
        if (buffer.byteLength > 500) {
          return new NextResponse(buffer, {
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
            },
          });
        }
      }
    } catch (e) {
      console.warn("returnImage error:", e);
    }
    return null;
  }

  // 1. If postId is present, try backend proxy
  if (postId) {
    const proxyUrl = `${BACKEND_URL}/gallery/instagram/${postId}/media/`;
    const backendRes = await returnImage(proxyUrl);
    if (backendRes) return backendRes;
  }

  // 2. Try rawUrl directly
  if (rawUrl && rawUrl.startsWith("http") && !rawUrl.endsWith(".mp4")) {
    const rawRes = await returnImage(rawUrl);
    if (rawRes) return rawRes;
  }

  // 3. Extract fresh live image from Instagram Embed page
  if (permalink) {
    try {
      const cleanPermalink = permalink.replace(/\/$/, "");
      const embedUrl = `${cleanPermalink}/embed/`;

      const embedRes = await fetch(embedUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });

      if (embedRes.ok) {
        const html = await embedRes.text();

        // Search for all image indicators in Instagram embed HTML
        const patterns = [
          /<img[^>]+class="[^"]*EmbeddedMediaImage[^"]*"[^>]+src="([^"]+)"/i,
          /<img[^>]+src="([^"]+)"[^>]+class="[^"]*EmbeddedMediaImage[^"]*"/i,
          /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i,
          /<meta[^>]+name="twitter:image"[^>]+content="([^"]+)"/i,
          /"display_url"\s*:\s*"([^"]+)"/i,
          /"thumbnail_src"\s*:\s*"([^"]+)"/i,
          /"display_src"\s*:\s*"([^"]+)"/i,
          /display_url&quot;:&quot;([^&"]+)&quot;/i,
          /src="([^"]*(?:fbcdn\.net|cdninstagram\.com)[^"]*)"/i,
        ];

        for (const pattern of patterns) {
          const match = html.match(pattern);
          if (match && match[1]) {
            let extractedUrl = match[1]
              .replace(/&amp;/g, "&")
              .replace(/\\u0026/g, "&")
              .replace(/\\\//g, "/")
              .replace(/\\/g, "");

            if (extractedUrl.startsWith("http")) {
              const res = await returnImage(extractedUrl);
              if (res) return res;
            }
          }
        }
      }
    } catch (e) {
      console.error("Embed extraction error:", e);
    }
  }

  // 4. Try Instagram media redirect
  if (permalink) {
    try {
      const clean = permalink.replace(/\/$/, "").replace(/\/reel\//, "/p/");
      const mediaRedirectUrl = `${clean}/media/?size=l`;
      const redirectRes = await returnImage(mediaRedirectUrl);
      if (redirectRes) return redirectRes;
    } catch (e) {
      console.error("Media redirect error:", e);
    }
  }

  // Fallback: 1x1 transparent PNG or placeholder
  return new NextResponse(null, { status: 404 });
}
