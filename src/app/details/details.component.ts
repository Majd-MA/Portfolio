import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ProjectsService} from "../projects/projects.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less'
})
export class DetailsComponent implements OnInit{
  project: any;
  autoSlide = true;
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId)
      this.project = this.projectsService.getProjectById(projectId);

    if (!this.project) {
      this.router.navigate(['/404']);
    }

    if(this.project.images)
    setInterval(() => {
      if(this.autoSlide){
        if (this.currentIndex <= this.project.images.length - 2)
          this.currentIndex++;
        else{
          this.currentIndex=0;
        }
      }
    }, 3000);

  }

  nextImage() {
    this.autoSlide = false;
    this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
  }

  prevImage() {
    this.autoSlide = false;
    this.currentIndex = (this.currentIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  setCurrentIndex(index: number) {
    this.autoSlide = false;
    this.currentIndex = index;
  }

  goBack(){
    this.router.navigate(['/projects']);
  }
}
