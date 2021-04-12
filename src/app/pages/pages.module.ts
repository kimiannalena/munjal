import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StartComponent, ProjectListComponent, AboutMeComponent, SkillsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class PagesModule { }
