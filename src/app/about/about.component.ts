import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  skills = [
    { name: 'Angular / TypeScript', level: 95 },
    { name: 'Java / Spring Boot', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'AWS Cloud Infrastructure', level: 85 },
    { name: 'CI/CD & DevOps', level: 80 },
    { name: 'Database Design', level: 85 },
    { name: 'System Architecture', level: 90 },
    { name: 'AI Integration', level: 80 }
  ];
  
  experiences = [
    {
      title: 'Technical Team Lead',
      company: 'Integrated Data Services (IDS)',
      period: 'Jan 2019 - Present',
      description: 'Leading modernization of critical defense applications from legacy Flex to Angular/Cloud. Directing full lifecycle migration, architectural strategy, and DevSecOps implementation for high-visibility DoD programs.'
    },
    {
      title: 'Co-Founder & Principal Developer',
      company: 'Foster-Training.com',
      period: '2017 - Present',
      description: 'Architecting and maintaining a full-stack SaaS training platform for the foster care community. utilizing AI and serverless architecture to scale solutions for social good.'
    },
    {
      title: 'Senior Application Developer',
      company: 'Esri / Stone and Blade',
      period: 'July 2016 - Jan 2019',
      description: 'Spearheaded front-end overhaul of the Esri Training platform using Angular and AWS. Managed migration from AngularJS to Angular 6 and established rigid code standards.'
    }
  ];
} 