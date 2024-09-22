import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.less',
  providers: [
    provideCloudinaryLoader('https://res.cloudinary.com/dxgro47nn')
  ]
})
export class PageNotFoundComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 6000);
    }

}
