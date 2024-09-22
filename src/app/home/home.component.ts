import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";
import {PageService} from "../page.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  providers:[
    provideCloudinaryLoader('https://res.cloudinary.com/dxgro47nn')
  ]
})
export class HomeComponent implements OnInit {
  imageURL = "/v1726140911/_MG_9251-removebg-resized-croped_adfdqn.png";

  constructor(
    private pageService:PageService,
    ) {}


  ngOnInit(): void {
    this.pageService.setInitIndex(0);
  }

}
