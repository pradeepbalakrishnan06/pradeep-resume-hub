import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const StarMethodSection = () => {
  const isMobile = useIsMobile();

  const tabs = [
    {
      id: "product",
      label: "Product Strategy",
      mobileLabel: "Product",
      items: [
        {
          situation: "Critical visibility gap: Product teams lacked real-time progress tracking across 50+ agile teams using disparate tools",
          task: "Design and implement comprehensive product roadmap visualization & analytics system using Jira and Tableau",
          action: "Created dynamic Tableau dashboards integrated with Jira, established agile ceremonies, implemented standardized Excel templates for velocity tracking",
          result: "35% faster release cycles, 90% stakeholder satisfaction, real-time visibility into 200+ epics through integrated Jira-Tableau dashboards"
        },
        {
          situation: "Low feature adoption rates (<40%) across enterprise platform serving 10,000+ users",
          task: "Develop data-driven adoption strategy leveraging user analytics and feedback",
          action: "Implemented Tableau user journey analytics, conducted design thinking workshops, created personalized onboarding",
          result: "Increased feature adoption to 75%, reduced support tickets by 45%, achieved 85% user satisfaction"
        },
        {
          situation: "No standardized sprint health metrics across 15 scrum teams",
          task: "Establish unified sprint tracking and performance measurement system",
          action: "Built real-time ServiceNow dashboards tracking velocity, burndown, and quality metrics",
          result: "20% improvement in sprint predictability, 40% reduction in carry-over stories"
        }
      ]
    },
    {
      id: "operations",
      label: "Operations Management",
      mobileLabel: "Operations",
      items: [
        {
          situation: "Manual operational processes causing 40% productivity loss across 200+ team members",
          task: "Implement end-to-end operational automation and standardization using ServiceNow",
          action: "Developed ServiceNow workflow automation, created standardized Excel templates, established KPI tracking in Tableau",
          result: "60% efficiency gain, $2M annual cost savings, 95% process standardization achieved with integrated dashboards"
        },
        {
          situation: "Fragmented operational data across 15+ systems causing reporting delays",
          task: "Create unified operational analytics platform",
          action: "Built integrated Tableau dashboards with automated data pipelines, implemented real-time monitoring",
          result: "85% reduction in reporting time, 99% data accuracy, 24/7 operational visibility"
        }
      ]
    },
    {
      id: "service",
      label: "Service Delivery",
      mobileLabel: "Service",
      items: [
        {
          situation: "30% SLA breaches in critical incident management across global operations",
          task: "Transform incident management framework and team capabilities",
          action: "Implemented ITIL-based processes, created incident playbooks, established war room protocols",
          result: "95% SLA compliance, 50% faster MTTR, zero critical incidents in 6 months"
        },
        {
          situation: "Unstructured service delivery causing 25% resource wastage",
          task: "Design and implement service delivery optimization program",
          action: "Created service catalog, implemented resource allocation model, established SLA framework",
          result: "40% cost optimization, 90% customer satisfaction, 30% improved resource utilization"
        }
      ]
    },
    {
      id: "support",
      label: "Service Excellence",
      mobileLabel: "Support",
      items: [
        {
          situation: "Critical production issues had 40% recurrence rate impacting SLAs",
          task: "Implement robust problem management framework",
          action: "Created ServiceNow-integrated RCA tracking system with automated trend analysis",
          result: "Reduced recurring issues by 80%, improved MTTR by 60%, achieved 99.5% SLA compliance"
        },
        {
          situation: "Knowledge gaps in 25+ legacy applications risking support continuity",
          task: "Establish comprehensive knowledge transfer system",
          action: "Developed structured KT framework with ServiceNow knowledge base integration",
          result: "100% knowledge coverage, reduced onboarding time by 50%, maintained 98% support SLAs"
        },
        {
          situation: "BCP/DR events required 48+ hours of manual coordination",
          task: "Streamline BCP/DR event management",
          action: "Created automated SharePoint workflow system for BCP coordination and testing",
          result: "Reduced event coordination to 4 hours, achieved 100% DR test success rate"
        }
      ]
    },
    {
      id: "devops",
      label: "DevOps Excellence",
      mobileLabel: "DevOps",
      items: [
        {
          situation: "200+ applications lacked standardized SRE practices, causing frequent outages",
          task: "Transform operational reliability through DevOps best practices and monitoring",
          action: "Implemented Jira workflows for sprint management, established SLOs with Tableau monitoring, created automated health checks in ServiceNow",
          result: "99.9% availability achieved, 70% reduction in P1 incidents, 45% faster MTTR with real-time Tableau dashboards"
        },
        {
          situation: "Complex release process requiring 5+ days of manual coordination across teams",
          task: "Automate end-to-end release management workflow",
          action: "Built SharePoint-based release automation with Power Automate, integrated with ServiceNow for approvals",
          result: "Reduced release time to 1 day, eliminated 90% of manual tasks, zero deployment failures"
        },
        {
          situation: "No centralized change tracking across 300+ monthly deployments",
          task: "Create unified change management visibility system",
          action: "Developed ServiceNow dashboard suite with real-time metrics and automated reporting",
          result: "100% change compliance, 50% reduction in failed changes, real-time executive visibility"
        }
      ]
    },
    {
      id: "data",
      label: "Data Analytics",
      mobileLabel: "Analytics",
      items: [
        {
          situation: "Leadership spent 20+ hours monthly compiling performance metrics",
          task: "Build automated analytics ecosystem",
          action: "Implemented integrated Tableau/ServiceNow dashboard suite with automated data pipelines",
          result: "90% reduction in reporting effort, real-time insights for 50+ KPIs"
        },
        {
          situation: "Feature prioritization based on subjective inputs, leading to low ROI",
          task: "Implement data-driven prioritization framework",
          action: "Created Tableau analytics suite measuring user engagement, business impact, and technical debt",
          result: "40% higher feature ROI, 75% stakeholder satisfaction with prioritization"
        }
      ]
    }
  ];

  const renderCardContent = (tab) => {
    if (isMobile) {
      return (
        <div className="space-y-4">
          {tab.items.map((item, index) => (
            <Collapsible key={index} className="border border-resume-soft-gray rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-3 bg-resume-soft-gray/50 text-resume-dark-gray font-medium text-left">
                <span className="pr-4">{item.situation}</span>
                <span className="text-sm shrink-0">Details →</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-3 space-y-2 border-t border-resume-soft-gray/50">
                <div>
                  <span className="font-semibold text-resume-dark-gray">Task:</span>
                  <p className="text-resume-dark-gray">{item.task}</p>
                </div>
                <div>
                  <span className="font-semibold text-resume-dark-gray">Action:</span>
                  <p className="text-resume-dark-gray">{item.action}</p>
                </div>
                <div>
                  <span className="font-semibold text-resume-dark-gray">Result:</span>
                  <p className="text-resume-dark-gray">{item.result}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-resume-soft-gray border-b">
              <th className="text-left p-4 text-resume-dark-gray font-semibold">Situation</th>
              <th className="text-left p-4 text-resume-dark-gray font-semibold">Task</th>
              <th className="text-left p-4 text-resume-dark-gray font-semibold">Action</th>
              <th className="text-left p-4 text-resume-dark-gray font-semibold">Result</th>
            </tr>
          </thead>
          <tbody>
            {tab.items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-resume-soft-gray/20 transition-colors">
                <td className="p-4 text-resume-dark-gray">{item.situation}</td>
                <td className="p-4 text-resume-dark-gray">{item.task}</td>
                <td className="p-4 text-resume-dark-gray">{item.action}</td>
                <td className="p-4 text-resume-dark-gray">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section id="star" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-xl md:text-3xl font-bold mb-4 md:mb-6 opacity-0 animate-fade-in">
          Experience & Impact
        </h2>
        <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-3xl opacity-0 animate-fade-in animation-delay-1">
          Explore key achievements and measurable impact across different domains using the STAR method 
          (Situation, Task, Action, Result).
        </p>
        
        <Tabs defaultValue="product" className="opacity-0 animate-fade-in animation-delay-2">
          <TabsList className="flex flex-wrap justify-start mb-6 gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="data-[state=active]:bg-resume-blue data-[state=active]:text-resume-dark-gray px-4 py-2 whitespace-nowrap text-sm md:text-base"
              >
                {isMobile ? tab.mobileLabel : tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-4">
              <Card className="border-0 shadow-sm">
                <CardContent className={isMobile ? "p-3" : "p-0"}>
                  {renderCardContent(tab)}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default StarMethodSection;
