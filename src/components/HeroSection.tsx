import { ArrowDown, Award, BriefcaseBusiness, FileText, Globe2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  label,
  icon: Icon,
}: {
  end: number;
  duration?: number;
  label: string;
  icon: typeof BriefcaseBusiness;
}) => {
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
    const counterElement = countRef.current;

    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
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
    <div
      ref={countRef}
      className="group flex min-w-[10rem] flex-col items-center rounded-lg border border-white/70 bg-white/70 p-5 shadow-sm shadow-slate-900/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-resume-terracotta/10 text-resume-terracotta">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div className="mb-1 font-display text-4xl font-bold text-resume-dark-gray md:text-5xl">
        {count}
        <span className="text-2xl text-resume-terracotta md:text-3xl">+</span>
      </div>
      <div className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-resume-medium-gray">
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f8fafc_0%,#eef5f1_36%,#f7fbff_64%,#fff7f4_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(184,80,66,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(74,117,132,0.18),transparent_30%),radial-gradient(circle_at_76%_84%,rgba(167,190,174,0.24),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.34] [background-image:linear-gradient(rgba(64,62,67,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(64,62,67,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/70 bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 hidden h-[72%] w-[42%] border-l border-white/70 bg-white/25 backdrop-blur-[2px] lg:block" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 opacity-0 animate-fade-in lg:grid-cols-[1.08fr_0.92fr]">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-2xl border border-white/70 bg-white/70 shadow-xl shadow-slate-900/10 backdrop-blur-md lg:mx-0">
          <img 
            src="/favicon.ico" 
            alt="Pradeep's Logo" 
              className="h-14 w-14"
          />
          </div>

          <div className="mb-5 inline-flex items-center rounded-full border border-white/70 bg-white/65 px-4 py-2 text-sm font-semibold text-resume-dark-gray shadow-sm backdrop-blur-md">
            Product, transformation and global operations leadership
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-resume-dark-gray md:text-6xl">
          Driving Strategic Change and Product Innovation in Global Operations
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-resume-medium-gray md:text-2xl lg:mx-0">
          15+ years of leadership across product management, transformation, and application support
          </p>
        
          <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <AnimatedCounter end={15} label="Years Experience" icon={BriefcaseBusiness} />
            <AnimatedCounter end={3} label="Countries Worked" icon={Globe2} />
            <AnimatedCounter end={30} label="Certifications" icon={Award} />
          </div>
        
          <div className="mb-12 flex justify-center gap-4 lg:justify-start">
          <Dialog>
            <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2 rounded-md bg-resume-dark-gray px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-black">
                  <FileText size={18} />
                  Resume PDF
              </button>
            </DialogTrigger>
              <DialogContent className="w-full max-w-3xl p-0">
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

        <div className="relative hidden min-h-[31rem] lg:block">
          <div className="absolute left-5 top-8 h-72 w-72 rounded-full border border-resume-sage-gray/30" />
          <div className="absolute bottom-8 right-2 h-80 w-80 rounded-full border border-resume-terracotta/20" />
          <div className="absolute inset-x-6 top-16 rounded-lg border border-white/70 bg-white/60 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-resume-medium-gray">Leadership Focus</div>
                <div className="mt-1 text-xl font-bold text-resume-dark-gray">Enterprise Change Portfolio</div>
              </div>
              <div className="h-3 w-3 rounded-full bg-resume-terracotta shadow-[0_0_0_7px_rgba(184,80,66,0.12)]" />
            </div>

            <div className="space-y-4">
              {[
                ["Product strategy", "Roadmaps, adoption and stakeholder alignment"],
                ["Operations transformation", "Service reliability, process maturity and scale"],
                ["Platform leadership", "Application support, DevOps and governance"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-md border border-slate-200/80 bg-white/70 p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-resume-terracotta" />
                    <h2 className="text-base font-bold text-resume-dark-gray">{title}</h2>
                  </div>
                  <p className="text-sm leading-6 text-resume-medium-gray">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {["ITSM", "AI", "SRE", "PRODUCT MANAGEMENT"].map((item) => (
                <div key={item} className="rounded-md bg-resume-dark-gray px-3 py-3 text-center text-sm font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-md md:bottom-12"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-resume-dark-gray" size={22} />
      </button>
    </section>
  );
};

export default HeroSection;
