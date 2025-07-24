"use client"

import { useState } from "react"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Shop Wave E-commerce",
      category: "Full Stack",
      src: "https://shop-wave-electron-ecommerce.vercel.app/",
      description:
        "A comprehensive e-commerce platform built with modern technologies, featuring scalable architecture and optimized performance.",
      tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redux"],
      features: [
        "Modular design architecture",
        "Real-time inventory management",
        "Secure payment integration",
        "Advanced search & filtering",
        "Mobile-responsive design",
      ],
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-900/20 to-blue-900/20",
    },
    {
      title: "Noon API Integration",
      category: "Backend",
      src: "https://github.com/mohamedd2003/E-commerce",
      description:
        "Robust API integration system with modular architecture, implementing industry-standard design patterns for scalability.",
      tech: ["Node.js", "React.js", "MongoDB", "Mongoose"],
      features: [
        "Repository pattern implementation",
        "Middleware chaining system",
        "High-performance data handling",
        "Comprehensive error handling",
        "API rate limiting & caching",
      ],
      gradient: "from-teal-600 to-green-600",
      bgGradient: "from-teal-900/20 to-green-900/20",
    },
    {
      title: "Talabat API Integration",
      category: "Backend",
      description:
        "Advanced API integration using Onion Architecture with sophisticated design patterns for enterprise-level applications.",

      tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework", "API Integration"],

      features: [
        "Onion Architecture implementation",
        "Specification pattern",
        "Unit of Work pattern",
        "Angular frontend integration",
        "Robust database optimization",
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20",
    },
    {
      title: "MVC Application",
      category: "Backend",
      description:
        "Enterprise-grade CRUD application built with ASP.NET, featuring secure authentication and scalable architecture.",
      tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework"],
      features: [
        "Complete CRUD operations",
        "3-tier architecture design",
        "Generic repository pattern",
        "Identity framework integration",
        "Role-based authorization",
      ],
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/20 to-purple-900/20",
    },
    {
      title: "TRT Event Platform",
      category: "Freelance Full Stack",
      src: "https://trt-eg.vercel.app/",
      description:
        "Custom event management platform for automotive enthusiasts, featuring car showcases and interactive voting systems.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Event management system",
        "Car showcase galleries",
        "Real-time voting system",
        "User authentication",
        "Admin dashboard",
      ],
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-900/20 to-rose-900/20",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-white">Featured</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    activeProject === index
                      ? `bg-gradient-to-r ${project.bgGradient} border-gray-600`
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activeProject === index ? "bg-white/20 text-white" : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
              <div className={`h-64 bg-gradient-to-br ${projects[activeProject].gradient} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{projects[activeProject].title}</h3>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {projects[activeProject].category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{projects[activeProject].description}</p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {projects[activeProject].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].gradient}`}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={projects[activeProject].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 bg-gradient-to-r ${projects[activeProject].gradient} text-white rounded-lg font-semibold hover:scale-105 transition-transform`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
