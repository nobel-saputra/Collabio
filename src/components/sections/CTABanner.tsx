import React from "react";
import Link from "next/link";

const CTABanner = () => {
  // Trusted companies data
  const trustedCompanies = [
    { name: "TechCorp", logo: "TC" },
    { name: "StartupXYZ", logo: "SX" },
    { name: "DesignStudio", logo: "DS" },
    { name: "InnovateLab", logo: "IL" },
    { name: "CloudSoft", logo: "CS" },
    { name: "DataFlow", logo: "DF" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
            Start collaborating{" "}
            <span className="relative inline-block">
              today
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-sky-400 rounded-full"></span>
            </span>{" "}
            for free!
          </h2>

          {/* Subheading */}
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">Join thousands of teams who have already transformed their workflow with Collabio. No credit card required.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Link href={"#"} className="relative group bg-white text-indigo-600 hover:bg-gray-50 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:-translate-y-1">
              Get Started
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            <Link href={"#"} className="relative group border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center">
                Watch Demo
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-indigo-400/50">
            <p className="text-indigo-200 text-sm mb-8 font-medium tracking-wider uppercase">Trusted by teams at innovative companies worldwide</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-90">
              {trustedCompanies.map((company, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center h-20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-1">
                      <span className="text-indigo-700 font-bold text-sm">{company.logo}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 text-indigo-200">
            <div className="flex items-center">
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center">
              <span>Set up in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
