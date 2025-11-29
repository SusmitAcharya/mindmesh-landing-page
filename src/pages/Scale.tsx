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
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
            Current Scale
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real numbers from our private beta showing MindMesh's growing impact on student success.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center p-6 bg-card rounded-lg border border-border"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-semibold mb-1">{metric.value}</div>
                <h3 className="text-sm font-medium mb-1">{metric.label}</h3>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Base */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">Growing User Base</h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Our private beta has attracted over 1,500 students across high schools and universities. 
                The organic growth through word-of-mouth validates the real need for a unified 
                AI-powered student workspace.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-semibold text-primary mb-1">60%</div>
                  <p className="text-xs">High School Students</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-semibold text-primary mb-1">30%</div>
                  <p className="text-xs">University Students</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-semibold text-primary mb-1">10%</div>
                  <p className="text-xs">Graduate Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beta Performance */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">Beta Performance Highlights</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">150+ students</strong> reported measurable grade improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">50+ students</strong> connected to opportunities through OpportunityHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">85% retention rate</strong> among beta users after 3 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong className="text-foreground">4.8/5 average rating</strong> from user feedback surveys</span>
              </li>
            </ul>
          </div>

          {/* Revenue Model */}
          <div className="section-soft rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-soft-section-foreground">Revenue Strategy</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-medium mb-2 text-soft-section-foreground">Freemium Model</h3>
                <p className="text-sm text-soft-section-foreground/80 leading-relaxed">
                  Core features including StratoPlan, basic tutoring, and MeshConnect are free for all students. 
                  This ensures accessibility while building a large user base.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2 text-soft-section-foreground">Premium Tier</h3>
                <p className="text-sm text-soft-section-foreground/80 leading-relaxed">
                  Advanced features like unlimited AI tutoring sessions, priority opportunity matching, 
                  advanced analytics, and exclusive content are available through affordable 
                  monthly subscriptions.
                </p>
              </div>
              <div className="bg-background/30 rounded-lg p-5 border border-border/50">
                <p className="text-sm text-soft-section-foreground/80">
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
