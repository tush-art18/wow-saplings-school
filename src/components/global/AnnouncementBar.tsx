"use client";

import { useState, useEffect } from "react";
import { fetchSiteSettings } from "@/lib/api";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the announcement
    const isDismissed = sessionStorage.getItem("announcementDismissed") === "true";

    const getSettings = async () => {
      const settings = await fetchSiteSettings();
      if (settings.announcement_bar && settings.announcement_bar.trim() !== "") {
        setAnnouncement(settings.announcement_bar);
        if (!isDismissed) {
          setIsVisible(true);
        }
      }
    };
    getSettings();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white px-4 py-2 relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative min-h-[24px]">
        <p className="text-sm font-semibold text-center pr-8 w-full font-sans tracking-wide">
          {announcement}
        </p>
        <button
          onClick={handleClose}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close announcement"
        >
          <X size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
