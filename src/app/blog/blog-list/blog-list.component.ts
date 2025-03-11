import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { BlogPost } from '../../shared/models/blog-post.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  isFilterDropdownOpen: boolean = false;
  
  constructor(private blogService: BlogService) { }
  
  ngOnInit() {
    this.blogService.getBlogPosts().subscribe(posts => {
      this.posts = posts;
      this.filteredPosts = [...posts];
      
      // Extract unique categories
      const allCategories = posts.flatMap(p => p.categories);
      this.categories = Array.from(new Set<string>(allCategories));
    });
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
    
    if (category === 'All') {
      this.filteredPosts = [...this.posts];
    } else {
      this.filteredPosts = this.posts.filter(post => 
        post.categories.includes(category)
      );
    }
    
    // Close the dropdown after selection on mobile
    this.isFilterDropdownOpen = false;
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
    const dropdown = document.querySelector('.mobile-filter-dropdown');
    const filter = document.querySelector('.category-filter');
    
    // Close the dropdown if click is outside dropdown and filter
    if (dropdown && filter && 
        !dropdown.contains(target) && 
        !filter.contains(target) && 
        this.isFilterDropdownOpen) {
      this.isFilterDropdownOpen = false;
    }
  }
} 