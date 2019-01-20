import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/api/api.service';
import { Terminal } from '../../common/terminal';
import {  switchMap } from 'rxjs/operators';

@Component({
  selector:    'app-lesson5',
  templateUrl: './lesson5.component.html'
})
export class Lesson5Component implements OnInit {

  public calculatedValue: number;
  public errorMessage = '';

  public terminal = new Terminal();

  constructor(protected apiService: ApiService) {
  }

  public ngOnInit() {
    this.run();
  }

  public run() {
    this.calculatedValue = undefined;
    this.errorMessage = '';
    this.terminal.reset();
    this.apiService.firstObservable(this.terminal)
      .pipe(
        switchMap(n => this.apiService.secondObservable(n, this.terminal)),
        switchMap(n => this.apiService.thirdObservable(n, this.terminal)),
        switchMap(n => this.apiService.getRestObservable(n, this.terminal)),
        switchMap(n => this.apiService.fifthObservable(n, this.terminal)))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }
}
