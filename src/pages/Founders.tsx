import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";
import founder3 from "@/assets/founder-3.png";
import { Linkedin, Mail } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      image: founder1,
      bio: "Former EdTech product lead passionate about democratizing access to quality education. Alex brings 8+ years of experience in AI-driven learning platforms and has helped scale multiple education startups.",
      linkedin: "#",
      email: "alex@mindmesh.app",
    },
    {
      name: "Jordan Rivera",
      role: "Co-Founder & CTO",
      image: founder2,
      bio: "AI researcher and engineer with a background in machine learning and educational technology. Jordan's expertise in natural language processing powers MindMesh's intelligent tutoring and planning systems.",
      linkedin: "#",
      email: "jordan@mindmesh.app",
    },
    {
      name: "Sam Park",
      role: "Co-Founder & CPO",
      image: founder3,
      bio: "Product designer and former educator who understands student needs firsthand. Sam's vision for intuitive, accessible interfaces ensures MindMesh remains student-focused and easy to use for everyone.",
      linkedin: "#",
      email: "sam@mindmesh.app",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
            Meet the Founders
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A team of innovators committed to transforming education through accessible AI technology.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-card rounded-lg overflow-hidden border border-border"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-sm text-primary">{founder.role}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={founder.linkedin}
                    className="w-9 h-9 bg-muted rounded-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="w-9 h-9 bg-muted rounded-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center mt-20 p-8 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-3">Want to Join Our Journey?</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            We're always looking for talented individuals passionate about education and technology.
          </p>
          <a
            href="mailto:careers@mindmesh.app"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            careers@mindmesh.app
          </a>
        </div>
      </div>
    </div>
  );
};

export default Founders;
