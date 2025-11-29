import { Eye, Layers, School, Zap } from "lucide-react";
import vrConcept from "@/assets/vr-concept.png";

const Vision = () => {
  const futureModules = [
    {
      icon: Eye,
      title: "MindMesh Lab",
      subtitle: "Immersive VR/AR Learning",
      description: "Step into virtual classrooms and laboratories where complex concepts come to life. Explore 3D molecular structures, walk through historical events, or practice presentations in simulated environments.",
      timeline: "2027",
    },
    {
      icon: School,
      title: "CampusLink",
      subtitle: "School Integration Platform",
      description: "Seamless integration with school systems for automatic grade imports, assignment tracking, and direct communication with educators. Making MindMesh the central hub for all academic activities.",
      timeline: "2026-2027",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Future <span className="text-gradient-neon">Vision</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Building the next generation of educational technology through immersive experiences 
            and intelligent integrations.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Beyond the App</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    MindMesh is evolving from a mobile workspace into a comprehensive educational 
                    ecosystem. Our vision extends into immersive technologies and physical learning 
                    spaces that will redefine how students learn, collaborate, and grow.
                  </p>
                  <p>
                    By combining AI intelligence with virtual and augmented reality, we're creating 
                    experiences that make learning more engaging, intuitive, and effective than ever before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Modules */}
        <div className="mb-24 space-y-12">
          {futureModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="max-w-5xl mx-auto animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-3xl overflow-hidden border border-border hover-lift">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold">{module.title}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {module.timeline}
                          </span>
                        </div>
                        <p className="text-xl text-primary/80 font-medium mb-4">{module.subtitle}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VR/AR Vision with Image */}
        <div className="max-w-6xl mx-auto mb-24 animate-fade-in">
          <div className="section-soft rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src={vrConcept}
                  alt="Virtual Reality Learning Concept"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-soft-section-foreground">
                  MindMesh Lab Facilities
                </h2>
                <div className="space-y-4 text-lg text-soft-section-foreground/80 leading-relaxed">
                  <p>
                    By late 2027, we plan to establish physical MindMesh Lab locations where students 
                    can access cutting-edge VR and AR equipment for immersive learning experiences.
                  </p>
                  <p>
                    These facilities will serve as community learning hubs, offering:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>High-end VR/AR hardware and haptic feedback systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Collaborative virtual spaces for group study and projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Expert-led workshops on emerging technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Free access for students who lack personal devices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Commitment */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Open Source Philosophy</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We believe in transparency and community-driven development. Starting in 2027, 
                    we'll open-source key components of MindMesh to foster collaboration with 
                    developers, educators, and researchers worldwide.
                  </p>
                  <p>
                    This commitment ensures that our technology remains accessible, auditable, 
                    and continuously improved by a global community passionate about education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
