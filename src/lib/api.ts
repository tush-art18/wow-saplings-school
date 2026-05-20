const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  image: string;
  created_at: string;
}

export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  poster: string;
  category: "Celebrations" | "Sports & Games" | "Academic";
  is_active: boolean;
}

export interface PastEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  slug: string;
  cover_photo: string;
  gallery_photos: GalleryPhoto[];
}

export interface Testimonial {
  id: number;
  parent_name: string;
  child_class: string;
  content: string;
  rating: number;
  photo: string | null;
  is_visible: boolean;
  for_ttc: boolean;
  created_at: string;
}

export interface LeadPayload {
  parent_name: string;
  child_name?: string;
  phone: string;
  email?: string;
  program_interest: string;
  message?: string;
  source?: "form" | "chatbot" | "contact";
}

// -------------------------------------------------------------
// API Helper Functions
// -------------------------------------------------------------

/**
 * Fetches gallery photos with optional category filter
 */
export async function fetchGalleryPhotos(category?: string): Promise<GalleryPhoto[]> {
  try {
    const url = new URL(`${BASE_URL}/gallery/`);
    if (category && category !== "All") {
      url.searchParams.append("category", category);
    }
    const res = await fetch(url.toString(), {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (Incremental Static Regeneration)
    });
    if (!res.ok) throw new Error("Failed to fetch gallery");
    return await res.json();
  } catch (error) {
    console.error("Gallery API error:", error);
    return [];
  }
}

/**
 * Fetches active upcoming events
 */
export async function fetchUpcomingEvents(): Promise<UpcomingEvent[]> {
  try {
    const res = await fetch(`${BASE_URL}/events/upcoming/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch upcoming events");
    return await res.json();
  } catch (error) {
    console.error("Upcoming Events API error:", error);
    return [];
  }
}

/**
 * Fetches all completed past events
 */
export async function fetchPastEvents(): Promise<PastEvent[]> {
  try {
    const res = await fetch(`${BASE_URL}/events/past/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch past events");
    return await res.json();
  } catch (error) {
    console.error("Past Events API error:", error);
    return [];
  }
}

/**
 * Fetches detailed recap for a single completed past event
 */
export async function fetchPastEventDetail(slug: string): Promise<PastEvent | null> {
  try {
    const res = await fetch(`${BASE_URL}/events/past/${slug}/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch past event recap");
    return await res.json();
  } catch (error) {
    console.error("Past Event detail API error:", error);
    return null;
  }
}

/**
 * Fetches approved parent/TTC testimonials
 */
export async function fetchTestimonials(forTtc?: boolean): Promise<Testimonial[]> {
  try {
    const url = new URL(`${BASE_URL}/testimonials/`);
    if (forTtc !== undefined) {
      url.searchParams.append("for_ttc", forTtc ? "true" : "false");
    }
    const res = await fetch(url.toString(), {
      next: { revalidate: 120 }, // Highly static testimonials, cache for 2 mins
    });
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    return await res.json();
  } catch (error) {
    console.error("Testimonials API error:", error);
    return [];
  }
}

/**
 * Submits a parent admission inquiry or chatbot lead to the database
 */
export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const res = await fetch(`${BASE_URL}/leads/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data.message || "Failed to submit enquiry" };
    }
    return { success: true, data };
  } catch (error: any) {
    console.error("Submit Lead API error:", error);
    return { success: false, error: error.message || "Network error. Please try again." };
  }
}
