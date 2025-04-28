
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const tabs = [
  {
    id: "operations",
    label: "Operations Management",
    mobileLabel: "Operations",
    items: [
      {
        situation: "Streamlined change management approvals to boost operational speed without increasing risks.",
        task: "Reduce approval cycle times while maintaining change integrity.",
        action: "Re-engineered approval workflows and introduced early conflict detection mechanisms.",
        result: "Achieved a 20% faster change cycle and 15% reduction in change-related incidents."
      },
      {
        situation: "Lack of visibility into operational SLA adherence.",
        task: "Improve proactive risk tracking for ongoing operations.",
        action: "Designed and implemented SLA compliance dashboards to monitor service levels in real time.",
        result: "Improved SLA compliance tracking by 12%, enabling earlier interventions."
      },
      {
        situation: "Reactive incident response causing delays in operational decision-making.",
        task: "Enhance proactive operational issue resolution.",
        action: "Introduced weekly operations health reviews to anticipate risks.",
        result: "Decreased unplanned incident escalations by 18% over 9 months."
      }
    ]
  },
  {
    id: "service",
    label: "Service Delivery",
    mobileLabel: "Service",
    items: [
      {
        situation: "Fragmented incident management slowing down resolution.",
        task: "Improve MTTR while ensuring escalation visibility.",
        action: "Deployed ServiceNow real-time incident dashboards across L2/L3 support.",
        result: "Reduced MTTR by 18% and improved transparency for critical incidents."
      },
      {
        situation: "Stakeholder dissatisfaction with service communication during outages.",
        task: "Improve stakeholder engagement during major incidents.",
        action: "Redesigned escalation workflows, including proactive stakeholder updates at key stages.",
        result: "Increased stakeholder satisfaction scores by 12% over 6 months."
      },
      {
        situation: "Gaps in daily operational visibility causing delayed interventions.",
        task: "Enable faster service recovery through real-time reviews.",
        action: "Instituted daily standups focusing on incident metrics and action tracking.",
        result: "Reduced major outage incidents by 10%."
      }
    ]
  },
  {
    id: "support",
    label: "Application Support",
    mobileLabel: "Support",
    items: [
      {
        situation: "Application transition delays causing business disruption.",
        task: "Improve transition success rate and timeline adherence.",
        action: "Led transitions using structured KT plans and HCL's ASSeT™ framework.",
        result: "Achieved 98% adherence to transition timelines and 25% higher success rates."
      },
      {
        situation: "Lack of standardized application support documentation.",
        task: "Create operational readiness across incoming applications.",
        action: "Built standardized Knowledge Transfer playbooks across service streams.",
        result: "Reduced post-transition escalations by 22%."
      },
      {
        situation: "Ad hoc application monitoring post-transition causing service gaps.",
        task: "Enable proactive post-transition application support.",
        action: "Implemented application performance baselining post-handover.",
        result: "Reduced incident volumes for new applications by 15%."
      }
    ]
  },
  {
    id: "devops",
    label: "DevOps & Transformation",
    mobileLabel: "DevOps",
    items: [
      {
        situation: "Low DevOps adoption delaying automation and modernization.",
        task: "Accelerate DevOps culture adoption across support and service teams.",
        action: "Created DevOps maturity assessments and customized onboarding workshops.",
        result: "Increased DevOps tool adoption across teams by 35%."
      },
      {
        situation: "Frequent deployment errors impacting service uptime.",
        task: "Reduce human error in software delivery.",
        action: "Drove hands-on automation workshops focused on CI/CD pipelines and monitoring-as-code.",
        result: "Reduced deployment error rates by 22% across critical services."
      },
      {
        situation: "Inconsistent transformation practices across departments.",
        task: "Standardize transformation programs without sacrificing local agility.",
        action: "Designed a lightweight transformation framework aligned with operational risk practices.",
        result: "Improved transformation success rates by 28% while maintaining local flexibility."
      }
    ]
  }
];

const StarMethodSection = () => {
  const isMobile = useIsMobile();
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    setCurrentTab((prev) => (prev + 1) % tabs.length);
  };

  const handlePrev = () => {
    setCurrentTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

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
        
        <div className="relative">
          <Card className="border-0 shadow-sm">
            <CardContent className={isMobile ? "p-3" : "p-6"}>
              <Tabs value={tabs[currentTab].id}>
                <TabsContent value={tabs[currentTab].id} className="mt-4">
                  {renderCardContent(tabs[currentTab])}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

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

          <div className="flex items-center justify-center gap-2 mt-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  currentTab === index ? "bg-resume-terracotta" : "bg-resume-light-gray"
                }`}
                onClick={() => setCurrentTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarMethodSection;
