import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  
  faqs: FAQ[] = [
    {
      question: 'What services do you provide?',
      answer: 'I provide a range of services including web development, AI integration, mobile app development, UI/UX design, and tech consulting. Each service can be customized to meet your specific project requirements.',
      isOpen: false
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application with custom features could take 2-3 months or more. I\'ll provide a detailed timeline during our initial consultation.',
      isOpen: false
    },
    {
      question: 'What is your pricing structure?',
      answer: 'I offer flexible pricing options including hourly rates, fixed project fees, and retainer arrangements. Each project is quoted based on scope, complexity, and timeline. Contact me for a free consultation and quote tailored to your needs.',
      isOpen: false
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, I provide ongoing maintenance and support services to ensure your project continues to run smoothly after launch. Maintenance packages can include updates, security patches, performance optimization, and content updates.',
      isOpen: false
    },
    {
      question: 'What is your development process?',
      answer: 'My development process includes discovery and planning, design, development, testing, deployment, and ongoing support. I maintain clear communication throughout the project and provide regular updates on progress.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      this.isSubmitting = false;
      // Here you would typically send the form data to your backend
      alert('Your message has been sent successfully!');
    }, 1500);
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
} 