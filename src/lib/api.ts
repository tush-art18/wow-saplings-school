/**
 * api.ts — Frontend data layer
 * All form submissions are validated by the Django backend first.
 * The backend returns a WhatsApp URL which the frontend then opens.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/** Ensures media URLs returned by the backend are absolute URLs so images load properly. */
export function getMediaUrl(path: string | null): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Replace '/api' from API_BASE to get the root URL
  const baseUrl = API_BASE.replace(/\/api$/, '');
  return `${baseUrl}${path}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GalleryPhoto {
  id: number;
  title: string;
  category: number | null;
  category_name: string;
  image_url: string;
  caption: string;
  is_featured: boolean;
  order: number;
  created_at: string;
}

export interface GalleryCategory {
  id: number;
  name: string;
  slug: string;
}

export interface InstagramPost {
  id: number;
  instagram_id: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  timestamp: string;
}

export interface Testimonial {
  id: number;
  parent_name: string;
  child_class: string;
  content: string;
  rating: number;
  photo_url: string | null;
  for_ttc: boolean;
}

export interface SiteSettings {
  whatsapp_number: string;
  announcement_bar: string;
}

// ─── Form Payload Types ───────────────────────────────────────────────────────

export interface AdmissionPayload {
  fathers_name: string;
  mothers_name?: string;
  phone: string;
  whatsapp: string;
  address: string;
  child_name: string;
  gender: string;
  dob: string;
  program: string;
  hear_source?: string;
  visit_time?: string;
  notes?: string;
}

export interface FranchisePayload {
  name: string;
  phone: string;
  city: string;
  message?: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  message: string;
}

// ─── API Result Type ──────────────────────────────────────────────────────────

export interface FormResult {
  success: boolean;
  whatsapp_url?: string;
  errors?: Record<string, string[]>;
  error?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

async function postForm<T>(endpoint: string, payload: T): Promise<FormResult> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      // 400 from Django — validation errors
      return { success: false, errors: data.errors || {}, error: 'Validation failed. Please check the fields.' };
    }

    return { success: true, whatsapp_url: data.whatsapp_url };
  } catch (err) {
    console.error('API error:', err);
    return { success: false, error: 'Could not connect to server. Please try again.' };
  }
}

// ─── Form Submission Functions ────────────────────────────────────────────────

/** Validates and submits the Admission form. Returns WhatsApp URL on success. */
export async function submitAdmissionForm(payload: AdmissionPayload): Promise<FormResult> {
  return postForm('/forms/admission/', payload);
}

/** Validates and submits the Franchise enquiry form. Returns WhatsApp URL on success. */
export async function submitFranchiseForm(payload: FranchisePayload): Promise<FormResult> {
  return postForm('/forms/franchise/', payload);
}

/** Validates and submits the Contact form. Returns WhatsApp URL on success. */
export async function submitContactForm(payload: ContactPayload): Promise<FormResult> {
  return postForm('/forms/contact/', payload);
}

// ─── Gallery Functions ────────────────────────────────────────────────────────

export async function fetchGalleryCategories(): Promise<GalleryCategory[]> {
  try {
    const res = await fetch(`${API_BASE}/gallery/categories/`);
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

export async function fetchGalleryPhotos(categorySlug?: string): Promise<GalleryPhoto[]> {
  try {
    const url = categorySlug
      ? `${API_BASE}/gallery/photos/?category=${categorySlug}`
      : `${API_BASE}/gallery/photos/`;
    const res = await fetch(url);
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  try {
    const res = await fetch(`${API_BASE}/gallery/instagram/`);
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function fetchTestimonials(forTtc?: boolean): Promise<Testimonial[]> {
  try {
    const url = forTtc !== undefined
      ? `${API_BASE}/testimonials/?for_ttc=${forTtc}`
      : `${API_BASE}/testimonials/`;
    const res = await fetch(url);
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

// ─── Site Settings ────────────────────────────────────────────────────────────

export async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_BASE}/settings/`);
    if (!res.ok) return { whatsapp_number: '918999640602', announcement_bar: '' };
    return res.json();
  } catch { return { whatsapp_number: '918999640602', announcement_bar: '' }; }
}
