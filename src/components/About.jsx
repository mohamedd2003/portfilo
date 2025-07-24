const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500/30 rounded-2xl"></div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">Available for work</span>
                </div>

                <h2 className="text-4xl font-bold">
                  <span className="text-white">About</span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Me</span>
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey
                  spans from frontend magic with React to backend wizardry with Node.js, always focused on creating
                  exceptional user experiences.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400">1+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-teal-400">15+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Journey</h3>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">Backend Engineer</h4>
                    <p className="text-purple-400 text-sm mb-2">Route Academy • Feb 2025 – June 2025</p>
                    <p className="text-gray-300 text-sm">
                      Developing scalable APIs with Node.js, Express.js, and MongoDB. Focus on RESTful architecture and
                      database optimization.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-teal-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">Frontend Engineer</h4>
                    <p className="text-teal-400 text-sm mb-2">ITI • July 2024 – Sep 2024</p>
                    <p className="text-gray-300 text-sm">
                      Intensive React.js training program focusing on modern development practices and scalable
                      applications.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">Frontend Mentor</h4>
                    <p className="text-blue-400 text-sm mb-2">Route Academy • Dec 2023 – Jan 2024</p>
                    <p className="text-gray-300 text-sm">
                      Led React.js workshops and mentored students in frontend development best practices.
                    </p>
                  </div>
                </div>
                 <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">Frontend Engineer</h4>
                    <p className="text-blue-400 text-sm mb-2">Route Academy • Mar 2022 – Aug 2023</p>
                    <p className="text-gray-300 text-sm">
                      Integrated RESTful APIs and third-party services to enable dynamic data rendering and enhance application 
                      functionality 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-teal-900/20 p-6 rounded-lg border border-gray-800">
              <h4 className="font-bold text-white mb-3">Education</h4>
              <div className="text-gray-300">
                <p className="font-semibold">Bachelor of Computer Science & Statistics</p>
                <p className="text-sm text-gray-400">Helwan University • 2021-2025 • GPA: 3.652</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
