import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const inputClass =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400'

export default function Feedback() {
  const { t } = useLanguage()
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t.feedback.errors.name
    if (!form.email.trim()) {
      next.email = t.feedback.errors.email
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t.feedback.errors.emailInvalid
    }
    if (!form.subject.trim()) next.subject = t.feedback.errors.subject
    if (!form.message.trim()) next.message = t.feedback.errors.message
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      const response = await fetch('https://formsubmit.co/ajax/dhanuhw96@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '-',
          subject: form.subject,
          message: form.message,
          _subject: `[Portfolio Feedback] ${form.subject}`,
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('Submit failed')

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="feedback" className="mt-16 border-t border-gray-200 pt-16 dark:border-gray-800">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {t.feedback.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{t.feedback.subtitle}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.feedback.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder={t.feedback.namePlaceholder}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.feedback.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder={t.feedback.emailPlaceholder}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.feedback.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder={t.feedback.phonePlaceholder}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.feedback.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
              placeholder={t.feedback.subjectPlaceholder}
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.feedback.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder={t.feedback.messagePlaceholder}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
        </div>

        {status === 'success' && (
          <p className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-300">
            {t.feedback.success}
          </p>
        )}

        {status === 'error' && (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {t.feedback.error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'loading' ? t.feedback.sending : t.feedback.submit}
        </button>
      </form>
    </div>
  )
}
