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
    'rapid-website-development': {
      title: 'Rapid Website Development',
      description: 'Fast and efficient website development using modern frameworks and AI-powered tools to deliver high-quality results quickly.',
      icon: 'rocket_launch',
      features: [
        'Quick turnaround times without compromising quality',
        'Modern, responsive designs that work on all devices',
        'AI-powered development tools for increased efficiency',
        'SEO optimization built-in from the start'
      ],
      process: [
        {
          title: 'Requirements Gathering',
          description: 'We start by understanding your needs, goals, and target audience to create a tailored solution.'
        },
        {
          title: 'Design & Development',
          description: 'Using modern frameworks and AI tools, we rapidly develop your website while maintaining high quality.'
        },
        {
          title: 'Testing & Optimization',
          description: 'Rigorous testing ensures your website performs flawlessly across all devices and browsers.'
        },
        {
          title: 'Launch & Support',
          description: 'We handle the deployment and provide ongoing support to ensure your website continues to perform.'
        }
      ],
      benefits: [
        'Faster time to market',
        'Cost-effective development',
        'Modern, scalable architecture',
        'Ongoing support and maintenance'
      ]
    },
    'full-stack-development': {
      title: 'Full-Stack Development',
      description: 'End-to-end development services covering both frontend and backend, creating seamless and scalable applications.',
      icon: 'code',
      features: [
        'Complete web application development',
        'Database design and optimization',
        'API development and integration',
        'Cloud infrastructure setup'
      ],
      process: [
        {
          title: 'Architecture Planning',
          description: 'Designing a robust and scalable architecture that meets your application needs.'
        },
        {
          title: 'Frontend Development',
          description: 'Creating intuitive and responsive user interfaces using modern frameworks.'
        },
        {
          title: 'Backend Development',
          description: 'Building secure and efficient server-side applications and APIs.'
        },
        {
          title: 'Deployment & Scaling',
          description: 'Setting up cloud infrastructure and ensuring your application can scale.'
        }
      ],
      benefits: [
        'Seamless integration between frontend and backend',
        'Scalable architecture',
        'Comprehensive testing',
        'Performance optimization'
      ]
    },
    'content-creation': {
      title: 'Content Creation',
      description: 'Strategic content development that combines technical expertise with engaging writing to help your brand stand out.',
      icon: 'edit_note',
      features: [
        'Technical blog posts and articles',
        'Documentation writing',
        'SEO-optimized content',
        'Social media content'
      ],
      process: [
        {
          title: 'Topic Research',
          description: 'Identifying relevant topics that resonate with your audience.'
        },
        {
          title: 'Content Strategy',
          description: 'Developing a content plan that aligns with your business goals.'
        },
        {
          title: 'Writing & Editing',
          description: 'Creating engaging content that combines technical accuracy with readability.'
        },
        {
          title: 'Optimization & Publishing',
          description: 'Optimizing content for search engines and publishing across platforms.'
        }
      ],
      benefits: [
        'Increased online visibility',
        'Established thought leadership',
        'Improved SEO rankings',
        'Engaging technical content'
      ]
    },
    'ai-integration': {
      title: 'AI Integration',
      description: 'Leverage the power of artificial intelligence to enhance your applications and automate workflows.',
      icon: 'smart_toy',
      features: [
        'Custom AI model integration',
        'Automated workflow development',
        'Natural language processing',
        'Machine learning implementation'
      ],
      process: [
        {
          title: 'AI Assessment',
          description: 'Evaluating opportunities for AI integration in your business processes.'
        },
        {
          title: 'Solution Design',
          description: 'Designing AI-powered solutions that meet your specific needs.'
        },
        {
          title: 'Implementation',
          description: 'Integrating AI capabilities into your existing systems and workflows.'
        },
        {
          title: 'Monitoring & Optimization',
          description: 'Ensuring AI systems perform optimally and continue to improve over time.'
        }
      ],
      benefits: [
        'Increased efficiency',
        'Automated workflows',
        'Enhanced decision making',
        'Competitive advantage'
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