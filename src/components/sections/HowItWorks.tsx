import React from "react";
import { Rocket, Users, BarChart3, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";

interface Step {
  number: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Create Your Workspace",
      description: "Set up your team workspace in minutes. Invite team members and customize your project structure.",
      Icon: Rocket,
    },
    {
      number: "02",
      title: "Add Your Team",
      description: "Invite team members, assign roles, and set up permissions. Everyone gets access to the tools they need.",
      Icon: Users,
    },
    {
      number: "03",
      title: "Track Projects",
      description: "Monitor progress, manage deadlines, and collaborate in real-time. Keep everyone aligned and productive.",
      Icon: BarChart3,
    },
    {
      number: "04",
      title: "Achieve Results",
      description: "Celebrate successes and iterate on improvements. Watch your team's productivity soar.",
      Icon: Trophy,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-600 animate-spin" style={{ animationDuration: "3s" }} />
            Collab in The Best Way
            <span className="absolute left-1/2 -translate-x-1/2 ms-2 -bottom-1 w-1/2 border-b-2 border-indigo-700"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Collabio</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Get started with our platform in four simple steps and transform how your team collaborates, communicates, and achieves results together.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group h-full">
              {/* Step Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100/50 hover:-translate-y-2 h-full flex flex-col">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <step.Icon className="w-8 h-8 text-indigo-600 group-hover:text-sky-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>

                {/* Step indicator for mobile */}
                <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
              </div>

              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-200 to-sky-200 z-20"></div>}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-indigo-50 text-indigo-700 rounded-full mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Ready to get started?
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"#"} className="bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Start Free Trial
            </Link>
            <Link href={"#"} className="border-2 border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
