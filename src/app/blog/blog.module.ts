import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: ':id', component: BlogPostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    BlogListComponent,
    BlogPostComponent
  ]
})
export class BlogModule { } 