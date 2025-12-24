'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-black tracking-tight">Inflexion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isActive('/')
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isActive('/projects')
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/support"
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isActive('/support')
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Support
            </Link>
            <Link
              href="/support"
              className="ml-4 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive('/')
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive('/projects')
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/support"
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive('/support')
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/support"
                className="mt-2 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
