import type { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from '../components/BackToTop';

export const metadata: Metadata = {
  title: 'Our Projects - Inflexion Co.',
  description: 'Explore our portfolio of innovative applications and software solutions',
};

// Sample projects data - Replace this with your actual projects
const projects = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'A revolutionary mobile application that simplifies daily tasks and boosts productivity with AI-powered features.',
    category: 'Mobile App',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    status: 'Beta',
    image: '🚀',
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'Web-based platform for seamless team collaboration with real-time updates and intelligent workflows.',
    category: 'Web Application',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'In Development',
    image: '💼',
  },
  {
    id: 3,
    name: 'Project Gamma',
    description: 'AI-powered analytics tool that transforms complex data into actionable insights for businesses.',
    category: 'Data Analytics',
    technologies: ['Python', 'TensorFlow', 'React'],
    status: 'In Development',
    image: '📊',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
              Our Portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Explore our work
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our recent web design creations and find out how we transform vision into reality through innovative design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                {/* Project Image/Icon */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'Beta'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center justify-center group">
                    View Project
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's collaborate to bring your vision to life
          </p>
          <Link
            href="/support"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Get in touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
