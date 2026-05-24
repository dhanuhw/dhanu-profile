import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="flex rounded-xl border border-gray-200 bg-white p-0.5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
      role="group"
      aria-label={t.a11y.language}
    >
      {['id', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-[10px] px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            lang === code
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
