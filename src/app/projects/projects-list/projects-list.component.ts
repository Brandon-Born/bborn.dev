import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  
  constructor(private projectsService: ProjectsService) { }
  
  ngOnInit() {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = [...projects];
      
      // Extract unique categories
      const allCategories = projects.flatMap(p => p.categories);
      this.categories = ['All', ...Array.from(new Set<string>(allCategories))];
    });
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
    
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => 
        p.categories.includes(category)
      );
    }
  }
} 