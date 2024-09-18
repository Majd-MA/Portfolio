import {Component, HostListener, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PageService} from "../page.service";
import {HoverService} from "./hover.service";

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./dots.component.less']
})
export class DotsComponent implements OnInit {
  currentPage: number | undefined;
  totalPages: number | undefined;

  constructor(
    private pageService: PageService,
    private hoverService: HoverService
  ) {}

  ngOnInit(): void {
    this.totalPages = this.pageService.getTotalPages();  // Get total pages

    // Subscribe to current page changes
    this.pageService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });
  }

  // When a dot is clicked, change the current page
  changePage(page: number) {
    this.pageService.navigateToPage(page);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.pageService.nextPage();
    } else if (event.key === 'ArrowLeft') {
      this.pageService.previousPage();
    }
  }
  onHover(isHovered: boolean) {
    this.hoverService.notifyHover(isHovered);
  }
}
