'use client';

import { useState, useEffect, useRef } from 'react';
import BackToTop from '../components/BackToTop';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    app: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categories = [
    { value: 'feedback', label: 'Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'help', label: 'Need Help' },
    { value: 'other', label: 'Other' }
  ];

  const handleCategorySelect = (value: string) => {
    setFormData({ ...formData, category: value });
    setIsCategoryOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          app: '',
          category: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
              Support Center
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              We&apos;re here to help
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Have questions, feedback, or need support? Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Contact Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Email Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors">Email Us</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 transition-colors">For general inquiries and support</p>
              <a href="mailto:support@inflexion.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors">
                support@inflexion.com
              </a>
            </div>

            {/* Response Time Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors">Quick Response</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors">We typically respond within 24-48 hours on business days</p>
            </div>
          </div>

          {/* Form and Quick Tips Row - Aligned at baseline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tips Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-sm transition-colors h-full">
                <h3 className="text-lg font-bold mb-4">✨ Quick Tips</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Include the app/project name</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Describe your issue clearly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Attach screenshots if possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Check your email for our response</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                {submitStatus === 'success' && (
                  <div className="mb-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-6 py-4 rounded-2xl transition-colors">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you! We&apos;ll get back to you soon.
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-6 py-4 rounded-2xl transition-colors">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Something went wrong. Please try again later.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* App Name */}
                    <div>
                      <label htmlFor="app" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                        App/Project Name
                      </label>
                      <input
                        type="text"
                        id="app"
                        name="app"
                        value={formData.app}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                        placeholder="Which app is this about?"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                        Category *
                      </label>
                      <div className="relative" ref={categoryRef}>
                        <button
                          type="button"
                          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white dark:bg-gray-800 text-left flex items-center justify-between"
                        >
                          <span className={formData.category ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}>
                            {formData.category ? categories.find(c => c.value === formData.category)?.label : 'Category'}
                          </span>
                          <svg
                            className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isCategoryOpen && (
                          <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg overflow-hidden transition-colors">
                            {categories.map((cat) => (
                              <button
                                key={cat.value}
                                type="button"
                                onClick={() => handleCategorySelect(cat.value)}
                                className={`w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${
                                  formData.category === cat.value ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-900 dark:text-white'
                                }`}
                              >
                                {cat.label}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Hidden input for form validation */}
                        <input
                          type="hidden"
                          name="category"
                          value={formData.category}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={9}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-transparent resize-none transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-full font-semibold text-white transition-all flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white transition-colors">How quickly will I receive a response?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  We typically respond within 24-48 hours during business days. Urgent matters are prioritized and handled as quickly as possible.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white transition-colors">What information should I include in my message?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Please include the app/project name, a clear description of your issue or feedback, and any relevant screenshots or error messages to help us assist you better.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white transition-colors">Do you offer technical support for all projects?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Yes! We provide ongoing support for all our applications. For custom projects, support terms are defined in the project agreement.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white transition-colors">Can I request a feature or enhancement?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Absolutely! We welcome feature requests and enhancement suggestions. Use the &quot;Feature Request&quot; category in the form above to share your ideas with us.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white transition-colors">What if I need urgent assistance?</span>
                <svg
                  className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  For urgent matters, please email us directly at support@inflexion.com with &quot;URGENT&quot; in the subject line. We&apos;ll prioritize your request and respond as soon as possible.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
