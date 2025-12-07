"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackButtonClick, trackFormSubmit } from "../utils/analytics";

export default function ThankYou() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("Web3Forms access key not configured");
      }

      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("email", email);
      formData.append("subject", "New email signup");
      formData.append("message", `New email signup: ${email}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
        trackFormSubmit('email_signup');
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
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
              onClick={() => trackButtonClick('sign_up_header', 'thank_you_page')}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </header>

      {/* Thank You Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-4">
              Thank you
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8">
              for your interest
            </h2>
            {/* Decorative diamond shape */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-200 opacity-30 transform rotate-45 -z-10"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're currently in private beta and onboarding a small group of creators to refine the experience before opening access more broadly.
          </p>
        </div>
      </section>

      {/* Notification Signup Section */}
      <section className="px-6 pt-8 lg:px-12 lg:pt-0" style={{ backgroundColor: '#D4EB04' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Get notified when we go live and get 12 months free trial!
              </h2>

              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thanks! We'll notify you when we go live.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS"
                      required
                      className="email-input flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                      disabled={isSubmitting}
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => trackButtonClick('notify_me', 'email_signup_form')}
                    >
                      {isSubmitting ? "SUBMITTING..." : "NOTIFY ME"}
                    </button>
                  </div>
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                      {error}
                    </div>
                  )}
                </form>
              )}
              
              <p className="text-sm text-black">
                *Privacy note: We'll only use your email to send product updates and beta invitations. No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Right side - Woman with smartphone image */}
            <div className="flex justify-center lg:justify-end h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/Mask Group 9.png"
                  alt="Woman with smartphone looking amazed"
                  width={600}
                  height={800}
                  className="w-full h-full object-contain max-w-2xl"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
