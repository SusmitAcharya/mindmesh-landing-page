import { Users, TrendingUp, DollarSign, Globe } from "lucide-react";

const Scale = () => {
  const metrics = [
    {
      icon: Users,
      value: "1,500+",
      label: "Active Users",
      description: "Students using MindMesh in private beta",
    },
    {
      icon: TrendingUp,
      value: "150+",
      label: "Success Stories",
      description: "High school users reporting grade improvements",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Opportunities Connected",
      description: "Internships and research positions matched",
    },
    {
      icon: DollarSign,
      value: "Freemium",
      label: "Business Model",
      description: "Core features free, premium add-ons available",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Current <span className="text-gradient-neon">Scale</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real numbers from our private beta showing MindMesh's growing impact on student success.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center p-8 bg-card rounded-3xl border border-border hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient-neon mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* User Base */}
          <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Growing User Base</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our private beta has attracted over 1,500 students across high schools and universities. 
                The organic growth through word-of-mouth validates the real need for a unified 
                AI-powered student workspace.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">60%</div>
                  <p className="text-sm">High School Students</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-1">30%</div>
                  <p className="text-sm">University Students</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-1">10%</div>
                  <p className="text-sm">Graduate Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beta Performance */}
          <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold mb-6">Beta Performance Highlights</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span><strong className="text-foreground">150+ students</strong> reported measurable grade improvements after using StratoPlan and Stratos Tutor</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span><strong className="text-foreground">50+ students</strong> connected to internships, research opportunities, and academic programs through OpportunityHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span><strong className="text-foreground">85% retention rate</strong> among beta users after 3 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span><strong className="text-foreground">4.8/5 average rating</strong> from user feedback surveys</span>
              </li>
            </ul>
          </div>

          {/* Revenue Model */}
          <div className="section-soft rounded-3xl p-8 sm:p-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold mb-6 text-soft-section-foreground">Revenue Strategy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-soft-section-foreground">Freemium Model</h3>
                <p className="text-lg text-soft-section-foreground/80 leading-relaxed">
                  Core features including StratoPlan, basic tutoring, and MeshConnect are free for all students. 
                  This ensures accessibility while building a large user base.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-soft-section-foreground">Premium Tier</h3>
                <p className="text-lg text-soft-section-foreground/80 leading-relaxed">
                  Advanced features like unlimited AI tutoring sessions, priority opportunity matching, 
                  advanced analytics, and exclusive content through MindCast are available through affordable 
                  monthly subscriptions.
                </p>
              </div>
              <div className="bg-background/30 rounded-xl p-6 border border-border/50">
                <p className="text-soft-section-foreground/80">
                  <strong className="text-soft-section-foreground">Early pricing:</strong> $9.99/month for premium features, 
                  with student discounts and institutional licensing options planned for public launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
