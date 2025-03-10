import { Component, OnInit } from '@angular/core';
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
  blogPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  
  constructor(private blogService: BlogService) { }
  
  ngOnInit() {
    this.blogService.getBlogPosts().subscribe(posts => {
      this.blogPosts = posts;
      this.filteredPosts = [...posts];
      
      // Extract unique categories
      const allCategories = posts.flatMap(p => p.categories);
      this.categories = ['All', ...Array.from(new Set<string>(allCategories))];
    });
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
    
    if (category === 'All') {
      this.filteredPosts = [...this.blogPosts];
    } else {
      this.filteredPosts = this.blogPosts.filter(p => 
        p.categories.includes(category)
      );
    }
  }
} 