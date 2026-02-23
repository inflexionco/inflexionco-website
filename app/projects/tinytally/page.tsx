'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Apple, Play, ExternalLink, Github, Star, Users, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProjectById } from '../../data/projects';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import BackToTop from '../../components/BackToTop';
import type { Metadata } from 'next';

const project = getProjectById('tinytally')!;

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { badge: string; gradient: string; button: string; accent: string }> = {
    blue: {
      badge: 'bg-blue-600 text-white',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      accent: 'text-blue-600 dark:text-blue-400',
    },
    purple: {
      badge: 'bg-purple-600 text-white',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      accent: 'text-purple-600 dark:text-purple-400',
    },
    orange: {
      badge: 'bg-orange-600 text-white',
      gradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      accent: 'text-orange-600 dark:text-orange-400',
    },
    green: {
      badge: 'bg-green-600 text-white',
      gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      button: 'bg-green-600 hover:bg-green-700 text-white',
      accent: 'text-green-600 dark:text-green-400',
    },
  };
  return colorMap[color] || colorMap.blue;
};

const colors = getColorClasses(project.color);
const isMobileApp = ['mobile', 'ios', 'android'].includes(project.type);

export default function TinyTallyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/projects" className={`inline-flex items-center gap-2 ${colors.accent} hover:underline transition-colors`}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${colors.gradient} py-16 mt-6 transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm ${colors.badge} mb-4`}>
                {project.platforms.join(' • ')}
              </span>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{project.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.tagline}</p>
              <p className="text-gray-700 dark:text-gray-400 mb-8">{project.description}</p>

              {/* Metrics */}
              {project.metrics && (
                <div className="flex gap-8 mb-8">
                  {project.metrics.users && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Active Users</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.metrics.users}</div>
                    </motion.div>
                  )}
                  {project.metrics.rating && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">Rating</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.metrics.rating}/5.0</div>
                    </motion.div>
                  )}
                  {project.metrics.downloads && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Downloads</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.metrics.downloads}</div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Download/Link Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.links?.appStore && (
                  <motion.a
                    href={project.links.appStore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1296604800"
                      alt="Download on the App Store"
                      className="h-12"
                    />
                  </motion.a>
                )}
                {project.links?.playStore && (
                  <motion.a
                    href={project.links.playStore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 h-12"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] leading-tight">GET IT ON</div>
                      <div className="text-sm font-semibold leading-tight">Google Play</div>
                    </div>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Hero Visual - Mobile App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center"
            >
              {isMobileApp ? (
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-[280px] h-[570px] bg-black rounded-[3rem] p-3 shadow-2xl"
                  >
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      <div className="h-6 bg-white flex items-center justify-center">
                        <div className="w-24 h-4 bg-black rounded-full"></div>
                      </div>
                      <div className="h-full -mt-6 pt-6">
                        <ImageWithFallback
                          src={project.screenshots[0]}
                          alt={`${project.name} screenshot`}
                          className="w-full h-full object-cover"
                          width={280}
                          height={570}
                        />
                      </div>
                    </div>
                  </motion.div>
                  {/* Floating second phone */}
                  {project.screenshots[1] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 0.4, scale: 1, rotate: 12 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute -right-16 top-20 w-[200px] h-[400px] bg-black rounded-[2rem] p-2 shadow-xl"
                    >
                      <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                        <ImageWithFallback
                          src={project.screenshots[1]}
                          alt={`${project.name} screenshot 2`}
                          className="w-full h-full object-cover"
                          width={200}
                          height={400}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center text-8xl transition-colors">
                  {project.icon}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {isMobileApp && project.screenshots.length > 1 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm ${colors.badge} mb-4`}>
                Screenshots
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">See it in action</h2>
              <p className="text-gray-600 dark:text-gray-300">Experience the intuitive interface and powerful features</p>
            </motion.div>
            <div className="flex gap-6 overflow-x-auto pb-4 pt-4">
              {project.screenshots.slice(0, 4).map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 my-auto"
                >
                  <div className="w-[250px] h-[510px] bg-black rounded-[2.5rem] p-2.5 shadow-lg">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                      <div className="h-6 bg-white flex items-center justify-center">
                        <div className="w-20 h-3 bg-black rounded-full"></div>
                      </div>
                      <div className="h-full -mt-6 pt-6">
                        <ImageWithFallback
                          src={screenshot}
                          alt={`Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover"
                          width={250}
                          height={510}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm ${colors.badge} mb-4`}>
              Features
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Built for efficiency</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every feature is designed with purpose, combining powerful functionality with elegant simplicity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm ${colors.badge} mb-4`}>
              Technology
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Built with modern tools</h2>
            <p className="text-gray-600 dark:text-gray-300">Leveraging the latest technologies for performance and scalability</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
              <ul className="space-y-2">
                {project.techStack.frontend.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>

            {project.techStack.backend && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
                <ul className="space-y-2">
                  {project.techStack.backend.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.techStack.infrastructure && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Infrastructure</h3>
                <ul className="space-y-2">
                  {project.techStack.infrastructure.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${colors.gradient} transition-colors`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.cta.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">{project.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.cta.buttons.map((button, idx) => (
                <motion.a
                  key={idx}
                  href={button.link || '#'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg transition-colors font-semibold ${
                    button.type === 'primary'
                      ? colors.button
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {button.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
