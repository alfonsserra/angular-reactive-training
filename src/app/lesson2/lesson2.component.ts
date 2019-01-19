import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector:    'app-lesson2',
  templateUrl: './lesson2.component.html'
})
export class Lesson2Component implements OnInit {

  public calculatedValue: number;
  public errorMessage = '';

  constructor() {
  }

  ngOnInit() {
    forkJoin(this.firstObservable(),
      this.secondObservable(10),
      this.thirdObservable(1),
      this.fourthObservable(6),
      this.fifthObservable(9))
      .subscribe(values => this.errorMessage = values.join(', '), e => this.errorMessage = e.message);
  }

  public firstObservable(): Observable<number> {
    return of(4);
  }

  public secondObservable(n: number): Observable<number> {
    return of(n * 2)
      .pipe(delay(2000));
  }

  public thirdObservable(n: number): Observable<number> {
    return of(n * 3)
      .pipe(delay(5000));
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
