import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { PersonalProjects } from './components/PersonalProjects'
import { ThreePillars } from './components/ThreePillars'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <ThreePillars />
      <FeaturedProjects />
      <Experience />
      <PersonalProjects />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  )
}
