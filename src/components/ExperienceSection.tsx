import React, { useState } from "react";
import { Briefcase, Building2, Calendar } from "lucide-react";

const experiences = [
  { id: 1, year: 2008, company: "HCL Technologies Ltd.", role: "Assistant Manager / Sr. Executive (Operations & Service Delivery)", duration: "2008 – 2009", location: "Bengaluru, Karnataka, India" },
  { id: 2, year: 2009, company: "HCL Singapore Pte. Ltd.", role: "Deputy Manager / Manager (Operations & Service Delivery)", duration: "2009 – 2011", location: "Singapore" },
  { id: 3, year: 2014, company: "HCL America Inc.", role: "Sr. Manager(Product, Platform Manager & Service Delivery)", duration: "2014 – 2018", location: "Nashville, Tennessee, & New Jersey, USA" },
  { id: 4, year: 2018, company: "UBS", role: "Associate Director (Tech Service Delivery & Product Management)", duration: "2018 – 2021", location: "Pune, Maharashtra, India" },
  { id: 5, year: 2021, company: "Credit Suisse / UBS", role: "Vice President, India Regional Lead - Ops., Product & Platform Manager (New Tech Adoption, DevOps & SRE)", duration: "2021 – 2023", location: "Pune, Maharashtra, India" },
  { id: 6, year: 2023, company: "Freelance / Consultant", role: "Independent ITSM, Transformation & Data Visualization Consultant", duration: "2023 – Present", location: "Bengaluru, Karnataka, India" },
];

export default function ExperienceGraphTable() {
  const graphExperiences = [...experiences];
  const sortedExperiences = experiences
    .filter(exp => exp.company !== "Freelance / Consultant")
    .sort((a, b) => b.year - a.year);
  const finalExperiences = [...sortedExperiences, experiences.find(exp => exp.company === "Freelance / Consultant")];

  const [activeIds, setActiveIds] = useState<number[]>([]);

  const handleSelect = (id: number, index: number) => {
    // Highlight 2008 bullet -> HCL Technologies Ltd., 2009 bullet -> HCL Singapore
    if (index === 0) {
      setActiveIds([1]);
    } else if (index === 1) {
      setActiveIds([2]);
    } else {
      setActiveIds([id]);
    }
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-white to-resume-soft-gray/60">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Work Experience</h2>

        {/* HORIZONTAL TIMELINE GRAPH */}
        <div className="relative mb-8 overflow-x-auto">
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

          <div className="flex justify-between py-6 w-full">
            {graphExperiences.map((exp, index) => (
              <div key={exp.id} className="flex flex-col items-center min-w-[80px]">
                <div
                  onMouseEnter={() => handleSelect(exp.id, index)}
                  onClick={() => handleSelect(exp.id, index)}
                  className={`w-6 h-6 rounded-full cursor-pointer z-10 bg-[#9C2007] shadow-lg ring-4 transition-all ${
                    activeIds.includes(exp.id) ? "ring-[#9C2007]/30" : "ring-white"
                  }`}
                />
                <div className="mt-3 text-sm font-semibold text-gray-500 text-center">{exp.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold">Career Progression Timeline</h3>
          <p className="text-sm text-gray-500 mt-1">
            A visual overview of role progression across global banking, consulting, and transformation engagements.
          </p>
        </div>

        {/* TABLE (Freelance last) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="grid grid-cols-4 gap-4 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 border-b bg-gray-50">
            <div>Company</div>
            <div>Role</div>
            <div>Tenure</div>
            <div>Location</div>
          </div>

          {finalExperiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => setActiveIds([exp.id])}
              onClick={() => setActiveIds([exp.id])}
              className={`grid grid-cols-4 gap-4 px-5 py-5 text-sm cursor-pointer transition-all ${
                activeIds.includes(exp.id) ? "bg-[#9C2007]/30 border-l-4 border-[#9C2007]" : "hover:bg-gray-50"
              }`}
            >
              <div className="font-semibold flex items-center gap-2">
                <Briefcase size={16} className="text-white" /> {exp.company}
              </div>
              <div className="text-gray-700">{exp.role}</div>
              <div className="text-gray-500">{exp.duration}</div>
              <div className="text-gray-500">{exp.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
