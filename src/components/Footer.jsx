const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/mohamedhossam-mernstack/" },
    { name: "GitHub", icon: "🐱", href: "https://github.com/mohamedd2003" },
    { name: "Email", icon: "📧", href: "mailto:mohamedd.hossammm@gmail.com" },
    { name: "Phone", icon: "📱", href: "tel:+201017897342" },
  ]

  return (
    <footer id="contact" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-white">Let's</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals. Whether you have a
                project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Nasr City, Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="text-white font-semibold">Availability</p>
                  <p className="text-gray-400">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 bg-black/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:mohamedd.hossammm@gmail.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              MH.
            </div>

            <div className="text-gray-400 text-center">
              <p>© 2025 Mohamed Hossam Mohamed. Crafted with passion and precision.</p>
            </div>

            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
