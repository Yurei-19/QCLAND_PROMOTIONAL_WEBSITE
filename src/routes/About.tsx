"use client"
import { SectionHeading } from '../components/SectionHeading'

export default function About() {
  return (
    <main className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <SectionHeading
        title="About"
        subtitle="A Quezon City University capstone project for game-based cybersecurity learning."
      />

      <div className="mx-auto grid max-w-5xl gap-6">
        <section className="card-surface bg-white p-6 dark:bg-black">
          <h3 className="text-xl font-extrabold">About the Project</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            QCU LAND is a web-based, story-driven educational game developed by Bachelor of Science in
            Information Technology students of Quezon City University as part of their capstone project. The
            system is designed to promote cybersecurity awareness and responsible digital behavior among
            university students through an interactive and gamified learning experience.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            The game takes place in a virtual campus environment where users explore different buildings
            such as academic facilities, administrative offices, and public areas. Each location presents
            mission-based scenarios that simulate real-world cybersecurity threats including phishing
            attacks, weak password usage, unsafe public Wi-Fi connections, social engineering tactics, and
            data privacy risks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            Through decision-making activities, feedback mechanisms, and assessment challenges, QCU LAND
            enables students to recognize online threats and apply safe digital practices in a controlled
            learning environment. The system integrates user-centered design and gamification elements to
            improve engagement, knowledge retention, and behavioral change.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            QCU LAND aims to bridge the gap between theoretical cybersecurity knowledge and practical
            application by transforming traditional awareness training into an immersive, accessible, and
            student-friendly educational platform.
          </p>
        </section>

        <section className="card-surface bg-white p-6 dark:bg-black">
          <h3 className="text-xl font-extrabold">Who Are We</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            We are QCU students working together on a capstone project centered on cybersecurity awareness.
            Our team designed QCULAND to introduce essential safety concepts in a way that feels practical
            and relatable, especially for everyday browsing, school accounts, and common online services.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            Through the game’s challenges, we highlight threats such as phishing attempts, weak or reused
            passwords, unsafe browsing habits, and other risky behaviors that can lead to compromised
            accounts or data loss.
          </p>
        </section>

        <section className="card-surface bg-white p-6 dark:bg-black">
          <h3 className="text-xl font-extrabold">Our Capstone Core</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            Our core focus is to deliver cybersecurity learning through gameplay, clear, interactive, and
            grounded in real scenarios.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border border-black/10 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-black/40 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-white">Game-based cybersecurity learning</span>
              <div className="mt-1">Learn by doing, not just by reading.</div>
            </li>
            <li className="rounded-lg border border-black/10 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-black/40 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-white">Interactive threat simulations</span>
              <div className="mt-1">Challenges mirror common online attacks and mistakes.</div>
            </li>
            <li className="rounded-lg border border-black/10 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-black/40 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-white">Recognition and prevention</span>
              <div className="mt-1">Spot warning signs and choose safer actions.</div>
            </li>
            <li className="rounded-lg border border-black/10 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-black/40 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-white">Simple, understandable learning</span>
              <div className="mt-1">Security concepts are explained in accessible terms.</div>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-[var(--color-primary)] p-8 text-white shadow-card">
          <h3 className="text-2xl font-extrabold">Building a Safer Digital Future</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            Our goal is to help players develop awareness of cybersecurity risks and gain habits that protect
            personal information online. By practicing prevention-focused decisions, like verifying links,
            using strong passwords, and avoiding suspicious downloads, learners can reduce the chances of
            becoming victims of cyber attacks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            QCULAND promotes responsible internet use, digital safety, and confidence in navigating modern
            online spaces, skills that matter for students today and for the wider community.
          </p>
        </section>
      </div>
    </main>
  )
}
