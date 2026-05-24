import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-5 lg:px-6">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left xl:gap-16">
          <div className="animate-fade-in shrink-0 lg:pt-1">
            <img
              src="/profile.png"
              alt={t.hero.profileAlt}
              className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-blue-100 dark:border-gray-800 dark:ring-blue-900/50 sm:h-44 sm:w-44 lg:h-48 lg:w-48"
              width={192}
              height={192}
            />
          </div>

          <div className="w-full min-w-0 flex-1 animate-fade-in [animation-delay:150ms]">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {t.hero.greeting}
            </p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.hero.name}
            </h1>
            <p className="mb-4 text-xl font-medium text-gray-600 dark:text-gray-300">
              {t.hero.title}
            </p>
            <p className="mb-8 max-w-none text-base leading-relaxed text-gray-600 sm:text-[17px] lg:text-lg dark:text-gray-400">
              {t.hero.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/30"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/20" />
      </div>
    </section>
  )
}
