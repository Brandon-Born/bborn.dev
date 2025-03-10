import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':id', component: ProjectDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ProjectsListComponent,
    ProjectDetailComponent
  ]
})
export class ProjectsModule { } 