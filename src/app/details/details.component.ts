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

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  currentImageIndex = 0;

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId)
      this.project = this.projectsService.getProjectById(projectId);

    if (!this.project) {
      this.router.navigate(['/404']);
    }

    if(this.project.images)
    setInterval(() => {
      this.showNextImage();
    }, 3000);

  }

  showNextImage() {
    const images = document.querySelectorAll('.image-slider .slider img');
    images[this.currentImageIndex].classList.remove('active');
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
    images[this.currentImageIndex].classList.add('active');
  }

  goBack(){
    this.router.navigate(['/projects']);
  }
}
