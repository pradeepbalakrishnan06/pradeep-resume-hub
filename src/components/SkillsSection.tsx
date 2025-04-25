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
  Play 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

  const COLORS = ["#B85042", "#E7E8D1", "#A7BEAE", "#403E43"];

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
                  <RechartsBarChart data={experienceByLevel}>
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Years', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="years" fill="#D3E4FD" />
                  </RechartsBarChart>
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
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
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
