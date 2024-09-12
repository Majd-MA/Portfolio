import { Component } from '@angular/core';
import {NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  providers:[
    provideCloudinaryLoader('https://res.cloudinary.com/dxgro47nn')
  ]
})
export class HomeComponent {
  imageURL = "/v1726140911/_MG_9251-removebg-resized-croped_adfdqn.png"
}
