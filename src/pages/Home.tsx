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
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-3 py-1.5 bg-muted border border-border rounded-md text-xs text-muted-foreground font-medium">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Coming Mid-2026
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                MindMesh
              </h1>

              <p className="text-xl sm:text-2xl text-foreground/80">
                Your unified hub for academic and personal growth
              </p>

              <p className="text-base text-muted-foreground max-w-xl">
                An AI-powered student workspace bringing together planning, learning, 
                networking, and opportunities in one seamless platform.
              </p>

              <EmailCapture variant="hero" />

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start pt-4">
                <span>1,000+ Beta Users</span>
                <span className="text-border">•</span>
                <span>150+ Students Helped</span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src={heroPhone}
                alt="MindMesh App Interface"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-soft py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-soft-section-foreground">
              Everything you need in one place
            </h2>
            <p className="text-base text-soft-section-foreground/60">
              Purpose-built tools to help you succeed academically and grow personally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-background rounded-lg border border-border"
                >
                  <Icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Get notified when we launch
            </h2>
            <p className="text-base text-muted-foreground">
              Join the waitlist for early access.
            </p>
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
