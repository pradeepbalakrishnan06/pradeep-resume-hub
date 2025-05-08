
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ITIL v4 Foundation Certificate",
      issuer: "Axelos",
      year: "2021",
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      year: "2020",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Coursera",
      year: "2019",
    },
    {
      title: "Python Programming",
      issuer: "Google",
      year: "2025",
    },
    {
      title: "Apache Kafka",
      issuer: "Confluent",
      year: "2022",
    },
  ];

  const education = [
    {
      degree: "MBA",
      institution: "ICFAI University",
      year: "2012",
    },
    {
      degree: "BCA",
      institution: "Dr. BR Ambedkar University",
      year: "2008",
    },
  ];

  const linkedinCerts = [
    "Agile Project Management",
    "Data Analytics Essentials",
    "Chaos Engineering",
    "Cloud Architecture",
    "DevOps Fundamentals"
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-resume-soft-gray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title opacity-0 animate-fade-in">Certifications & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certifications */}
          <div className="space-y-6 opacity-0 animate-fade-in animation-delay-1">
            <h3 className="text-xl font-semibold text-resume-dark-gray">Professional Certifications</h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-6">
                  <h4 className="font-bold text-resume-dark-gray">{cert.title}</h4>
                  <div className="flex justify-between mt-2 text-sm text-resume-medium-gray">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Education */}
          <div className="space-y-6 opacity-0 animate-fade-in animation-delay-2">
            <h3 className="text-xl font-semibold text-resume-dark-gray">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-6">
                  <h4 className="font-bold text-resume-dark-gray">{edu.degree}</h4>
                  <div className="flex justify-between mt-2 text-sm text-resume-medium-gray">
                    <span>{edu.institution}</span>
                    <span>{edu.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* LinkedIn Certifications */}
          <div className="space-y-6 opacity-0 animate-fade-in animation-delay-3">
            <h3 className="text-xl font-semibold text-resume-dark-gray">LinkedIn Certifications</h3>
            <Card className="card-gradient">
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {linkedinCerts.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-resume-blue rounded-full"></div>
                      <span className="text-resume-dark-gray">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
