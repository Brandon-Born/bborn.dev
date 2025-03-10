import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-image-container" [ngClass]="{'loading': isLoading, 'error': hasError}">
      <img [src]="imageUrl" [alt]="alt" (load)="onLoad()" (error)="onError()">
      <div *ngIf="hasError || isLoading" class="fallback">
        <span *ngIf="hasError">{{ alt.charAt(0) || 'P' }}</span>
        <span *ngIf="isLoading" class="loading-spinner"></span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    .project-image-container {
      width: 100%;
      height: 100%;
      position: relative;
      background-color: var(--bg-secondary);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
      font-size: 3rem;
      font-weight: bold;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class ProjectImageComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() alt: string = '';

  isLoading: boolean = true;
  hasError: boolean = false;

  ngOnInit(): void {
    // No special initialization needed now
  }

  onLoad(): void {
    this.isLoading = false;
  }

  onError(): void {
    this.isLoading = false;
    this.hasError = true;
  }
} 