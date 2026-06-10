"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, X, Image as ImageIcon, FolderPlus, Grid, Tag } from "lucide-react";
import Image from "next/image";
import { getMediaUrl } from "@/lib/api";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Photo {
  id: number;
  title: string;
  category: number | null;
  category_name: string;
  image_url: string;
  caption: string;
  is_featured: boolean;
  order: number;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");

  // Modal States
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);

  // New Photo Form States
  const [isUploading, setIsUploading] = useState(false);
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoCat, setPhotoCat] = useState(""); // Optional
  const [photoCaption, setPhotoCaption] = useState(""); // Optional
  const [photoIsFeatured, setPhotoIsFeatured] = useState(false);
  const [photoOrder, setPhotoOrder] = useState(0);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // New Category Form States
  const [catName, setCatName] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const catRes = await fetch("/api/dashboard-proxy/gallery/categories/");
      if (catRes.ok) {
        const catData = await catRes.json();
        setCategories(catData);
      }

      const photoRes = await fetch("/api/dashboard-proxy/gallery/photos/");
      if (photoRes.ok) {
        const photoData = await photoRes.json();
        setPhotos(photoData);
      }
    } catch (error) {
      console.error("Failed to load gallery data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile) {
      alert("Please select an image file to upload");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("title", photoTitle);
    if (photoCat) formData.append("category", photoCat);
    formData.append("caption", photoCaption);
    formData.append("is_featured", photoIsFeatured ? "true" : "false");
    formData.append("order", photoOrder.toString());
    formData.append("image", photoFile);

    try {
      const res = await fetch("/api/dashboard-proxy/gallery/photos/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setShowPhotoModal(false);
        setPhotoTitle("");
        setPhotoCat("");
        setPhotoCaption("");
        setPhotoIsFeatured(false);
        setPhotoOrder(0);
        setPhotoFile(null);
        fetchData();
      } else {
        let errText = "Unknown error occurred";
        try {
          const err = await res.json();
          errText = typeof err === 'object' ? JSON.stringify(err, null, 2) : String(err);
        } catch {
          errText = `Server returned ${res.status}: ${res.statusText}. ` + 
                    `This usually means the upload timed out or the backend crashed.`;
        }
        alert("Upload Failed: \n" + errText);
      }
    } catch (error: any) {
      console.error("Failed to upload photo:", error);
      alert("Network error: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!catName || !catSlug) return;

    try {
      const res = await fetch("/api/dashboard-proxy/gallery/categories/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: catName, slug: catSlug }),
      });

      if (res.ok) {
        setShowCatModal(false);
        setCatName("");
        setCatSlug("");
        fetchData();
      } else {
        const err = await res.json();
        alert(JSON.stringify(err));
      }
    } catch (error) {
      console.error("Failed to create category:", error);
      alert("Failed to create category due to a network error.");
    }
  };

  const handlePhotoDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      const res = await fetch(`/api/dashboard-proxy/gallery/photos/${id}/`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPhotos((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete photo:", error);
    }
  };

  const handleCatDelete = async (id: number) => {
    if (!confirm("Delete this category? Photos inside will remain uncategorized.")) return;

    try {
      const res = await fetch(`/api/dashboard-proxy/gallery/categories/${id}/`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCategories((prev) => prev.filter((c) => c.id !== id));
        fetchData();
      }
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  // Filter photos based on category
  const filteredPhotos = activeCategory
    ? photos.filter((p) => p.category_name.toLowerCase() === activeCategory.toLowerCase())
    : photos;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-heading font-black text-3xl text-primary-dark tracking-wide">
            Gallery Manager
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1">
            Manage event photos, categories, and homepage featured images.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setShowCatModal(true)}
            className="bg-white text-primary border-3 border-primary px-5 py-3 rounded-2xl font-black text-sm hover:bg-primary/5 active:scale-98 transition-all flex items-center gap-2"
          >
            <FolderPlus size={16} />
            New Category
          </button>
          <button
            onClick={() => setShowPhotoModal(true)}
            className="bg-[#2d8c4e] text-white px-5 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Upload Photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Categories sidebar list */}
        <div className="space-y-4">
          <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
            <h3 className="font-heading font-black text-lg text-primary-dark mb-4 flex items-center gap-2">
              <Tag size={16} className="text-primary" />
              Categories
            </h3>

            <div className="space-y-2">
              <button
                onClick={() => setActiveCategory("")}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeCategory === ""
                    ? "bg-[#2d8c4e] text-white shadow-md shadow-[#2d8c4e]/20"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Grid size={12} />
                All Photos ({photos.length})
              </button>

              {categories.map((cat) => {
                const count = photos.filter((p) => p.category === cat.id).length;
                return (
                  <div key={cat.id} className="flex gap-1 group">
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`flex-1 text-left px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all truncate ${
                        activeCategory.toLowerCase() === cat.name.toLowerCase()
                          ? "bg-[#2d8c4e] text-white shadow-md shadow-[#2d8c4e]/20"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {cat.name} ({count})
                    </button>
                    <button
                      onClick={() => handleCatDelete(cat.id)}
                      className="opacity-0 group-hover:opacity-100 hover:bg-red-50 text-gray-400 hover:text-red-500 p-2.5 rounded-xl transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Photo Grid */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="bg-white rounded-[2rem] py-20 text-center text-gray-400 font-semibold text-sm border border-gray-100">
              Loading gallery...
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="bg-white rounded-[2rem] p-12 text-center text-gray-400 font-semibold border border-dashed border-gray-200">
              No photos found in this category. Click "Upload Photo" to add one!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl group hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
                >
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                      <Image
                        src={getMediaUrl(photo.image_url)}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    {/* Features Indicator */}
                    {photo.is_featured && (
                      <span className="absolute top-4 left-4 bg-accent-yellow text-primary-dark px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                        ★ Featured
                      </span>
                    )}

                    {/* Category Label */}
                    {photo.category_name && (
                      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                        {photo.category_name}
                      </span>
                    )}

                    {/* Trash overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => handlePhotoDelete(photo.id)}
                        className="bg-white/95 hover:bg-red-500 text-gray-800 hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 text-left">
                    <h4 className="font-heading font-black text-base text-primary-dark truncate">
                      {photo.title}
                    </h4>
                    {photo.caption && (
                      <p className="text-gray-500 text-xs font-semibold mt-1.5 line-clamp-2">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handlePhotoSubmit}
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden border-[3px] border-[#2d8c4e]/10 relative animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-heading font-black text-xl text-primary-dark flex items-center gap-2">
                <ImageIcon size={20} className="text-primary" />
                Upload New Image
              </h3>
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-500 p-2.5 rounded-full border border-gray-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4 text-left max-h-[70vh] overflow-y-auto">
              {/* File Select */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider block">
                  Select Image File *
                </label>
                <input
                  type="file"
                  required
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    Browse Files
                  </button>
                  <span className="text-xs font-semibold text-gray-400">
                    {photoFile ? photoFile.name : "No image selected"}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Photo Title *
                </label>
                <input
                  type="text"
                  required
                  value={photoTitle}
                  onChange={(e) => setPhotoTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                  placeholder="e.g. Annual Sports Day 2026"
                />
              </div>

              {/* Category */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Category
                </label>
                <select
                  value={photoCat}
                  onChange={(e) => setPhotoCat(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:border-primary"
                >
                  <option value="">Choose category...</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Caption */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Description / Caption
                </label>
                <textarea
                  rows={3}
                  value={photoCaption}
                  onChange={(e) => setPhotoCaption(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary leading-relaxed"
                  placeholder="Tell parents a bit about this photo..."
                />
              </div>

              {/* Order */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Sorting Order
                </label>
                <input
                  type="number"
                  value={photoOrder}
                  onChange={(e) => setPhotoOrder(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Featured Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={photoIsFeatured}
                  onChange={(e) => setPhotoIsFeatured(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-xs font-black text-primary-dark/80 uppercase tracking-wider">
                  Feature this on the Homepage Gallery Strip
                </span>
              </label>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl font-black text-sm border border-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className="bg-[#2d8c4e] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading to Cloudinary..." : (
                  <>
                    <Plus size={18} />
                    Upload Photo
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* New Category Modal */}
      {showCatModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleCatSubmit}
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-sm overflow-hidden border-[3px] border-[#2d8c4e]/10 relative animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-heading font-black text-xl text-primary-dark">
                Create Event Category
              </h3>
              <button
                type="button"
                onClick={() => setShowCatModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-500 p-2.5 rounded-full border border-gray-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4 text-left">
              {/* Category Name */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={catName}
                  onChange={(e) => {
                    setCatName(e.target.value);
                    // Generate a slug automatically
                    setCatSlug(
                      e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")
                    );
                  }}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                  placeholder="e.g. Sports Day"
                />
              </div>

              {/* Slug */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Url Slug *
                </label>
                <input
                  type="text"
                  required
                  value={catSlug}
                  onChange={(e) => setCatSlug(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                  placeholder="e.g. sports-day"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button
                type="button"
                onClick={() => setShowCatModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl font-black text-sm border border-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#2d8c4e] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
