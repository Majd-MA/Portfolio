import {Component, Input, HostListener, OnInit, Inject, ElementRef, Renderer2, NgZone} from '@angular/core';
import {NgClass} from "@angular/common";
import {DotsComponent} from "../dots/dots.component";
import {PageService} from "../page.service";

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  standalone: true,
  imports: [
    NgClass,
    DotsComponent
  ],
  styleUrls: ['./arrow.component.less']
})
export class ArrowComponent implements OnInit {
  @Input() direction: 'left' | 'right' = 'left';  // Determine the direction
  isVisible: boolean = false;  // Control arrow visibility
  timeoutId: any | undefined;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.isVisible = false;
  }

  handleArrowClick() {
    if (this.direction === 'left') {
      this.pageService.previousPage();
    } else if (this.direction === 'right') {
      this.pageService.nextPage();
    }
  }

  // Show arrows when mouse moves
  @HostListener('document:mousemove', ['$event'])
  onMouseMove() {
    this.isVisible = true;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => this.isVisible = false, 2000);
  }
}
