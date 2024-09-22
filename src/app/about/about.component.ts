import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";
import {PageService} from "../page.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
  providers:[
    provideCloudinaryLoader('https://res.cloudinary.com/dxgro47nn')
  ]
})
export class AboutComponent implements OnInit {
  constructor(private pageService: PageService) {}

  feedbackData = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    this.pageService.setInitIndex(3);
  }
}
