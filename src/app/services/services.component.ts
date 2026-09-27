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
      title: 'Enterprise Modernization',
      description: 'Leading migrations of legacy enterprise and defense applications to modern Angular, Spring Boot and cloud architectures without disrupting the mission they support.',
      icon: 'account_balance',
      slug: 'enterprise-modernization'
    },
    {
      title: 'Full-Stack Development',
      description: 'Designing and building production applications end to end with Java/Spring Boot, Angular, Node.js and AWS.',
      icon: 'code',
      slug: 'full-stack-development'
    },
    {
      title: 'DevSecOps & Security',
      description: 'Automated CI/CD pipelines and secure coding standards (OWASP) that make releases repeatable and audit-ready.',
      icon: 'verified_user',
      slug: 'devsecops'
    },
    {
      title: 'AI Integration',
      description: 'Pragmatic use of AI where it earns its place: automating workflows and adding AI features to real products, with the same engineering rigor as the rest of the stack.',
      icon: 'smart_toy',
      slug: 'ai-integration'
    }
  ];

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Services | Brandon Born');
  }
} 