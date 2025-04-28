
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-white bg-opacity-90 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-resume-dark-gray font-bold text-lg">Pradeep Balakrishnan</div>
        <div className="hidden md:flex gap-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('star')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('certifications')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            Certifications
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-resume-dark-gray hover:text-black transition-colors"
          >
            Contact
          </button>
        </div>
        <div className="block md:hidden">
          {/* Simplified mobile menu - we can enhance this later if desired */}
          <button className="p-2 text-resume-dark-gray">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
