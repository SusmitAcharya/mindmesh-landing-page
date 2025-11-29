import { Lightbulb, Target, Users, Rocket } from "lucide-react";

const Story = () => {
  const timeline = [
    {
      icon: Lightbulb,
      title: "The Spark",
      description: "Recognizing the fragmentation in student tools and the unequal access to quality educational resources, we envisioned a unified platform where AI could democratize learning support.",
    },
    {
      icon: Target,
      title: "The Mission",
      description: "We set out to build MindMesh—a comprehensive workspace that brings together planning, tutoring, networking, and opportunities under one roof, powered by cutting-edge AI.",
    },
    {
      icon: Users,
      title: "Early Traction",
      description: "Our private beta resonated with students immediately. Over 1,000 downloads, 150+ reporting academic improvements, and 50+ students finding new opportunities through our platform.",
    },
    {
      icon: Rocket,
      title: "The Future",
      description: "With strong early validation, we're preparing for public launch in mid-2026, followed by open-source initiatives and immersive VR/AR learning experiences by 2027.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="text-gradient-neon">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The journey of building an inclusive AI-powered workspace for students worldwide.
          </p>
        </div>

        {/* Origin Story */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Where It All Began</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                MindMesh was born from a simple observation: students today juggle dozens of apps, 
                platforms, and tools to manage their academic lives—calendars for planning, separate 
                apps for notes, different platforms for tutoring, and countless websites to find 
                opportunities.
              </p>
              <p>
                More importantly, we noticed that access to quality educational support wasn't equal. 
                Premium tutoring, advanced planning tools, and career opportunities were often limited 
                to those who could afford them. This wasn't just inefficient—it was inequitable.
              </p>
              <p>
                We asked ourselves: What if there was one unified workspace where AI could provide 
                personalized planning, intelligent tutoring, motivational support, and curated 
                opportunities—accessible to every student, regardless of background?
              </p>
              <p>
                That question became MindMesh.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="section-soft rounded-3xl p-8 sm:p-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-soft-section-foreground">
            Building for Tomorrow
          </h2>
          <div className="space-y-4 text-lg text-soft-section-foreground/80 leading-relaxed">
            <p>
              Our vision extends far beyond a mobile app. We're building infrastructure for the 
              future of education—one where AI augments human learning, where opportunities find 
              students rather than the other way around, and where immersive technologies like 
              VR and AR create entirely new ways to learn and collaborate.
            </p>
            <p>
              By 2027, we plan to establish MindMesh Lab facilities offering immersive learning 
              experiences through mixed reality. We're also committed to making key components 
              open source, fostering a community of developers and educators who share our mission.
            </p>
            <p>
              This is just the beginning. Every student deserves the tools to succeed, and we're 
              determined to make that a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
