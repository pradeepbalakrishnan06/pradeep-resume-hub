import React, { useState } from "react";
import { GraduationCap, Award, Calendar, Building, Eye } from "lucide-react";

const categories = [
  "ITSM & Ops",
  "Cloud & DevOps",
  "AI & Data",
  "PM & Leadership",
  "Security",
];

const certificates = [
  // AI & Data
  { issuer: "Coursera", name: "Generative AI For Leader (VANDERBILT UNIVERSITY)", year: 2026, category: "AI & Data", link: "https://coursera.org/share/341b09d6a7f34bb920996eca92932040" },
  { issuer: "Google", name: "Generative AI Leader", year: 2025, category: "AI & Data", link: "https://www.cloudskillsboost.google/paths/1951" },
  { issuer: "Microsoft", name: "Preparing Data for Analysis with Excel", year: 2025, category: "AI & Data", link: "https://www.coursera.org/account/accomplishments/verify/L7WVPP7DISKG" },
  { issuer: "Google", name: "Crash Course on Python", year: 2025, category: "AI & Data", link: "https://www.coursera.org/account/accomplishments/verify/JC3XN3A75R4V" },
  { issuer: "NASBA", name: "Tableau Essential Training", year: 2023, category: "AI & Data", link: "https://www.linkedin.com/learning/certificates/90476fba009433dbcb9cea8b21b6333a6b5573b92d0cb436164e763bcfa6257a" },
  { issuer: "Google", name: "Introduction to Generative AI", year: 2024, category: "AI & Data", link: "https://www.cloudskillsboost.google/public_profiles/27801379-13d7-4ba7-9385-9ee22f6326d6/badges/11105630?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  { issuer: "Coursera", name: "What is Data Science?", year: 2020, category: "AI & Data", link: "https://www.coursera.org/account/accomplishments/certificate/6BW4LV46RBYU" },
  { issuer: "LinkedIn", name: "Using Questions to Foster Curiosity", year: 2021, category: "AI & Data", link: "https://www.linkedin.com/learning/certificates/83a0d202d614ec534ad5273fbd2b7c8c6be31c58f94b508a9bd855fd4455f521?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdKBiEjluRRG2mlsNfOl6vw%3D%3D" },

  // ITSM & Ops
  { issuer: "Automation Anywhere", name: "Essentials Automation Professional", year: 2025, category: "ITSM & Ops", link: "https://certificates.automationanywhere.com/e147801a-8860-4fdd-8724-905dc595b7e9#acc.ZFgHzlBo" },
  { issuer: "LinkedIn", name: "Six Sigma Foundations", year: 2025, category: "ITSM & Ops", link: "https://www.linkedin.com/learning/certificates/989cda61ed00d3edf0cf8fa7310c1d55d18706ffc6a04f057f27d8c67f2c5649?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B994BDMktTcOChToQktY3vA%3D%3D" },
  { issuer: "BigPanda", name: "AIOps Foundations", year: 2024, category: "ITSM & Ops", link: "https://www.bigpanda.io/bigpanda-education/" },
  { issuer: "Gremlin", name: "Gremlin Enterprise Chaos Engineering Certification (GECEC)", year: 2024, category: "ITSM & Ops", link: "https://www.credential.net/374ca581-8620-4b81-8f58-ac795b23071a#acc.J8LgUNvB" },
  { issuer: "Moogsoft", name: "Moogsoft Enterprise Operator Training", year: 2021, category: "ITSM & Ops", },
  { issuer: "AXELOS", name: "ITIL® V4 Foundation Certificate in IT Service Management", year: 2020, category: "ITSM & Ops" },

  // PM & Leadership
  { issuer: "Google", name: "Agile Project Management", year: 2025, category: "PM & Leadership", link: "https://www.coursera.org/account/accomplishments/verify/8N2NW2EABM9B" },
  { issuer: "Asana", name: "Asana Ambassador & Foundation", year: 2025, category: "PM & Leadership", link: "https://certifications.asana.com/profile/pradeepbalakrishnan99321/wallet" },
  { issuer: "Microsoft", name: "Enterprise Product Management Fundamentals", year: 2025, category: "PM & Leadership", link: "https://www.coursera.org/account/accomplishments/verify/4JVAB98C79XL" },
  { issuer: "LinkedIn", name: "Develop Critical Thinking & Decision-Making", year: 2021, category: "PM & Leadership", link: "https://www.linkedin.com/learning/certificates/0a235884f3439af4e48bc10c290ce7659b346784fa598d363c2e4cf152561ce8?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdKBiEjluRRG2mlsNfOl6vw%3D%3D" },
  { issuer: "LinkedIn", name: "SharePoint for Project Management", year: 2019, category: "PM & Leadership", link: "https://www.linkedin.com/learning/certificates/b3ae5b2ed8e047a41525d2de5a841fa624007f359f85c2132995b2d97ea611b8?trk=backfilled_certificate" },
  { issuer: "Coursera", name: "Leadership in 21st Century Organizations", year: 2019, category: "PM & Leadership", link: "https://www.coursera.org/account/accomplishments/verify/Z9LWC8Q5MCRG" },
  { issuer: "LinkedIn", name: "Critical Thinking", year: 2019, category: "PM & Leadership", link: "https://www.linkedin.com/learning/certificates/5d2d64f85d7cad22de70dcd2d46f066cc4c11a5c18025d40e0454512031baf1b?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRlKaJTUfRRqB4KfCEcXDMw%3D%3D" },
  { issuer: "LinkedIn", name: "Strategic Thinking", year: 2019, category: "PM & Leadership", link: "https://www.linkedin.com/learning/certificates/6baf154282c848e48292b48a8b33750c5f60e942b7715fe5860d63511c97f941?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRlKaJTUfRRqB4KfCEcXDMw%3D%3D" },
  { issuer: "LinkedIn", name: "Becoming a Thought Leader", year: 2019, category: "PM & Leadership", link: "https://www.linkedin.com/learning/certificates/c5e09b0481b2b2cd31f42d3f5d42e47c3d2bf9e55eb29fe6467a966d3581ec8e?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRlKaJTUfRRqB4KfCEcXDMw%3D%3D" },

  // Cloud & DevOps
  { issuer: "MongoDB", name: "MongoDB for SQL Experts", year: 2025, category: "Cloud & DevOps", link: "https://learn.mongodb.com/c/Oo5_t9_vSoOgcRb0t6nrvw" },
  { issuer: "Confluent", name: "Apache Kafka Administration", year: 2021, category: "Cloud & DevOps", },
  { issuer: "Microsoft", name: "Azure Fundamentals", year: 2020, category: "Cloud & DevOps", link: "https://www.credly.com/badges/a5eba921-f18e-4a78-99b7-d2a4ea599217/" },
  { issuer: "LinkedIn", name: "Microsoft Azure: Architecting Infrastructure", year: 2019, category: "Cloud & DevOps", link: "https://www.linkedin.com/learning/certificates/398caa2517c137221c8538d53328078e82c0da4c737d46524c9c96e1e990e952?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFL%2FrBlVUT%2FCUTwJjwlNetQ%3D%3D" },
  { issuer: "LinkedIn", name: "AWS Solutions Architect Overview", year: 2019, category: "Cloud & DevOps", link: "https://www.linkedin.com/learning/certificates/22963027fcc994056cc6cbe7f315761a220563f4cd4cc1cabcfaa825f7439535?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFL%2FrBlVUT%2FCUTwJjwlNetQ%3D%3D" },
  { issuer: "LinkedIn", name: "DevOps Foundations: DevSecOps", year: 2019, category: "Cloud & DevOps", link: "https://www.linkedin.com/learning/certificates/682d45e6f97c6faa78ef942daf4d2ffe11ea0357dda8e70f9d6c6208320a93cd?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFL%2FrBlVUT%2FCUTwJjwlNetQ%3D%3D" },
  { issuer: "LinkedIn", name: "Learning Azure DevOps", year: 2019, category: "Cloud & DevOps", link: "https://www.linkedin.com/learning/certificates/63922ba73e7946b517fb0026343d32d128de4105c662c1e3ad5db98873b2bb9b?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFL%2FrBlVUT%2FCUTwJjwlNetQ%3D%3D" },
  

  // Security
  { issuer: "Vanderbilt University", name: "Generative AI Cybersecurity & Privacy for Leaders", year: 2025, category: "Security", link: "https://www.coursera.org/account/accomplishments/verify/JZ92IBOTMOAQ" },
  { issuer: "CybSafe", name: "Certification in Security Awareness", year: 2021, category: "Security", link: "https://www.cybsafe.com/certified-security-awareness-training/?utm_campaign=LinkedIn%20CCSA%20Certificate&utm_source=ccsa&utm_content=ccsa" },
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

  const handleViewCertificate = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleViewCertificate(cert.link)}
                                className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200 hover:scale-110"
                                title="View Certificate"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getYearBadgeColor(cert.year)}`}>
                                {cert.year}
                              </div>
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
