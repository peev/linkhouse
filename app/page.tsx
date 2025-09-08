"use client";

import Image from "next/image";
import Link from "next/link";
import { trackButtonClick, trackLinkClick } from "./utils/analytics";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 lg:px-12">
        <div className="flex items-center">
          <Image
            src="/Group 29504@2x.png"
            alt="LinkHaus Logo"
            width={286}
            height={60}
            className="h-8 w-auto"
            priority
            unoptimized
          />
        </div>
        <Link href="/pricing">
          <button 
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            onClick={() => trackButtonClick('sign_up_header', 'header')}
          >
            SIGN UP
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Turn your link-in-bio into your own shop and trusted brand ad channel
            </h1>
            {/* Mobile image - shown only on mobile */}
            <div className="relative mb-6 lg:hidden">
              <Image
                src="/hero-phone-old.png"
                alt="Woman with smartphone showing social media engagement"
                width={320}
                height={256}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              LinkHaus lets you sell products, courses, and services—plus earn extra from brand placements you choose. One link. Two revenue streams. Complete control. Zero code.
            </p>
            <Link href="/pricing">
              <button 
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                onClick={() => trackButtonClick('try_now_hero', 'hero_section')}
              >
                Try Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
          {/* Desktop image - hidden on mobile */}
          <div className="relative hidden lg:block">
            <Image
              src="/hero-phone-old.png"
              alt="Woman with smartphone showing social media engagement"
              width={320}
              height={256}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* What is LinkHaus Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-20">
            What is LinkHaus
          </h2>
          <div className="space-y-0">
            {/* Row 1: Set up in minutes */}
            <div className="flex flex-col lg:flex-row items-center gap-0">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/Rectangle 2865.png"
                  alt="Woman with tablet and coffee setting up"
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-24 pr-0 lg:pr-24 mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-black mb-6">Set up in minutes</h3>
                <p className="text-black font-poppins font-light text-xl leading-6 mb-10 lg:mb-0" style={{ fontWeight: 300, fontSize: '20px', lineHeight: '25px' }}>
                  Import your links, add products, toggle ads on. No code, no plugins, works on any device.
                </p>
              </div>
            </div>

            {/* Row 2: Two revenue streams */}
            <div className="flex flex-col lg:flex-row items-center gap-0">
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 pl-0 lg:pl-24 pr-0 lg:pr-24 mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-black mb-6">Two revenue streams</h3>
                <p className="text-black font-poppins font-light text-xl leading-6 mb-10 lg:mb-0" style={{ fontWeight: 300, fontSize: '20px', lineHeight: '25px' }}>
                  Sell digital products and services — and earn from tasteful, brand-safe ad placements on your page.
                </p>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Image
                  src="/Rectangle 2866.png"
                  alt="Man recording content with ring light"
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Row 3: Control the experience */}
            <div className="flex flex-col lg:flex-row items-center gap-0">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/Rectangle 2867.png"
                  alt="Woman with smartphone taking selfie"
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-24 pr-0 lg:pr-24 mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-black mb-6">Control the experience</h3>
                <p className="text-black font-poppins font-light text-xl leading-6 mb-10 lg:mb-0" style={{ fontWeight: 300, fontSize: '20px', lineHeight: '25px' }}>
                  Pick ad categories, placements, and frequency. No pop-ups, no spam. Your brand, your rules.
            </p>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for creators Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #D4EB04 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-16">
            Benefits for creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>No-code storefront</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                Launch products in minutes with a visual editor, built-in hosting, and secure checkout.
              </p>
            </div>
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>Brand-safe ad control</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                Approve categories, cap frequency, and disable any placement with one click.
              </p>
            </div>
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>Audience-first design</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                Clean, native placements that never hijack your page or slow it down.
              </p>
            </div>
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>Better monetization</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                Combine product revenue with ad revenue — maximize each visit to your link.
              </p>
            </div>
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>Built-in analytics</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                See what sells, which placements perform, and where to focus next.
              </p>
            </div>
            <div 
              className="bg-white p-8 w-full"
              style={{ 
                height: '175px',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '5px',
                opacity: 1
              }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <h3 className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', lineHeight: '20px' }}>Own your brand</h3>
              </div>
              <p className="text-black font-poppins" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '16px', lineHeight: '20px' }}>
                Custom domains, themes, and asset controls. You're the storefront, not the ad space.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/pricing">
              <button 
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
                onClick={() => trackButtonClick('try_now_benefits', 'benefits_section')}
              >
                Try Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            </div>
          </div>
      </section>

      {/* How it works Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-20" style={{ fontFamily: 'Poppins' }}>
            How it works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {/* Build your shop - Top Left */}
            <div className="relative mb-3 sm:mb-0">
              <div 
                className="relative overflow-hidden w-full max-w-2xl mx-auto lg:mx-0"
                style={{
                  height: 'auto',
                  minHeight: '280px',
                  opacity: 1
                }}
              >
                <div className="flex items-center h-full p-4 sm:p-6 relative z-20 border-r-8 border-b-8" style={{ borderColor: '#BCB2FD' }}>
                  <div className="w-1/2 pr-2">
                    <Image
                      src="/Rectangle 2868@2x.png"
                      alt="Laptop and smartphone setup"
                      width={165}
                      height={195}
                      className="object-cover rounded-lg"
                      quality={90}
                    />
              </div>
                  <div className="w-1/2 pl-2">
                    <h3 
                      className="font-bold text-black mb-3"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '18px',
                        letterSpacing: '0px'
                      }}
                    >
                      Build your shop
                    </h3>
                    <ul className="space-y-1">
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Add digital downloads, courses, memberships, or coaching.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Customize your page with a visual editor.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Host files and gated content.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Built-in checkout & payouts.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Mobile-first, lightning-fast pages.
                </li>
              </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enable brand placements */}
            <div className="relative lg:ml-auto mb-3 sm:mb-0">
              <div 
                className="relative overflow-hidden w-full max-w-2xl mx-auto lg:mx-0"
                style={{
                  height: 'auto',
                  minHeight: '280px',
                  opacity: 1
                }}
              >
                <div className="flex items-center h-full p-4 sm:p-6 relative z-20 border-r-8 border-b-8" style={{ borderColor: '#6B42F0' }}>
                  <div className="w-1/2 pr-2">
                    <Image
                      src="/Rectangle 2869@2x.png"
                      alt="Woman looking at smartphone"
                      width={165}
                      height={195}
                      className="object-cover rounded-lg"
                      quality={90}
                    />
              </div>
                  <div className="w-1/2 pl-2">
                    <h3 
                      className="font-bold text-black mb-3"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '18px',
                        letterSpacing: '0px'
                      }}
                    >
                      Enable brand placements
                    </h3>
                    <ul className="space-y-1">
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Opt in to tasteful, native ad slots.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Choose categories that fit your audience and set your preferences.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Category and brand controls.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Fixed or revenue-share models.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Privacy-safe, no invasive pop-ups.
                </li>
              </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Share one link - Bottom Left */}
            <div className="relative mb-3 sm:mb-0">
              <div 
                className="relative overflow-hidden w-full max-w-2xl mx-auto lg:mx-0"
                style={{
                  height: 'auto',
                  minHeight: '280px',
                  opacity: 1
                }}
              >
                <div className="flex items-center h-full p-4 sm:p-6 relative z-20 border-r-8 border-b-8" style={{ borderColor: '#D4EB31' }}>
                  <div className="w-1/2 pr-2">
                    <Image
                      src="/Rectangle 2870@2x.png"
                      alt="Couple looking at smartphone together"
                      width={165}
                      height={195}
                      className="object-cover rounded-lg"
                      quality={90}
                    />
              </div>
                  <div className="w-1/2 pl-2">
                    <h3 
                      className="font-bold text-black mb-3"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '18px',
                        letterSpacing: '0px'
                      }}
                    >
                      Share one link
                    </h3>
                    <ul className="space-y-1">
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Use it in your bio and everywhere else.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Optimized for Instagram, TikTok, YouTube, X, and more.
                </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Get paid */}
            <div className="relative lg:ml-auto mb-3 sm:mb-0">
              <div 
                className="relative overflow-hidden w-full max-w-2xl mx-auto lg:mx-0"
                style={{
                  height: 'auto',
                  minHeight: '280px',
                  opacity: 1
                }}
              >
                <div className="flex items-center h-full p-4 sm:p-6 relative z-20 border-r-8 border-b-8" style={{ borderColor: '#F2F9B4' }}>
                  <div className="w-1/2 pr-2">
                    <Image
                      src="/Rectangle 2871@2x.png"
                      alt="Hands typing on laptop keyboard"
                      width={165}
                      height={195}
                      className="object-cover rounded-lg"
                      quality={90}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <h3 
                      className="font-bold text-black mb-3"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '18px',
                        letterSpacing: '0px'
                      }}
                    >
                      Get paid
                    </h3>
                    <ul className="space-y-1">
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Track product sales and ad earnings in one dashboard.
                </li>
                      <li className="flex items-start text-black text-sm" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}>
                        <svg className="w-3 h-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                        Cash out quickly to your bank.
                </li>
              </ul>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24" style={{ background: 'linear-gradient(135deg, rgba(188, 178, 255, 0.3) 0%, rgba(188, 178, 255, 0.1) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-24">
            What creators say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white px-6 pt-6 pb-12 rounded-xl shadow-sm relative min-h-[300px]">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden -mt-20 relative z-10">
                <Image
                  src="/Ellipse 1.png"
                  alt="Maya R. profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black mb-4 italic text-left max-w-[75%]">
                "I launched a mini course and turned on brand placements in the same afternoon. Two new revenue streams, one link."
              </p>
              <p className="text-black text-left max-w-[75%]">
                - <span className="font-bold">Maya R.</span>, Fitness Coach (@mayamoves)
              </p>
              <div className="absolute -bottom-2 right-8 w-[85px] h-[50px] opacity-100 z-50">
                <Image
                  src="/Path 21881.svg"
                  alt="Quotation mark"
                  width={85}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-white px-6 pt-6 pb-12 rounded-xl shadow-sm relative min-h-[300px]">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden -mt-20 relative z-10">
                <Image
                  src="/Ellipse 2.png"
                  alt="Will K. profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black mb-4 italic text-left max-w-[75%]">
                "The ad controls are clutch. I pick categories that match my audience and it just works."
              </p>
              <p className="text-black text-left max-w-[75%]">
                - <span className="font-bold">Will K.</span>, Productivity Creator (@wkfocus)
              </p>
              <div className="absolute -bottom-2 right-8 w-[85px] h-[50px] opacity-100 z-50">
                <Image
                  src="/Path 21881.svg"
                  alt="Quotation mark"
                  width={85}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-white px-6 pt-6 pb-12 rounded-xl shadow-sm relative min-h-[300px]">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden -mt-20 relative z-10">
                <Image
                  src="/Ellipse 3.png"
                  alt="Jane L. profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black mb-4 italic text-left max-w-[75%]">
                "Set up was ridiculously fast. My audience gets a clean shop, I get sales + ad income. Win-win!"
              </p>
              <p className="text-black text-left max-w-[75%]">
                - <span className="font-bold">Jane L.</span>, Design Educator (@janelearns)
              </p>
              <div className="absolute -bottom-2 right-8 w-[85px] h-[50px] opacity-100 z-50">
                <Image
                  src="/Path 21881.svg"
                  alt="Quotation mark"
                  width={85}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
                </div>
          <div className="text-center">
            <Link href="/pricing">
              <button 
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
                onClick={() => trackButtonClick('try_now_testimonials', 'testimonials_section')}
              >
                Try Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
                </div>
                </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-0 pb-[50px] lg:px-12 lg:py-0" style={{ backgroundColor: '#6B42F0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-full h-full rounded-2xl flex items-center justify-center py-0 my-0">
                <Image
                  src="/Mask Group 8.png"
                  alt="Woman with smartphone looking confused"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain rounded-2xl"
                />
                </div>
              </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                FAQs
              </h2>
              <div className="space-y-6 max-w-md">
                <div>
                  <h3 className="text-white mb-3" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>Do I need to code?</h3>
                  <p className="text-white" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>
                    No. Use the visual editor to add products, customize your page, and manage ad settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-white mb-3" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>Are the ads intrusive?</h3>
                  <p className="text-white" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>
                    No pop-ups or takeover ads. Only tasteful, native placements you opt into and control.
                  </p>
                </div>
                <div>
                  <h3 className="text-white mb-3" style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>Can I choose which brands appear?</h3>
                  <p className="text-white" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', opacity: 1 }}>
                    You can approve categories and disable any specific placement. Your page, your rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
