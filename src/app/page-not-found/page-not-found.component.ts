import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.less'
})
export class PageNotFoundComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
      setTimeout(() => {
        this.router.navigate(['/home']); // Replace '/other-route' with your desired route
      }, 4500);
    }

}
