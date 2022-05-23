import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreAppService {
  isLoading = new Subject<boolean>();

  httpProgress(): Observable<boolean> {

    return this.isLoading.asObservable();
  }

  setHttpProgressStatus(inprogess: boolean) {

    this.isLoading.next(inprogess);
  }
  show() {
      this.isLoading.next(true);
  }
  hide() {
      this.isLoading.next(false);

  }

  constructor() {}
}
