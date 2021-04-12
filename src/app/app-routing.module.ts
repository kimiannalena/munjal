import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ImpressumComponent } from './shared/components/impressum/impressum.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'products', component: SkillsComponent },
  { path: 'contact', component: ProjectListComponent },
  { path: 'celebrate', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
