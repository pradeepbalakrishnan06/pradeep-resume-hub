
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import StarMethodSection from "@/components/StarMethodSection";
import SkillsSection from "@/components/SkillsSection";
import SkillsSharpeningSection from "@/components/SkillsSharpeningSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Add animation classes to elements as they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.opacity-0');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('opacity-100');
            }, index * 150); // Stagger animations for elements within a section
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StarMethodSection />
      <SkillsSharpeningSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
