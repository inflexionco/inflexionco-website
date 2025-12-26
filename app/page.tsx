'use client';

import Link from 'next/link';
import { useState } from 'react';
import BackToTop from './components/BackToTop';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6">
                Building the future of digital
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                We craft digital products & experiences
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Transforming ideas into stunning visuals — innovative apps and software that captivates, engages, and delivers results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  See our work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 group">
                <div className="text-5xl font-bold text-gray-900 mb-2">9+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 group">
                <div className="text-5xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 group">
                <div className="text-5xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 group">
                <div className="text-5xl font-bold text-gray-900 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            <div className="text-2xl font-bold">Adobe</div>
            <div className="text-2xl font-bold">Spotify</div>
            <div className="text-2xl font-bold">Stripe</div>
            <div className="text-2xl font-bold">Airbnb</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              What we do
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Things we do that simply<br />make your product better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 animate-float" style={{animationDelay: '0s'}}>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group animate-float" style={{animationDelay: '0.5s'}}>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-300 leading-relaxed">
                Modern, responsive web apps built with cutting-edge technologies for optimal performance and scalability.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, intuitive interfaces designed with user behavior in mind, ensuring seamless interactions.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 animate-float" style={{animationDelay: '1.5s'}}>
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">API Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Robust, scalable APIs that power your applications with secure and efficient data management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              How it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our proven process
            </h2>
            <p className="text-xl text-gray-600">We guide you every step of the journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding your vision, goals, and requirements
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating beautiful, user-centered designs
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Develop</h3>
              <p className="text-gray-600 leading-relaxed">
                Building with cutting-edge technologies
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-200 text-center">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform">
                04
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deliver</h3>
              <p className="text-gray-600 leading-relaxed">
                Launching your product to the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              What people are saying
            </h2>
            <p className="text-xl text-gray-600">Trusted by clients worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Inflexion Co. transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CEO, TechStart</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Working with Inflexion Co. was a game-changer for our business. They delivered beyond our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MC
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Founder, InnovateCo</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The team at Inflexion Co. is incredibly talented. They brought our ideas to life with stunning design and flawless execution."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EP
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Emily Parker</h4>
                  <p className="text-sm text-gray-500">CTO, Digital Dreams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white border border-blue-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">What services do you offer?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  We offer a comprehensive range of services including mobile app development, web application development, UI/UX design, and API development. Our team specializes in creating innovative digital solutions tailored to your specific needs.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-blue-200 hover:border-blue-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">How long does a typical project take?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  Project timelines vary depending on complexity and scope. A typical mobile or web application takes 8-16 weeks from discovery to launch. We provide detailed timelines during the initial consultation phase.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-blue-200 hover:border-blue-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">Do you provide ongoing support?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  Yes! We offer comprehensive maintenance and support packages to ensure your application continues to run smoothly. Our team is available for updates, bug fixes, and feature enhancements post-launch.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border border-blue-200 hover:border-blue-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">What technologies do you work with?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  We work with modern technologies including React, Next.js, React Native, Node.js, Python, and various cloud platforms. We choose the best tech stack based on your project requirements.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border border-blue-200 hover:border-blue-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">How do we get started?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  Getting started is easy! Simply reach out through our contact form or email us directly. We'll schedule a discovery call to discuss your project goals, requirements, and how we can help bring your vision to life.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's collaborate and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore our work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
