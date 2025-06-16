
import { Linkedin, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-resume-dark-gray text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-0 animate-fade-in">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1">
          Let's connect to explore how I can help drive your product, data, or transformation vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in animation-delay-2">
          <a 
            href="https://www.linkedin.com/in/pb220686/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 py-3 px-6 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors">
                <FileText size={20} />
                <span>Download Resume</span>
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
        <div className="text-sm text-white/60 opacity-0 animate-fade-in animation-delay-3">
          &copy; {new Date().getFullYear()} Pradeep Balakrishnan. All rights reserved.
          <div className="mt-2">
            Last Updated: June'2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

