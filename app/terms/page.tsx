import type { Metadata } from 'next';
import BackToTop from '../components/BackToTop';

export const metadata: Metadata = {
  title: 'Terms of Service - Inflexion Co.',
  description: 'Terms and conditions for using our services',
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              Terms of Service
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                By accessing our website or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Use License</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Permission is granted to temporarily view the materials on Inflexion Co.&apos;s website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Inflexion Co. provides software development and consulting services. The specific terms of service delivery, including timelines, deliverables, and payment terms, will be outlined in individual project agreements.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All content on this website, including text, graphics, logos, and software, is the property of Inflexion Co. and protected by copyright laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">User Responsibilities</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not engage in any activity that disrupts or interferes with our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The materials on Inflexion Co.&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Limitations of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                In no event shall Inflexion Co. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Modifications</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We reserve the right to revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
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
