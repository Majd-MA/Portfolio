import {Component, HostListener, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PageService} from "../page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./dots.component.less']
})
export class DotsComponent implements OnInit {
  currentPage: number | undefined;
  totalPages: number | undefined;
  activate: boolean = false;

  constructor(
    protected router: Router,
    private pageService: PageService,
  ) {
  }

  ngOnInit(): void {
    this.totalPages = this.pageService.getTotalPages();  // Get total pages

    this.pageService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });
  }

  changePage(page: number) {
    this.activate = false;
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

  onHover() {
    if (this.router.url === '/home')
      this.activate = true;
  }

}
