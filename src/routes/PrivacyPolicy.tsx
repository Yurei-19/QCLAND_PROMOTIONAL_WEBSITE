"use client"
import { SectionHeading } from '../components/SectionHeading'

export default function PrivacyPolicy() {
  return (
    <main className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <SectionHeading
        title="Privacy Policy"
        subtitle="How QCU Land collects, uses, and protects data."
      />

      <section className="card-surface mx-auto max-w-5xl bg-white p-6 dark:bg-black">
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
          <span className="font-semibold text-slate-900 dark:text-white">Effective Date:</span> March 1, 2026
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
          The College of Computer Science and Information Technology at Quezon City University manages QCU Land:
          A Web-Based Educational Game for Promoting Cyber Safety and Digital Responsibility. Our priority is
          safeguarding your privacy in line with the Data Privacy Act of 2012 (Republic Act No. 10173), its
          Implementing Rules and Regulations, and guidelines from the National Privacy Commission (NPC). This
          Privacy Policy outlines our practices for collecting, using, storing, securing, and disposing of any
          data related to the Game. Accessing QCU Land implies your agreement to these terms.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h3 className="text-lg font-extrabold">1. Information We Collect</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              QCU Land is carefully designed to respect your privacy. We only collect the minimum amount of
              information needed to make the game work properly and to support its educational purpose. Our goal
              is to provide an engaging learning experience without asking for unnecessary personal details.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              You are not required to create an account to access the game, and we do not automatically collect
              personally identifiable information (PII) such as your full name, email address, phone number, or
              home address. We believe that learning about cyber safety should not require you to give up your
              own privacy.
            </p>

            <h4 className="mt-5 text-base font-bold">1.1 Game-Related Data</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              <span className="font-semibold">Temporary Session Data:</span> While playing, we hold temporary
              non-personal details to support seamless progress in one session. This covers:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
              <li>Your position in the game.</li>
              <li>Ongoing mission.</li>
              <li>Missions finished.</li>
              <li>Points earned.</li>
              <li>Tutorial status.</li>
              <li>Timestamp of last activity.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              This data is stored temporarily in a database or browser session storage and is automatically
              deleted at the end of your session or when you close the browser.
            </p>

            <h4 className="mt-5 text-base font-bold">1.2 No Sensitive Personal Information</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              We do not collect sensitive personal information or any privileged details as per the Data Privacy
              Act.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">2. How We Use Your Information</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Collected data serves only valid purposes:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
              <li>Enabling gameplay, monitoring short-term progress, and delivering feedback, rewards, or certificates.</li>
              <li>Maintaining Game security and preventing misuse.</li>
              <li>Meeting legal requirements, such as regulatory reports if necessary.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Data is not utilized for promotion, ads, or business activities. The Game does not connect to social
              media or third-party platforms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">3. Cookies and Similar Technologies</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              QCU Land may use session cookies or local storage to maintain game state during your visit. These
              are temporary and do not track you across sites. You can manage cookies through your browser
              settings, but disabling them may affect Game functionality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">4. Sharing and Disclosure of Information</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Your data is not shared, sold, or revealed to outsiders, except in specific cases:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
              <li>With QCU staff or instructors for Capstone Project assessment.</li>
              <li>When mandated by law, like court orders or NPC requests.</li>
              <li>
                With service providers bound by confidentiality agreements and compliant with the Data Privacy
                Act.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Any sharing follows Data Privacy Act principles of openness, valid intent, and balance.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">5. Data Security and Storage</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              <span className="font-semibold">Storage:</span> Information is kept temporarily on protected servers
              at QCU or authorized hosts. Session data vanishes after inactivity or session closure.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              <span className="font-semibold">Protection Steps:</span> We apply suitable administrative, physical,
              and tech safeguards, such as:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
              <li>Data encryption during transfer (for example, HTTPS).</li>
              <li>Restricted access for approved developers and educators.</li>
              <li>Routine security checks following cybersecurity standards.</li>
              <li>Alignment with ISO/IEC 25010 quality criteria from the Project docs.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              While secure, no platform is foolproof. Breaches will prompt notifications to users and the NPC per
              legal standards.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">6. Retention Period</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Data is held only as required for stated goals. Session info is deleted right after sessions.
              Anonymized data is aggregated and stripped of any identifiers, ensuring it cannot be linked back to
              individuals.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">7. Your Data Subject Rights</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Per the Data Privacy Act, you possess rights including:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
              <li>Information Right: Details on data handling.</li>
              <li>Objection Right: To data processing.</li>
              <li>Access Right: To request a copy of your data.</li>
              <li>Correction Right: Fixing errors.</li>
              <li>Deletion or Restriction Right: To request deletion under certain conditions.</li>
              <li>Compensation Right: For improper handling.</li>
              <li>Portability Right: Transferring data.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              Contact our Data Protection Officer (Section 8) to invoke these. Responses will adhere to NPC
              timelines.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-extrabold">8. Policy Updates</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              This Privacy Policy may be revised for Game changes or legal updates. Revisions will appear on the
              QCU Land site with new effective dates. Ongoing use signifies consent to changes.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              This policy falls under Philippine jurisdiction, including the Data Privacy Act of 2012.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
