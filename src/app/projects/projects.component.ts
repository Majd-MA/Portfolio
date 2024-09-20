import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {PageService} from "../page.service";
import {ProjectsService} from "./projects.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgStyle,
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent implements OnInit {

  constructor(
    private pageService: PageService,
    private projectsService: ProjectsService
    ) {}

  projects: { id: string;title: string;thumbnail: string;introduction: string;overview: any;challenges: string;technologies: string[];}[] | undefined;
  isPopupVisible = false;
  selectedTags: string[] = [];
  showTip = true;
  filteredProjects :any | undefined;

  // Example categories
  resources = ['NestJS', 'Laravel', 'ThreeJS', 'Unity', 'MongoDB', "MySQL", "React", "ChromaDB"];
  technologies = ['TypeScript', 'JavaScript', "PHP", 'Python', "C#", "HTML", "CSS"];

  ngOnInit() {
    setTimeout(() => {
      this.showTip = false;
    }, 3000);

    this.pageService.setInitIndex(1);
    this.projects = this.projectsService.getAllProjects();
    this.filteredProjects = this.projects;
  }

  hideTip() {
    this.showTip = false;
  }

  toggleFilterPopup() {
    this.isPopupVisible = !this.isPopupVisible;
    this.showTip = false
  }

  isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  toggleTag(tag: string) {
    if (this.isSelected(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag); // Remove tag if already selected
    } else {
      this.selectedTags.push(tag);
    }
    this.filterProjects();
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
    this.filterProjects();
  }

  filterProjects() {
    if (this.selectedTags.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      if(this.projects){
        this.filteredProjects = this.projects.filter(project =>
          this.selectedTags.every(tag => project.technologies.includes(tag))
        );
      }
    }
  }

}

