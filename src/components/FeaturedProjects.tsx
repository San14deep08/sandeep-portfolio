import { featuredProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  return (
    <section id="work" className="bg-navy py-20 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <p className="accent-eyebrow mb-3">Featured Work</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            My Startup Shenanigans
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
            I helped founders go from 0 to 1 because that&apos;s the hard part. Here&apos;s a peek into my lab
            where creativity meets code, and bugs meet their doom!
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
