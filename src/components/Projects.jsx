import { useEffect, useState } from 'react'
import projectsData from '../data/projects.json'
import { useLanguage } from '../context/LanguageContext'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="bg-gray-100/80 py-20 sm:py-28 dark:bg-gray-900/50">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-content">
        <div className="reveal mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {t.projects.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            {t.projects.subtitleBefore}{' '}
            <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm dark:bg-gray-800">
              projects.json
            </code>
            {t.projects.subtitleAfter}
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectCard key={`skeleton-${i}`} isLoading />
              ))
            : projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>
        </div>
      </div>
    </section>
  )
}
