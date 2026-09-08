"use client";

import ScrollReveal from "@/components/global/ScrollReveal";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin, Globe, Instagram, Clock } from "lucide-react";

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
              <Shield size={14} /> Official Policy Document
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark leading-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-bold text-sm md:text-base">
              WOW Saplings Pre-Primary School | Kolhapur, Maharashtra, India
            </p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">
              Last updated: July 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Main Privacy Policy Card */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-10 text-gray-700 font-medium leading-relaxed">
            
            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">1.</span> Introduction
              </h2>
              <p className="text-gray-600">
                WOW Saplings Pre-Primary School (&quot;we,&quot; &quot;us,&quot; or &quot;the School&quot;) is committed to protecting the privacy and security of personal information shared with us through this website. This Privacy Policy explains what information we collect, how we use it, how we store it, and your rights regarding your personal data.
              </p>
              <p className="text-gray-600">
                This policy applies to all forms on this website including School Admission enquiries, Teacher Training Course applications, and Franchise enquiries.
              </p>
              <p className="text-gray-600 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-200">
                By using this website and submitting any form, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

            {/* 2. Who We Are */}
            <section className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">2.</span> Who We Are
              </h2>
              <p className="text-gray-600">
                This website is operated by WOW Saplings Pre-Primary School. The school is the Data Controller for all personal information collected through this website.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10 text-sm">
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">School Name</p>
                  <p className="font-bold text-primary-dark text-base">WOW Saplings Pre-Primary School</p>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Address</p>
                  <p className="font-bold text-gray-800">Main Road, Layout no.2, Kaman, Baba Jaragnagar, Kolhapur, Maharashtra – 416008</p>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Email</p>
                  <a href="mailto:wowsaplingsschool666@gmail.com" className="font-bold text-primary hover:underline">wowsaplingsschool666@gmail.com</a>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Phone</p>
                  <p className="font-bold text-gray-800">+91 89996 40602 / +91 91683 14566</p>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Website</p>
                  <a href="https://wowsaplingsschool.in" target="_blank" className="font-bold text-primary hover:underline">https://wowsaplingsschool.in</a>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Instagram</p>
                  <a href="https://instagram.com/wow_saplings_school" target="_blank" className="font-bold text-primary hover:underline">@wow_saplings_school</a>
                </div>
              </div>
            </section>

            {/* 3. What Information We Collect */}
            <section className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">3.</span> What Information We Collect
              </h2>
              <p className="text-gray-600">
                Depending on which form you submit, we may collect the following information:
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-primary-dark mb-2">🎓 School Admission Enquiry:</h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Parent or guardian&apos;s full name (father&apos;s name and mother&apos;s name)</li>
                    <li>Phone number and WhatsApp number</li>
                    <li>Child&apos;s full name, date of birth, and gender</li>
                    <li>Program applying for</li>
                    <li>Preferred campus visit time</li>
                    <li>How you heard about us</li>
                    <li>Any additional notes you choose to provide</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-primary-dark mb-2">👩‍🏫 Teacher Training Course Application:</h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Full name</li>
                    <li>Date of birth</li>
                    <li>Phone number</li>
                    <li>Educational qualification</li>
                    <li>City or address</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-primary-dark mb-2">🏢 Franchise Enquiry:</h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Proposed city</li>
                    <li>Message or background information</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                We do not collect payment information, government ID numbers, biometric data, or any information from children directly. All forms on this website are intended to be completed by adults — parents, guardians, or prospective students aged 18 and above.
              </p>
            </section>

            {/* 4. How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">4.</span> How We Use Your Information
              </h2>
              <p className="text-gray-600">
                We use the information you provide exclusively for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1.5">
                <li>To respond to your enquiry about school admission, the Teacher Training Course, or a franchise opportunity</li>
                <li>To schedule a campus visit or callback at your preferred time</li>
                <li>To send you relevant information about our programs and upcoming batches</li>
                <li>To maintain records of enquiries for administrative purposes</li>
              </ul>
              <p className="text-gray-600">
                We do not use your information for automated decision-making, profiling, or any purpose beyond what is listed above.
              </p>
            </section>

            {/* 5. How Your Information Is Shared */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">5.</span> How Your Information Is Shared
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block text-base mb-1">Within the school:</strong> Your information is shared only with WOW Saplings School&apos;s admission team, management, or training coordinators who need it to respond to your enquiry.
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block text-base mb-1">Via WhatsApp:</strong> When you submit a form, a summary of your enquiry is sent to the school&apos;s official WhatsApp number for immediate follow-up. By submitting the form, you consent to this communication.
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block text-base mb-1">Third parties:</strong> We do not sell, rent, trade, or share your personal information with any third-party companies, advertisers, or organisations. We do not share your data with any entity outside of WOW Saplings School.
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block text-base mb-1">Legal requirement:</strong> We may disclose your information if required to do so by law or in response to a valid legal request from Indian government authorities.
                </li>
              </ul>
            </section>

            {/* 6. How We Store Your Information */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">6.</span> How We Store Your Information
              </h2>
              <p className="text-gray-600">
                Your information is stored securely on encrypted servers hosted by Render (<a href="https://render.com" target="_blank" rel="noopener noreferrer" className="text-primary underline font-bold">render.com</a>), a cloud infrastructure provider operating under international security standards. Access to stored data is restricted to authorised school staff only and is protected by secure login credentials.
              </p>
              <p className="text-gray-600">
                Images and media uploaded through our systems are stored on Cloudinary, a secure cloud media storage provider.
              </p>
              <p className="text-gray-600">
                Our website&apos;s gallery content is sourced from our official Instagram account (<a href="https://instagram.com/wow_saplings_school" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline">@wow_saplings_school</a>) via the Instagram Graph API, a service provided by Meta Platforms, Inc. No personal data from our website forms is shared with Instagram or Meta.
              </p>
            </section>

            {/* 7. How Long We Keep Your Information */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">7.</span> How Long We Keep Your Information
              </h2>
              <p className="text-gray-600">
                We retain enquiry information for a maximum of 2 years from the date of submission. After this period, your information is permanently deleted from our database unless you have subsequently enrolled in one of our programs, in which case your information is retained for the duration of your enrollment and for 1 year thereafter.
              </p>
              <p className="text-gray-600 font-semibold">
                You may request early deletion of your data at any time. See Section 9 for how to do this.
              </p>
            </section>

            {/* 8. Cookies and Analytics */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">8.</span> Cookies and Analytics
              </h2>
              <p className="text-gray-600">
                This website may use basic cookies necessary for the website to function correctly (such as session cookies). We do not use advertising cookies or third-party tracking cookies.
              </p>
              <p className="text-gray-600">
                If we use Google Analytics or similar tools to understand website traffic, no personally identifiable information is shared with those services — only anonymised usage data such as page views and device type.
              </p>
            </section>

            {/* 9. Your Rights */}
            <section className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">9.</span> Your Rights
              </h2>
              <p className="text-gray-600">
                Under the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, you have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block font-bold mb-1">Right to access:</strong>
                  <span>You may request a copy of the personal information we hold about you.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block font-bold mb-1">Right to correction:</strong>
                  <span>You may request that we correct any inaccurate information we hold about you.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block font-bold mb-1">Right to deletion:</strong>
                  <span>You may request that we delete your personal information from our systems. We will action this request within 30 days of receiving it.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="text-primary-dark block font-bold mb-1">Right to withdraw consent:</strong>
                  <span>You may withdraw your consent for us to contact you at any time.</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <strong className="text-primary-dark font-bold">Right to grievance redressal:</strong> If you have a complaint about how we have handled your personal data, you may contact our Grievance Officer (see Section 10).
              </p>

              <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 text-sm">
                <p className="font-bold text-primary-dark mb-1">To exercise any of these rights, please contact us at:</p>
                <p className="text-gray-700">Email: <a href="mailto:wowsaplingsschool666@gmail.com" className="text-primary underline font-bold">wowsaplingsschool666@gmail.com</a></p>
                <p className="text-gray-700">Phone: <span className="font-bold">+91 89996 40602 / +91 91683 14566</span></p>
              </div>
            </section>

            {/* 10. Grievance Officer */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">10.</span> Grievance Officer
              </h2>
              <p className="text-gray-600">
                In accordance with the Information Technology Act, 2000 and the rules made thereunder, the name and contact details of the Grievance Officer are:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-1 text-sm">
                <p className="font-bold text-primary-dark text-base">Principal, WOW Saplings Pre-Primary School</p>
                <p className="text-gray-600"><strong className="text-gray-800">Designation:</strong> Principal, WOW Saplings Pre-Primary School</p>
                <p className="text-gray-600"><strong className="text-gray-800">Address:</strong> Main Road, Layout no.2, Kaman, Baba Jaragnagar, Kolhapur, Maharashtra – 416008</p>
                <p className="text-gray-600"><strong className="text-gray-800">Email:</strong> <a href="mailto:wowsaplingsschool666@gmail.com" className="text-primary underline font-bold">wowsaplingsschool666@gmail.com</a></p>
                <p className="text-gray-600"><strong className="text-gray-800">Phone:</strong> +91 89996 40602 / +91 91683 14566</p>
              </div>
              <p className="text-xs text-gray-500 font-semibold italic">
                Any grievance or complaint regarding the processing of your personal data will be acknowledged within 48 hours and resolved within 30 days of receipt.
              </p>
            </section>

            {/* 11. Children's Privacy */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">11.</span> Children&apos;s Privacy
              </h2>
              <p className="text-gray-600">
                This website is operated by a pre-primary school. Our forms are designed to be filled by parents and guardians — not by children. We do not knowingly collect personal information directly from children under the age of 18. Information about a child (such as name, date of birth, and gender) is collected from their parent or guardian for the purpose of processing an admission enquiry only.
              </p>
              <p className="text-gray-600 bg-red-50/60 p-4 rounded-xl border border-red-200 text-sm">
                If you believe that a child has submitted personal information without parental consent, please contact us immediately at <a href="mailto:wowsaplingsschool666@gmail.com" className="text-primary font-bold underline">wowsaplingsschool666@gmail.com</a> and we will delete that information promptly.
              </p>
            </section>

            {/* 12. Third-Party Links */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">12.</span> Third-Party Links
              </h2>
              <p className="text-gray-600">
                Our website may contain links to external websites including our Instagram profile and WhatsApp. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of any external websites or platforms you visit through links on our site.
              </p>
            </section>

            {/* 13. Security */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">13.</span> Security
              </h2>
              <p className="text-gray-600">
                We implement reasonable technical and organisational security measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. These measures include encrypted database storage, restricted access controls, and secure server infrastructure.
              </p>
              <p className="text-gray-600 text-sm italic">
                However, no method of transmission over the internet is completely secure. While we take all reasonable steps to protect your information, we cannot guarantee absolute security of data transmitted to or from this website.
              </p>
            </section>

            {/* 14. Changes to This Policy */}
            <section className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">14.</span> Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in law or our practices. When we do, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this page periodically. Continued use of this website after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* 15. Contact Us */}
            <section className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-primary-dark border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-primary font-black">15.</span> Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent-yellow/10 p-6 rounded-2xl border border-primary/20 space-y-3 text-sm">
                <p className="font-heading font-extrabold text-lg text-primary-dark">WOW Saplings Pre-Primary School</p>
                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                  <span>Main Road, Layout no.2, Kaman, Baba Jaragnagar, Kolhapur, Maharashtra – 416008</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} className="shrink-0 text-primary" />
                  <a href="mailto:wowsaplingsschool666@gmail.com" className="text-primary font-bold underline">wowsaplingsschool666@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="shrink-0 text-primary" />
                  <span className="font-bold">+91 89996 40602 / +91 91683 14566</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="shrink-0 text-primary" />
                  <span>Office hours: Monday to Saturday, 8:00 AM to 6:00 PM</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 font-medium">
                This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts in Kolhapur, Maharashtra.
              </p>
            </section>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
