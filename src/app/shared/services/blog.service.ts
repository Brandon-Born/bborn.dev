import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with AI-Powered Web Development',
      excerpt: 'Learn how to incorporate AI features into your web applications and enhance user experiences.',
      content: `
        <p>Artificial Intelligence is revolutionizing web development, enabling more personalized, intelligent, and responsive web applications. In this post, we'll explore how to get started with AI-powered web development.</p>
        
        <h2>Why Integrate AI Into Your Web Applications?</h2>
        <p>AI can enhance web applications in numerous ways:</p>
        <ul>
          <li>Personalized user experiences based on behavior and preferences</li>
          <li>Intelligent search functionality and content recommendations</li>
          <li>Automated customer support through chatbots</li>
          <li>Enhanced security through anomaly detection</li>
          <li>Improved accessibility features</li>
        </ul>
        
        <h2>Getting Started with AI Integration</h2>
        <p>Here are some practical steps to begin incorporating AI into your web projects:</p>
        
        <h3>1. Start with Existing AI Services</h3>
        <p>Instead of building AI systems from scratch, leverage existing APIs and services:</p>
        <ul>
          <li>Google Cloud AI or Azure Cognitive Services for vision, speech, and language processing</li>
          <li>TensorFlow.js for running machine learning models in the browser</li>
          <li>OpenAI's APIs for natural language processing</li>
        </ul>
        
        <h3>2. Focus on Solving Real Problems</h3>
        <p>Identify specific areas where AI can add genuine value to your web application. Consider user pain points that could be addressed through intelligent automation or personalization.</p>
        
        <h3>3. Start Small and Iterate</h3>
        <p>Begin with a limited AI feature set and expand as you learn. Implementing a simple recommendation system or basic chatbot can provide valuable experience before tackling more complex AI integrations.</p>
        
        <h2>Example: Building a Simple Content Recommendation System</h2>
        <p>Here's a basic approach to implementing content recommendations:</p>
        <pre><code>
// Frontend code (Angular)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  constructor(private http: HttpClient) {}
  
  getRecommendations(userId: string, contentId: string): Observable<any[]> {
    return this.http.get<any[]>('/api/recommendations', {
      params: { userId, contentId }
    });
  }
}
        </code></pre>
        
        <p>This simple service can communicate with a backend recommendation API that implements collaborative filtering or content-based recommendations.</p>
        
        <h2>Conclusion</h2>
        <p>AI integration in web development doesn't have to be complicated. By starting small, focusing on specific problems, and leveraging existing services, you can gradually build up your expertise and create more intelligent web applications that better serve your users.</p>
        
        <p>In future posts, we'll dive deeper into specific AI implementations for web applications, including natural language processing, image recognition, and predictive analytics.</p>
      `,
      imageUrl: 'assets/images/blog/ai-web-dev.jpg',
      date: '2023-12-10',
      author: 'Jane Developer',
      categories: ['AI', 'Web Development', 'Tutorial']
    },
    {
      id: '2',
      title: 'Building Responsive UI Components with Angular',
      excerpt: 'Explore techniques for creating flexible, accessible UI components that work across all device sizes.',
      content: `
        <p>Creating responsive UI components is essential for modern web applications. In this post, we'll look at best practices for building flexible Angular components that provide a consistent experience across different devices and screen sizes.</p>
        
        <h2>Core Principles of Responsive Components</h2>
        <p>Before diving into code, let's establish some fundamental principles:</p>
        <ul>
          <li>Components should adapt gracefully to their container, not just to the viewport</li>
          <li>Design should consider touch interactions, not just mouse events</li>
          <li>Performance matters - responsive doesn't mean heavy</li>
          <li>Accessibility should be built-in, not an afterthought</li>
        </ul>
        
        <h2>Creating a Responsive Card Component</h2>
        <p>Let's build a simple but flexible card component that adapts to different containers:</p>
        
        <h3>Component Template</h3>
        <pre><code>
&lt;!-- card.component.html --&gt;
&lt;div class="card" [class.card-horizontal]="layout === 'horizontal'"&gt;
  &lt;div class="card-image" *ngIf="imageUrl"&gt;
    &lt;img [src]="imageUrl" [alt]="imageAlt || ''" /&gt;
  &lt;/div&gt;
  &lt;div class="card-content"&gt;
    &lt;h3 class="card-title" *ngIf="title"&gt;{{title}}&lt;/h3&gt;
    &lt;p class="card-description" *ngIf="description"&gt;{{description}}&lt;/p&gt;
    &lt;div class="card-actions" *ngIf="showActions"&gt;
      &lt;ng-content select="[card-actions]"&gt;&lt;/ng-content&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
        </code></pre>
        
        <h3>Component Styles</h3>
        <pre><code>
/* card.component.scss */
:host {
  display: block;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
  
  &.card-horizontal {
    flex-direction: row;
    
    .card-image {
      max-width: 40%;
    }
  }
}

.card-image {
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.card-description {
  margin-bottom: 1.5rem;
  flex: 1;
}

.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

/* Media Queries */
@media (max-width: 768px) {
  .card.card-horizontal {
    flex-direction: column;
    
    .card-image {
      max-width: 100%;
    }
  }
}
        </code></pre>
        
        <h3>Component Logic</h3>
        <pre><code>
// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() showActions = true;
}
        </code></pre>
        
        <h2>Using CSS Grid for Responsive Layouts</h2>
        <p>CSS Grid provides powerful layout capabilities that are perfect for responsive designs. Here's how you can create a responsive grid for your components:</p>
        
        <pre><code>
/* responsive-grid.component.scss */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
        </code></pre>
        
        <p>This simple grid will automatically adapt to the container width, creating as many columns as will fit with a minimum width of 300px each.</p>
        
        <h2>Best Practices for Angular Component Design</h2>
        <ul>
          <li>Use @Input decorators for configuration to make components flexible</li>
          <li>Implement sensible defaults that work across device sizes</li>
          <li>Use CSS variables (custom properties) for theming and easy customization</li>
          <li>Consider using HostListener to react to container size changes when needed</li>
          <li>Use ng-content for flexible content projection</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building responsive UI components in Angular requires a thoughtful approach to both design and implementation. By following these principles and techniques, you can create flexible components that provide an excellent user experience across all devices and screen sizes.</p>
        
        <p>In future articles, we'll explore more advanced techniques for responsive animations, performance optimization, and accessibility enhancements.</p>
      `,
      imageUrl: 'assets/images/blog/angular-components.jpg',
      date: '2023-11-22',
      author: 'Alex Frontend',
      categories: ['Angular', 'UI/UX', 'Frontend']
    },
    {
      id: '3',
      title: 'Leveraging AI to Generate Website Content',
      excerpt: 'Discover how AI tools can help create and optimize content for your websites.',
      content: `
        <p>Content creation is often one of the most time-consuming aspects of web development projects. AI tools can significantly accelerate this process, helping to generate everything from placeholder text to full blog posts. In this article, we'll explore practical approaches to using AI for website content generation.</p>
        
        <h2>The Evolution of AI Content Creation</h2>
        <p>AI-powered content generation has come a long way from basic lorem ipsum text. Modern language models can now:</p>
        <ul>
          <li>Generate contextually relevant content based on keywords or topics</li>
          <li>Match specific tones and styles (formal, conversational, technical, etc.)</li>
          <li>Create content in multiple languages</li>
          <li>Optimize content for SEO</li>
          <li>Generate product descriptions, blog posts, and marketing copy</li>
        </ul>
        
        <h2>Practical Applications in Web Development</h2>
        
        <h3>1. Rapid Prototyping with AI-Generated Content</h3>
        <p>When creating wireframes or prototypes, you can use AI to generate realistic placeholder content that better represents the final product:</p>
        <pre><code>
// Example of using an AI API to generate placeholder content
async function generatePlaceholderContent(topic, length = 'medium') {
  const response = await fetch('https://api.youraiservice.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: \`Write a \${length} paragraph about \${topic} for a website.\`,
      max_tokens: length === 'short' ? 100 : length === 'medium' ? 250 : 500,
      temperature: 0.7
    }),
  });
  
  const data = await response.json();
  return data.text;
}
        </code></pre>
        
        <h3>2. Generating Product Descriptions</h3>
        <p>For e-commerce sites, AI can help create unique product descriptions at scale:</p>
        <pre><code>
// Angular service example for product description generation
@Injectable({
  providedIn: 'root'
})
export class ProductContentService {
  constructor(private http: HttpClient) {}
  
  generateDescription(product: Product): Observable<string> {
    return this.http.post<AIResponse>('/api/content/generate', {
      productName: product.name,
      category: product.category,
      features: product.features,
      specifications: product.specifications,
      tone: 'enthusiastic'
    }).pipe(
      map(response => response.generatedText)
    );
  }
}
        </code></pre>
        
        <h3>3. Blog Content Creation Workflow</h3>
        <p>A practical workflow for blog content might look like this:</p>
        <ol>
          <li>Use AI to generate topic ideas based on your target keywords</li>
          <li>For each topic, generate an outline with key points to cover</li>
          <li>Use AI to draft sections based on the outline</li>
          <li>Human editing and refinement of the AI-generated content</li>
          <li>Final review and publishing</li>
        </ol>
        
        <h2>Balancing AI and Human Input</h2>
        <p>While AI can dramatically speed up content creation, the best results still come from a hybrid approach:</p>
        <ul>
          <li>Use AI as a starting point or to overcome writer's block</li>
          <li>Have human editors review and refine AI-generated content</li>
          <li>Inject your unique brand voice and perspective</li>
          <li>Use AI for factual content (product specs, feature lists) and humans for storytelling and brand messaging</li>
        </ul>
        
        <h2>Ethical Considerations</h2>
        <p>When using AI for content generation, keep these ethical considerations in mind:</p>
        <ul>
          <li>Transparency: Consider disclosing when content is AI-generated or AI-assisted</li>
          <li>Originality: Check AI-generated content for potential plagiarism</li>
          <li>Accuracy: Verify factual claims made by AI systems</li>
          <li>Bias: Review content for unintended biases that might have been introduced</li>
        </ul>
        
        <h2>Tools and Services to Consider</h2>
        <p>Here are some popular AI tools for content generation:</p>
        <ul>
          <li>OpenAI's GPT models (via API)</li>
          <li>Jasper AI</li>
          <li>Copy.ai</li>
          <li>Writesonic</li>
          <li>ContentBot</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI-powered content generation is revolutionizing how we approach website development. By thoughtfully incorporating these tools into your workflow, you can create more content more quickly, while still maintaining quality and brand consistency.</p>
        
        <p>Remember that AI is best used as a collaborative tool that augments human creativity rather than replacing it entirely. The most effective approach combines the efficiency of AI with the nuance and creativity that only humans can provide.</p>
      `,
      imageUrl: 'assets/images/blog/ai-content.jpg',
      date: '2023-10-15',
      author: 'Sarah Content',
      categories: ['AI', 'Content Strategy', 'Web Development']
    },
    {
      id: '4',
      title: 'Optimizing Web Performance with Modern JavaScript',
      excerpt: 'Learn techniques to make your JavaScript more efficient and your web applications faster.',
      content: `
        <p>Web performance has a direct impact on user experience and conversion rates. In this article, we'll explore modern JavaScript techniques to optimize your web applications for better performance.</p>
        
        <h2>Why Performance Matters</h2>
        <p>Studies consistently show that performance impacts business metrics:</p>
        <ul>
          <li>53% of mobile users abandon sites that take over 3 seconds to load</li>
          <li>Every 100ms improvement in load time can increase conversion rates by 1%</li>
          <li>Slow sites negatively impact SEO rankings</li>
        </ul>
        
        <h2>Code Splitting and Lazy Loading</h2>
        <p>One of the most effective ways to improve initial load time is to split your JavaScript bundle and load components only when needed:</p>
        
        <h3>Angular Route-based Lazy Loading</h3>
        <pre><code>
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  }
];
        </code></pre>
        
        <h3>Component-Level Lazy Loading</h3>
        <pre><code>
// In Angular 16+
@Component({
  selector: 'app-heavy-component',
  template: '<div>Loading...</div>',
  standalone: true
})
export class HeavyComponentLoader implements OnInit {
  component = signal&lt;Type&lt;any&gt; | null&gt;(null);

  ngOnInit() {
    // Load the component only when this component is initialized
    import('./heavy.component').then(m => {
      this.component.set(m.HeavyComponent);
    });
  }
}
        </code></pre>
        
        <h2>Virtual Scrolling for Long Lists</h2>
        <p>When displaying long lists, virtual scrolling can dramatically improve performance by only rendering items that are visible in the viewport:</p>
        
        <pre><code>
&lt;!-- In Angular with @angular/cdk --&gt;
&lt;cdk-virtual-scroll-viewport itemSize="50" class="viewport"&gt;
  &lt;div *cdkVirtualFor="let item of items" class="item"&gt;
    {{item.name}}
  &lt;/div&gt;
&lt;/cdk-virtual-scroll-viewport&gt;
        </code></pre>
        
        <h2>Web Workers for CPU-Intensive Tasks</h2>
        <p>Move heavy computations off the main thread to keep your UI responsive:</p>
        
        <pre><code>
// Creating a worker
const worker = new Worker('./heavy-calculation.worker.js');

// Sending data to the worker
worker.postMessage({
  data: largeDataset,
  parameters: {
    threshold: 0.75,
    iterations: 1000
  }
});

// Receiving results
worker.onmessage = ({ data }) => {
  console.log('Calculation complete:', data.result);
  displayResults(data.result);
};
        </code></pre>
        
        <h2>Optimizing Angular Change Detection</h2>
        <p>Angular's change detection can be optimized for better performance:</p>
        
        <h3>Using OnPush Change Detection</h3>
        <pre><code>
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
  @Input() data: readonly TableData[];
  
  // Component only updates when @Input references change
}
        </code></pre>
        
        <h3>Detaching Change Detection for Performance-Critical Sections</h3>
        <pre><code>
@Component({...})
export class ChartComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    // Detach during complex animations or calculations
    this.cdr.detach();
    
    // Perform heavy calculations or animations
    this.performComplexOperation();
    
    // Manually trigger change detection when needed
    this.cdr.detectChanges();
  }
}
        </code></pre>
        
        <h2>Memory Management Best Practices</h2>
        <p>Preventing memory leaks is crucial for long-running applications:</p>
        
        <h3>Cleaning Up Subscriptions</h3>
        <pre><code>
@Component({...})
export class DataComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  
  ngOnInit() {
    // Add all subscriptions to a single Subscription object
    this.subscription.add(
      this.dataService.getData().subscribe(data => {
        this.data = data;
      })
    );
  }
  
  ngOnDestroy() {
    // Clean up all subscriptions when the component is destroyed
    this.subscription.unsubscribe();
  }
}
        </code></pre>
        
        <h3>Using the takeUntil Pattern</h3>
        <pre><code>
@Component({...})
export class DataComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.dataService.getData().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.data = data;
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
        </code></pre>
        
        <h2>Loading Strategies</h2>
        
        <h3>Preloading Critical Resources</h3>
        <pre><code>
&lt;!-- In index.html --&gt;
&lt;link rel="preload" href="critical.css" as="style"&gt;
&lt;link rel="preload" href="critical.js" as="script"&gt;
&lt;link rel="preconnect" href="https://api.example.com"&gt;
        </code></pre>
        
        <h3>Using Intersection Observer for Lazy Loading</h3>
        <pre><code>
// Lazy load images when they're about to enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        observer.unobserve(img);
      }
    }
  });
});

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>Modern JavaScript and frameworks like Angular offer many tools for optimizing web performance. By implementing these techniques strategically, you can create faster, more responsive applications that provide a better user experience.</p>
        
        <p>Remember that performance optimization should be an ongoing process. Regularly measure your application's performance using tools like Lighthouse, WebPageTest, and browser developer tools to identify and address bottlenecks.</p>
      `,
      imageUrl: 'assets/images/blog/js-performance.jpg',
      date: '2023-09-18',
      author: 'Mike Performance',
      categories: ['JavaScript', 'Performance', 'Frontend']
    }
  ];

  constructor() { }

  getBlogPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts);
  }

  getBlogPostById(id: string): Observable<BlogPost | null> {
    const post = this.blogPosts.find(p => p.id === id) || null;
    return of(post);
  }
} 