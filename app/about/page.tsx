import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Code2, Briefcase, Brain, Palette, Rocket, Users, Globe, Trophy } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering results that matter.",
  },
  {
    title: "Quality Code",
    description: "We write clean, maintainable code that scales with your business.",
  },
  {
    title: "Agile Approach",
    description: "Flexible and iterative development to adapt to changing needs.",
  },
];

const team = [
  {
    name: "Carlos Hempel",
    role: "CEO & Founder",
    bio: "15+ years of software development and leadership experience. Passionate about building innovative solutions that transform businesses.",
    icon: Rocket,
    achievements: ["Former Tech Lead at Fortune 500", "Multiple Industry Awards", "Published Author"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in cloud architecture and scalable systems. Leading our technical vision and innovation strategy.",
    icon: Brain,
    achievements: ["Cloud Architecture Expert", "20+ Enterprise Solutions", "Tech Conference Speaker"]
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in modern web technologies and performance optimization.",
    icon: Code2,
    achievements: ["Open Source Contributor", "Performance Optimization Specialist", "10+ Years Experience"]
  },
  {
    name: "Emily Park",
    role: "Design Director",
    bio: "Creating intuitive and beautiful user experiences that delight and engage.",
    icon: Palette,
    achievements: ["Award-winning Designer", "UX/UI Expert", "Design Systems Architect"]
  },
  {
    name: "David Kumar",
    role: "Business Development",
    bio: "Building strategic partnerships and helping businesses achieve their digital transformation goals.",
    icon: Briefcase,
    achievements: ["500+ Client Relations", "Strategic Growth Expert", "Industry Consultant"]
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Ensuring smooth project delivery and exceptional client satisfaction through agile methodologies.",
    icon: Users,
    achievements: ["Certified Scrum Master", "100+ Projects Delivered", "Team Leadership"]
  },
  {
    name: "James Wilson",
    role: "Solutions Architect",
    bio: "Designing robust and scalable solutions that meet complex business requirements.",
    icon: Globe,
    achievements: ["Enterprise Architecture", "Cloud Solutions", "Technical Leadership"]
  },
  {
    name: "Maria Garcia",
    role: "Quality Assurance Lead",
    bio: "Maintaining the highest standards of quality through comprehensive testing and validation.",
    icon: Trophy,
    achievements: ["Test Automation Expert", "Quality Standards", "Process Optimization"]
  }
];

const benefits = [
  "Experienced team of developers and designers",
  "Proven track record of successful projects",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Competitive pricing",
  "Quick turnaround time",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About <span className="text-green-500">CodeWhiz</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're a team of passionate developers, designers, and digital experts committed to delivering exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative h-[500px] lg:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At CodeWhiz, we're on a mission to transform businesses through innovative digital solutions. We believe in creating technology that not only solves problems but drives growth and success for our clients.
              </p>
              <div className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-none text-green-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button className="bg-green-500 hover:bg-green-600 text-black" asChild>
                  <Link href="/contact">
                    Work with Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="bg-black/40 border-green-500/20 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Meet the experts behind CodeWhiz
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <Card 
                  key={member.name} 
                  className="bg-black/40 border-green-500/20 p-8 hover:bg-green-500/5 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-green-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}