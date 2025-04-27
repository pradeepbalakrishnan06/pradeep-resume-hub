import { ArrowDown } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2000, label }: { end: number, duration?: number, label: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center p-6">
      <div className="text-5xl md:text-6xl font-display font-bold text-resume-terracotta mb-2">
        {count}
        <span className="text-4xl">+</span>
      </div>
      <div className="text-base md:text-lg text-resume-dark-gray font-medium text-center">
        {label}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-resume-blue/10 to-white">
      <div className="text-center max-w-4xl mx-auto opacity-0 animate-fade-in">
        <div className="w-32 h-32 rounded-full bg-resume-blue/20 mx-auto mb-8 flex items-center justify-center text-2xl text-resume-dark-gray">
          PB
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-resume-dark-gray mb-4 leading-tight">
          Driving Strategic Change and Product Innovation in Global Operations
        </h1>
        <p className="text-xl md:text-2xl text-resume-medium-gray mb-8">
          15+ years of leadership across product management, transformation, and application support
        </p>
        
        <div className="flex justify-center flex-wrap gap-8 mb-10">
          <AnimatedCounter end={15} label="Years Experience" />
          <AnimatedCounter end={3} label="Countries Worked" />
          <AnimatedCounter end={5} label="Certifications" />
        </div>
        
        <div className="flex justify-center gap-4 mb-16">
          <Dialog>
            <DialogTrigger asChild>
              <button className="py-2 px-6 border border-resume-dark-gray text-resume-dark-gray rounded hover:bg-resume-light-gray transition-colors">
                Resume PDF
              </button>
            </DialogTrigger>
            <DialogContent className="p-0 w-full max-w-3xl">
              <iframe
                src="https://tally.so/r/wkgKaJ"
                width="100%"
                height="600"
                frameBorder="0"
                title="Resume Request Form"
                className="rounded-lg"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-resume-dark-gray" size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
