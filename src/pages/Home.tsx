import { Sparkles, Brain, BookOpen, Lightbulb, Network, Mic, Linkedin, Github, Twitter } from "lucide-react";
import heroPhone from "@/assets/hero-phone-mockup.png";
import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";

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

  const founders = [
    {
      name: "Co-Founder 1",
      role: "CEO and CTO",
      image: founder1,
      bio: "Aspiring computer scientist and entrepreneur, passionate about leveraging AI to transform education and empower students worldwide.",
    },
    {
      name: "Co-Founder 2",
      role: "CMO and CFO",
      image: founder2,
      bio: "Passionate Coder Building AI solutions that make learning accessible and personalized for every student.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "MindMesh was born from a simple idea: students need a unified platform that brings together all aspects of academic life.",
    },
    {
      year: "Early 2025",
      title: "Private Beta Launch",
      description: "Released to a select group of 1,000+ students. Early feedback showed significant improvements in academic performance and organization.",
    },
    {
      year: "Mid-2025",
      title: "Growing Impact",
      description: "150+ students reported grade improvements. 50+ students discovered new internships and research opportunities through our platform.",
    },
    {
      year: "Present",
      title: "Today",
      description: "Refining the platform based on real student feedback. Building towards our mid-2026 public launch with enhanced AI features.",
    },
    {
      year: "Mid-2026",
      title: "Public Launch",
      description: "Opening MindMesh to students worldwide. Introducing advanced AI tutoring and expanded opportunity matching.",
    },
    {
      year: "2027+",
      title: "The Future",
      description: "Transitioning to open-source. Launching VR/AR immersive learning experiences. Building dedicated MR lab facilities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-md text-xs text-accent font-medium">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Coming Mid-2026
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                <span className="text-gradient">MindMesh</span>
              </h1>

              <p className="text-xl sm:text-2xl text-foreground/80">
                Your unified hub for academic and personal growth
              </p>

              <p className="text-base text-muted-foreground max-w-xl">
                An AI-powered student workspace bringing together planning, learning, 
                networking, and opportunities in one seamless platform.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start pt-4">
                <span>1,000+ Beta Users</span>
                <span className="text-border">•</span>
                <span>150+ Students Helped</span>
              </div>
            </div>

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
      <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Everything you need in one place
            </h2>
            <p className="text-base text-muted-foreground">
              Purpose-built tools to help you succeed academically and grow personally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section id="founders" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Meet the Founders
            </h2>
            <p className="text-base text-muted-foreground">
              Building the future of student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-sm text-primary mb-4">{founder.role}</p>
                <p className="text-sm text-muted-foreground mb-6">{founder.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Our Journey
            </h2>
            <p className="text-base text-muted-foreground">
              From idea to impact: The MindMesh story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0 group">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent accent-glow border-4 border-background group-hover:scale-125 transition-transform duration-300" />
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2 border border-accent/30">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Get notified when we launch
            </h2>
            <p className="text-base text-muted-foreground">
              Join the waitlist for early access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
