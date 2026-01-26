import type { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from '../../components/BackToTop';

export const metadata: Metadata = {
  title: 'Tiny Tally - Inflexion Co.',
  description: 'Minimalist expense tracking application that helps users manage their finances with simple, intuitive design',
};

export default function TinyTallyPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Projects
              </Link>
            </div>
            <div className="inline-block bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
              Finance App
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              Tiny Tally
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors">
              Minimalist expense tracking application that helps users manage their finances with simple, intuitive design.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                In Development
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2 rounded-full transition-colors">
                Mobile App
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                Simple Finance Tracking
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
                Tiny Tally makes expense tracking effortless with its clean, minimalist design. Track your spending, set budgets, and understand your financial habits without the clutter of complex features.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                With quick entry, smart categorization, and beautiful visualizations, Tiny Tally helps you stay on top of your finances without the hassle.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center text-8xl transition-colors">
              💰
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">
              Simple yet powerful
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Smart Task Management</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Organize your tasks with intelligent categorization and priority suggestions powered by AI.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Real-time Sync</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Access your tasks from any device with instant synchronization across all platforms.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Get contextual reminders at the right time without being overwhelmed by notifications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Visualize your productivity with detailed analytics and progress reports.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Share tasks and collaborate with your team members seamlessly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors">Customizable Workflows</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Tailor the app to match your unique workflow and productivity style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">
              Built with modern tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">React</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">Redux Toolkit</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-100 dark:border-green-800 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">Express.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">SQLite</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-100 dark:border-purple-800 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Infrastructure</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">AWS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">Docker</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">CI/CD Pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-600 text-white transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Start tracking your expenses
          </h2>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed">
            Tiny Tally is actively under development. Get in touch to learn more about early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="inline-flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
