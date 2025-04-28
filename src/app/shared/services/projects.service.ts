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
      featured: true,
      date: '2025-04-27',
      type: 'Full-stack Application',
      liveUrl: 'https://dont-look-at-the-chart.com',
      aiFeatures: ['Vibe Coded'],
      repoUrl: 'https://github.com/Brandon-Born/dont-look-at-the-chart'
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