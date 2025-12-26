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
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
                <div className="text-5xl font-bold text-gray-900 mb-2">9+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
                <div className="text-5xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
                <div className="text-5xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
                <div className="text-5xl font-bold text-gray-900 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - HIDDEN FOR NOW */}
      <section className="py-16 bg-white hidden">
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

      {/* Technologies We Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Technologies we work with</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2 md:grayscale md:hover:grayscale-0 transition-all active:scale-95">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#61DAFB">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/>
              </svg>
              <span className="text-sm font-medium text-gray-600">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:grayscale md:hover:grayscale-0 transition-all active:scale-95">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#339933">
                <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.10-.23.22v8.47c0 .66-.68 1.31-1.77.76l-2.05-1.18c-.1-.06-.17-.18-.17-.3V7.61c0-.12.07-.23.17-.3l7.44-4.29c.1-.06.23-.06.33 0l7.44 4.29c.1.07.17.18.17.3v8.58c0 .12-.07.24-.17.3l-7.44 4.29c-.1.06-.23.06-.33 0l-1.9-1.1c-.1-.06-.22-.07-.32-.02-.86.48-1.03.59-1.82.86-.2.07-.5.17.11.5l2.5 1.47c.24.13.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.61c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z"/>
              </svg>
              <span className="text-sm font-medium text-gray-600">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:grayscale md:hover:grayscale-0 transition-all active:scale-95">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#000000">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
              </svg>
              <span className="text-sm font-medium text-gray-600">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:grayscale md:hover:grayscale-0 transition-all active:scale-95">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#3178C6">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
              <span className="text-sm font-medium text-gray-600">TypeScript</span>
            </div>
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
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 group animate-float transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1" style={{animationDelay: '0s'}}>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform md:group-hover:scale-105">
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
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-md group animate-float transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1" style={{animationDelay: '0.5s'}}>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 transition-transform md:group-hover:scale-105">
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
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 group animate-float transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1" style={{animationDelay: '1s'}}>
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 transition-transform md:group-hover:scale-105">
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
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 group animate-float transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1" style={{animationDelay: '1.5s'}}>
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 transition-transform md:group-hover:scale-105">
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
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-transform md:group-hover:scale-105">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding your vision, goals, and requirements
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-transform md:group-hover:scale-105">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating beautiful, user-centered designs
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-transform md:group-hover:scale-105">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Develop</h3>
              <p className="text-gray-600 leading-relaxed">
                Building with cutting-edge technologies
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 group text-center transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-transform md:group-hover:scale-105">
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

      {/* Testimonials Section - HIDDEN FOR NOW */}
      <section className="py-24 bg-white hidden">
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Built for performance and scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine modern development practices with proven technologies to deliver solutions that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-sm transition-all duration-300 active:scale-95 md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fast & Efficient</h3>
              <p className="text-gray-600 text-sm">Optimized performance and quick turnaround times for your projects</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 shadow-sm transition-all duration-300 active:scale-95 md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">Built with security best practices and robust architecture</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 shadow-sm transition-all duration-300 active:scale-95 md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fully Responsive</h3>
              <p className="text-gray-600 text-sm">Perfect experience across all devices and screen sizes</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 shadow-sm transition-all duration-300 active:scale-95 md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Clear Communication</h3>
              <p className="text-gray-600 text-sm">Regular updates and transparent collaboration throughout</p>
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
