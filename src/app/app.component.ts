import {Component, HostListener, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ArrowComponent} from "./arrow/arrow.component";
import {DotsComponent} from "./dots/dots.component";
import {PageService} from "./page.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ArrowComponent, DotsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  constructor(private pageService: PageService) {}

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.pageService.nextPage();
    } else if (event.key === 'ArrowLeft') {
      this.pageService.previousPage();
    }
  }

}
