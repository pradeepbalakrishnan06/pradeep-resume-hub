
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-resume-blue/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-resume-dark-gray mb-8 opacity-0 animate-fade-in">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-6 opacity-0 animate-fade-in animation-delay-1">
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            I am a senior IT, Product, and Transformation Leader with over 15 years of experience driving large-scale service delivery, operational resilience, and digital transformation across global financial institutions. 
            My career has been shaped by solving complex enterprise challenges where technology, operations, and business outcomes intersect.
          </p>
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            My strengths span product and service strategy, L2/L3 production support transformation, IT operations, and automation-led process optimization. 
            I leverage data, analytics, and governance frameworks to improve reliability, streamline decision-making, and deliver measurable efficiency and cost outcomes across mission-critical environments.
          </p>
          <p className="text-lg md:text-xl text-resume-dark-gray leading-relaxed">
            I have led and influenced high-performing teams across India, the US, EMEA, and APAC, partnering closely with senior stakeholders to translate strategy into execution. 
            Known for a calm, outcome-driven leadership style, I focus on defining clear visions and strategic roadmaps, guiding teams to deliver solutions that align with business goals and create lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
