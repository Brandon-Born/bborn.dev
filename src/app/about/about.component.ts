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
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'AI Integration', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Responsive Web Design', level: 90 }
  ];
  
  experiences = [
    {
      title: 'AI Web Developer',
      company: 'AI Tech Solutions',
      period: '2021 - Present',
      description: 'Developing AI-powered web applications and integrating machine learning models into web interfaces.'
    },
    {
      title: 'Frontend Developer',
      company: 'Web Innovations',
      period: '2018 - 2021',
      description: 'Created responsive web applications using Angular and React frameworks.'
    },
    {
      title: 'Web Designer',
      company: 'Creative Digital',
      period: '2016 - 2018',
      description: 'Designed user interfaces and implemented them using HTML, CSS, and JavaScript.'
    }
  ];
} 