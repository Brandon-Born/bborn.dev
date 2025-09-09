import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
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