import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'AI Chat Application',
      shortDescription: 'A real-time chat application powered by AI for smart responses',
      description: '<p>This AI-powered chat application uses natural language processing to provide intelligent responses to user queries. Built with Angular on the frontend and Node.js on the backend, it integrates with modern AI APIs to deliver a seamless conversational experience.</p><p>Features include real-time messaging, conversation history, customizable AI responses, and multi-platform support.</p>',
      imageUrl: '/assets/images/projects/chat-app.svg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'AI API'],
      categories: ['Web App', 'AI', 'Frontend'],
      featured: true,
      date: '2023-12-15',
      type: 'Full-stack Application',
      liveUrl: 'https://demo.example.com/chat-app',
      repoUrl: 'https://github.com/example/ai-chat-app',
      aiFeatures: ['Natural Language Processing', 'Sentiment Analysis', 'Context Awareness']
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      shortDescription: 'Modern e-commerce site with AI-driven product recommendations',
      description: '<p>A comprehensive e-commerce platform with AI-powered product recommendations. This application uses machine learning algorithms to analyze user behavior and provide personalized shopping experiences.</p><p>Built with React and Node.js, it features a responsive design, secure payment processing, and an intuitive admin dashboard for inventory management.</p>',
      imageUrl: '/assets/images/projects/ecommerce.svg',
      technologies: ['React', 'Express', 'MongoDB', 'Node.js', 'Stripe API'],
      categories: ['E-commerce', 'Frontend', 'Backend'],
      featured: true,
      date: '2023-10-20',
      type: 'Full-stack Application',
      liveUrl: 'https://demo.example.com/ecommerce',
      repoUrl: 'https://github.com/example/ecommerce-platform',
      aiFeatures: ['Recommendation Engine', 'Behavior Analysis', 'Predictive Search']
    },
    {
      id: '3',
      title: 'Portfolio Generator',
      shortDescription: 'Tool that creates personalized portfolios using AI',
      description: '<p>This application helps users create professional portfolios with the assistance of AI. By answering a few questions, users can generate a fully customized portfolio website that highlights their skills and experience.</p><p>Built with Angular and Firebase, it offers template selection, content generation, and easy deployment options.</p>',
      imageUrl: '/assets/images/projects/portfolio.svg',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'AI Integration'],
      categories: ['Tool', 'Frontend', 'AI'],
      featured: true,
      date: '2023-08-05',
      type: 'Web Application',
      liveUrl: 'https://demo.example.com/portfolio-gen',
      repoUrl: 'https://github.com/example/portfolio-generator',
      aiFeatures: ['Content Generation', 'Design Suggestions', 'SEO Optimization']
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      shortDescription: 'Interactive weather application with AI forecasting',
      description: '<p>An advanced weather dashboard that uses AI to provide more accurate local forecasts. This application combines data from multiple weather services and applies machine learning to improve prediction accuracy.</p><p>Features include interactive maps, historical data comparison, and extreme weather alerts.</p>',
      imageUrl: '/assets/images/projects/weather.svg',
      technologies: ['Vue.js', 'Express', 'D3.js', 'Weather APIs'],
      categories: ['Data Visualization', 'Frontend', 'API Integration'],
      featured: false,
      date: '2023-06-15',
      type: 'Web Application',
      liveUrl: 'https://demo.example.com/weather',
      repoUrl: 'https://github.com/example/weather-app',
      aiFeatures: ['Predictive Analysis', 'Pattern Recognition']
    },
    {
      id: '5',
      title: 'Task Management System',
      shortDescription: 'AI-enhanced productivity tool for team collaboration',
      description: '<p>This task management system uses AI to help teams prioritize work and optimize productivity. It analyzes work patterns and suggests the most efficient task distribution among team members.</p><p>Built with React and Django, it includes features like Kanban boards, time tracking, automated reporting, and smart notifications.</p>',
      imageUrl: '/assets/images/projects/task-mgmt.svg',
      technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
      categories: ['Productivity', 'Full-stack', 'Team Tool'],
      featured: false,
      date: '2023-04-10',
      type: 'Full-stack Application',
      liveUrl: 'https://demo.example.com/task-system',
      repoUrl: 'https://github.com/example/task-management',
      aiFeatures: ['Workload Analysis', 'Priority Suggestions', 'Deadline Predictions']
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