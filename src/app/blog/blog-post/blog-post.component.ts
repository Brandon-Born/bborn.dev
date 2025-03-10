import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { BlogPost } from '../../shared/models/blog-post.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BlogPostComponent implements OnInit {
  blogPost: BlogPost | null = null;
  relatedPosts: BlogPost[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }
  
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || '';
        return this.blogService.getBlogPostById(id);
      })
    ).subscribe(post => {
      this.blogPost = post;
      
      if (post) {
        this.loadRelatedPosts(post);
      }
    });
  }
  
  private loadRelatedPosts(post: BlogPost) {
    this.blogService.getBlogPosts().subscribe(posts => {
      // Find posts with similar categories
      this.relatedPosts = posts
        .filter(p => p.id !== post.id && 
                    p.categories.some(cat => post.categories.includes(cat)))
        .slice(0, 3);
    });
  }
} 