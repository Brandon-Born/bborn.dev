import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, FooterComponent],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'ai-developer-portfolio';

  ngOnInit(): void {
    // No need to apply theme again as it's already done in index.html
    // Just ensure system theme listeners are set up properly
    this.setupSystemThemeListeners();
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
