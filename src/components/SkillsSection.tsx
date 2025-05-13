import { 
  FileSpreadsheet, 
  BarChart4, 
  PieChart, 
  BarChart, 
  LineChart, 
  Cloud, 
  Workflow, 
  MessagesSquare, 
  FileCode, 
  FileText, 
  Share2, 
  Play,
  Database,
  GitBranch,
  Terminal,
  Settings,
  Code,
  Globe,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from "recharts";

const SkillsSection = () => {
  const skills = [
    { name: "Excel", icon: FileSpreadsheet, color: "#B85042" },
    { name: "Power BI", icon: BarChart4, color: "#A7BEAE" },
    { name: "Tableau", icon: PieChart, color: "#E7E8D1" },
    { name: "Looker Studio", icon: BarChart, color: "#4285F4" },
    { name: "Azure", icon: Cloud, color: "#0089D6" },
    { name: "ITIL", icon: Workflow, color: "#B52E31" },
    { name: "ServiceNow", icon: MessagesSquare, color: "#81B5A1" },
    { name: "BDD", icon: FileCode, color: "#3C873A" },
    { name: "TDD", icon: FileCode, color: "#F44A52" },
    { name: "SharePoint", icon: Share2, color: "#0078D4" },
    { name: "Power Automate", icon: Play, color: "#0077FF" },
    { name: "SQL", icon: Database, color: "#336791" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "Agile", icon: Workflow, color: "#0052CC" },
    { name: "Jira", icon: FileText, color: "#0052CC" },
    { name: "Python", icon: Code, color: "#3776AB" },
  ];

  const experienceByLevel = [
    { name: "VP", years: 1.5 },
    { name: "Director", years: 3 },
    { name: "Sr. Manager", years: 4.5 },
    { name: "Manager", years: 3 },
    { name: "Executive", years: 3 },
  ];

  const skillsRadarData = [
    { skill: "DevOps", value: 85 },
    { skill: "ITIL", value: 90 },
    { skill: "SRE", value: 75 },
    { skill: "Product Mgmt", value: 95 },
    { skill: "Data Viz", value: 80 },
    { skill: "Cloud", value: 70 },
    { skill: "Automation", value: 85 },
    { skill: "SQL", value: 80 },
  ];

  const locationData = [
    { name: "India", value: 10 },
    { name: "USA", value: 4.5 },
    { name: "Singapore", value: 0.5 },
  ];

  const companyDurationData = [
    { name: "Credit Suisse", value: 1.7 },
    { name: "UBS", value: 3 },
    { name: "HCL", value: 10.3 },
  ];

  const COLORS = ["#B85042", "#E7E8D1", "#A7BEAE"];
  
  const skillInsights = [
    {
      title: "Skills Proficiency",
      insight: "Mastery across DevOps practices, SRE implementation, and cloud platforms, with deep expertise in data visualization using Tableau and ServiceNow dashboards.",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={skillsRadarData}>
            <PolarGrid stroke="#E7E8D1" />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis domain={[0, 100]} stroke="#A7BEAE" />
            <Radar 
              name="Skills" 
              dataKey="value" 
              stroke="#A7BEAE" 
              fill="#E7E8D1" 
              fillOpacity={0.6} 
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Career Progression",
      insight: "15+ years of transformative leadership across global banking and technology domains, consistently driving innovation through Jira-Tableau integrated solutions.",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={experienceByLevel}>
            <XAxis dataKey="name" stroke="#A7BEAE" />
            <YAxis label={{ value: 'Years', angle: -90, position: 'insideLeft', fill: "#A7BEAE" }} stroke="#A7BEAE" />
            <Tooltip />
            <Bar dataKey="years" fill="#B85042" />
          </RechartsBarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Global Impact",
      insight: "Led diverse teams across three continents, implementing Excel-Tableau integrated reporting solutions for enhanced cross-border collaboration.",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <RechartsPieChart>
            <Pie
              data={locationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              stroke="none"
            >
              {locationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Enterprise Experience",
      insight: "Empowered global enterprises through strategic process optimization, operational excellence, and insight-driven decision support.",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <RechartsPieChart>
            <Pie
              data={companyDurationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name} ${value}y`}
              stroke="none"
            >
              {companyDurationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skillInsights.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skillInsights.length) % skillInsights.length);
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-r from-resume-blue/10 via-resume-blue/20 to-resume-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-resume-dark-gray mb-12 opacity-0 animate-fade-in">
            Skills & Insights
        </h2>
        
        <div className="relative">
          <Card className="w-[90%] mx-auto opacity-0 animate-fade-in shadow-none border-0">
            <CardContent className="p-8">
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
                    <div className="w-full h-full">
                      {skillInsights[currentIndex].chart}
                    </div>
                  </div>
                  <div className="order-2 space-y-4">
                    <h3 className="text-3xl font-bold text-resume-dark-gray">
                      {skillInsights[currentIndex].title}
                    </h3>
                    <p className="text-xl text-resume-medium-gray leading-relaxed">
                      {skillInsights[currentIndex].insight}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handlePrev}
                    className="rounded-full bg-resume-terracotta hover:bg-resume-terracotta/90 text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleNext}
                    className="rounded-full bg-resume-terracotta hover:bg-resume-terracotta/90 text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {skillInsights.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-resume-terracotta" : "bg-resume-light-gray"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-16 mb-6 text-resume-dark-gray opacity-0 animate-fade-in">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-0 animate-fade-in">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-4 py-2 bg-resume-light-gray rounded-lg hover:bg-resume-blue/10 transition-colors"
            >
              <skill.icon size={18} color={skill.color} />
              <span className="text-resume-dark-gray">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
