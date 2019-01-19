import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Terminal } from '../terminal';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor() {
  }

  public firstObservable(terminal: Terminal): Observable<number> {
    terminal.log('firstObservable();');
    return of(4).pipe(delay(2000));
  }

  public secondObservable(n: number, terminal: Terminal): Observable<number> {
    terminal.log('secondObservable();');
    return of(n * 2)
      .pipe(delay(4000));
  }

  public thirdObservable(n: number, terminal: Terminal): Observable<number> {
    terminal.log('thirdObservable();');
    return of(n * 3)
      .pipe(delay(1000));
  }

  public fourthObservable(n: number, terminal: Terminal): Observable<number> {
    terminal.log('fourthObservable();');
    return of(n * 4)
      .pipe(delay(5000));
  }

  public fifthObservable(n: number, terminal: Terminal): Observable<number> {
    terminal.log('fifthObservable();');
    return of(n * 5)
      .pipe(delay(1000));
  }
}
