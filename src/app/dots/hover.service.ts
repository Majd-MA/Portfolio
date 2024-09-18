// hover.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  private hoverSubject = new Subject<boolean>();
  hover$ = this.hoverSubject.asObservable();

  notifyHover(isHovered: boolean) {
    this.hoverSubject.next(isHovered);
  }
}
