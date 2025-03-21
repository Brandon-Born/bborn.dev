import { Component, OnInit, NgZone, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/models/project.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectsListComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  isFiltering: boolean = false;
  activeTag: string | null = null;
  imagesLoaded: boolean = false;
  isFilterDropdownOpen: boolean = false;
  popularTags: string[] = [];
  
  constructor(
    private projectsService: ProjectsService,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    // Critical: Load and preload images immediately
    this.loadProjects();
  }
  
  ngAfterViewInit() {
    // Force a change detection cycle after view is initialized
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.imagesLoaded = true;
        });
      }, 0); // Immediate timeout
    });
  }
  
  /**
   * Load projects and preload images for immediate display
   */
  loadProjects() {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = [...projects];
      
      // Extract unique categories
      const allCategories = projects.flatMap(p => p.categories);
      this.categories = ['All', ...Array.from(new Set<string>(allCategories))];
      
      // Extract popular tags for mobile filtering
      this.extractPopularTags(projects);
      
      // Preload all project images
      this.preloadImages(projects);
    });
  }
  
  /**
   * Extract the most popular tags for quick filtering
   */
  extractPopularTags(projects: Project[]) {
    // Count occurrences of each tag
    const tagCounts = new Map<string, number>();
    projects.forEach(project => {
      project.technologies.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    
    // Convert to array, sort by count, and take top 8
    const sortedTags = Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
      .slice(0, 8);
    
    this.popularTags = sortedTags;
  }
  
  /**
   * Preload images to ensure they're in browser cache
   */
  preloadImages(projects: Project[]) {
    Promise.all(projects.map(project => {
      return new Promise((resolve) => {
        if (project.imageUrl) {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = project.imageUrl;
        } else {
          resolve(false);
        }
      });
    })).then(() => {
      this.ngZone.run(() => {
        // All images are now preloaded
        this.imagesLoaded = true;
      });
    });
  }
  
  /**
   * Toggle mobile filter dropdown
   */
  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }
  
  /**
   * Close dropdown when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.filter-dropdown-btn');
    const filters = document.querySelector('.category-filters');
    
    if (dropdown && filters && 
        !dropdown.contains(target) && 
        !filters.contains(target) && 
        this.isFilterDropdownOpen) {
      this.isFilterDropdownOpen = false;
    }
  }
  
  filterByCategory(category: string) {
    this.isFiltering = true;
    this.selectedCategory = category;
    this.activeTag = null;
    
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => 
        p.categories.includes(category)
      );
    }
    
    // Close mobile dropdown after selection
    this.isFilterDropdownOpen = false;
    
    // Quick transition for filtering
    setTimeout(() => {
      this.isFiltering = false;
    }, 150);
  }
  
  filterByTag(tag: string, event: MouseEvent) {
    event.stopPropagation();
    this.isFiltering = true;
    
    if (this.activeTag === tag) {
      // If clicking the same tag, remove the filter
      this.activeTag = null;
      this.filterByCategory(this.selectedCategory);
    } else {
      this.activeTag = tag;
      
      if (this.selectedCategory === 'All') {
        this.filteredProjects = this.projects.filter(p => 
          p.technologies.includes(tag)
        );
      } else {
        this.filteredProjects = this.projects.filter(p => 
          p.categories.includes(this.selectedCategory) && p.technologies.includes(tag)
        );
      }
    }
    
    // Quick transition for filtering
    setTimeout(() => {
      this.isFiltering = false;
    }, 150);
  }
  
  tagMatchesFilter(tag: string): boolean {
    return this.activeTag === tag;
  }
  
  getCategoryCount(category: string): number {
    return this.projects.filter(p => p.categories.includes(category)).length;
  }
  
  isFiltered(project: Project): boolean {
    if (this.selectedCategory !== 'All' && !project.categories.includes(this.selectedCategory)) {
      return true;
    }
    
    if (this.activeTag && !project.technologies.includes(this.activeTag)) {
      return true;
    }
    
    return false;
  }
  
  resetFilter() {
    this.selectedCategory = 'All';
    this.activeTag = null;
    this.filteredProjects = [...this.projects];
  }
} 