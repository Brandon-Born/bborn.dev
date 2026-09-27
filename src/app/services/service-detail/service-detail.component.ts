import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

interface ServiceDetail {
  title: string;
  description: string;
  icon: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class ServiceDetailComponent implements OnInit {
  serviceDetails: Record<string, ServiceDetail> = {
    'enterprise-modernization': {
      title: 'Enterprise Modernization',
      description: 'Leading migrations of legacy enterprise and defense applications to modern Angular, Spring Boot and cloud architectures without disrupting the mission they support.',
      icon: 'account_balance',
      features: [
        'Legacy front-end migrations (Flex, AngularJS) to modern Angular',
        'Target architecture and phased migration planning',
        'Backend modernization with Java and Spring Boot',
        'Moving on-premises workloads to cloud infrastructure'
      ],
      process: [
        {
          title: 'Assess the Legacy System',
          description: 'Map what the current system does, who depends on it, and where the real risk lives before any code is rewritten.'
        },
        {
          title: 'Define the Target Architecture',
          description: 'Choose a modern stack and a migration path that the team can deliver and maintain long after the project ends.'
        },
        {
          title: 'Migrate Incrementally',
          description: 'Move functionality in controlled phases so users keep working while the new system comes online.'
        },
        {
          title: 'Harden and Hand Off',
          description: 'Put CI/CD, code standards and documentation in place so the modernized system stays healthy.'
        }
      ],
      benefits: [
        'Retire unsupported technology before it becomes a liability',
        'Lower long-term maintenance cost',
        'A codebase new engineers can actually work in',
        'Continuity for the users who depend on the system'
      ]
    },
    'full-stack-development': {
      title: 'Full-Stack Development',
      description: 'Designing and building production applications end to end with Java/Spring Boot, Angular, Node.js and AWS.',
      icon: 'code',
      features: [
        'Angular and TypeScript front ends',
        'Java/Spring Boot and Node.js services and APIs',
        'Relational database design',
        'AWS and serverless infrastructure'
      ],
      process: [
        {
          title: 'Architecture',
          description: 'Design a system that fits the requirements, the team and the budget, not just the latest trend.'
        },
        {
          title: 'Front End',
          description: 'Build responsive, maintainable interfaces in Angular with consistent code standards.'
        },
        {
          title: 'Back End',
          description: 'Build secure services and APIs with Spring Boot or Node.js, backed by a well-modeled database.'
        },
        {
          title: 'Deploy and Operate',
          description: 'Ship through automated pipelines to cloud infrastructure that can grow with usage.'
        }
      ],
      benefits: [
        'One lead who understands the whole stack',
        'Scalable, maintainable architecture',
        'Consistent standards from UI to database',
        'Software that is built to be operated, not just demoed'
      ]
    },
    'devsecops': {
      title: 'DevSecOps & Security',
      description: 'Automated CI/CD pipelines and secure coding standards (OWASP) that make releases repeatable and audit-ready.',
      icon: 'verified_user',
      features: [
        'CI/CD pipeline design and automation',
        'Secure coding standards based on OWASP guidance',
        'Automated testing and code quality gates',
        'Release processes that support compliance and audit'
      ],
      process: [
        {
          title: 'Review the Delivery Pipeline',
          description: 'Find the manual steps, gaps in testing and security blind spots in how code gets to production today.'
        },
        {
          title: 'Automate the Build',
          description: 'Build CI/CD pipelines that test, scan and package every change the same way.'
        },
        {
          title: 'Set the Standards',
          description: 'Establish secure coding practices and review standards the whole team follows.'
        },
        {
          title: 'Keep It Running',
          description: 'Monitor the pipeline and refine it as the system and its compliance needs evolve.'
        }
      ],
      benefits: [
        'Faster, more predictable releases',
        'Security built in rather than bolted on',
        'Fewer surprises at audit time',
        'Less time spent on manual deployment work'
      ]
    },
    'ai-integration': {
      title: 'AI Integration',
      description: 'Pragmatic use of AI where it earns its place: automating workflows and adding AI features to real products, with the same engineering rigor as the rest of the stack.',
      icon: 'smart_toy',
      features: [
        'Integrating LLM APIs into existing applications',
        'Automating repetitive, document-heavy workflows',
        'AI-assisted development practices for engineering teams',
        'Guardrails for data handling and output quality'
      ],
      process: [
        {
          title: 'Find the Right Problem',
          description: 'Identify where AI saves real time or adds real value, and where a conventional solution is the better choice.'
        },
        {
          title: 'Prototype',
          description: 'Build a small, working version quickly to test the idea against real data.'
        },
        {
          title: 'Integrate',
          description: 'Bring the feature into the production system with proper security, error handling and monitoring.'
        },
        {
          title: 'Measure and Refine',
          description: 'Track whether it is actually helping users and adjust based on the results.'
        }
      ],
      benefits: [
        'AI features grounded in real use cases',
        'Less manual, repetitive work',
        'Production-quality integration, not a demo',
        'Clear-eyed advice on when not to use AI'
      ]
    }
  };


  service: ServiceDetail | undefined;
  slug: string = '';

  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.service = this.serviceDetails[this.slug];
      
      if (this.service) {
        this.titleService.setTitle(`${this.service.title} | Brandon Born`);
      }
    });
  }
} 