import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'gencon-rollcall',
      title: 'Gen Con Roll Call',
      shortDescription: 'Private, mobile-first convention coordination PWA with shared maps, live statuses, and rally points.',
      description: '<p>Gen Con Roll Call is a private coordination app built for a small group attending Gen Con Indy 2026. It replaces noisy group texts with a shared convention map where friends can place manual location pins, update their status, leave short notes, and respond to rally points in near real time.</p><p>The production MVP includes a server-validated shared-password gate, anonymous Firebase sessions, Firestore-backed member profiles, location privacy controls, multi-map support for the official convention maps, and installable PWA behavior. Rally notifications, expiration, identity recovery, and mobile-first workflows help the group coordinate without turning the app into continuous location tracking.</p>',
      imageUrl: '/assets/images/projects/gencon-rollcall.webp',
      technologies: ['Angular 21', 'TypeScript', 'Firebase Auth', 'Firestore', 'Vercel', 'Angular PWA', 'Web Push'],
      categories: ['Web App', 'PWA', 'Event Coordination', 'Real-time', 'Privacy'],
      featured: true,
      date: '2026-07-13',
      type: 'Private Group Coordination PWA',
      client: 'Personal Project',
      liveUrl: 'https://gencon-rollcall.vercel.app',
      aiFeatures: ['AI-Assisted Development'],
      repoUrl: 'https://github.com/Brandon-Born/gencon-rollcall'
    },
    {
      id: 'gen-con-preview-explorer',
      title: 'Gen Con 2026 Preview Explorer',
      shortDescription: 'Search, planning, and AI recommendation tool for exploring the BoardGameGeek Gen Con preview catalog.',
      description: '<p>Gen Con 2026 Preview Explorer turns the large BoardGameGeek convention preview into a private, searchable planning workspace for a group of friends. It synchronizes and normalizes preview data, then supports fast filtering by publisher, mechanic, category, availability, player count, and play time.</p><p>Group members can create handles, record interest, add notes and tags, export planning data, and review deterministic recommendations. A Claude-powered chat assistant queries the application database through dedicated tools so its answers and game suggestions stay grounded in the synced catalog rather than model memory.</p>',
      imageUrl: '/assets/images/projects/gen-con-preview-explorer.webp',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Anthropic Claude', 'Vercel', 'Vercel Cron'],
      categories: ['Web App', 'Full-stack', 'AI', 'Board Games', 'Search'],
      featured: true,
      date: '2026-06-15',
      type: 'AI Search & Recommendation Tool',
      client: 'Personal Project',
      aiFeatures: ['Grounded Claude Chat', 'Catalog Recommendations', 'Database-backed AI Tools'],
      repoUrl: 'https://github.com/Brandon-Born/gen-con-preview-o-rama'
    },
    {
      id: 'quick-sale',
      title: 'Quick Sale — Garage Sale Recorder',
      shortDescription: 'Fast, device-local sales recorder with categorized intake, daily totals, and simple reporting.',
      description: '<p>Quick Sale is a small browser utility designed to make garage-sale checkout fast and reliable. A seller chooses a bucket, enters an amount or taps a common quick value, and records the transaction without navigating a complicated point-of-sale system.</p><p>The reporting view groups totals by day and bucket, while recent-sale controls make corrections straightforward. Everything runs as a static web app and persists in localStorage, keeping the tool inexpensive, offline-friendly, and scoped to the device being used at the sale.</p>',
      imageUrl: '/assets/images/projects/quick-sale.webp',
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Local Storage', 'Vercel'],
      categories: ['Web App', 'Tool', 'Business Tools', 'Local-first'],
      featured: false,
      date: '2026-05-15',
      type: 'Browser Utility',
      client: 'Personal Project',
      aiFeatures: ['AI-Assisted Development'],
      repoUrl: 'https://github.com/Brandon-Born/quick-sale'
    },
    {
      id: 'goblin-golf',
      title: 'Goblin Golf',
      shortDescription: 'Mobile-first fantasy disc golf game with deliberate shot shaping, wind, and a dedicated putting challenge.',
      description: '<p>Goblin Golf is a playful browser game that combines competitive disc golf rules with a colorful fantasy world. Players choose from three goblins and complete a fully playable hole using deliberate aim, drag-based power, disc selection, wind reads, and hyzer or anhyzer shot shaping.</p><p>The putting phase switches to a basket-focused mini game with its own aiming and power decisions. Built mobile-first with touch controls and accessibility in mind, the prototype favors thoughtful shot planning over twitch timing while delivering polished pixel-art-inspired arcade sports energy.</p>',
      imageUrl: '/assets/images/projects/goblin-golf.webp',
      technologies: ['Phaser 3', 'TypeScript', 'Vite', 'Vitest', 'Playwright'],
      categories: ['Game', 'Web Game', 'Mobile-first', 'Accessibility'],
      featured: true,
      date: '2026-05-13',
      type: 'Browser Game',
      client: 'Personal Project',
      aiFeatures: ['AI-Assisted Development'],
      repoUrl: 'https://github.com/Brandon-Born/goblin-golf'
    },
    {
      id: 'homeschool-sidekick',
      title: 'Homeschool Sidekick',
      shortDescription: 'Parent-guided AI tutoring platform that gives children scaffold-first help through chat and optional voice.',
      description: '<p>Homeschool Sidekick is an AI tutoring platform where parents set up lessons and guide the tutor from the sidelines while children work through a simple chat or optional voice interface. The tutor defaults to scaffold-first teaching, asking questions and offering hints before giving direct answers.</p><p>Parents can create child profiles, launch sessions with join codes, monitor transcripts, send private guidance, and temporarily override the tutoring approach when needed. The full-stack application combines Anthropic-powered tutoring, Supabase authentication and data storage, Google speech services, Stripe subscriptions, privacy controls, and COPPA-aware consent workflows.</p>',
      imageUrl: '/assets/images/projects/homeschool-sidekick.webp',
      technologies: ['Next.js', 'React', 'JavaScript', 'Supabase', 'Anthropic Claude', 'Google Speech', 'Stripe', 'Vercel', 'Playwright'],
      categories: ['Web App', 'Full-stack', 'AI', 'Educational', 'Children', 'Privacy'],
      featured: true,
      date: '2026-02-25',
      type: 'AI Tutoring Platform',
      client: 'Personal Project',
      aiFeatures: ['Scaffold-first AI Tutor', 'Parent Guidance', 'Voice Tutoring', 'Guardrail Checks'],
      repoUrl: 'https://github.com/Brandon-Born/home-school-helper'
    },
    {
      id: 'bb-trainer',
      title: 'BB Trainer',
      shortDescription: 'Replay coach for Blood Bowl 3 that provides constructive turn-by-turn feedback from uploaded match XML.',
      description: '<p>BB Trainer is a replay coaching app for Blood Bowl 3. Users upload a replay XML file, choose their team, and receive practical feedback designed to improve decision-making and safer play patterns.</p><p>The app focuses on clear, educational guidance rather than competitive automation, helping players review matches and identify what to improve in future games.</p>',
      imageUrl: '/assets/images/projects/bb-trainer-logo.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      categories: ['Web App', 'Tool', 'Gaming'],
      featured: true,
      date: '2026-02-09',
      type: 'Web Application',
      client: 'Personal Project',
      liveUrl: 'https://bb-trainer.vercel.app/',
      aiFeatures: ['Replay Coaching Feedback'],
      repoUrl: 'https://github.com/Brandon-Born/bb-trainer'
    },
    {
      id: 'tessie',
      title: 'Tessie: Defender of The Universe 🛡️',
      shortDescription: 'Educational math game designed for 8-year-old children with ADHD and executive function challenges.',
      description: '<p>Tessie: Defender of The Universe is an engaging educational math game designed specifically for 8-year-old children with ADHD and executive function challenges. Help Tessie protect Earth from Math Aliens by solving addition and subtraction problems in this adaptive learning experience.</p><p>The game features adaptive difficulty that automatically adjusts based on player performance, progressive alien speeds starting at a gentle 25% pace, and cute emoji aliens that make learning fun. With positive reinforcement celebrating correct answers and no harsh penalties for wrong answers, it creates a supportive learning environment.</p><p>Key features include a dynamic space environment with 150 twinkling stars, animated nebulas, and orbiting planets. The Cosmic Boutique allows players to unlock customizations using earned Star Shards, including planet replacements, character heads and bodies, alien skins, and weapon effects. All customizations persist between sessions, encouraging continued engagement and learning.</p>',
      imageUrl: '/assets/images/projects/tessie.png',
      technologies: ['HTML5 Canvas', 'Vanilla JavaScript', 'CSS3', 'Local Storage', 'Node.js', 'SVG Graphics'],
      categories: ['Game', 'Educational', 'Accessibility', 'ADHD Support', 'Children'],
      featured: true,
      date: '2025-12-20',
      type: 'Educational Game',
      liveUrl: 'https://tessie.bborn.dev',
      client: 'Personal Project',
      aiFeatures: ['Vibe Coded'],
      repoUrl: 'https://github.com/Brandon-Born/tessie-protector-of-the-universe'
    },
    {
      id: 'dlatc',
      title: "Don't Look At The Chart (DLATC)",
      shortDescription: 'Cryptocurrency price alert service via Email/SMS.',
      description: '<p>DLATC is a notification service enabling users to receive cryptocurrency price updates for specified assets without needing to constantly monitor charts. The service aims to reduce the time and anxiety associated with manual price checking.</p><p>Built with Next.js and designed for deployment on Vercel, it uses CoinGecko for data, NextAuth.js for authentication, Resend for email alerts, and Vercel Cron Jobs for background processing.</p><p><em>Disclaimer: This is a hobby project created for demonstration and learning purposes. While functional, it may contain bugs or limitations. Use it at your own risk. No financial advice is provided or implied.</em></p>',
      imageUrl: '/assets/images/projects/dlatc-placeholder.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Vercel Postgres', 'Prisma', 'Tailwind CSS', 'Shadcn/ui', 'NextAuth.js', 'CoinGecko API', 'Resend', 'Vercel Cron Jobs'],
      categories: ['Web App', 'Full-stack', 'Tool', 'Notifications'],
      featured: false,
      date: '2025-04-27',
      type: 'Full-stack Application',
      liveUrl: 'https://dont-look-at-the-chart.com',
      aiFeatures: ['Vibe Coded'],
      repoUrl: 'https://github.com/Brandon-Born/dont-look-at-the-chart'
    },
    {
      id: 'freyr-and-sons',
      title: 'Freyr and Sons LLC - Landing Page',
      shortDescription: 'Modern landing page for premium vending services with AI-powered product planner.',
      description: '<p>A modern, responsive landing page for Freyr and Sons LLC, showcasing premium vending solutions and featuring an interactive AI-powered product planner that helps businesses select the perfect vending machine inventory.</p><p>The site includes smart inventory management, proactive servicing, and modern payment solutions. The standout feature is an AI product planner powered by Google Gemini that provides location-based suggestions and audience targeting for optimal product selection.</p><p>Built with vanilla JavaScript and modern web technologies for optimal performance, deployed on Vercel with serverless functions handling the AI integration.</p>',
      imageUrl: '/assets/images/projects/freyrandsons.png',
      technologies: ['HTML5', 'Tailwind CSS', 'Vanilla JavaScript', 'Node.js', 'Vercel', 'Google Gemini AI', 'Formspree'],
      categories: ['Landing Page', 'Web App', 'Business'],
      featured: true,
      date: '2025-08-05',
      type: 'Landing Page',
      client: 'Freyr and Sons LLC',
      liveUrl: 'https://freyrandsons.com',
      aiFeatures: ['AI Product Planner', 'Google Gemini Integration', 'Location-based Suggestions', 'Audience Targeting'],
      repoUrl: 'https://github.com/Brandon-Born/freyr-and-sons-landing'
    },
    {
      id: 'peev',
      title: 'PEEV — Profit & Expense Evaluator for Vendors',
      shortDescription: 'Full-featured team-based inventory and sales tracking web application for vending machine operations.',
      description: '<p>PEEV is a comprehensive team-based inventory and sales tracking web application built with React and Firebase, designed specifically for vending machine operations. This system helps vending machine operators track purchases, manage inventory across multiple locations, monitor expiration dates, and analyze profitability on a per-unit basis.</p><p>Forked and transformed from P.I.T.A. to serve vending machine businesses, PEEV features multi-user teams with shared data access, smart inventory management with purchase units vs sellable units separation, and accurate per-unit COGS calculations. The application includes automated email notifications for expiring inventory, advanced team management capabilities, and mobile-responsive vending-friendly workflows.</p><p>Key features include simplified purchase flow ("I bought 1 pack of 24 cans for $24.00 at Costco"), individual unit sales tracking, real-time profit analysis, and comprehensive reporting. The system uses Firebase for team-based authentication and Firestore for secure data isolation, ensuring each team only accesses their own inventory data.</p>',
      imageUrl: '/assets/images/projects/peev.png',
      technologies: ['React', 'Vite', 'TypeScript', 'Material UI', 'TanStack Query', 'React Hook Form', 'Zod', 'Firebase Auth', 'Firestore', 'Vercel', 'Recharts', 'Resend'],
      categories: ['Web App', 'Full-stack', 'Business Tools', 'Inventory Management', 'Team Collaboration'],
      featured: true,
      date: '2025-09-08',
      type: 'Full-stack Application',
      liveUrl: 'https://peev.freyrandsons.com',
      client: 'Freyr and Sons LLC',
      aiFeatures: ['Vibe Coded'],
      repoUrl: 'https://github.com/Brandon-Born/peev'
    },
    {
      id: 'pita',
      title: 'P.I.T.A. — Panda\'s Integrated Tracking Assistant',
      shortDescription: 'Full-featured inventory and sales tracking web application for liquidated inventory workflows.',
      description: '<p>P.I.T.A. is a comprehensive inventory and sales tracking web application built with React and Firebase, designed specifically for liquidated inventory workflows. Created as a labor of love for Freyr and Sons LLC, it provides complete business management capabilities.</p><p>The application features multi-item sales transactions with atomic stock decrement, comprehensive inventory management including shipments and product categorization, and detailed financial reporting with COGS calculations using Weighted Average Cost methodology.</p><p>Key features include a real-time dashboard with revenue tracking, monthly sales reports, quarterly tax reports, and a complete business glossary. The system enforces strict security with Google Authentication and tenant isolation, ensuring data privacy and integrity.</p>',
      imageUrl: '/assets/images/projects/pita.png',
      technologies: ['React', 'Vite', 'TypeScript', 'Material UI', 'TanStack Query', 'React Hook Form', 'Zod', 'Firebase Auth', 'Firestore', 'Vercel', 'Recharts'],
      categories: ['Web App', 'Full-stack', 'Business Tools', 'Inventory Management'],
      featured: true,
      date: '2025-08-25',
      type: 'Full-stack Application',
      liveUrl: 'https://pita.freyrandsons.com',
      client: 'Freyr and Sons LLC',
      aiFeatures: ['Vibe Coded'],
      repoUrl: 'https://github.com/Brandon-Born/pita'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | null> {
    const project = this.projects.find(p => p.id === id) || null;
    return of(project);
  }
} 
