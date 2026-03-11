"use client"
import { SectionHeading } from '../components/SectionHeading'

export default function TermsOfService() {
  return (
    <main className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <SectionHeading
        title="Terms of Service"
        subtitle="Please read these terms before using QCU Land."
      />

      <section className="card-surface mx-auto max-w-4xl bg-white p-6 dark:bg-black">
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
          By accessing the QCU Land website and game, you agree to the following terms:
        </p>

        <ul className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Educational Purpose:</span> QCU Land is
            provided strictly for educational purposes to promote digital literacy and cybersecurity awareness.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">User Conduct:</span> Users are expected
            to engage with the platform ethically. Any attempts to reverse-engineer, exploit, or disrupt the
            game’s functionality are prohibited.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Intellectual Property:</span> All game
            assets, storylines, and educational content are the property of the QCU Land development team at
            Quezon City University.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">System Requirements:</span> To ensure
            optimal performance, users should access the game via a standard web browser on a system meeting
            minimum hardware specifications (for example, at least 3 Mbps internet connection).
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Disclaimer of Liability:</span> While the
            game simulates real-world threats like phishing and malware to provide practical training, it is a
            controlled environment. The developers are not responsible for any cyber incidents occurring on the
            user&apos;s personal devices outside of the game platform.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Progression and Rewards:</span> Badges and
            certificates earned within the game are digital representations of progress and do not constitute
            professional cybersecurity certifications.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Game Progress and Rewards:</span> The
            badges, points, and certificates earned in the game are digital representations of achievement.
            These rewards are for academic recognition only and do not serve as official cybersecurity
            certifications or professional qualifications.
          </li>
          <li>
            <span className="font-semibold text-slate-900 dark:text-white">Acceptance of Terms:</span> By continuing
            to use this web-based educational game, you confirm that you have read, understood, and agreed to
            follow these Terms of Service.
          </li>
        </ul>
      </section>
    </main>
  )
}
