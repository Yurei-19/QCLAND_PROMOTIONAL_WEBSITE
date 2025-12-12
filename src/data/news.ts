export type NewsItem = {
  slug: string
  title: string
  category: 'Announcement' | 'Patch' | 'Event'
  date: string
  summary: string
  body: string
  image?: string
}

export const news: NewsItem[] = [
  {
    slug: 'capstone-defended-december-update',
    title: 'QCULand Patch — Capstone Defended',
    category: 'Patch',
    date: '2025-12-13',
    summary: 'Capstone defended! Tutorials added, TechVoc questions randomized, and new map polish underway.',
    body: `Capstone successfully defended! Big thanks to everyone who supported us.\n\nWhat\'s New\n\n- Added in-game explanations and tutorials for other QCULAND games to help new players onboard faster.\n- TechVoc scenes now feature randomized questions to improve replayability and assessment variety.\n- The new map is up and running — currently in active polish for navigation, signage, and readability.\n\nNext\n\n- More tutorial coverage across chapters.\n- Balance pass on randomized question pools.\n- Continued performance tuning and collision cleanups.`,
    image: '/defended.jpg'
  },
  {
    slug: 'capstone-defense-schedule-announcement',
    title: 'QCULand Patch - Capstone 1 Defense (Sat 8:00-9:30 AM)',
    category: 'Patch',
    date: '2025-12-06',
    summary: 'QCULand-related announcement: Capstone 1 defense schedule and support.',
    body: 'Our team will defend Capstone 1 on Saturday from 8:00 AM to 9:30 AM. This is QCULand-related progress and we appreciate everyone\'s support. After the session, we\'ll share a recap with highlights and learnings.',
    image: '/qcu/1 (1).jpeg'
  },
  {
    slug: 'qculand-christmas-update-v1-2',
    title: 'QCUland Christmas Update V1.2',
    category: 'Patch',
    date: '2025-12-01',
    summary: 'Festive skins, balancing tweaks, and Phisher Bot AI improvements.',
    body: `\
What’s New?\n\n- New holiday hub with snow effects\n- Limited-time "Snowshield" ability\n- Improved Bot pathfinding and puzzle hinting\n\nFixes\n\n- Addressed softlock in Chapter 1 arena\n- Reduced visual noise on deception puzzles\n- Various UI polish`
    , image: '/qcu/1 (2).jpeg'
  },
  {
    slug: 'qculand-devlog-november',
    title: 'November Devlog — Map Polish',
    category: 'Announcement',
    date: '2025-11-20',
    summary: 'Lighting pass, campus landmarks, and improved navigation cues.',
    body: 'We refined the campus layout and improved readability in the dark mode environment. Expect smoother traversal and better checkpointing.',
    image: '/qcu/1 (3).jpeg'
  },
  {
    slug: 'new-cybersecurity-training-mission',
    title: 'New Cybersecurity Training Mission',
    category: 'Announcement',
    date: '2025-12-02',
    summary: 'New playable mission in the Library Zone focusing on phishing detection.',
    body: 'A new playable mission has been added to the Library Zone. Players will learn to detect phishing attempts while facing the Phisher character in timed mini-challenges.',
    image: '/qcu/1 (4).jpeg'
  },
  {
    slug: 'cipher-ai-encounter-update',
    title: 'Cipher AI Encounter Update',
    category: 'Patch',
    date: '2025-12-02',
    summary: 'Adaptive boss encounter with dynamic strategies and dialogue.',
    body: "The Cipher boss encounter now adapts to the player's decisions. Expect dynamic strategies, new dialogue lines, and updated cutscenes based on quiz performance.",
    image: '/qcu/1 (5).jpeg'
  },
  {
    slug: 'qcu-bee-companion-upgrade',
    title: 'QCU Bee Companion Upgrade',
    category: 'Announcement',
    date: '2025-12-02',
    summary: 'QCU Bee now provides contextual hints across multiple areas.',
    body: 'QCU Bee now provides contextual hints in the Dorm, Admin, and Library areas. Additional voice lines have been added to guide new players.',
    image: '/qcu/1 (6).jpeg'
  },
  {
    slug: 'patch-1-3-4-performance-and-bug-fixes',
    title: 'Patch 1.3.4 – Performance and Bug Fixes',
    category: 'Patch',
    date: '2025-12-02',
    summary: 'Animation stutter fixes, model optimizations, and faster loading.',
    body: 'Fixed animation stutters in the Main Gate scene, optimized 3D models for smoother performance on low-spec devices, and improved loading times across campus areas.',
    image: '/qcu/1 (7).jpeg'
  },
  {
    slug: 'cyber-awareness-week-event',
    title: 'Cyber Awareness Week Event',
    category: 'Event',
    date: '2025-12-02',
    summary: 'Participate in daily challenges for rewards and special items.',
    body: 'Participate in daily cybersecurity challenges around the virtual campus. Completing all tasks rewards a bonus cutscene and special in-game items.',
    image: '/qcu/1 (8).jpeg'
  },
]
