import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, FooterComponent, CommonModule],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'ai-developer-portfolio';
  isLoading = true; // Add loading state

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });

    // No need to apply theme again as it's already done in index.html
    // Just ensure system theme listeners are set up properly
    this.setupSystemThemeListeners();

    // Hide the app until it's fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      // Use a small timeout to ensure Angular components are ready
      setTimeout(() => {
        this.isLoading = false;
      }, 50);
    });

    // Fallback in case DOMContentLoaded already fired
    if (document.readyState === 'complete') {
      setTimeout(() => {
        this.isLoading = false;
      }, 50);
    }
  }

  private setupSystemThemeListeners(): void {
    // Only set up listeners if we're using system theme preference
    const useSystemTheme = localStorage.getItem('useSystemTheme');

    if (useSystemTheme === 'true' && window.matchMedia) {
      // Set up listener for system theme changes
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleThemeChange = (e: MediaQueryListEvent) => {
        if (localStorage.getItem('useSystemTheme') === 'true') {
          const isDarkMode = e.matches;
          localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

          if (isDarkMode) {
            document.documentElement.classList.add('dark-theme');
          } else {
            document.documentElement.classList.remove('dark-theme');
          }
        }
      };

      // Modern browsers
      if (darkModeMediaQuery.addEventListener) {
        darkModeMediaQuery.addEventListener('change', handleThemeChange);
      }
      // Safari and older browsers
      else if (darkModeMediaQuery.addListener) {
        darkModeMediaQuery.addListener(handleThemeChange);
      }
    }
  }
}
