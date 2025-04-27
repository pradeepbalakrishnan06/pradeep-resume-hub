
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
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  
  const carouselSlides = [
    {
      title: "Skills Proficiency",
      insight: "Proficient across DevOps, SRE, Data Visualization, and Cloud platforms.",
      chart: (
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius={90} data={skillsRadarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis domain={[0, 100]} />
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
      title: "Years of Experience",
      insight: "15+ years in transformation leadership across Banking and Technology domains.",
      chart: (
        <ResponsiveContainer width="100%" height={250}>
          <RechartsBarChart data={experienceByLevel}>
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Years', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="years" fill="#B85042" />
          </RechartsBarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Global Exposure",
      insight: "Led teams across India, USA, and Singapore, driving multicultural collaboration.",
      chart: (
        <ResponsiveContainer width="100%" height={250}>
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
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Company Experience",
      insight: "Built expertise across global financial institutions and tech service providers.",
      chart: (
        <ResponsiveContainer width="100%" height={250}>
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

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-resume-dark-gray mb-12 opacity-0 animate-fade-in">Skills & Insights</h2>
        
        <div className="mb-16 opacity-0 animate-fade-in animation-delay-1">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselSlides.map((slide, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                  <Card className="card-gradient shadow-md h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-2 text-resume-dark-gray">{slide.title}</h3>
                      <p className="text-resume-medium-gray mb-4">{slide.insight}</p>
                      <div className="flex-grow">
                        {slide.chart}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-resume-dark-gray opacity-0 animate-fade-in animation-delay-2">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-0 animate-fade-in animation-delay-3">
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
