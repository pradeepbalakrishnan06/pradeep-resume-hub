
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-resume-blue/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-resume-dark-gray mb-8 opacity-0 animate-fade-in">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-6 opacity-0 animate-fade-in animation-delay-1">
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            As a seasoned Product and Transformation Leader with over 15 years of experience in global financial institutions, 
            I bring a unique blend of technical expertise and strategic vision to drive organizational success.
          </p>
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            My core strengths lie in product strategy development, L2/L3 application support enhancement, and process automation implementation. 
            I've consistently leveraged data-driven insights to make impactful decisions that have transformed operations and improved efficiency.
          </p>
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            Throughout my career, I've successfully led high-performance teams across multiple geographies, managing complex projects 
            and delivering measurable outcomes in challenging enterprise environments. My approach combines technical acumen with 
            strategic thinking to drive sustainable growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
