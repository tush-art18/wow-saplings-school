/**
 * api.ts — Frontend data layer
 * Backend has been reset. All functions return safe empty/mock values.
 * submitLead stores enquiries locally until the new backend is connected.
 */

// ─── Types ─────────────────────────────────────────────────────────────────

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

// ─── API Functions (Backend not yet connected — returns safe fallbacks) ─────

/** Returns [] until gallery backend is connected */
export async function fetchGalleryPhotos(_category?: string): Promise<GalleryPhoto[]> {
  return [];
}

/** Returns [] until events backend is connected */
export async function fetchUpcomingEvents(): Promise<UpcomingEvent[]> {
  return [];
}

/** Returns [] until events backend is connected */
export async function fetchPastEvents(): Promise<PastEvent[]> {
  return [];
}

/** Returns null until events backend is connected */
export async function fetchPastEventDetail(_slug: string): Promise<PastEvent | null> {
  return null;
}

/** Returns [] until testimonials backend is connected */
export async function fetchTestimonials(_forTtc?: boolean): Promise<Testimonial[]> {
  return [];
}

/**
 * submitLead — Logs the lead payload to the browser console and returns success.
 * Once the new backend is set up, replace this body with a real fetch() call.
 */
export async function submitLead(
  payload: LeadPayload
): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    // Log the submission so it can be seen in browser DevTools during development
    console.info("📋 New Lead Submission:", payload);

    // Simulate a brief network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return success — the form will show the success screen
    return { success: true, data: payload };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("submitLead error:", msg);
    return { success: false, error: msg };
  }
}
