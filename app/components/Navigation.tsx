'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Inflexion Co.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/support"
              className={`text-sm font-medium transition-colors ${
                isActive('/support')
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Support
            </Link>
          </div>

          {/* Theme Toggle - Desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-sm font-medium ${
                  isActive('/') ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`text-sm font-medium ${
                  isActive('/projects') ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/support"
                className={`text-sm font-medium ${
                  isActive('/support') ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
