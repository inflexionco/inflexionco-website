'use client';

import Link from 'next/link';
import { useState } from 'react';
import BackToTop from '../components/BackToTop';

// Our projects - Each represents our commitment to innovation and quality
const projects = [
  {
    id: 1,
    name: 'LinkKeep',
    slug: 'linkkeep',
    description: 'Smart link management for individuals and teams. Save, organize, and share important links with intelligent tagging and search. Currently in beta with 100+ active users.',
    category: 'Mobile App',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    status: 'Beta',
    image: '🚀',
    color: 'blue',
    highlight: 'Beta Testing with Real Users',
  },
  {
    id: 2,
    name: 'Fundly',
    slug: 'fundly',
    description: 'Modern fundraising platform connecting passionate creators with supporters. Built with transparency and trust at its core, making it easier to fund projects that matter.',
    category: 'Web Application',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'In Development',
    image: '💼',
    color: 'purple',
    highlight: 'Launching Q2 2026',
  },
  {
    id: 3,
    name: 'EnergiQ',
    slug: 'energiq',
    description: 'Energy usage insights for smart homes. Track, analyze, and optimize your energy consumption with AI-driven recommendations that help you save money and reduce environmental impact.',
    category: 'Data Analytics',
    technologies: ['Python', 'TensorFlow', 'React'],
    status: 'In Development',
    image: '📊',
    color: 'green',
    highlight: 'AI-Powered Insights',
  },
  {
    id: 4,
    name: 'Tiny Tally',
    slug: 'tinytally',
    description: 'Expense tracking made simple. No complex budgets or overwhelming features—just quick expense logging and clear insights into where your money goes.',
    category: 'Finance App',
    technologies: ['React', 'Node.js', 'SQLite'],
    status: 'In Development',
    image: '💰',
    color: 'amber',
    highlight: 'Simple & Effective',
  },
];

const categories = ['All', 'Mobile App', 'Web Application', 'Data Analytics', 'Finance App'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'gradient') => {
    const colors: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        gradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        gradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
      },
      amber: {
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        text: 'text-amber-600 dark:text-amber-400',
        border: 'border-amber-200 dark:border-amber-800',
        gradient: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20'
      }
    };
    return colors[color]?.[type] || colors.blue[type];
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
              Our Portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              Explore our work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Discover the innovative applications and software solutions we&apos;re building. Each project showcases our expertise in modern development and design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 opacity-70">
                      ({projects.filter(p => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Icon */}
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${getColorClasses(project.color, 'gradient')} flex items-center justify-center text-8xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  {/* Status Badge on Image */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg ${
                        project.status === 'Live'
                          ? 'bg-green-500/90 text-white'
                          : project.status === 'Beta'
                          ? 'bg-yellow-500/90 text-white'
                          : 'bg-blue-500/90 text-white'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Category & Highlight Badges */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full ${getColorClasses(project.color, 'bg')} ${getColorClasses(project.color, 'text')} border ${getColorClasses(project.color, 'border')}`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {project.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`${getColorClasses(project.color, 'bg')} ${getColorClasses(project.color, 'text')} text-xs font-medium px-3 py-1.5 rounded-lg border ${getColorClasses(project.color, 'border')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Button */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`block w-full ${project.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : project.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : project.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-amber-600 hover:bg-amber-700'} text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/button shadow-lg hover:shadow-xl hover:scale-105`}
                  >
                    <span>View Project Details</span>
                    <svg className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-12 rounded-3xl border border-blue-100 dark:border-blue-800/30">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
              Have a project idea?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. We specialize in building innovative solutions tailored to your needs.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Start a Conversation</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
