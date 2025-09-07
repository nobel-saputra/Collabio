"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-24 lg:py-36 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="relative inline-flex items-center text-indigo-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-600 animate-spin" style={{ animationDuration: "3s" }} />
              Now with AI-powered features
              <span className="absolute left-0 ms-6 -bottom-1 w-1/2 border-b-2 border-indigo-700"></span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Collaborate{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Smarter</span>
              </span>
              , Achieve Faster
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">Collabio helps you streamline projects, tasks, and team communication in one powerful platform designed for modern teams.</p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">10K+</div>
                <div className="text-gray-500">Active Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">98%</div>
                <div className="text-gray-500">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">4.9/5</div>
                <div className="text-gray-500">Rating</div>
              </div>
            </div>

            {/* CTA Lindks */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link href={"#"} className="group relative bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Free Trial
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>

              <Link href={"#"} className="group relative border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-1">
                <span className="relative z-10 flex items-center">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center justify-center lg:justify-start text-gray-500 text-sm">
              <div className="flex items-center">No credit card required</div>
              <span className="mx-3">•</span>
              <div className="flex items-center">Free forever plan</div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Main dashboard illustration */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
                {/* Placeholder for actual image - replace with your dashboard screenshot */}
                <div className="bg-gradient-to-br from-indigo-100 to-sky-100 w-full aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <div className="text-indigo-700 font-semibold">Collabio Dashboard</div>
                    <div className="text-indigo-500 text-sm mt-2">Modern team collaboration</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float">
                <div className="text-2xl">✅</div>
                <div className="text-xs font-medium text-gray-700 mt-1">Tasks Done</div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-2xl">👥</div>
                <div className="text-xs font-medium text-gray-700 mt-1">Team Online</div>
              </div>

              <div className="absolute top-1/2 -left-8 w-20 h-20 bg-indigo-600 text-white rounded-2xl shadow-lg p-3 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-lg">🚀</div>
                <div className="text-xs font-medium mt-1">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
