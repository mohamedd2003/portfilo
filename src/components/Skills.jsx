const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "JavaScript", level: 95, icon: "JS" },
        { name: "TypeScript", level: 85, icon: "TS" },
        { name: "Tailwind", level: 90, icon: "🎨" },
        { name: "HTML5", level: 95, icon: "🌐" },
      ],
    },
    {
      title: "Backend",
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "SQL", level: 85, icon: "🗄️" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "C#", level: 80, icon: "C#" },
      ],
    },
    {
      title: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Redux", level: 85, icon: "🔄" },
        { name: "Bootstrap", level: 80, icon: "🅱️" },
        { name: "MUI", level: 75, icon: "📦" },
        { name: "Agile", level: 85, icon: "⚡" },
        { name: "Cloud", level: 70, icon: "☁️" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-white">Technical</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power my development process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skills Marquee */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/10 via-transparent to-teal-900/10 rounded-2xl border border-gray-800 p-8">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux",
              "Python",
              "C#",
              "SQL",
              "Git",
              "Bootstrap",
              "MUI",
              "JavaScript",
              "HTML5",
            ]
              .concat([
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "Python",
                "C#",
                "SQL",
                "Git",
                "Bootstrap",
                "MUI",
                "JavaScript",
                "HTML5",
              ])
              .map((tech, index) => (
                <div
                  key={index}
                  className="mx-6 px-6 py-3 bg-black/50 rounded-full border border-gray-700 hover:border-purple-500 transition-colors whitespace-nowrap"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
