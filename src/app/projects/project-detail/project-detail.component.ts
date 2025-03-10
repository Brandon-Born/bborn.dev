import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/models/project.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  relatedProjects: Project[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }
  
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || '';
        return this.projectsService.getProjectById(id);
      })
    ).subscribe(project => {
      this.project = project;
      
      if (project) {
        this.loadRelatedProjects(project);
      }
    });
  }
  
  private loadRelatedProjects(project: Project) {
    this.projectsService.getProjects().subscribe(projects => {
      // Find projects with similar categories
      this.relatedProjects = projects
        .filter(p => p.id !== project.id && 
                     p.categories.some(cat => project.categories.includes(cat)))
        .slice(0, 3);
    });
  }
} 