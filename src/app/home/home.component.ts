import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../shared/services/projects.service';
import { Project } from '../shared/models/project.model';
import { ProjectImageComponent } from '../shared/components/project-image/project-image.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectImageComponent]
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}
  
  ngOnInit(): void {
    this.loadFeaturedProjects();
  }
  
  private loadFeaturedProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.featuredProjects = projects.filter(project => project.featured);
    });
  }
} 