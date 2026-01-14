import type { Metadata } from 'next';
import BackToTop from '../components/BackToTop';

export const metadata: Metadata = {
  title: 'Privacy Policy - Inflexion Co.',
  description: 'Our privacy policy and how we handle your data',
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Last updated: {currentDate}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Inflexion Co., we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Name and email address when you contact us</li>
                <li>Information you provide in support requests or feedback</li>
                <li>Usage data and analytics about how you interact with our website</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We may use third-party services for analytics and hosting. These services have their own privacy policies, and we encourage you to review them.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Email: <a href="mailto:support@inflexion.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@inflexion.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
