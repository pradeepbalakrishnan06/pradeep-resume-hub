
const ExperienceSection = () => {
  const experiences = [
    {
      company: "Credit Suisse",
      role: "VP, India Regional Lead - SRE, DevOps",
      duration: "Oct 2021 – Jun 2023",
      location: "Pune, India",
    },
    {
      company: "UBS",
      role: "Associate Director, Tech Service & PM",
      duration: "Oct 2018 – Sep 2021",
      location: "Pune, India",
    },
    {
      company: "HCL America Inc.",
      role: "Sr. Manager, Service Delivery",
      duration: "Jan 2014 – Sep 2018",
      location: "New Jersey & Tennessee, USA",
    },
    {
      company: "HCL Technologies Ltd.",
      role: "Deputy/Asst. Manager, Sr. Executive",
      duration: "May 2008 – Dec 2013",
      location: "Bangalore, India & Singapore",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-resume-soft-gray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-xl md:text-3xl font-bold mb-4 md:mb-6 opacity-0 animate-fade-in">
          Work Experience
        </h2>
        <h2 className="section-title opacity-0 animate-fade-in">Work Experience</h2>
        <div className="lg:hidden opacity-0 animate-fade-in animation-delay-1">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-resume-dark-gray">{exp.company}</h3>
              <p className="text-resume-dark-gray mt-1">{exp.role}</p>
              <div className="flex justify-between mt-4 text-sm text-resume-medium-gray">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden lg:block opacity-0 animate-fade-in animation-delay-1">
          <div className="grid grid-cols-4 gap-4 font-medium text-resume-medium-gray mb-4 px-4">
            <div>Company</div>
            <div>Role</div>
            <div>Duration</div>
            <div>Location</div>
          </div>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-resume-dark-gray">{exp.company}</div>
                <div className="text-resume-dark-gray">{exp.role}</div>
                <div className="text-resume-medium-gray">{exp.duration}</div>
                <div className="text-resume-medium-gray">{exp.location}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Alternative timeline view for medium screens */}
        <div className="hidden md:block lg:hidden mt-12 opacity-0 animate-fade-in animation-delay-2">
          <div className="ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-resume-dark-gray">{exp.company}</h3>
                  <p className="text-resume-dark-gray mt-1">{exp.role}</p>
                  <div className="flex justify-between mt-4 text-sm text-resume-medium-gray">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
