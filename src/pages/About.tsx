import { Target, Users, TrendingUp, Sparkles } from "lucide-react";

const About = () => {
  const milestones = [
    {
      icon: Users,
      title: "1,000+ Downloads",
      description: "In private beta testing phase",
    },
    {
      icon: TrendingUp,
      title: "150+ Success Stories",
      description: "High school users reporting grade improvements",
    },
    {
      icon: Target,
      title: "50+ Opportunities",
      description: "Students connected to internships and research positions",
    },
    {
      icon: Sparkles,
      title: "Mid-2026 Launch",
      description: "First public version planned release",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-gradient-neon">MindMesh</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An inclusive AI-powered workspace designed to streamline opportunities 
            and unlock potential for every student.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                MindMesh was created with a singular vision: to democratize access to powerful 
                educational tools that help students excel academically while supporting their 
                personal growth journey.
              </p>
              <p>
                We believe that every student deserves access to intelligent planning systems, 
                personalized tutoring, motivational support, and meaningful opportunities—regardless 
                of their background or circumstances.
              </p>
              <p>
                By unifying these essential tools into one seamless platform powered by artificial 
                intelligence, we're making world-class educational support accessible to all.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in">
            Key Milestones
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={milestone.title}
                  className="text-center p-6 bg-card rounded-2xl border border-border hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Plans */}
        <div className="section-soft rounded-3xl p-8 sm:p-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-soft-section-foreground">
            The Road Ahead
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-primary font-bold text-sm mb-2">2026</div>
              <h3 className="text-xl font-bold mb-2 text-soft-section-foreground">Public Launch</h3>
              <p className="text-soft-section-foreground/70">
                Release first public version with core features available to all students worldwide.
              </p>
            </div>
            <div>
              <div className="text-secondary font-bold text-sm mb-2">2027</div>
              <h3 className="text-xl font-bold mb-2 text-soft-section-foreground">Open Source Transition</h3>
              <p className="text-soft-section-foreground/70">
                Making key components open source to foster community development and transparency.
              </p>
            </div>
            <div>
              <div className="text-accent font-bold text-sm mb-2">2027+</div>
              <h3 className="text-xl font-bold mb-2 text-soft-section-foreground">VR/AR Expansion</h3>
              <p className="text-soft-section-foreground/70">
                Launch immersive learning experiences and establish MR lab facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
