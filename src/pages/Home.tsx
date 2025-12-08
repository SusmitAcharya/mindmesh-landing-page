import { useState, useEffect, useCallback } from "react";
import { Sparkles, Brain, BookOpen, Lightbulb, Network, Mic, Linkedin, Github, Star, RectangleGoggles, School } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Fireflies } from "@/components/Fireflies";
import LoadingScreen from "@/components/LoadingScreen";
import heroPhone from "@/assets/hero-phone-mockup.png";
import founder1 from "@/assets/susmitacharya.png";
import founder2 from "@/assets/yogishkeswani.png";

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [lightPhase, setLightPhase] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
    // Start the lighting sequence after loading screen
    const timers = [
      setTimeout(() => setLightPhase(1), 300),   // MindMesh lights up
      setTimeout(() => setLightPhase(2), 900),   // "Your unified hub" lights up
      setTimeout(() => setLightPhase(3), 1500),  // Subtext lights up
      setTimeout(() => setLightPhase(4), 2100),  // Stats light up
      setTimeout(() => setLightPhase(5), 2700),  // Full page lights up
      setTimeout(() => setIntroComplete(true), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  const features = [
    {
      icon: Brain,
      title: "Stratos Plan",
      description: "Ever felt like your schedule is managing you instead of the other way around? Stratos Plan adapts to your workload automatically, predicts crunch periods, and builds a plan that actually fits how students study—not how calendars think.",
    },
    {
      icon: BookOpen,
      title: "Stratos Tutor",
      description: "Tired of jumping between ten videos and still not getting the concept? Stratos Tutor gives clean, personalized explanations backed by curated content, so students spend less time searching and more time understanding.",
    },
    {
      icon: Sparkles,
      title: "Obu",
      description: "Ever hit that wall where you know what to do but can’t push yourself to start? Obu keeps students grounded and consistent with small nudges, mindset tracking, and motivation that doesn’t feel artificial or overwhelming.",
    },
    {
      icon: Lightbulb,
      title: "Stratos Notes",
      description: "Ever look at your notes and realize they’re just… chaos? Stratos Notes turns raw text into mind maps, summaries, and structured study materials so students can revise with clarity, not confusion.",
    },
    {
      icon: Network,
      title: "Opportunity Hub",
      description: "Ever feel like opportunities only reach the same few students? Opportunity Hub surfaces internships, research roles, and programs tailored to each learner—leveling access instead of leaving it to chance.",
    },
    {
      icon: Network,
      title: "Mesh Connect",
      description: "Ever wanted a study group but didn’t know who to work with? Mesh Connect brings students together to collaborate, ask questions, and learn in a community that builds academic momentum.",
    },
    {
      icon: Mic,
      title: "Mind Cast",
      description: "Ever wish students could share real experiences instead of polished highlights? Mind Cast gives them a space to express challenges, breakthroughs, and journeys—creating a culture of honest, peer-driven growth.",
    },
    {
      icon: School,
      title: "Mesh Link • Late 2026",
      description: "Noticed how schools use five different systems that don’t talk to each other? Mesh Link will aim to unify announcements, tours, student workflows, and integrations into one clean layer that feels modern from day one, without needed expensive management teams, and in a system that is integrated with their own student's workflows, to reduce cognitive load.",
    },
    {
      icon: RectangleGoggles,
      title: "MindMesh Labs (VR/AR) • Late 2027",
      description: "Ever tried learning a complex idea and thought, “I wish I could see this”? MindMesh Labs will bring concepts to life in immersive 3D spaces-labs, systems, and simulations students can explore instead of memorize. But unlike generic haptic feedback models, we will feature sensory neural signals with specifically designed VR headsets, currently under research, so that water feels like water and not mere vibration.",
    },
    {
      icon: RectangleGoggles,
      title: "Mixed Reality Classrooms (MR) • Late 2027",
      description: "Ever seen a school that wants to teach science hands-on but lacks the equipment? Our MR labs will recreate full experiments and models, with the help of MindMesh Labs, without needing expensive physical infrastructure, giving low-resource classrooms the experiences they otherwise cannot access",
    },
  ];

  const founders = [
    {
      name: "Susmit Acharya",
      role: "Co-Founder & CEO",
      image: founder1,
      bio: "Aspiring computer scientist and entrepreneur, passionate about leveraging AI to transform education and empower students worldwide.",
      linkedin: "https://www.linkedin.com/in/susmit-acharya/",
      github: "https://github.com/SusmitAcharya/",
    },
    {
      name: "Yogish Keswani",
      role: "Co-Founder & COO",
      image: founder2,
      bio: "Passionate coder, building AI solutions that make learning and growth accessible and personalized for everyone.",
      linkedin: "https://www.linkedin.com/in/yogishkeswani/",
      github: "https://github.com/Yogishkeswani",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "MindMesh started as a response to a basic problem we kept seeing in classrooms: students were drowning in scattered tools, none designed around how indian academic life works. The idea wasn’t to build another app. The goal was to build a system that treats student time, attention, and opportunity as things worth protecting and steamlines their productivity instead of them having to manage multiple tools and accounts and manually sync routines. The early sketches focused on one question: what would a unified learning workspace look like if it actually reduced cognitive load instead of adding to it?",
    },
    {
      year: "Early 2025",
      title: "Private Beta Launch",
      description: "We pushed out the first private beta in school communities, specifically in the Barasat region, to test our intitial features and gain feedback and analyze demand. The early cohort was because they represented the realest use cases: overloaded high schoolers, competitive exam aspirants, and students trying to balance academics with extracurriculars. Their feedback showed something important. When planning, tutoring, notes, and opportunities lived in one place, students became more organized and more confident in how they managed school.",
    },
    {
      year: "Mid-2025",
      title: "Growth and Spread of Word",
      description: "The impact metrics clarified why the product mattered. More than 150 students saw grade improvements after using Strato Plan and Stratos Tutor together. Over 50 discovered internships or local research roles through OpportunityHub. What this really meant was that access was the bottleneck, not ability, and MindMesh wasn’t just fixing productivity but widening the pathway to opportunities normally concentrated among a small set of students in high-income and high-connection areas.",
    },
    {
      year: "Present",
      title: "Today",
      description: "The focus now is refinement before the public launch. Every iteration comes from live student feedback: where the planner still feels rigid, where the AI explanations need depth, where note-making fails to match how students actually think. The current work is less about adding features and more about adapting the system to feel more intuitive, supportive, and academically honest. We’re tuning the product for scale while keeping its original purpose intact.",
    },
    {
      year: "Mid-2026",
      title: "Estimated Public Launch",
      description: "The public launch will signal the shift from a promising student tool to a global learning environment. Our vision here is straightforward: high-quality academic support should be accessible, not gated behind privilege. The first release will have an upgraded AI tutoring stack, and expanded opportunity matching will set the foundation for a broader ecosystem that schools and independent learners can rely on.",
    },
    {
      year: "2027+",
      title: "The Future",
      description: "The long-term vision is to build the world’s most comprehensive end-to-end learning infrastructure that moves with a student across their academic life namely, planning, studying, creating, experimenting, and exposure to opportunities. We want to make a system that treats AI not as a multiplier for curiosity, agency, and opportunity. With the help of advanced sytems like MindMesh Labs, we want MindMesh to become not just another product or consolidater, but a platform for equalizing the oppurtunites for students, giving everyone a chance to dare to grow.",
    },
  ];

  const testimonials = [
    {
      text: "I used to feel overwhelmed every week because my assignments piled up and regular planners were too chaotic to keep up with everyday. Stratos Plan changed that. Its AI automatically organized my workload and showed me exactly what to focus on each day. School now feels manageable instead of chaotic.",
      rating: 5,
      name: "Sanjana Paik",
      designation: "11th garder, ACS Barasat"
    },
    {
      text: "I wasted hours searching for explanations for concepts and every teacher had a different approach which made me confused on how to approach the problems. Stratos Tutor broke things down in a way I understood immediately and connected my previous learnings. It greatly helped me score well in my ICSE.",
      rating: 5,
      name: "Sagnik Ghosh",
      designation: "10th grader, ACS Barasat"
    },
    {
      text: "I always thought opportunities were for rich students who were better connected. Opportunity Hub proved me wrong, and helped me get internships and take part in programs I never knew existed, and still keeps updating me on latest oppurtunities for high schoolers in low-resource contexts like me.",
      rating: 4,
      name: "Avik Ganguly",
      designation: "12th grader, TCMS"
    },
    {
      text: "My notes used to be messy paragraphs that didn’t help when exams came, because teachers taught too fast to make proper segregated notes and I would be too tired after coming home to sit with them.. Stratos Notes converted them into clear mind maps and summaries quickly, and added missing concepts and flashcards, turning them into something I could actually follow.",
      rating: 5,
      name: "Somdutta Majhi",
      designation: "9th grader, TCMS"
    },
    {
      text: "With Obu, I noticed a clear shift in my child’s mood and consistency. It brought balance by not giving genric AI genrated advice but by helping her understand her habits and optimize them to maximize productivity over 6 weeks.",
      rating: 4,
      name: "Priya Sharma",
      designation: "Parent"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark overlay that fades out */}
        <motion.div 
          className="absolute inset-0 bg-background z-20 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: lightPhase >= 5 ? 0 : 0.85 - (lightPhase * 0.15) }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.div 
          className="absolute inset-0 gradient-mesh"
          initial={{ opacity: 0 }}
          animate={{ opacity: lightPhase >= 5 ? 0.5 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: lightPhase >= 5 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Fireflies />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge - lights up with phase 3 */}
              <motion.div 
                className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-md text-xs text-accent font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: lightPhase >= 3 ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Sparkles className="w-3 h-3 mr-1.5" />
                Coming Soon for the Public in Mid-2026
              </motion.div>

              {/* MindMesh - lights up first (phase 1) */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
                initial={{ opacity: 0.1 }}
                animate={{ 
                  opacity: lightPhase >= 1 ? 1 : 0.1,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className={`transition-all duration-700 ${lightPhase >= 1 ? 'text-gradient' : 'text-muted-foreground/20'}`}>
                  MindMesh
                </span>
              </motion.h1>

              {/* Your unified hub - lights up second (phase 2) */}
              <motion.p 
                className="text-xl sm:text-2xl"
                initial={{ opacity: 0.1 }}
                animate={{ 
                  opacity: lightPhase >= 2 ? 1 : 0.1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className={`transition-colors duration-500 ${lightPhase >= 2 ? 'text-foreground/80' : 'text-muted-foreground/10'}`}>
                  Your unified hub for growth and discovery
                </span>
              </motion.p>

              {/* AI-powered subtext - lights up third (phase 3) */}
              <motion.p 
                className="text-base max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: lightPhase >= 3 ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-muted-foreground">
                  An AI-powered student workspace bringing together planning, learning, 
                  networking, and opportunities for underprivilged students in one seamless platform.
                </span>
              </motion.p>
            </div>

            {/* Phone mockup - lights up with phase 5 */}
            <motion.div 
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: lightPhase >= 5 ? 1 : 0, x: lightPhase >= 5 ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={heroPhone}
                alt="MindMesh App Interface"
                className="w-full max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Everything you need in one place
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

       {/* Timeline Section */}
      <section id="timeline" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent accent-glow border-4 border-background group-hover:scale-125 transition-transform duration-300" />
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2 border border-accent/30">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section id="founders" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Meet the Founders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-card border border-border rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  <a href={founder.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={founder.github} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Hear from Our Users!
            </h2>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto px-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-border bg-card/50">
                      <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                        <p className="text-lg text-foreground/90 italic">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex flex-col items-center space-y-3">
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
