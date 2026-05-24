import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="aspect-video animate-pulse bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-2/3 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
        <div className="flex gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-10 flex-1 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-10 flex-1 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  )
}

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
      )}
      <img
        src={error ? '/projects/project-1.svg' : src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true)
          setLoaded(true)
        }}
        className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default function ProjectCard({ project, isLoading }) {
  const { t } = useLanguage()

  if (isLoading) {
    return <ProjectCardSkeleton />
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:shadow-black/40">
      <LazyImage src={project.image} alt={project.title} />

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" />
            {t.projects.demo}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <FaGithub className="h-4 w-4" />
            {t.projects.github}
          </a>
        </div>
      </div>
    </article>
  )
}
