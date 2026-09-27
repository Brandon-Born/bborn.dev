import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

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
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  
  faqs: FAQ[] = [
    {
      question: 'What kind of work do you take on?',
      answer: 'Enterprise modernization, full-stack development, DevSecOps, and practical AI integration. I\'m the best fit for teams that need to move a legacy system to a modern stack or need an experienced technical lead to set architecture and standards.',
      isOpen: false
    },
    {
      question: 'Are you available for new work?',
      answer: 'I lead a technical team full time, so I take on a limited number of outside engagements. Send me a short description of the system, the team, and the timeline, and I\'ll tell you honestly whether I can help.',
      isOpen: false
    },
    {
      question: 'Have you worked on government and defense programs?',
      answer: 'Yes. Most of my recent work has been modernizing critical defense applications, so I\'m used to the security, compliance, and reliability expectations that come with that environment.',
      isOpen: false
    },
    {
      question: 'What technologies do you work with?',
      answer: 'Primarily Java/Spring Boot, Angular and TypeScript, Node.js, and AWS, along with CI/CD tooling and relational databases. I\'ve also led migrations off older front-end stacks like Flex and AngularJS.',
      isOpen: false
    },
    {
      question: 'How do you use AI in your work?',
      answer: 'Pragmatically. I use AI-assisted development to move faster and build AI features into products where they solve a real problem, but everything still goes through normal engineering review, testing, and security practices.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

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
    const formSpreeUrl = 'https://formspree.io/f/xpwdqdvj'; // Your Formspree URL
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    const formData = this.contactForm.value;

    this.http.post(formSpreeUrl, formData, { headers: headers })
      .pipe(
        finalize(() => this.isSubmitting = false) // Ensure isSubmitting is set to false after request completes
      )
      .subscribe({
        next: (response) => {
          console.log('Form submitted successfully to Formspree:', response);
          this.contactForm.reset();
          // Optionally, clear touched/dirty states if reset doesn't do it fully
          Object.keys(this.contactForm.controls).forEach(key => {
            this.contactForm.get(key)?.markAsPristine();
            this.contactForm.get(key)?.markAsUntouched();
            this.contactForm.get(key)?.updateValueAndValidity();
          });
          this.showSuccessMessage = true;
        },
        error: (error) => {
          console.error('Error submitting form to Formspree:', error);
          // You might want to show a more user-friendly error message
          alert('There was an error sending your message. Please try again later.');
          this.showSuccessMessage = false;
        }
      });
  }

  resetForm(): void {
    this.showSuccessMessage = false;
    // Optional: Re-initialize form if reset() wasn't enough
    // this.initializeForm(); 
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
} 