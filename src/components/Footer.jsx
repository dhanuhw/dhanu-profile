import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-container px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-content">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Dhanu Hariwijaya. {t.footer.copyright}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          {t.footer.madeWith}
        </p>
        </div>
      </div>
    </footer>
  )
}
