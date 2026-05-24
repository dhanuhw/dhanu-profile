import experiences from '../data/experience.json'
import { useLanguage } from '../context/LanguageContext'

const skills = [
  'Microsoft Office',
  'Google Workspace',
  'Reporting & Analysis',
  'Canva',
  'Office Administration',
  'Computer Literacy',
  'Team Collaboration',
  'JSON',
  'WCMS',
  'Jenkins',
  'Adobe Photoshop',
  'GitLab',
  'GitHub',
]

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-content">
        <div className="reveal mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {t.about.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            {t.about.subtitle}
          </p>
        </div>

        <div className="reveal grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t.about.summaryTitle}
            </h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              {t.about.summary}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t.about.experienceTitle}
            </h3>
            <ul className="space-y-6">
              {experiences.map((exp) => (
                <li
                  key={exp.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                      {exp.role[lang]}{' '}
                      {exp.project && (
                        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                          ({exp.project[lang]})
                        </span>
                      )}
                    </p>
                    <span className="shrink-0 text-right text-xs leading-tight text-blue-600 dark:text-blue-400">
                      {exp.period[lang]}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.description[lang]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-12">
          <h3 className="mb-4 text-center text-lg font-semibold text-gray-900 dark:text-white">
            {t.about.skillsTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
