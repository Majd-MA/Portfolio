import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {PageService} from "../page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  styleUrls: ['./dots.component.less']
})
export class DotsComponent implements OnInit, OnDestroy {

  currentPage: number | undefined;
  totalPages: number | undefined;
  canActivate:boolean = false;
  activate: boolean = false;
  isInteracting = false;
  startPosition: number | null = null;
  tip = false;
  previouslyHovered: boolean = false;

  constructor(
    protected router: Router,
    private pageService: PageService,
  ) {
  }

  ngOnInit(): void {
    this.totalPages = this.pageService.getTotalPages();

    this.pageService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });

    if (this.router.url === '/home'){
      setTimeout(() => {
        this.tip = true;
        if(!this.previouslyHovered){
          this.canActivate = true;
          this.activate = true;
        }
      }, 4000)

      setTimeout(() => {
        this.tip = false;
        if(!this.previouslyHovered)
          this.activate = false;
      }, 7500)

    }

    // Getting the init state
    document.addEventListener('touchstart', this.handleStart);
    document.addEventListener('mousedown', this.handleStart);
    document.addEventListener('touchmove', this.handleMove);
    document.addEventListener('mousemove', this.handleMove);
    document.addEventListener('touchend', this.handleEnd);
    document.addEventListener('mouseup', this.handleEnd);
  }

  ngOnDestroy(): void {
    document.removeEventListener('touchstart', this.handleStart);
    document.removeEventListener('mousedown', this.handleStart);
    document.removeEventListener('touchmove', this.handleMove);
    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('touchend', this.handleEnd);
    document.removeEventListener('mouseup', this.handleEnd);
  }

  handleStart = (event: TouchEvent | MouseEvent) => {
    this.isInteracting = true;

    if (event instanceof TouchEvent) {
      this.startPosition = event.touches[0].clientX;
    } else {
      this.startPosition = event.clientX;
    }
  };

  handleMove = (event: TouchEvent | MouseEvent) => {
    if (!this.isInteracting) {
      return;
    }

    const currentPosition = event.type === 'touchmove' ? event instanceof TouchEvent&&event.touches[0].clientX : event instanceof MouseEvent&&event.clientX;

    let deltaX = 0;
    if(this.startPosition)
     {
       // @ts-ignore
       deltaX = this.startPosition - currentPosition;
     }

    if (deltaX > 100) {
      this.tip=false;
      this.activate=false;
      this.pageService.nextPage();
      this.startPosition = null;
    }

    if (deltaX < -100) {
      this.tip=false;
      this.activate=false;
      this.pageService.previousPage();
      this.startPosition = null;
    }
  };

  handleEnd = () => {
    this.isInteracting = false;
    this.startPosition = null;
  };
  changePage(page: number) {
    this.tip=false;
    this.activate=false;
    this.pageService.navigateToPage(page);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.tip=false;
      this.activate=false;
      this.pageService.nextPage();
    } else if (event.key === 'ArrowLeft') {
      this.tip=false;
      this.activate=false;
      this.pageService.previousPage();
    }
  }

  onHover() {
    if (this.router.url === '/home'){
      this.canActivate = true;
      this.activate = true;
      this.previouslyHovered = true;
    }
  }

}
