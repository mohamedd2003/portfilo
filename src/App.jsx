import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
    useEffect(() => {
    document.title = "Mohamed Hossam - Full Stack Developer";
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 pointer-events-none"></div>
      <div className="relative z-10">
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
