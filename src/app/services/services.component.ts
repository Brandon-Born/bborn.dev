import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Rapid Website Development',
      description: 'Fast and efficient website development using modern frameworks and AI-powered tools to deliver high-quality results quickly.',
      icon: 'rocket_launch',
      slug: 'rapid-website-development'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development services covering both frontend and backend, creating seamless and scalable applications.',
      icon: 'code',
      slug: 'full-stack-development'
    },
    {
      title: 'Content Creation',
      description: 'Strategic content development that combines technical expertise with engaging writing to help your brand stand out.',
      icon: 'edit_note',
      slug: 'content-creation'
    },
    {
      title: 'AI Integration',
      description: 'Leverage the power of artificial intelligence to enhance your applications and automate workflows.',
      icon: 'smart_toy',
      slug: 'ai-integration'
    }
  ];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Services | Brandon Born');
  }
} 