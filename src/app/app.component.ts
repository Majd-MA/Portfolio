import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {DotsComponent} from "./dots/dots.component";
import {ProjectsService} from "./projects/projects.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, DotsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit{
  projectsUrls:string[] = ['/'];
  constructor(
    protected router: Router,
    protected projectsService: ProjectsService,
    ) {}

  ngOnInit(): void {
    let projects = this.projectsService.getAllProjects();

    projects.map(project => {
      this.projectsUrls.push('/projects/' + project.id);
    })
  }

  check(pageUrl: string){
    return this.projectsUrls?.some((url)=>url === pageUrl);
  }
}
