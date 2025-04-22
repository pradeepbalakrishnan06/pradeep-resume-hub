
import { 
  Excel, 
  PowerBi, 
  ChartPie, 
  ChartBar, 
  ChartLine, 
  Azure, 
  Itil, 
  ServiceNow, 
  FileCode, 
  FileText, 
  Sharepoint, 
  PowerAutomate 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
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
    { name: "Excel", icon: Excel, color: "#217346" },
    { name: "Power BI", icon: PowerBi, color: "#F2C811" },
    { name: "Tableau", icon: ChartPie, color: "#E97627" },
    { name: "Looker Studio", icon: ChartBar, color: "#4285F4" },
    { name: "Azure", icon: Azure, color: "#0089D6" },
    { name: "ITIL", icon: Itil, color: "#B52E31" },
    { name: "ServiceNow", icon: ServiceNow, color: "#81B5A1" },
    { name: "BDD", icon: FileCode, color: "#3C873A" },
    { name: "TDD", icon: FileCode, color: "#F44A52" },
    { name: "SharePoint", icon: Sharepoint, color: "#0078D4" },
    { name: "Power Automate", icon: PowerAutomate, color: "#0077FF" },
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
  ];

  const locationData = [
    { name: "India", value: 10 },
    { name: "USA", value: 4.5 },
    { name: "Singapore", value: 0.5 },
  ];

  const COLORS = ["#D3E4FD", "#403E43", "#8A898C", "#F1F0FB"];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title opacity-0 animate-fade-in">Skills & Insights</h2>
        
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 opacity-0 animate-fade-in animation-delay-1">
          <Card className="card-gradient shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-resume-dark-gray">Experience by Role Level</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={experienceByLevel}>
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Years', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="years" fill="#D3E4FD" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-resume-dark-gray">Skills Proficiency</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={skillsRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar 
                      name="Skills" 
                      dataKey="value" 
                      stroke="#403E43" 
                      fill="#D3E4FD" 
                      fillOpacity={0.6} 
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-resume-dark-gray">Experience by Location</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Icons Grid */}
        <h3 className="text-xl font-semibold mb-6 text-resume-dark-gray opacity-0 animate-fade-in animation-delay-2">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in animation-delay-3">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bubble">
              <skill.icon size={18} color={skill.color} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
