import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  isDarkMode = false;
  mobileMenuOpen = false;
  private systemDarkModeListener: MediaQueryList | null = null;

  constructor() {}

  ngOnInit(): void {
    // Get the current theme state from localStorage
    this.syncWithCurrentTheme();
    
    // Initialize scroll state
    this.checkScroll();
  }

  ngOnDestroy(): void {
    // No need to clean up listeners as they're now managed at the app level
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    this.scrolled = window.scrollY > 30;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    
    // Save the user's explicit choice
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    // Mark that we're using an explicit user preference now
    localStorage.setItem('useSystemTheme', 'false');
    
    // Apply the theme
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }
  
  // Public method to check if we're using system theme preference
  isUsingSystemTheme(): boolean {
    return localStorage.getItem('useSystemTheme') === 'true';
  }

  private syncWithCurrentTheme(): void {
    // Read the current theme state from localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.isDarkMode = JSON.parse(savedTheme);
    } else {
      // Default to system preference if nothing is stored
      this.isDarkMode = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
      localStorage.setItem('useSystemTheme', 'true');
    }
  }
} 