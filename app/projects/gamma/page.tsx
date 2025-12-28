import type { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from '../../components/BackToTop';

export const metadata: Metadata = {
  title: 'Project Gamma - Inflexion Co.',
  description: 'AI-powered analytics tool that transforms complex data into actionable insights for businesses',
};

export default function ProjectGammaPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
            <div className="inline-block bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
              Data Analytics
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Project Gamma
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AI-powered analytics tool that transforms complex data into actionable insights for businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                In Development
              </span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                Enterprise SaaS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Data-Driven Intelligence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Project Gamma empowers businesses to make informed decisions by turning raw data into clear, actionable insights. Built with advanced AI and machine learning algorithms that identify patterns and predict trends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're analyzing customer behavior, optimizing operations, or forecasting market trends, Gamma provides the tools and intelligence you need to stay ahead.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center text-8xl">
              📊
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Intelligent analytics platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Interactive Dashboards</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customizable dashboards with drag-and-drop widgets for real-time data visualization.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">AI Insights</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Machine learning models that automatically detect anomalies and suggest optimizations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Predictive Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Forecast future trends and outcomes using advanced statistical models.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Data Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect to multiple data sources including databases, APIs, and cloud storage.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Automated Reports</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generate comprehensive reports automatically and schedule delivery to stakeholders.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 active:scale-95 md:shadow-sm md:hover:shadow-md md:hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Role-based access control and data encryption to keep your information secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Enterprise-grade architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">React 18</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">D3.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Recharts</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Data Processing</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Python</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Pandas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Apache Spark</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">ML & AI</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">TensorFlow</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">scikit-learn</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">PyTorch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              Use Cases
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Built for diverse needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understand customer behavior patterns, segment audiences, and optimize engagement strategies with detailed customer journey mapping.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Segmentation</span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Churn Prediction</span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">LTV Analysis</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Financial Intelligence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monitor financial KPIs, detect fraud patterns, and forecast revenue with real-time financial data analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Fraud Detection</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Forecasting</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Risk Analysis</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Operations Optimization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Streamline operations, reduce costs, and improve efficiency by analyzing operational data and identifying bottlenecks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Process Mining</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Capacity Planning</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Quality Control</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Intelligence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Track market trends, analyze competitor performance, and identify opportunities with comprehensive market data analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Trend Analysis</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Competitor Tracking</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Sentiment Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Turn data into decisions
          </h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Project Gamma is under active development. Reach out to discuss how we can help with your analytics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Schedule a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
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
