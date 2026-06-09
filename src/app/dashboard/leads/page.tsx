"use client";

import { useState, useEffect } from "react";
import { Search, Eye, MessageCircle, X, Check, Clock, ChevronDown, CheckCircle, Ban } from "lucide-react";

interface Lead {
  id: number;
  form_type: "admission" | "franchise" | "contact";
  status: "new" | "contacted" | "enrolled" | "closed";
  name: string;
  phone: string;
  notes: string;
  mothers_name?: string;
  whatsapp?: string;
  address?: string;
  child_name?: string;
  gender?: string;
  dob?: string;
  program?: string;
  hear_source?: string;
  visit_time?: string;
  city?: string;
  created_at: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append("status", statusFilter);
      if (typeFilter) params.append("form_type", typeFilter);
      
      const res = await fetch(`/api/dashboard-proxy/leads/?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, typeFilter]);

  const handleStatusChange = async (leadId: number, newStatus: string) => {
    try {
      const res = await fetch(`/api/dashboard-proxy/leads/${leadId}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const updated = await res.json();
        setLeads((prev) => prev.map((l) => (l.id === leadId ? updated : l)));
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead(updated);
        }
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  // Local client-side search filtering
  const filteredLeads = leads.filter((lead) => {
    const term = search.toLowerCase();
    return (
      lead.name.toLowerCase().includes(term) ||
      lead.phone.includes(term) ||
      (lead.child_name && lead.child_name.toLowerCase().includes(term)) ||
      (lead.program && lead.program.toLowerCase().includes(term))
    );
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "new":
        return "bg-accent-orange/10 text-accent-orange border border-accent-orange/20";
      case "contacted":
        return "bg-[#9c6dd8]/10 text-[#9c6dd8] border border-[#9c6dd8]/20";
      case "enrolled":
        return "bg-[#2d8c4e]/10 text-[#2d8c4e] border border-[#2d8c4e]/20";
      case "closed":
        return "bg-gray-100 text-gray-500 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formLabels = {
    admission: "Admission",
    franchise: "Franchise",
    contact: "Contact Form",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading font-black text-3xl text-primary-dark tracking-wide">
          Leads & Inquiries
        </h2>
        <p className="text-gray-500 text-sm font-semibold mt-1">
          Review and update status of website enquiries and admissions.
        </p>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
            placeholder="Search by name, child, phone, or program..."
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="flex-1 md:w-44 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:border-primary"
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="enrolled">Enrolled</option>
            <option value="closed">Closed</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="flex-1 md:w-44 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:border-primary"
          >
            <option value="">All Form Types</option>
            <option value="admission">Admission</option>
            <option value="franchise">Franchise</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="text-center py-20 text-gray-400 font-semibold text-sm">
            Loading inquiries...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-semibold text-sm">
            No inquiries match your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 px-3.5 py-1 rounded-full text-[11px] font-black text-gray-600 uppercase tracking-wider">
                        {formLabels[lead.form_type] || lead.form_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">
                      <div>
                        {lead.name}
                        {lead.child_name && (
                          <div className="text-xs text-primary font-semibold mt-0.5">
                            Child: {lead.child_name} ({lead.program})
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-500">
                      {lead.phone}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-400">
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${getStatusBadgeClass(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="bg-gray-50 hover:bg-[#2d8c4e]/10 text-gray-600 hover:text-[#2d8c4e] p-2.5 rounded-xl transition-all border border-gray-100"
                        >
                          <Eye size={16} />
                        </button>
                        <a
                          href={`https://api.whatsapp.com/send?phone=${lead.whatsapp || lead.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-50 hover:bg-[#25d366]/10 text-gray-600 hover:text-[#25d366] p-2.5 rounded-xl transition-all border border-gray-100"
                        >
                          <MessageCircle size={16} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden border-[3px] border-[#2d8c4e]/10 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
                  {formLabels[selectedLead.form_type]} Enquiry Details
                </span>
                <h3 className="font-heading font-black text-2xl text-primary-dark mt-1">
                  {selectedLead.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="bg-white hover:bg-gray-100 text-gray-500 p-2.5 rounded-full border border-gray-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                    Phone Number
                  </span>
                  <span className="text-sm font-bold text-gray-800">{selectedLead.phone}</span>
                </div>
                {selectedLead.whatsapp && (
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                      WhatsApp Number
                    </span>
                    <span className="text-sm font-bold text-gray-800">{selectedLead.whatsapp}</span>
                  </div>
                )}
                {selectedLead.mothers_name && (
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                      Mother's Name
                    </span>
                    <span className="text-sm font-bold text-gray-800">{selectedLead.mothers_name}</span>
                  </div>
                )}
                {selectedLead.city && (
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                      City
                    </span>
                    <span className="text-sm font-bold text-gray-800">{selectedLead.city}</span>
                  </div>
                )}
              </div>

              {/* Admission Specific section */}
              {selectedLead.form_type === "admission" && (
                <div className="bg-[#FDFAF0] rounded-3xl p-5 border border-[#2d8c4e]/10 space-y-4">
                  <h4 className="font-heading font-black text-base text-primary-dark border-b border-[#2d8c4e]/10 pb-2">
                    👶 Child & Class Info
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Child's Name
                      </span>
                      <span className="text-sm font-bold text-gray-800">{selectedLead.child_name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Gender
                      </span>
                      <span className="text-sm font-bold text-gray-800">{selectedLead.gender}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Date of Birth
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {selectedLead.dob ? new Date(selectedLead.dob).toLocaleDateString("en-IN") : "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Target Program
                      </span>
                      <span className="text-sm font-bold text-[#2d8c4e]">{selectedLead.program}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Preferred Visit
                      </span>
                      <span className="text-sm font-bold text-gray-800">{selectedLead.visit_time || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Hear Source
                      </span>
                      <span className="text-sm font-bold text-gray-800">{selectedLead.hear_source || "N/A"}</span>
                    </div>
                  </div>

                  {selectedLead.address && (
                    <div className="pt-2">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                        Address
                      </span>
                      <p className="text-xs font-semibold text-gray-700 mt-1 leading-relaxed">{selectedLead.address}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Message/Notes section */}
              {selectedLead.notes && (
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                    Message / Notes
                  </span>
                  <p className="text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-100 p-4 rounded-2xl mt-1.5 leading-relaxed">
                    {selectedLead.notes}
                  </p>
                </div>
              )}

              {/* Change Status Section */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                    Update Progress Status
                  </span>
                  <div className="flex gap-2 mt-2">
                    {[
                      { key: "new", label: "New", icon: Clock },
                      { key: "contacted", label: "Contact", icon: ChevronDown },
                      { key: "enrolled", label: "Enroll", icon: CheckCircle },
                      { key: "closed", label: "Close", icon: Ban },
                    ].map((st) => (
                      <button
                        key={st.key}
                        onClick={() => handleStatusChange(selectedLead.id, st.key)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          selectedLead.status === st.key
                            ? st.key === "new"
                              ? "bg-accent-orange text-white shadow-md shadow-accent-orange/25"
                              : st.key === "contacted"
                              ? "bg-[#9c6dd8] text-white shadow-md shadow-[#9c6dd8]/25"
                              : st.key === "enrolled"
                              ? "bg-[#2d8c4e] text-white shadow-md shadow-[#2d8c4e]/25"
                              : "bg-gray-500 text-white shadow-md"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=${selectedLead.whatsapp || selectedLead.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25d366] text-white px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:shadow-[#25d366]/25 hover:brightness-105 active:scale-98 transition-all flex items-center gap-2 self-end sm:self-center"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
