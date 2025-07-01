import React, { useState } from "react";
import { GraduationCap, Award, Calendar, Building } from "lucide-react";

const categories = [
  "ITSM & Ops",
  "Cloud & DevOps",
  "AI & Data",
  "Leadership",
  "Security",
];

const certificates = [
  // AI & Data
  { issuer: "Google", name: "Generative AI Leader", year: 2025, category: "AI & Data" },
  { issuer: "Microsoft", name: "Enterprise Product Management Fundamentals", year: 2025, category: "AI & Data" },
  { issuer: "Microsoft", name: "Preparing Data for Analysis with Excel", year: 2025, category: "AI & Data" },
  { issuer: "NASBA", name: "Tableau Essential Training", year: 2023, category: "AI & Data" },
  { issuer: "Google", name: "Introduction to Generative AI", year: 2024, category: "AI & Data" },
  { issuer: "Coursera", name: "What is Data Science?", year: 2020, category: "AI & Data" },
  { issuer: "LinkedIn", name: "Using Questions to Foster Curiosity", year: 2021, category: "AI & Data" },

  // ITSM & Ops
  { issuer: "Automation Anywhere", name: "Essentials Automation Professional", year: 2025, category: "ITSM & Ops" },
  { issuer: "BigPanda", name: "AIOps Foundations", year: 2024, category: "ITSM & Ops" },
  { issuer: "Gremlin", name: "Gremlin Enterprise Chaos Engineering Certification (GECEC)", year: 2024, category: "ITSM & Ops" },
  { issuer: "Moogsoft", name: "Moogsoft Enterprise Operator Training", year: 2021, category: "ITSM & Ops" },
  { issuer: "AXELOS", name: "ITIL® V4 Foundation Certificate in IT Service Management", year: 2020, category: "ITSM & Ops" },

  // Leadership
  { issuer: "LinkedIn", name: "Develop Critical Thinking & Decision-Making", year: 2021, category: "Leadership" },
  { issuer: "Coursera", name: "Leadership in 21st Century Organizations", year: 2019, category: "Leadership" },
  { issuer: "LinkedIn", name: "Critical Thinking", year: 2019, category: "Leadership" },
  { issuer: "LinkedIn", name: "Strategic Thinking", year: 2019, category: "Leadership" },

  // Cloud & DevOps
  { issuer: "LinkedIn", name: "Microsoft Azure: Architecting Infrastructure", year: 2019, category: "Cloud & DevOps" },
  { issuer: "LinkedIn", name: "AWS Solutions Architect Overview", year: 2019, category: "Cloud & DevOps" },
  { issuer: "LinkedIn", name: "DevOps Foundations: DevSecOps", year: 2019, category: "Cloud & DevOps" },
  { issuer: "LinkedIn", name: "Learning Azure DevOps", year: 2019, category: "Cloud & DevOps" },
  { issuer: "Confluent", name: "Apache Kafka Administration", year: 2021, category: "Cloud & DevOps" },

  // Security
  { issuer: "Vanderbilt University", name: "Generative AI Cybersecurity & Privacy for Leaders", year: 2025, category: "Security" },
  { issuer: "CybSafe", name: "Certification in Security Awareness", year: 2021, category: "Security" },
];

export default function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("ITSM & Ops");

  const filteredCerts = certificates
    .filter((cert) => cert.category === selectedCategory)
    .sort((a, b) => b.year - a.year);

  const getYearBadgeColor = (year) => {
    if (year >= 2024) return "bg-emerald-100 text-emerald-800 border-emerald-200";
    if (year >= 2021) return "bg-blue-100 text-blue-800 border-blue-200";
    return "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" id="certifications">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning through formal education and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Master of Business Administration</h4>
                        <p className="text-sm text-gray-500 mt-1">MBA</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        2008
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      ICFAI University
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Bachelor of Computer Applications</h4>
                        <p className="text-sm text-gray-500 mt-1">BCA</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        2006
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      Dr. BR Ambedkar University
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md"
                    }`}
                  >
                    <span className="relative z-10">{cat}</span>
                    {selectedCategory !== cat && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-600"></div>
              
              <div className="space-y-6">
                {filteredCerts.map((cert, index) => (
                  <div
                    key={index}
                    className="group relative flex items-start gap-6 animate-in slide-in-from-right duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>
                    </div>

                    {/* Certificate Card */}
                    <div className="flex-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm group-hover:shadow-lg group-hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                                {cert.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-2">
                                <Building className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-600">{cert.issuer}</span>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getYearBadgeColor(cert.year)}`}>
                              {cert.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
