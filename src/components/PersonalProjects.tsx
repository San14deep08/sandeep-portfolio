import { personalProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function PersonalProjects() {
  return (
    <section id="projects" className="bg-navy py-20 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <p className="accent-eyebrow mb-3">Side Quests</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">Personal Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
            I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here
            are a few of my favorites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
