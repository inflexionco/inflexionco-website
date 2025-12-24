import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#EDE9F5]">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-6">
                ✨ Building the future
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We craft digital products & experiences
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforming ideas into stunning visuals — innovative apps and software that captivates, engages, and delivers results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center bg-[#FFD93D] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all shadow-md hover:shadow-lg"
                >
                  See our work
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-black mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-black mb-2">280+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-black mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
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
      <section className="py-24 bg-[#EDE9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-4">
              What we do
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Things we do that simply<br />make your product better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white p-10 rounded-3xl hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-black text-white p-10 rounded-3xl hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-300 leading-relaxed">
                Modern, responsive web apps built with cutting-edge technologies for optimal performance and scalability.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-10 rounded-3xl hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, intuitive interfaces designed with user behavior in mind, ensuring seamless interactions.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-10 rounded-3xl hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFD93D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">API Development</h3>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our proven process
            </h2>
            <p className="text-xl text-gray-600">We guide you every step of the journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                01
              </div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-600">
                Understanding your vision, goals, and requirements
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                02
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                Creating beautiful, user-centered designs
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                03
              </div>
              <h3 className="text-xl font-bold mb-2">Develop</h3>
              <p className="text-gray-600">
                Building with cutting-edge technologies
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                04
              </div>
              <h3 className="text-xl font-bold mb-2">Deliver</h3>
              <p className="text-gray-600">
                Launching your product to the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate and bring your vision to life
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center bg-[#FFD93D] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all shadow-lg hover:shadow-xl"
          >
            Explore our work
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
