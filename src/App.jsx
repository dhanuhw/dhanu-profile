import { useDarkMode } from './hooks/useDarkMode'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const { isDark, toggle } = useDarkMode()
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} onToggleDark={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
