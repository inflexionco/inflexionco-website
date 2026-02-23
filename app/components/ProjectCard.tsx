'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectData } from '../data/projects';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { badge: string; gradient: string; button: string; hover: string }> = {
      blue: {
        badge: 'bg-blue-600 text-white',
        gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        hover: 'group-hover:border-blue-300 dark:group-hover:border-blue-600',
      },
      purple: {
        badge: 'bg-purple-600 text-white',
        gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        hover: 'group-hover:border-purple-300 dark:group-hover:border-purple-600',
      },
      orange: {
        badge: 'bg-orange-600 text-white',
        gradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
        button: 'bg-orange-600 hover:bg-orange-700 text-white',
        hover: 'group-hover:border-orange-300 dark:group-hover:border-orange-600',
      },
      green: {
        badge: 'bg-green-600 text-white',
        gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
        button: 'bg-green-600 hover:bg-green-700 text-white',
        hover: 'group-hover:border-green-300 dark:group-hover:border-green-600',
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(project.color);

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { text: string; className: string }> = {
      live: { text: 'Live', className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
      beta: { text: 'Beta', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      development: { text: 'In Development', className: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    };
    return statusMap[status] || statusMap.live;
  };

  const status = getStatusBadge(project.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group block"
    >
      <Link href={`/projects/${project.id}`} className="block h-full">
        <div className={`h-full border-2 border-gray-200 dark:border-gray-700 ${colors.hover} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl`}>
          {/* Header with gradient */}
          <div className={`bg-gradient-to-br ${colors.gradient} p-8 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <div className="text-8xl">{project.icon}</div>
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${colors.badge}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${status.className}`}>
                    {status.text}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{project.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">{project.description}</p>

            {/* Platforms */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Available on</div>
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                {project.metrics.users && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.metrics.users}</span>
                  </div>
                )}
                {project.metrics.rating && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.metrics.rating}</span>
                  </div>
                )}
                {project.metrics.downloads && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Download className="w-4 h-4" />
                    <span>{project.metrics.downloads}</span>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack Preview */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Built with</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.frontend.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-xs text-gray-600 dark:text-gray-400">
                    {tech}
                    {idx < Math.min(project.techStack.frontend.length - 1, 2) && ','}
                  </span>
                ))}
                {project.techStack.frontend.length > 3 && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    +{project.techStack.frontend.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                View Project Details
              </span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
