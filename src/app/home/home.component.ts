import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";
import {PageService} from "../page.service";
import {ActivatedRoute} from "@angular/router";
import {HoverService} from "../dots/hover.service";
import {Subscription} from "rxjs";

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
export class HomeComponent implements OnInit, OnDestroy {
  imageURL = "/v1726140911/_MG_9251-removebg-resized-croped_adfdqn.png";
  isHovered = false;
  private hoverSubscription: Subscription | undefined;

  constructor(
    private pageService:PageService,
    private hoverService: HoverService,
    ) {}


  ngOnInit(): void {
    this.pageService.setInitIndex(0);
    this.hoverSubscription = this.hoverService.hover$.subscribe(isHovered => {
      this.isHovered = isHovered;
    });
  }

  ngOnDestroy() {
    if(this.hoverSubscription)
      this.hoverSubscription.unsubscribe();
  }

}
