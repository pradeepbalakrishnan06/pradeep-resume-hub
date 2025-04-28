
import { Star, LineChart, Cloud, PieChart, Lock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Star,
    title: "AI Fundamentals & Prompts",
    description: "Mastering AI prompting techniques and ethical AI applications.",
  },
  {
    icon: LineChart,
    title: "Agile Project Management",
    description: "Driving Agile execution, team collaboration, and project delivery.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Building cloud infrastructure skills using Kubernetes and Python.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Visualizing data insights using modern plotting libraries.",
  },
  {
    icon: Lock,
    title: "AI Security",
    description: "Understanding security risks in Generative AI solutions.",
  },
];

const SkillsSharpeningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-resume-dark-gray mb-4 flex items-center justify-center gap-2">
            🚀 Skills I'm Sharpening
          </h2>
          <p className="text-xl text-resume-medium-gray max-w-3xl mx-auto">
            As part of my commitment to continuous growth, I am currently advancing skills across key future-focused areas:
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {skills.map((skill, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-to-br from-resume-light-gray to-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <skill.icon className="w-6 h-6 text-resume-terracotta" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-resume-dark-gray mb-2">
                          {skill.title}
                        </h3>
                        <p className="text-resume-medium-gray">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default SkillsSharpeningSection;
