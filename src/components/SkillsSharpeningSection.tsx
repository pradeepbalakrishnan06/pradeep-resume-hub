import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, LineChart, Cloud, PieChart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-resume-blue/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-resume-dark-gray">
          🚀 Skills I'm Sharpening
        </h2>
        <p className="text-xl text-resume-medium-gray max-w-3xl mx-auto mb-12">
          As part of my commitment to continuous growth, I am currently advancing skills across key future-focused areas:
        </p>

        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {skills.map((skill, index) => (
              <div
                className="min-w-[90%] md:min-w-[50%] lg:min-w-[33.33%] px-2"
                key={index}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-resume-light-gray to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <skill.icon className="w-6 h-6 text-resume-terracotta" />
                      <div>
                        <h3 className="font-semibold text-lg text-resume-dark-gray mb-2">
                          {skill.title}
                        </h3>
                        <p className="text-resume-medium-gray">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <Button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-resume-terracotta hover:bg-resume-terracotta/90 text-white rounded-full h-10 w-10"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-resume-terracotta hover:bg-resume-terracotta/90 text-white rounded-full h-10 w-10"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {skills.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                selectedIndex === index ? "bg-resume-terracotta" : "bg-resume-light-gray"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSharpeningSection;