import { ArrowRight, Sparkles, Brain, BookOpen, Lightbulb, Network, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCapture from "@/components/EmailCapture";
import heroPhone from "@/assets/hero-phone-mockup.png";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "StratoPlan",
      description: "AI-powered planner that adapts to your academic schedule and personal goals.",
    },
    {
      icon: BookOpen,
      title: "Stratos Tutor",
      description: "Intelligent tutoring system with curated video content and personalized explanations.",
    },
    {
      icon: Sparkles,
      title: "Obu",
      description: "Your motivational AI companion keeping you inspired and focused on your journey.",
    },
    {
      icon: Lightbulb,
      title: "StratoNotes",
      description: "Smart note-taking with AI-generated mind maps and study summaries.",
    },
    {
      icon: Network,
      title: "OpportunityHub",
      description: "Discover personalized internships, research opportunities, and academic programs.",
    },
    {
      icon: Network,
      title: "MeshConnect",
      description: "Connect with fellow students, form study groups, and build your academic network.",
    },
    {
      icon: Mic,
      title: "MindCast",
      description: "Share and discover inspiring student stories, experiences, and success journeys.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Coming Soon
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-neon">MindMesh</span>
              </h1>

              <p className="text-xl sm:text-2xl text-foreground/90 font-medium">
                Your unified hub for academic and personal growth
              </p>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                MindMesh is an AI-powered student workspace bringing together planning, learning, 
                networking, and opportunities in one seamless platform. Join the waitlist to be 
                notified when we launch.
              </p>

              <EmailCapture variant="hero" />

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>1,000+ Beta Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span>150+ Students Helped</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
                <img
                  src={heroPhone}
                  alt="MindMesh App Interface"
                  className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-soft py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-soft-section-foreground">
              Powerful Features for Students
            </h2>
            <p className="text-lg text-soft-section-foreground/70 max-w-2xl mx-auto">
              Everything you need to excel academically and grow personally, all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Transform Your Student Experience?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students preparing for the future of education.
            </p>
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
