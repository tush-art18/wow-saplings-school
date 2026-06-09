import { secureFetch } from "@/lib/dashboardApi";
import { Users, Image as ImageIcon, MessageSquare, Bell, Sparkles } from "lucide-react";
import Link from "next/link";

interface StatItem {
  label: string;
  value: number;
  icon: any;
  color: string;
  bg: string;
}

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let statsData = {
    stats: {
      total_leads: 0,
      new_leads: 0,
      total_testimonials: 0,
      total_photos: 0,
      total_categories: 0,
    },
    chart_data: [] as Array<{ month: string; count: number }>,
  };

  let recentLeads: any[] = [];

  try {
    const statsRes = await secureFetch("/dashboard/stats/");
    if (statsRes.ok) {
      statsData = await statsRes.json();
    }

    const leadsRes = await secureFetch("/dashboard/leads/");
    if (leadsRes.ok) {
      const leads = await leadsRes.json();
      recentLeads = leads.slice(0, 5); // Take top 5
    }
  } catch (error) {
    console.error("Failed to load dashboard data:", error);
  }

  const stats = statsData.stats;

  const statItems: StatItem[] = [
    {
      label: "Total Leads",
      value: stats.total_leads,
      icon: Users,
      color: "text-[#2d8c4e]",
      bg: "bg-[#2d8c4e]/10",
    },
    {
      label: "New Leads",
      value: stats.new_leads,
      icon: Bell,
      color: "text-accent-orange",
      bg: "bg-accent-orange/10",
    },
    {
      label: "Testimonials",
      value: stats.total_testimonials,
      icon: MessageSquare,
      color: "text-[#9c6dd8]",
      bg: "bg-[#9c6dd8]/10",
    },
    {
      label: "Gallery Images",
      value: stats.total_photos,
      icon: ImageIcon,
      color: "text-accent-pink",
      bg: "bg-accent-pink/10",
    },
  ];

  // Max value for chart scaling
  const maxChartVal = Math.max(...statsData.chart_data.map((d) => d.count), 1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-black text-3xl text-primary-dark tracking-wide">
            Overview Dashboard
          </h2>
          <p className="text-gray-500 text-sm font-semibold mt-1">
            Welcome back! Here is a summary of recent school activity.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#2d8c4e]/10 text-[#2d8c4e] px-4 py-2 rounded-2xl text-xs font-bold border border-[#2d8c4e]/20">
          <Sparkles size={14} className="text-accent-yellow" />
          Live Connected
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 flex items-center gap-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`${item.bg} ${item.color} p-4 rounded-2xl`}>
                <Icon size={24} />
              </div>
              <div>
                <span className="text-gray-400 text-xs font-black uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="font-heading font-black text-3xl text-primary-dark mt-1 block leading-none">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-black text-xl text-primary-dark mb-1">
              Monthly Leads Ingestion
            </h3>
            <p className="text-gray-400 text-xs font-semibold mb-6">
              Number of parent enquiries captured over the last 6 months
            </p>
          </div>

          {/* Bar Chart Representation using CSS Grid/Flex */}
          {statsData.chart_data.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm py-16">
              No recent lead data to display.
            </div>
          ) : (
            <div className="flex items-end justify-between h-56 px-4 pt-4 border-b border-gray-100">
              {statsData.chart_data.map((data, idx) => {
                const pct = (data.count / maxChartVal) * 100;
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 group">
                    <div className="text-[10px] font-black text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                      {data.count}
                    </div>
                    <div
                      style={{ height: `${pct}%` }}
                      className="w-8 sm:w-10 bg-gradient-to-t from-[#2d8c4e] to-[#58d68d] rounded-t-lg transition-all duration-500 hover:brightness-110 shadow-md group-hover:shadow-lg"
                    />
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider mt-3 text-center">
                      {data.month}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Action center */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-black text-xl text-primary-dark mb-1">
              Quick Actions
            </h3>
            <p className="text-gray-400 text-xs font-semibold mb-6">
              Add details or navigate key settings
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/dashboard/gallery"
              className="block w-full text-center bg-[#2d8c4e] text-white py-4 rounded-2xl font-black text-sm shadow-md hover:shadow-[#2d8c4e]/20 hover:brightness-105 active:scale-98 transition-all"
            >
              Upload Gallery Photo 📷
            </Link>
            <Link
              href="/dashboard/testimonials"
              className="block w-full text-center bg-white text-primary border-3 border-primary py-4 rounded-2xl font-black text-sm hover:bg-primary/5 active:scale-98 transition-all"
            >
              Manage Testimonials 💬
            </Link>
            <Link
              href="/dashboard/settings"
              className="block w-full text-center bg-gray-50 text-gray-700 py-4 rounded-2xl font-black text-sm hover:bg-gray-100 active:scale-98 transition-all"
            >
              Update Website Contacts ⚙️
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-heading font-black text-xl text-primary-dark mb-1">
              Recent Leads
            </h3>
            <p className="text-gray-400 text-xs font-semibold">
              The latest form submissions received from your website
            </p>
          </div>
          <Link
            href="/dashboard/leads"
            className="text-xs font-black text-[#2d8c4e] uppercase tracking-wider hover:underline"
          >
            View All Leads →
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm font-semibold">
            No inquiries received yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="pb-3 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="pb-3 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="pb-3 text-xs font-black text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="pb-3 text-xs font-black text-gray-400 uppercase tracking-wider text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentLeads.map((lead) => {
                  const formLabels = {
                    admission: "Admission",
                    franchise: "Franchise",
                    contact: "Contact Form",
                  };
                  return (
                    <tr key={lead.id} className="hover:bg-gray-50/50">
                      <td className="py-4 text-sm font-bold text-gray-800">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">
                          {formLabels[lead.form_type as keyof typeof formLabels] || lead.form_type}
                        </span>
                      </td>
                      <td className="py-4 text-sm font-bold text-gray-800">
                        {lead.name}
                      </td>
                      <td className="py-4 text-sm font-bold text-gray-500">
                        {lead.phone}
                      </td>
                      <td className="py-4 text-sm font-semibold text-gray-400">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="py-4 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                            lead.status === "new"
                              ? "bg-accent-orange/10 text-accent-orange"
                              : lead.status === "contacted"
                              ? "bg-[#9c6dd8]/10 text-[#9c6dd8]"
                              : lead.status === "enrolled"
                              ? "bg-[#2d8c4e]/10 text-[#2d8c4e]"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
