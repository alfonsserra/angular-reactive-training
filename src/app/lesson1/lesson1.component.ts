import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Component({
  selector:    'app-lesson1',
  templateUrl: './lesson1.component.html'
})
export class Lesson1Component implements OnInit {

  public calculatedValue: number;
  public errorMessage = '';

  constructor() {
  }

  public ngOnInit() {
    this.firstObservable()
      .pipe(
        flatMap(n => this.secondObservable(n)),
        flatMap(n => this.thirdObservable(n)),
        flatMap(n => this.fourthObservable(n)),
        flatMap(n => this.fifthObservable(n)))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }

  public firstObservable(): Observable<number> {
    return of(4);
  }

  public secondObservable(n: number): Observable<number> {
    return of(n * 2)
      .pipe(delay(1000));
  }

  public thirdObservable(n: number): Observable<number> {
    return of(n * 3)
      .pipe(delay(1000));
  }

  public fourthObservable(n: number): Observable<number> {
    return of(n * 4)
      .pipe(delay(1000));
  }

  public fifthObservable(n: number): Observable<number> {
    return of(n * 5)
      .pipe(delay(1000));
  }

}
