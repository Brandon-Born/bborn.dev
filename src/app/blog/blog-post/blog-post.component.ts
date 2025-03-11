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
    this.blogService.getBlogPostById(postId).subscribe(
      (post: BlogPost | null) => {
        if (post) {
          this.post = post;
          
          // Process and sanitize HTML content
          if (this.post && this.post.content) {
            const processedContent = this.processHtmlContent(this.post.content);
            this.post.content = processedContent;
          }
          
          // Update page title and meta tags
          if (post.title && post.excerpt) {
            this.title.setTitle(`${post.title} | Blog`);
            this.meta.updateTag({ name: 'description', content: post.excerpt });
          }
          
          // Load related posts
          this.loadRelatedPosts(post);
        }
      },
      (error: any) => {
        console.error('Error loading blog post:', error);
      }
    );
  }
  
  /**
   * Process HTML content to ensure proper mobile display
   */
  private processHtmlContent(html: string): string {
    // Add responsive styles to elements that might overflow
    html = html.replace(/<img/g, '<img style="max-width:100%;height:auto;display:block"');
    html = html.replace(/<table/g, '<table style="max-width:100%;display:block;overflow-x:auto;white-space:nowrap"');
    html = html.replace(/<pre/g, '<pre style="max-width:100%;overflow-x:auto;white-space:pre-wrap;word-break:break-word"');
    html = html.replace(/<iframe/g, '<iframe style="max-width:100%;height:auto"');
    
    // Ensure code blocks don't overflow
    html = html.replace(/<code/g, '<code style="white-space:pre-wrap;word-break:break-word;display:inline-block;max-width:100%"');
    
    // Prevent long words from breaking layout
    html = html.replace(/<p/g, '<p style="overflow-wrap:break-word;word-wrap:break-word;hyphens:auto"');
    html = html.replace(/<h[1-6]/g, '<$& style="overflow-wrap:break-word;word-wrap:break-word;hyphens:auto"');
    html = html.replace(/<li/g, '<li style="overflow-wrap:break-word;word-wrap:break-word"');
    
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