import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import Feedback from './Feedback'

const contacts = [
  {
    label: 'Email',
    value: 'dhanuhw96@gmail.com',
    href: 'mailto:dhanuhw96@gmail.com',
    icon: FaEnvelope,
    color: 'text-red-500',
  },
  {
    label: 'WhatsApp',
    value: '+62 822 6116 5006',
    href: 'https://wa.me/6282261165006',
    icon: FaWhatsapp,
    color: 'text-green-500',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhanuhw',
    href: 'https://www.linkedin.com/in/dhanuhw/',
    icon: FaLinkedin,
    color: 'text-blue-600',
  },
  {
    label: 'GitHub',
    value: 'github.com/dhanuhw',
    href: 'https://github.com/dhanuhw',
    icon: FaGithub,
    color: 'text-gray-800 dark:text-gray-200',
  },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-content">
        <div className="reveal mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {t.contact.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  <p className="truncate font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <Feedback />
        </div>
      </div>
    </section>
  )
}
