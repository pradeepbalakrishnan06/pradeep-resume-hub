
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const StarMethodSection = () => {
  const [activeTab, setActiveTab] = useState("product");
  const isMobile = useIsMobile();

  const tabs = [
    {
      id: "product",
      label: "Product Management & Strategy",
      items: [
        {
          situation: "Product teams lacked visibility into timelines.",
          task: "Build roadmap & align priorities.",
          action: "Defined backlog, integrated agile cycles.",
          result: "20% faster releases, stronger stakeholder trust."
        },
        {
          situation: "Fragmented user adoption post-deployment.",
          task: "Improve adoption through strategy.",
          action: "Used analytics & design thinking.",
          result: "25% increase in feature adoption."
        },
        {
          situation: "No live view of sprint progress.",
          task: "Enable real-time tracking.",
          action: "Created Looker Studio & Excel dashboards.",
          result: "10% faster issue resolution."
        }
      ]
    },
    {
      id: "devops",
      label: "Operational Transformation & DevOps",
      items: [
        {
          situation: "SRE practices missing across 200+ apps.",
          task: "Standardize processes.",
          action: "Rolled out BDD, TDD, TOM alignment.",
          result: "30% more reliability."
        },
        {
          situation: "Manual release coordination.",
          task: "Automate workflows.",
          action: "SharePoint + Power Automate.",
          result: "Saved 3 days/release."
        },
        {
          situation: "Change tracking was siloed.",
          task: "Enable visibility.",
          action: "Power BI dashboards for ServiceNow.",
          result: "Real-time transparency."
        }
      ]
    },
    {
      id: "support",
      label: "L2/L3 App Support & Service Delivery",
      items: [
        {
          situation: "Recurring production issues.",
          task: "Minimize reoccurrence.",
          action: "RCA tracking via SharePoint.",
          result: "30% fewer repeats."
        },
        {
          situation: "Legacy apps lacked support continuity.",
          task: "Smooth transition.",
          action: "KT plans + Excel dashboards.",
          result: "98% SLA adherence."
        },
        {
          situation: "Manual BCP coordination.",
          task: "Automate event mgmt.",
          action: "SharePoint test manager.",
          result: "40% faster coordination."
        }
      ]
    },
    {
      id: "data",
      label: "Data Analysis & Visualization",
      items: [
        {
          situation: "Leadership lacked visibility.",
          task: "Build dashboards.",
          action: "Created Looker/Tableau/Excel BI tools.",
          result: "60% less reporting load."
        },
        {
          situation: "Prioritization lacked evidence.",
          task: "Make data-driven.",
          action: "Analyzed usage/adoption data.",
          result: "35% more ROI from features."
        },
        {
          situation: "Teams used separate KPI tools.",
          task: "Standardize metrics.",
          action: "Power BI with shared filters.",
          result: "70% reduction in manual effort."
        }
      ]
    },
    {
      id: "automation",
      label: "Automation & Low-Code Solutions",
      items: [
        {
          situation: "ITSM requests took months.",
          task: "Create quick custom workflows.",
          action: "SharePoint + Power Automate forms.",
          result: "Delivered in days, not months."
        },
        {
          situation: "Event tracking lacked tools.",
          task: "Build lightweight solutions.",
          action: "Custom workflows for BCP, onboarding, releases.",
          result: "50% reduction in planning time."
        }
      ]
    }
  ];

  // Function to render card content based on screen size
  const renderCardContent = (tab) => {
    if (isMobile) {
      return (
        <div className="space-y-4">
          {tab.items.map((item, index) => (
            <Collapsible key={index} className="border border-resume-soft-gray rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-3 bg-resume-soft-gray/50 text-resume-dark-gray font-medium text-left">
                <span>{item.situation}</span>
                <span className="text-sm">View details →</span>
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
    } else {
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
    }
  };

  return (
    <section id="star" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-xl md:text-3xl font-bold mb-4 md:mb-6 opacity-0 animate-fade-in">Explore My Experience by Skill</h2>
        <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-3xl opacity-0 animate-fade-in animation-delay-1">
          The following examples showcase my experience using the STAR method (Situation, Task, Action, Result).
          {isMobile ? ' Tap on different tabs to explore.' : ' Click on different tabs to explore various skill areas.'}
        </p>
        
        <Tabs defaultValue="product" className="opacity-0 animate-fade-in animation-delay-2">
          <TabsList className="w-full flex flex-wrap justify-start mb-6 overflow-x-auto pb-2 gap-1 md:gap-0">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="data-[state=active]:bg-resume-blue data-[state=active]:text-resume-dark-gray text-xs md:text-sm px-2 md:px-4 whitespace-nowrap"
              >
                {isMobile ? tab.label.split(' ')[0] : tab.label}
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
