import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project/:id', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default to home
  { path: '**', redirectTo: '/home' }  // Fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
