"use client";

import React, { useState } from "react";
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for small teams",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Everything you need to get started",
      features: ["Up to 5 team members", "Basic task management", "5GB cloud storage", "Email support", "Basic analytics dashboard", "Mobile app access"],
      cta: "Start Free",
      popular: false,
      icon: Star,
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      name: "Professional",
      tagline: "Most popular choice",
      monthlyPrice: 12,
      yearlyPrice: 120,
      description: "Perfect for growing teams",
      features: ["Up to 25 team members", "Advanced task management", "50GB cloud storage", "Priority support (24/5)", "Advanced analytics & reporting", "Custom integrations", "Team collaboration tools", "Time tracking & invoicing", "Project templates"],
      cta: "Choose Professional",
      popular: true,
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-300",
    },
    {
      name: "Enterprise",
      tagline: "For large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      description: "Unlimited scale with premium support",
      features: ["Unlimited team members", "Enterprise task management", "Unlimited storage", "24/7 dedicated support", "Custom analytics dashboard", "Full API access", "Advanced security & compliance", "Custom integrations", "On-premise deployment", "Dedicated account manager", "Custom training sessions"],
      cta: "Contact Sales",
      popular: false,
      icon: Crown,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-300",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-sky-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-600 animate-spin" style={{ animationDuration: "3s" }} />
            Transparent Pricing
            <span className="absolute left-1/2 ms-2 -translate-x-1/2 -bottom-1 w-1/2 border-b-2 border-indigo-700"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">Scale with confidence. No hidden fees, no surprises. Switch or cancel anytime.</p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-200/50 shadow-lg">
            <button onClick={() => setBillingCycle("monthly")} className={`cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${billingCycle === "monthly" ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`}>
              Monthly
            </button>
            <button onClick={() => setBillingCycle("yearly")} className={`cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${billingCycle === "yearly" ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`}>
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`group relative ${plan.popular ? "lg:scale-110 lg:z-10" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Glow effect for popular plan */}
              {plan.popular && <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>}

              <div className={`relative h-full ${plan.bgColor} backdrop-blur-sm rounded-3xl border-2 ${plan.popular ? plan.borderColor : "border-gray-200/50"} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                      <span className="relative font-bold flex items-center justify-center">
                        <Crown className="w-4 h-4 mr-2" />
                        Most Popular Choice
                        <Crown className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm font-medium text-indigo-600 mb-2">{plan.tagline}</p>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="flex items-baseline justify-center mb-2">
                      {plan.monthlyPrice !== null ? (
                        <>
                          <span className="text-5xl font-bold text-gray-900">${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</span>
                          <span className="text-gray-600 ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-gray-900">Custom</span>
                      )}
                    </div>

                    {billingCycle === "yearly" && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && <p className="text-sm text-green-600 font-medium">Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year</p>}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start group/feature" style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}>
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#"
                    className={`block cursor-pointer select-none w-full py-4 px-6
                    rounded-2xl font-bold text-lg transition-all duration-500 relative overflow-hidden
                    ${plan.popular ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl" : "border-2 border-gray-300 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50"}`}>
                    <span className="relative flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We work with enterprises to create tailored solutions that fit your specific needs, compliance requirements, and scale.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"#"} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Talk to Sales
              </Link>
              <Link href={"#"} className="border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 bg-white/50">
                View Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center mt-8 space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-sm">30-day free trial</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">No setup fees</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
