"use client";

import React, { useState, useEffect } from "react";
import { Quote, Star, Sparkles, ArrowLeft, ArrowRight, Play, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp",
      content: "Collabio has revolutionized how our team works together. The task management features are incredible, and the real-time collaboration has boosted our productivity by 40%. It's not just a tool, it's a game-changer.",
      avatar: "SJ",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      stats: { metric: "40%", label: "Productivity Boost" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      company: "StartupXYZ",
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions and track our progress in real-time. The ROI has been incredible - we've saved over 20 hours per week.",
      avatar: "MC",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      stats: { metric: "20%", label: "Saved Weekly" },
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "DesignStudio",
      content: "The cloud sync feature is a game-changer. Our team can work from anywhere without missing a beat. The interface is intuitive and the support is outstanding. We've reduced project delivery time by 30%.",
      avatar: "ER",
      rating: 5,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      stats: { metric: "30%", label: "Faster Delivery" },
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Park",
      role: "Operations Manager",
      company: "GlobalTech",
      content: "Implementation was seamless and the team adoption was instant. The workflow automation has eliminated 80% of our manual tasks. Customer support is phenomenal - they respond within minutes.",
      avatar: "DP",
      rating: 5,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      stats: { metric: "80%", label: "Tasks Automated" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Lisa Thompson",
      role: "Head of Marketing",
      company: "InnovateCo",
      content: "Collabio transformed our campaign management process. The collaboration features are unmatched, and the reporting capabilities have improved our decision-making speed by 50%. Absolutely love it!",
      avatar: "LT",
      rating: 5,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      stats: { metric: "50%", label: "Faster Decisions" },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonial" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-100/20 to-emerald-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-600 animate-spin" style={{ animationDuration: "3s" }} />
            Loved by Teams Worldwide
            <span className="absolute left-1/2 ms-2 -translate-x-1/2 -bottom-1 w-1/2 border-b-2 border-indigo-700"></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Happy Users</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Join over 50,000+ teams who have transformed their workflow with Collabio. Real stories from real people making real impact.</p>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100/50">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100/50">
              <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">50,000+</p>
              <p className="text-sm text-gray-600">Happy Teams</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100/50">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">99.9%</p>
              <p className="text-sm text-gray-600">Uptime</p>
            </div>
          </div>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`relative bg-gradient-to-br ${testimonial.bgColor} backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                          backgroundSize: "20px 20px",
                        }}></div>
                    </div>

                    {/* Quote Icon */}
                    <div className="relative mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.color} shadow-lg`}>
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mb-8">
                      <p className="text-base sm:text-xl md:text-xlxl lg:text-xl text-gray-700 leading-relaxed font-medium mb-6">&quot;{testimonial.content}&quot;</p>

                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="shadow-xl inline-flex items-center bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center mr-4`}>
                          <span className="text-white font-bold text-lg">{testimonial.stats.metric}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.stats.label}</p>
                          <p className="text-sm text-gray-600">Improvement</p>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="relative flex items-center">
                      <div className="relative">
                        <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg" />

                        <div className={`hidden w-16 h-16 bg-gradient-to-r ${testimonial.color} text-white rounded-2xl items-center justify-center font-bold text-lg shadow-lg border-4 border-white`}>{testimonial.avatar}</div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 font-medium">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group">
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group">
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((testimonial, index: number) => (
            <button key={index} onClick={() => goToSlide(index)} className={`relative w-12 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg" : "bg-gray-300 hover:bg-gray-400"}`}>
              {index === currentSlide && <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>}
            </button>
          ))}
        </div>

        {/* Auto-play control */}
        <div className="text-center mb-12">
          <Link href={"#"} onClick={() => setIsAutoPlaying(!isAutoPlaying)} className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${isAutoPlaying ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
            <Play className={`w-4 h-4 mr-2 ${isAutoPlaying ? "animate-pulse" : ""}`} />
            {isAutoPlaying ? "Auto playing" : "Play slideshow"}
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to join them?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Start your journey today and see why teams love working with Collabio. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">Schedule Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
