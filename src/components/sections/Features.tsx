import React from "react";
import { CheckSquare, BarChart3, Users, Sparkles, Cloud, Clock, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";

interface Feature {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const Features = () => {
  const features: Feature[] = [
    {
      Icon: CheckSquare,
      title: "Task Management",
      description: "Organize and track all your tasks with our intuitive task management system. Set priorities, deadlines, and collaborate seamlessly.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      Icon: BarChart3,
      title: "Project Analytics",
      description: "Get detailed insights into your project performance with comprehensive analytics and reporting tools.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      Icon: Users,
      title: "Team Collaboration",
      description: "Foster better teamwork with real-time collaboration features, shared workspaces, and instant communication.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      Icon: Cloud,
      title: "Cloud Sync",
      description: "Access your projects anywhere, anytime with our secure cloud synchronization across all your devices.",
      color: "text-sky-600",
      bgColor: "bg-sky-50",
    },
    {
      Icon: Clock,
      title: "Time Tracking",
      description: "Monitor project timelines and team productivity with built-in time tracking and reporting features.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      Icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption, two-factor authentication, and compliance certifications.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      Icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and create custom workflows to streamline your team's processes.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      Icon: Globe,
      title: "Global Access",
      description: "Work from anywhere with our global CDN ensuring fast access and performance worldwide.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-200/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-600 animate-spin" style={{ animationDuration: "3s" }} />
            Powerfull Features
            <span className="absolute left-1/2 ms-2 -translate-x-1/2 -bottom-1 w-1/2 border-b-2 border-indigo-700"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Team Needs</span> to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Designed for modern teams, our platform provides all the tools you need to manage projects, collaborate effectively, and achieve your goals faster than ever before.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-indigo-100 hover:-translate-y-3 h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Enhanced hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-indigo-50/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Icon container with enhanced styling */}
              <div className="relative mb-6">
                <div className={`relative w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 rounded-xl ${feature.bgColor} opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <feature.Icon className={`w-8 h-8 ${feature.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Floating particle effect */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 ${feature.bgColor} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500`}></div>
              </div>

              {/* Title with enhanced typography */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300 leading-tight">{feature.title}</h3>

              {/* Description with better spacing */}
              <p className="text-gray-600 leading-relaxed flex-grow mb-6 text-sm">{feature.description}</p>

              {/* Enhanced learn more link */}
              <div className="mt-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4"></div>
                <Link href="#" className={`inline-flex items-center ${feature.color} font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hover:gap-2 gap-1`}>
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${feature.bgColor} rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-24">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-12 shadow-xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your team&apos;s workflow?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Join thousands of teams already using our platform to boost productivity and achieve better results.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={"#"} className="group bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                    Start Free Trial
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>

                  <Link href={"#"} className="group border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
