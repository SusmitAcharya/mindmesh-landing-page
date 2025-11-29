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
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Meet the <span className="text-gradient-neon">Founders</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A team of innovators committed to transforming education through accessible AI technology.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>

                {/* Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={founder.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center mt-20 p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-border animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Journey?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals passionate about education and technology.
          </p>
          <a
            href="mailto:careers@mindmesh.app"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
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
