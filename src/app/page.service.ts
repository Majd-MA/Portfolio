import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPage = new BehaviorSubject<number>(1);  // Starting at page 1
  private totalPages = 5;  // Total number of pages (could be dynamic)

  // Observable for current page
  currentPage$ = this.currentPage.asObservable();

  // Getters for current page and total pages
  getCurrentPage(): number {
    return this.currentPage.getValue();
  }

  getTotalPages(): number {
    return this.totalPages;
  }

  // Methods to navigate between pages
  nextPage() {
    const newPage = this.getCurrentPage() + 1;
    if (newPage <= this.totalPages) {
      this.currentPage.next(newPage);
    }
  }

  previousPage() {
    const newPage = this.getCurrentPage() - 1;
    if (newPage >= 1) {
      this.currentPage.next(newPage);
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.next(page);
    }
  }
}
