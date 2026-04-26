"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Info } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);

  const categories = ["All", "Campus", "Activities", "Play Area", "Classrooms", "Events"];

  const photos = [
    { id: 1, title: "Modern School Building", cat: "Campus", height: "h-96", img: "/school-bulding-01.jpeg" },
    { id: 2, title: "Our Grand Entrance", cat: "Campus", height: "h-64", img: "/school-bulding-02.jpeg" },
    { id: 3, title: "Colorful Playgroup Nursery", cat: "Classrooms", height: "h-80", img: "/playgroup-nursery-01.jpeg" },
    { id: 4, title: "Learning is Fun", cat: "Learning", height: "h-64", img: "/child-activiti-01.jpeg" },
    { id: 5, title: "Safe Play Environment", cat: "Play Area", height: "h-72", img: "/play-area.jpeg" },
    { id: 6, title: "Modern Classroom", cat: "Classrooms", height: "h-64", img: "/classroom-01.jpeg" },
    { id: 7, title: "Indoor Fun Zone", cat: "Play Area", height: "h-96", img: "/play-area-2.jpeg" },
    { id: 8, title: "Awards Ceremony", cat: "Events", height: "h-80", img: "/award-distribute-area-01.jpeg" },
    { id: 9, title: "Artistic Expressions", cat: "Activities", height: "h-64", img: "/creative-arts.jpeg" },
    { id: 10, title: "Exploring the World", cat: "Learning", height: "h-80", img: "/child-activiti-02.jpeg" },
    { id: 11, title: "Outdoor Play Time", cat: "Play Area", height: "h-72", img: "/play-area-3.jpeg" },
    { id: 12, title: "Our Learning Corridor", cat: "Campus", height: "h-64", img: "/corridor.jpeg" },
    { id: 13, title: "Nursery Play Space", cat: "Classrooms", height: "h-96", img: "/playgroup-nursery-02.jpeg" },
    { id: 14, title: "Creative Craft Day", cat: "Activities", height: "h-80", img: "/art-ans-craft.jpeg" },
    { id: 15, title: "Senior KG Classroom", cat: "Classrooms", height: "h-64", img: "/Senior-classroom.png" },
    { id: 16, title: "Group Activities", cat: "Learning", height: "h-72", img: "/child-activiti-03.jpeg" },
    { id: 17, title: "Safe Stairs Design", cat: "Campus", height: "h-64", img: "/stairs.jpeg" },
    { id: 18, title: "Function Hall", cat: "Events", height: "h-96", img: "/function-area-01.jpeg" },
    { id: 19, title: "Building Blocks", cat: "Learning", height: "h-80", img: "/child-activiti-04.jpeg" },
    { id: 20, title: "Outdoor Swings", cat: "Play Area", height: "h-72", img: "/play-are-4.jpeg" },
    { id: 21, title: "Junior KG Classroom", cat: "Classrooms", height: "h-64", img: "/junior-classroom.png" },
    { id: 22, title: "Annual Day Function", cat: "Events", height: "h-96", img: "/function-area-02.jpeg" },
    { id: 23, title: "Storytelling Morning", cat: "Learning", height: "h-80", img: "/child-activiti-05.jpeg" },
    { id: 24, title: "Playgroup Zone", cat: "Classrooms", height: "h-72", img: "/playgroup-nursery-03.jpeg" },
    { id: 25, title: "Science Wonders", cat: "Learning", height: "h-64", img: "/child-activiti-06.jpeg" },
    { id: 26, title: "Maths is Magic", cat: "Learning", height: "h-80", img: "/child-activiti-07.jpeg" },
    { id: 27, title: "Little Artists", cat: "Activities", height: "h-72", img: "/child-activiti-08.jpeg" },
    { id: 28, title: "Sports Day Pride", cat: "Activities", height: "h-64", img: "/child-activiti-09.jpeg" },
    { id: 29, title: "Music & Movement", cat: "Activities", height: "h-96", img: "/child-activiti-10.jpeg" },
    { id: 30, title: "Team Building", cat: "Activities", height: "h-80", img: "/child-activiti-11.jpeg" },
    { id: 31, title: "Festival Fun", cat: "Events", height: "h-72", img: "/child-activiti-12.jpeg" },
    { id: 32, title: "Cultural Pride", cat: "Events", height: "h-64", img: "/child-activiti-13.jpeg" },
    { id: 33, title: "Classroom 02", cat: "Classrooms", height: "h-80", img: "/classroom-02.jpeg" },
    { id: 34, title: "Classroom 03", cat: "Classrooms", height: "h-72", img: "/classroom-03.jpeg" },
    { id: 35, title: "Interactive Learning", cat: "Learning", height: "h-64", img: "/classroom-04.jpeg" },
  ];

  const filteredPhotos = activeTab === "All" ? photos : photos.filter(p => p.cat === activeTab);
  const selectedPhoto = photos.find(p => p.id === lightboxOpen);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-primary-dark mb-6">
          Life at WOW Saplings
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A visual diary of smiles, learning, and little triumphs happening every day.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                activeTab === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Setup (CSS Columns) */}
      <div className="container mx-auto px-4 md:px-8">
        {filteredPhotos.length === 0 ? (
           <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
             <div className="text-6xl mb-4">📷</div>
             <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">No photos yet</h3>
             <p className="text-gray-500">Check back later for updates in this category.</p>
           </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
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
                    onClick={() => setLightboxOpen(photo.id)}
                    className={`relative ${photo.height} w-full rounded-2xl overflow-hidden group cursor-pointer shadow-sm`}
                  >
                    <img 
                      src={photo.img} 
                      alt={photo.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
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
        )}
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setLightboxOpen(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center"
            >
              <X size={28} />
            </button>
            
            <div className="w-full max-w-5xl max-h-[85vh] relative flex flex-col relative">
               <motion.img 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 src={selectedPhoto.img} 
                 className="w-full h-full object-contain max-h-[75vh]"
               />
               <motion.div 
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
               >
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-accent-yellow font-bold text-sm tracking-widest uppercase mb-2">{selectedPhoto.cat}</div>
                      <h2 className="font-heading font-bold text-3xl">{selectedPhoto.title}</h2>
                    </div>
                    <div className="hidden md:flex bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium items-center gap-2">
                       <Info size={16} /> WOW Saplings Gallery
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
