"use client";

import ScrollReveal from "@/components/global/ScrollReveal";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans relative overflow-hidden pt-36 pb-24">
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        
        {/* Back navigation */}
        <ScrollReveal animation="bounce-in">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-8 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </ScrollReveal>

        {/* Hero Header */}
        <ScrollReveal animation="wobble-in">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              <Shield size={14} /> Legal & Privacy Information
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-primary-dark leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-medium text-lg">
              Effective Date: August 2, 2026 | WOW Saplings Preschool, Kolhapur
            </p>
          </div>
        </ScrollReveal>

        {/* Content Card */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-10 text-gray-700 font-medium leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Eye size={20} />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary-dark">1. Information We Collect</h2>
              </div>
              <p className="pl-13 text-gray-600">
                At WOW Saplings Preschool, we collect personal information submitted voluntarily through our online forms, including:
              </p>
              <ul className="list-disc pl-18 space-y-1 text-gray-600">
                <li><strong className="text-gray-800">Admissions Forms:</strong> Parent/guardian name, child&apos;s full name, child&apos;s date of birth, gender, phone number, program interest, and visit preferences.</li>
                <li><strong className="text-gray-800">Franchise Enquiry Forms:</strong> Applicant name, contact number, proposed city/locality, and custom inquiry notes.</li>
                <li><strong className="text-gray-800">Teacher Training Applications:</strong> Candidate name, phone number, and educational qualification.</li>
              </ul>
            </section>

            <div className="h-px bg-gray-100" />

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-yellow/20 text-yellow-700 flex items-center justify-center font-bold">
                  <FileText size={20} />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary-dark">2. How We Use Your Information</h2>
              </div>
              <p className="pl-13 text-gray-600">
                The information provided by parents, applicants, and prospective franchise partners is strictly used to:
              </p>
              <ul className="list-disc pl-18 space-y-1 text-gray-600">
                <li>Process admission applications and schedule campus visits.</li>
                <li>Reach out regarding Teacher Training course schedules and enrollment details.</li>
                <li>Evaluate franchise inquiries and provide tailored business information.</li>
                <li>Communicate important school updates and official announcements.</li>
              </ul>
            </section>

            <div className="h-px bg-gray-100" />

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold">
                  <Lock size={20} />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary-dark">3. Data Protection & Security</h2>
              </div>
              <p className="pl-13 text-gray-600">
                We implement stringent physical, administrative, and technical safeguards to prevent unauthorized access, alteration, disclosure, or destruction of your personal data. We do not sell, trade, or rent personal identification information to third parties.
              </p>
            </section>

            <div className="h-px bg-gray-100" />

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Shield size={20} />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary-dark">4. Child Data Safety</h2>
              </div>
              <p className="pl-13 text-gray-600">
                Protecting child privacy is paramount. Information regarding students is collected exclusively through parents or legal guardians. Photographs or media of students are only published with explicit prior consent from parents.
              </p>
            </section>

            <div className="h-px bg-gray-100" />

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-2xl text-primary-dark">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions regarding this Privacy Policy or wish to update your submitted information, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-2 space-y-2">
                <p className="font-bold text-primary-dark">WOW Saplings Preschool</p>
                <p className="text-sm text-gray-600">Main Road, Layout no.2, Kaman, Baba Jaragnagar, Kolhapur, Maharashtra – 416008</p>
                <p className="text-sm text-gray-600">Phone: +91 89996 40602 | +91 91683 14566</p>
                <p className="text-sm text-gray-600">Email: wowsaplingsschool666@gmail.com</p>
              </div>
            </section>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
