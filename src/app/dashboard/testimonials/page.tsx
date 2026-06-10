"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, Edit2, X, Star, Eye, EyeOff, CheckCircle } from "lucide-react";
import Image from "next/image";
import { compressImage } from "@/lib/image";

interface Testimonial {
  id: number;
  parent_name: string;
  child_class: string;
  content: string;
  rating: number;
  photo_url: string | null;
  is_visible: boolean;
  for_ttc: boolean;
  created_at: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);

  // Form states
  const [parentName, setParentName] = useState("");
  const [childClass, setChildClass] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [forTtc, setForTtc] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard-proxy/testimonials/");
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const openAddModal = () => {
    setEditingItem(null);
    setParentName("");
    setChildClass("");
    setContent("");
    setRating(5);
    setForTtc(false);
    setIsVisible(true);
    setPhotoFile(null);
    setShowModal(true);
  };

  const openEditModal = (item: Testimonial) => {
    setEditingItem(item);
    setParentName(item.parent_name);
    setChildClass(item.child_class);
    setContent(item.content);
    setRating(item.rating);
    setForTtc(item.for_ttc);
    setIsVisible(item.is_visible);
    setPhotoFile(null);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let fileToUpload = photoFile;
    if (photoFile) {
      try {
        fileToUpload = await compressImage(photoFile);
      } catch (err) {
        console.error("Compression error, uploading original:", err);
      }
    }

    const formData = new FormData();
    formData.append("parent_name", parentName);
    formData.append("child_class", childClass);
    formData.append("content", content);
    formData.append("rating", rating.toString());
    formData.append("for_ttc", forTtc ? "true" : "false");
    formData.append("is_visible", isVisible ? "true" : "false");
    
    if (fileToUpload) {
      formData.append("photo", fileToUpload);
    }

    const url = editingItem
      ? `/api/dashboard-proxy/testimonials/${editingItem.id}/`
      : "/api/dashboard-proxy/testimonials/";
    const method = editingItem ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (res.ok) {
        setShowModal(false);
        fetchTestimonials();
      } else {
        const errors = await res.json();
        alert(JSON.stringify(errors));
      }
    } catch (error) {
      console.error("Failed to save testimonial:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/dashboard-proxy/testimonials/${id}/`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTestimonials((prev) => prev.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete testimonial:", error);
    }
  };

  const handleToggleVisibility = async (item: Testimonial) => {
    try {
      const res = await fetch(`/api/dashboard-proxy/testimonials/${item.id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_visible: !item.is_visible }),
      });
      if (res.ok) {
        const updated = await res.json();
        setTestimonials((prev) => prev.map((t) => (t.id === item.id ? updated : t)));
      }
    } catch (error) {
      console.error("Failed to toggle visibility:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-black text-3xl text-primary-dark tracking-wide">
            Testimonials Manager
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1">
            Publish, hide, or add parent and graduate testimonials.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-[#2d8c4e] text-white px-5 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Add Testimonial
        </button>
      </div>

      {/* Grid List */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 font-semibold text-sm">
          Loading testimonials...
        </div>
      ) : testimonials.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-400 font-semibold border border-dashed border-gray-200">
          No testimonials uploaded yet. Click "Add Testimonial" to create one.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-[2rem] p-6 shadow-xl border relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                item.is_visible ? "border-gray-100" : "border-red-100 bg-red-50/10 opacity-75"
              }`}
            >
              {/* Top Details */}
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-yellow relative bg-gray-100 shrink-0">
                      {item.photo_url ? (
                        <Image
                          src={item.photo_url}
                          alt={item.parent_name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-gray-400 bg-gray-50">
                          {item.parent_name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-base text-primary-dark leading-snug">
                        {item.parent_name}
                      </h4>
                      {item.child_class && (
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          {item.child_class}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                      item.for_ttc ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"
                    }`}>
                      {item.for_ttc ? "TTC Alumni" : "Preschool"}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mt-3 text-accent-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < item.rating ? "currentColor" : "none"}
                      className={i < item.rating ? "" : "text-gray-200"}
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-gray-700 text-sm font-semibold italic mt-4 leading-relaxed">
                  &quot;{item.content}&quot;
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                <button
                  onClick={() => handleToggleVisibility(item)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    item.is_visible
                      ? "bg-green-50 hover:bg-green-100 text-[#2d8c4e] border-green-200"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-500 border-gray-300"
                  }`}
                >
                  {item.is_visible ? (
                    <>
                      <Eye size={14} /> Visible
                    </>
                  ) : (
                    <>
                      <EyeOff size={14} /> Hidden
                    </>
                  )}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 p-2.5 rounded-xl transition-all border border-gray-100"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2.5 rounded-xl transition-all border border-gray-100"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden border-[3px] border-[#2d8c4e]/10 relative animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-heading font-black text-xl text-primary-dark">
                {editingItem ? "Edit Testimonial" : "Add Testimonial"}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-500 p-2.5 rounded-full border border-gray-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-left">
              {/* Parent Name */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                  placeholder="e.g. Sana Patil"
                />
              </div>

              {/* Child Class */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Child's Class / Batch
                </label>
                <input
                  type="text"
                  value={childClass}
                  onChange={(e) => setChildClass(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                  placeholder="e.g. Parent of Falak (Nursery 2024-25)"
                />
              </div>

              {/* Rating */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider block">
                  Rating (Stars)
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setRating(starVal)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        rating >= starVal ? "text-accent-yellow bg-yellow-50" : "text-gray-200 hover:text-yellow-100"
                      }`}
                    >
                      <Star size={24} fill={rating >= starVal ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
                  Review Text *
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary leading-relaxed"
                  placeholder="Paste the testimonial quote here..."
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-1">
                <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider block">
                  Parent Photo
                </label>
                <input
                  type="file"
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
                    Choose Photo
                  </button>
                  <span className="text-xs font-semibold text-gray-400">
                    {photoFile ? photoFile.name : editingItem?.photo_url ? "Leave blank to keep current photo" : "No file selected"}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="pt-2 flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={forTtc}
                    onChange={(e) => setForTtc(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-xs font-black text-primary-dark/80 uppercase tracking-wider">
                    For Teacher Training Alumni
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={(e) => setIsVisible(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-xs font-black text-primary-dark/80 uppercase tracking-wider">
                    Visible on Website
                  </span>
                </label>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-white hover:bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl font-black text-sm border border-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#2d8c4e] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all"
              >
                {editingItem ? "Save Changes" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
