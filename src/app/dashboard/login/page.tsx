"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Sparkles, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please check credentials.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("Cannot connect to authorization server. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 border-[3px] border-[#2d8c4e]/10 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-yellow/20 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="bg-[#2d8c4e] text-white w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
          <Sparkles size={28} className="text-accent-yellow animate-pulse" />
        </div>
        <h2 className="font-heading font-black text-2xl text-primary-dark">
          WOW Saplings Admin
        </h2>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">
          Staff Secure Login
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-600 text-sm font-semibold">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        {/* Username */}
        <div className="space-y-1.5">
          <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
            Username
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <User size={18} />
            </span>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
              placeholder="Enter admin username"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-xs font-black text-primary-dark/70 uppercase tracking-wider">
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <Lock size={18} />
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2d8c4e] text-white py-4 rounded-2xl font-black text-base shadow-lg hover:shadow-[#2d8c4e]/30 active:scale-98 transition-all disabled:opacity-50 mt-2"
        >
          {loading ? "Verifying..." : "Sign In 🚀"}
        </button>
      </form>
    </div>
  );
}
