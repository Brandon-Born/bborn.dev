import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { BlogPost } from '../../shared/models/blog-post.model';
import { Meta, Title } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | null = null;
  relatedPosts: BlogPost[] = [];
  sanitizedContent: SafeHtml | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private meta: Meta,
    private title: Title,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (postId) {
        this.loadPost(postId);
      }
    });
  }
  
  loadPost(postId: string) {
    this.blogService.getBlogPostById(postId).subscribe(post => {
      if (post) {
        this.post = post;
        
        // Sanitize HTML content
        if (post.content) {
          this.post.content = this.processHtmlContent(post.content);
        }
        
        // Set page title and meta tags
        this.title.setTitle(`${post.title} | Blog`);
        this.meta.updateTag({ name: 'description', content: post.excerpt });
        
        // Load related posts
        this.loadRelatedPosts(post);
      }
    });
  }
  
  /**
   * Process HTML content to ensure proper mobile display
   */
  private processHtmlContent(html: string): string {
    // Add max-width to any element that might overflow
    html = html.replace(/<img/g, '<img style="max-width:100%;height:auto"');
    html = html.replace(/<table/g, '<table style="max-width:100%;display:block;overflow-x:auto"');
    html = html.replace(/<pre/g, '<pre style="max-width:100%;overflow-x:auto;white-space:pre-wrap"');
    
    return html;
  }
  
  loadRelatedPosts(currentPost: BlogPost) {
    this.blogService.getBlogPosts().subscribe(posts => {
      // Filter out current post and get posts with same category
      const filteredPosts = posts.filter(post => 
        post.id !== currentPost.id && 
        post.categories.some(category => currentPost.categories.includes(category))
      );
      
      // Get up to 3 related posts
      this.relatedPosts = filteredPosts.slice(0, 3);
    });
  }
  
  /**
   * Get the full URL of the current post for social sharing
   */
  getPostUrl(): string {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  }
} 