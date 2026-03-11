"use client"
import { SectionHeading } from '../components/SectionHeading'

const SUPPORT_EMAIL = 'qculand.cyber@gmail.com'

export default function Support() {
  return (
    <main className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <SectionHeading
        title="Support"
        subtitle="Questions or concerns? Reach out to the QCULAND team."
      />

      <div className="mx-auto grid max-w-4xl gap-6">
        <section className="card-surface bg-white p-6 dark:bg-black">
          <h3 className="text-xl font-extrabold">Contact Us</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            If you have any other questions or concerns, don’t hesitate to reach out! You can contact us at{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-[var(--color-primary)] hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            Our team will respond to your inquiry as soon as possible.
          </p>
        </section>
      </div>
    </main>
  )
}
