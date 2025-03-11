import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule, CommonModule],
  standalone: true
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  expandedSections: { [key: string]: boolean } = {};
  
  // Toggle a footer section (for mobile accordion)
  toggleSection(sectionId: string) {
    this.expandedSections[sectionId] = !this.expandedSections[sectionId];
  }
  
  // Check if a section is expanded
  isSectionExpanded(sectionId: string): boolean {
    return !!this.expandedSections[sectionId];
  }
  
  // Stub for newsletter subscribe functionality
  subscribeToNewsletter(email: string) {
    console.log('Subscribing email:', email);
    // In a real application, this would connect to an API
    // For now we'll just log the email
  }

  // Method to scroll to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
} 