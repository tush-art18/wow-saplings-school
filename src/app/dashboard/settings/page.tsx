"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Save, RefreshCw } from "lucide-react";

interface Setting {
  id: number;
  key: string;
  value: string;
  description: string;
  updated_at: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | null>(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [syncing, setSyncing] = useState(false);

  const handleSyncInstagram = async () => {
    setSyncing(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/dashboard-proxy/settings/sync-instagram/", {
        method: "POST",
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(`Instagram sync completed: ${data.message}`);
        setTimeout(() => setSuccessMsg(""), 5000);
      } else {
        setErrorMsg(data.message || "Failed to sync Instagram posts. Please check your Instagram credentials.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to the server.");
    } finally {
      setSyncing(false);
    }
  };

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard-proxy/settings/");
      if (res.ok) {
        const data = await res.json();
        setSettings(data);
      }
    } catch (error) {
      console.error("Failed to fetch settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleValueChange = (id: number, newValue: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, value: newValue } : s))
    );
  };

  const handleSaveSetting = async (id: number, key: string, value: string) => {
    setSavingId(id);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(`/api/dashboard-proxy/settings/${id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      });

      if (res.ok) {
        setSuccessMsg(`Setting '${key}' updated successfully!`);
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        setErrorMsg("Failed to save setting. Please check the value.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to the server.");
    } finally {
      setSavingId(null);
    }
  };

  const formatKeyName = (key: string) => {
    return key
      .split("_")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-heading font-black text-3xl text-primary-dark tracking-wide">
            Site Settings
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1">
            Configure site-wide parameters such as contact phone numbers and announcement alerts.
          </p>
        </div>
        <button
          onClick={handleSyncInstagram}
          disabled={syncing || loading}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-2xl font-black text-sm shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw size={18} className={syncing ? "animate-spin" : ""} />
          {syncing ? "Syncing..." : "Sync Instagram Feed"}
        </button>
      </div>

      {/* Messages */}
      {successMsg && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-[#2d8c4e] text-sm font-bold animate-in fade-in slide-in-from-top-2">
          <CheckCircle size={18} />
          <span>{successMsg}</span>
        </div>
      )}
      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold animate-in fade-in slide-in-from-top-2">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Settings Panel */}
      {loading ? (
        <div className="bg-white rounded-[2rem] py-20 text-center text-gray-400 font-semibold text-sm border border-gray-100">
          Loading settings...
        </div>
      ) : settings.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center text-gray-400 font-semibold border border-gray-100">
          No configurable settings found in the database.
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-6 md:p-8 space-y-8 divide-y divide-gray-100">
          {settings.map((setting, idx) => (
            <div
              key={setting.id}
              className={`flex flex-col md:flex-row md:items-start justify-between gap-6 text-left ${
                idx > 0 ? "pt-8" : ""
              }`}
            >
              {/* Description */}
              <div className="md:w-1/3 space-y-1">
                <h4 className="font-heading font-black text-lg text-primary-dark">
                  {formatKeyName(setting.key)}
                </h4>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed">
                  {setting.description || "No description provided."}
                </p>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block pt-2">
                  System key: {setting.key}
                </span>
              </div>

              {/* Input & Action */}
              <div className="md:w-2/3 flex flex-col sm:flex-row items-end sm:items-start gap-4">
                <div className="w-full">
                  {setting.key === "announcement_bar" ? (
                    <textarea
                      rows={2}
                      value={setting.value}
                      onChange={(e) => handleValueChange(setting.id, e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary leading-relaxed"
                      placeholder="Enter announcement banner message..."
                    />
                  ) : (
                    <input
                      type="text"
                      value={setting.value}
                      onChange={(e) => handleValueChange(setting.id, e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:border-primary"
                    />
                  )}
                </div>

                <button
                  onClick={() =>
                    handleSaveSetting(setting.id, setting.key, setting.value)
                  }
                  disabled={savingId === setting.id}
                  className="bg-[#2d8c4e] text-white px-5 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all shrink-0 flex items-center gap-2"
                >
                  <Save size={16} />
                  {savingId === setting.id ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
