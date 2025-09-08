'use client'; // Force Vercel deployment

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { trackButtonClick } from "../utils/analytics";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfSeptember = new Date(now.getFullYear(), 8, 30, 23, 59, 59); // September 30th, 11:59:59 PM
      
      const difference = endOfSeptember.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "$90/yr" : "$9/mo",
      description: "New creators testing the waters",
      features: [
        "No-code storefront (up to 5 products)",
        "1 native ad slot (opt-in) with category controls",
        "Basic analytics (views, clicks, top products)",
        "Standard support (email)",
        "Link-in-bio optimized layout",
        "Hosted files and gated content"
      ],
      buttonText: "Free Trial",
      highlighted: false
    },
    {
      name: "Creator",
      price: isAnnual ? "$290/yr" : "$29/mo",
      description: "Growing creators ready for two revenue streams",
      features: [
        "Unlimited products & memberships",
        "Up to 3 native ad slots with frequency caps",
        "Advanced analytics (sales funnels, CTR, earnings)",
        "Priority support",
        "Custom domain + theme presets",
        "Coupons & email capture"
      ],
      buttonText: "Free Trial",
      highlighted: true
    },
    {
      name: "Pro",
      price: isAnnual ? "$790/yr" : "$79/mo",
      description: "Established creators & small teams",
      features: [
        "Unlimited products, memberships, and file hosting",
        "Up to 5 ad slots + direct brand deal placements",
        "Advanced analytics & export (CSV/API)",
        "Priority support (fast-track)",
        "A/B testing for pages and placements",
        "Team seats (3) with roles & permissions",
        "API access & webhooks"
      ],
      buttonText: "Free Trial",
      highlighted: false
    }
  ];

  const commonFeatures = [
    "No-code storefront",
    "Responsive pages",
    "Secure checkout",
    "Creator dashboard",
    "Payout to bank",
    "Basic analytics",
    "Cancel anytime"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 lg:px-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Group 29504@2x.png"
                alt="LinkHaus Logo"
                width={286}
                height={60}
                className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                priority
                unoptimized
              />
            </Link>
          </div>
          <Link href="/pricing">
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
              onClick={() => trackButtonClick('sign_up_header', 'pricing_page')}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Title and Subtitle */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Get a FREE 30 Day trial by the end of September
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Start selling in minutes - add brand placements when you're ready.
            </p>
            
            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <div className="text-black px-6 py-3 rounded-lg inline-block" style={{ backgroundColor: '#D4EB31' }}>
                <div className="text-sm font-medium mb-1">OFFER ENDS IN:</div>
                <div className="text-2xl font-bold">
                  {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}h {(timeLeft.minutes || 0).toString().padStart(2, '0')}m {(timeLeft.seconds || 0).toString().padStart(2, '0')}s
                </div>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => {
                  setIsAnnual(false);
                  trackButtonClick('billing_toggle_monthly', 'pricing_page');
                }}
                className={`px-6 py-2 rounded-md font-medium transition-colors cursor-pointer ${
                  !isAnnual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => {
                  setIsAnnual(true);
                  trackButtonClick('billing_toggle_annually', 'pricing_page');
                }}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isAnnual
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ANNUALLY (SAVE -20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.highlighted ? 'ring-2 ring-purple-200' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className={`text-4xl font-bold mb-2 ${
                    plan.highlighted ? 'text-purple-600' : 'text-black'
                  }`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <Link href="/thank-you">
                  <button 
                    className="btn btn-cta w-full py-3 px-6 rounded-lg font-medium text-white transition-colors mb-6 cursor-pointer bg-purple-600 hover:bg-purple-700"
                    data-plan={plan.name.toLowerCase()}
                    type="button"
                    onClick={() => trackButtonClick(`plan_${plan.name.toLowerCase()}_trial`, 'pricing_cards')}
                  >
                    FREE TRIAL
                  </button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All Plans Include Section */}
          <div className="bg-yellow-50 rounded-xl p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
              <h3 className="text-2xl font-bold text-black mb-6 lg:mb-0 lg:mr-12">
                All plans include
              </h3>
              <div className="grid md:grid-cols-2 gap-4 flex-1">
                {commonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
