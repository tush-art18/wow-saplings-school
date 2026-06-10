"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Info, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/global/ScrollReveal";
import { fetchGalleryPhotos, fetchInstagramPosts, GalleryPhoto, InstagramPost, getMediaUrl } from "@/lib/api";

const Instagram = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function GalleryPage() {
  const [mainTab, setMainTab] = useState<"School" | "Instagram">("School");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState<{ type: "School" | "Instagram", id: number } | null>(null);
  
  const [schoolPhotos, setSchoolPhotos] = useState<any[]>([]);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Derive unique categories from fetched school photos
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [apiPhotos, apiInstagram] = await Promise.all([
          fetchGalleryPhotos(),
          fetchInstagramPosts()
        ]);

        if (apiPhotos && apiPhotos.length > 0) {
          const uniqueCats = Array.from(new Set(apiPhotos.map(p => p.category_name).filter(Boolean)));
          setCategories(["All", ...uniqueCats]);

          const formatted = apiPhotos.map((p, idx) => ({
            id: p.id,
            title: p.title,
            cat: p.category_name || "Uncategorized",
            caption: p.caption,
            height: p.is_featured ? "h-[500px]" : idx % 4 === 0 ? "h-96" : idx % 3 === 0 ? "h-80" : idx % 2 === 0 ? "h-72" : "h-64",
            img: getMediaUrl(p.image_url),
            is_featured: p.is_featured
          }));
          setSchoolPhotos(formatted);
        }

        if (apiInstagram && apiInstagram.length > 0) {
           setInstagramPosts(apiInstagram);
        }
      } catch (err) {
        console.error("Failed to load gallery", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredSchoolPhotos = activeCategory === "All" ? schoolPhotos : schoolPhotos.filter(p => p.cat === activeCategory);
  const selectedSchoolPhoto = lightboxOpen?.type === "School" ? schoolPhotos.find(p => p.id === lightboxOpen.id) : null;
  const selectedInstagramPost = lightboxOpen?.type === "Instagram" ? instagramPosts.find(p => p.id === lightboxOpen.id) : null;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
        <ScrollReveal animation="fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-primary-dark mb-6">
            Life at WOW Saplings
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-xl text-gray-600 mb-8">
            A visual diary of smiles, learning, and little triumphs happening every day.
          </p>
        </ScrollReveal>

        {/* Main Tabs: School vs Instagram */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex gap-2">
               <button
                 onClick={() => setMainTab("School")}
                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                   mainTab === "School" ? "bg-primary text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
                 }`}
               >
                 <ImageIcon size={18} /> School Photos
               </button>
               <button
                 onClick={() => setMainTab("Instagram")}
                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                   mainTab === "Instagram" ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
                 }`}
               >
                 <Instagram size={18} /> Instagram Feed
               </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Pills (Only for School Photos) */}
        {mainTab === "School" && categories.length > 1 && (
          <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          </ScrollReveal>
        )}
      </div>

      {/* Grid */}
      <ScrollReveal animation="fade-up" delay={0.3}>
      <div className="container mx-auto px-4 md:px-8">
        {loading ? (
          <div className="text-center py-20">
             <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
             <p className="text-gray-500 font-bold">Loading gallery...</p>
          </div>
        ) : mainTab === "School" ? (
          /* SCHOOL PHOTOS GRID */
          filteredSchoolPhotos.length === 0 ? (
             <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
               <div className="text-6xl mb-4">📷</div>
               <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">No photos yet</h3>
               <p className="text-gray-500">Check back later for updates in this category.</p>
             </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              <AnimatePresence>
                {filteredSchoolPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid"
                  >
                    <div 
                      onClick={() => setLightboxOpen({ type: "School", id: photo.id })}
                      className={`relative ${photo.height} w-full rounded-2xl overflow-hidden group cursor-pointer ${photo.is_featured ? 'shadow-lg ring-4 ring-secondary' : 'shadow-sm'}`}
                    >
                      {photo.is_featured && (
                        <div className="absolute top-4 right-4 z-10 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          ★ Featured
                        </div>
                      )}
                      <Image 
                        src={photo.img} 
                        alt={photo.title}
                        fill
                        loading="lazy"
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn size={24} />
                          </div>
                        </div>
                        <span className="text-accent-yellow font-bold text-xs uppercase tracking-widest mb-1 relative z-10">{photo.cat}</span>
                        <h3 className="text-white font-heading font-bold text-xl relative z-10">{photo.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )
        ) : (
          /* INSTAGRAM POSTS GRID */
          instagramPosts.length === 0 ? (
             <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
               <div className="text-6xl mb-4">📱</div>
               <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">No Instagram posts synced yet</h3>
               <p className="text-gray-500">Wait for the backend sync to pull posts from Instagram.</p>
             </div>
          ) : (
             <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              <AnimatePresence>
                {instagramPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid"
                  >
                    <div 
                      onClick={() => setLightboxOpen({ type: "Instagram", id: post.id })}
                      className={`relative ${idx % 3 === 0 ? "h-96" : "h-72"} w-full rounded-2xl overflow-hidden group cursor-pointer shadow-sm`}
                    >
                      <Image 
                        src={post.media_url} 
                        alt="WOW Saplings Instagram Post"
                        fill
                        loading="lazy"
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm z-10">
                        <Instagram size={18} className="text-pink-500" />
                      </div>

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                         <p className="text-white text-sm line-clamp-4 font-medium">{post.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )
        )}
      </div>
      </ScrollReveal>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (selectedSchoolPhoto || selectedInstagramPost) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setLightboxOpen(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center z-50"
            >
              <X size={28} />
            </button>
            
            <div className="w-full max-w-5xl max-h-[85vh] relative flex flex-col">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="relative w-full h-[75vh]"
               >
                 <Image 
                   src={lightboxOpen.type === "School" ? selectedSchoolPhoto!.img : selectedInstagramPost!.media_url} 
                   alt="WOW Saplings Gallery"
                   fill
                   priority
                   unoptimized
                   sizes="100vw"
                   className="object-contain"
                 />
               </motion.div>
               <motion.div 
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
               >
                  <div className="flex justify-between items-end">
                    {lightboxOpen.type === "School" ? (
                      <div>
                        <div className="text-accent-yellow font-bold text-sm tracking-widest uppercase mb-2">{selectedSchoolPhoto!.cat}</div>
                        <h2 className="font-heading font-bold text-3xl">{selectedSchoolPhoto!.title}</h2>
                        {selectedSchoolPhoto!.caption && <p className="mt-2 text-white/80">{selectedSchoolPhoto!.caption}</p>}
                      </div>
                    ) : (
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-pink-400 font-bold text-sm tracking-widest uppercase mb-2">
                           <Instagram size={16} /> Instagram Feed
                        </div>
                        <p className="font-medium text-lg text-white/90 line-clamp-3">{selectedInstagramPost!.caption}</p>
                      </div>
                    )}

                    <div className="hidden md:flex flex-col items-end gap-3">
                       {lightboxOpen.type === "Instagram" && (
                         <a 
                           href={selectedInstagramPost!.permalink} 
                           target="_blank" 
                           rel="noreferrer"
                           className="bg-white text-gray-900 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
                         >
                           View on Instagram
                         </a>
                       )}
                       <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                          <Info size={16} /> WOW Saplings Gallery
                       </div>
                    </div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
