import { About } from './components/About'
import { AuroraBackground } from './components/AuroraBackground'
import { BackToTop } from './components/BackToTop'
import { CursorGlow } from './components/CursorGlow'
import { Gallery } from './components/Gallery'
import { ScrollProgress } from './components/ScrollProgress'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { PersonalProjects } from './components/PersonalProjects'
import { TechStack } from './components/TechStack'
import { ThreePillars } from './components/ThreePillars'

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <ScrollProgress />
      <CursorGlow />
      <AuroraBackground />
      <Navbar />
      <Hero />
      <About />
      <ThreePillars />
      <TechStack />
      <Experience />
      <FeaturedProjects />
      <PersonalProjects />
      <Gallery />
      <Marquee />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
