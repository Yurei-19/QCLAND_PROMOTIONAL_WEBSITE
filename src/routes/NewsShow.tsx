"use client"
import { Link, useParams } from 'react-router-dom'
import { news } from '../data/news'

export default function NewsShow() {
  const { slug } = useParams()
  const item = news.find((n) => n.slug === slug)
  const base = (import.meta as any).env?.BASE_URL || '/'
  const withBase = (p?: string) => (p ? `${(base.endsWith('/') ? base : base + '/')}${p.replace(/^\//,'')}` : undefined)


  if (!item) {
    return (
      <main className="container-responsive py-12">
        <Link to="/news" className="text-sm text-[var(--color-primary)] hover:underline">← Back to News & Updates</Link>
        <h1 className="mt-6 text-2xl font-bold">Not Found</h1>
        <p className="text-slate-600 dark:text-slate-300">The requested announcement does not exist.</p>
      </main>
    )
  }

  return (
    <main>
      {/* Hero banner with background image */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const capstoneBg = '/CapstoneDefense1.jpeg'
              const src = item.slug === 'capstone-defense-schedule-announcement' ? capstoneBg : (item.image || undefined)
              return src ? `url(${withBase(src)})` : undefined
            })(),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
        <div className="container-responsive relative py-12">
          <Link to="/news" className="text-sm text-[var(--color-primary)] hover:underline">← Back to News & Updates</Link>
          <div className="mt-6 grid grid-cols-1 items-start gap-6">
            <div className="max-w-4xl rounded-2xl border border-white/10 bg-black/30 p-6 text-white shadow-card">
              <span className="text-xs font-bold tracking-widest">WHAT'S NEW?</span>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{item.title}</h1>
              <p className="mt-3 text-sm text-white/90">
                The holidays have arrived at Quezon City University, but the Shadow Network never sleeps. While the campus glows with Christmas lights,
                glitches and cyber threats continue to spread. Arius, the Student Defender must now protect QCU during the festive season, facing malware
                creatures wrapped in holiday disguises.
              </p>
              {item.slug === 'capstone-defense-schedule-announcement' && (
                <p className="mt-3 text-sm text-white/80">
                  Our team will defend Capstone 1 on Saturday from 8:00 AM to 9:30 AM. We're aiming for a solid, confident defense and appreciate everyone's
                  support. After the session, we'll share a short recap with highlights and learnings.
                </p>
              )}
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-white/20 px-3 py-1 ring-1 ring-white/20">{item.category}</span>
                <time className="text-white/80">{new Date(item.date).toLocaleDateString()}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      {item.slug === 'qculand-christmas-update-v1-2' ? (
        <section className="container-responsive py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Festive Campus Skins</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Snow-covered halls, twinkling lights, and decorated servers bring holiday cheer.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Holiday Costumes</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Arius and allies now feature Christmas-themed outfits.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Seasonal Enemy Variants</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Slybyte, Spoof, Middlix, and Encryphor appear with glitchy holiday disguises.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Special Event Quests</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Collect “Cyber Bells” by practicing safe online habits to unlock rewards.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Winter Effects</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">New animations of falling snow and frosty glitches across the digital world.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bug Fixes & Improvements</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Optimized performance for smoother gameplay during festive effects</li>
                <li>Fixed minor dialogue overlaps in Chapter 2</li>
                <li>Improved login security prompts for the event quests</li>
              </ul>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Upcoming in January 2026</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>New Year’s Challenge: “Firewall Resolutions”</li>
                <li>Expanded campus zones with fresh cyber puzzles</li>
                <li>Chapter 5: Cipher’s Dominion — the final showdown</li>
              </ul>
            </div>
          </div>
        </section>
      ) : item.slug === 'npc-implementation-progress' ? (
        <section className="container-responsive py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">NPC Schedules</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Daily routines for shopkeepers, mentors, and quest givers across campus.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Dialogue Trees</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Branching conversations with hints, lore, and quest-related guidance.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Interactions</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Contextual prompts: shop, mentor advice, mini-quests, and rewards.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Zone Coverage</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Dorm, Admin, Library, and Main Gate get first NPC pass.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Progress & Next Steps</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Baseline schedules implemented for 4 NPC archetypes</li>
                <li>Dialogue editor draft with branching preview</li>
                <li>Interaction triggers tied to map hotspots</li>
              </ul>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Incoming Days</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Voice lines for mentors and shopkeepers</li>
                <li>Quest chains with checkpoints and rewards</li>
                <li>Ambient behaviors: idle, roam, and react</li>
              </ul>
            </div>
          </div>
        </section>
      ) : item.slug === 'room-refinement-for-gameplay' ? (
        <section className="container-responsive py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Layout Tightening</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Reduced empty space and improved flow for puzzle rooms.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Collision Polish</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Cleaner colliders to prevent snagging and odd pathing.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Objective Clarity</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Better markers, signage, and prompt timings for tasks.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Lighting & Readability</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Balanced lighting, improved contrast, and reduced visual noise.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fixes & Improvements</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Smoothed navigation paths and checkpoint placement</li>
                <li>Adjusted puzzle prompts and timer windows</li>
                <li>Aligned interactive zones with visual cues</li>
              </ul>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Next Iterations</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>New puzzles with layered objectives</li>
                <li>Visual feedback on success/failure states</li>
                <li>Accessibility tweaks for color and text size</li>
              </ul>
            </div>
          </div>
        </section>
      ) : item.slug === 'qcu-map-enhancements' ? (
        <section className="container-responsive py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Landmark Highlights</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Key campus points called out with clear labels and icons.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Wayfinding Signage</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Consistent directional markers across zones and corridors.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Mini-map Readability</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Higher contrast, simplified icons, and clearer player marker.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Navigation Cues</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Breadcrumbs and glow cues for main quest routes.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Improvements & Next</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Cleaned overlapping signage near Main Gate</li>
                <li>Balanced mini-map scale for dense areas</li>
                <li>Integrated quest waypoints with POIs</li>
              </ul>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Upcoming</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Photo mode markers for landmarks</li>
                <li>Fast-travel tests between zones</li>
                <li>Campus events overlay on the map</li>
              </ul>
            </div>
          </div>
        </section>
      ) : item.slug === 'capstone-defense-schedule-announcement' ? (
        <section className="container-responsive py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Schedule</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Saturday, 8:00–9:30 AM - Capstone 1 Defense session.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Focus</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">QCULand progress overview, NPCs, rooms, and map enhancements.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Support</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">We appreciate your support; recap with highlights to follow.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notes & Next</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>Preparation includes gameplay refinements and performance checks</li>
                <li>Post-session recap will include key learnings</li>
                <li>Upcoming devlogs to track progress milestones</li>
              </ul>
              <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Related</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li>NPC behavior rollouts</li>
                <li>Room layout and collision polish</li>
                <li>QCU map wayfinding improvements</li>
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <section className="container-responsive py-10">
          <article className="prose max-w-none dark:prose-invert">
            {item.body.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </article>
        </section>
      )}
    </main>
  )
}
