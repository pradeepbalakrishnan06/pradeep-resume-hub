
import { Linkedin, Mail, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-resume-dark-gray text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-0 animate-fade-in">Let's Connect</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1">
          Let's connect to explore how I can help drive your product, data, or transformation vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in animation-delay-2">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:pradeep.balakrishnan@outlook.com" 
            className="flex items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors"
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </a>
        </div>
        <div className="text-sm text-white/60 opacity-0 animate-fade-in animation-delay-3">
          &copy; {new Date().getFullYear()} Pradeep Balakrishnan. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
