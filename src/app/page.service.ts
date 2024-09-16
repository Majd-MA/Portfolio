import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pages = ['home', 'projects', 'achievements', 'about'];  // Define the page routes
  private currentPage = new BehaviorSubject<number>(0);

  // Observable for current page
  currentPage$ = this.currentPage.asObservable();
  constructor(private router: Router) {}

  setInitIndex(index: number): void {
    this.currentPage.next(index);
  }
  // Navigate to a specific page by its index
  navigateToPage(index: number) {
    if (index >= 0 && index < this.pages.length) {
      this.currentPage.next(index);
      this.router.navigate([this.pages[index]]);
    }
  }

  // Navigate to the next page
  nextPage() {
    const newIndex = this.currentPage.getValue() + 1;
    if (newIndex < this.pages.length) {
      this.navigateToPage(newIndex);
    }
    else {
      this.navigateToPage(0);
    }
  }

  // Navigate to the previous page
  previousPage() {
    const newIndex = this.currentPage.getValue() - 1;
    if (newIndex >= 0) {
      this.navigateToPage(newIndex);
    }
    else {
      this.navigateToPage(this.pages.length - 1);
    }
  }

  getTotalPages(){
    return this.pages.length;
  }
}
