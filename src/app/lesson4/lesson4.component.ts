import { Component, OnInit } from '@angular/core';
import { race } from 'rxjs';
import { ApiService } from '../../common/api/api.service';
import { Terminal } from '../../common/terminal';

@Component({
  selector:    'app-lesson4',
  templateUrl: './lesson4.component.html'
})
export class Lesson4Component implements OnInit {

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
    race(this.apiService.firstObservable(this.terminal),
      this.apiService.secondObservable(10, this.terminal),
      this.apiService.thirdObservable(1, this.terminal),
      this.apiService.fourthObservable(6, this.terminal),
      this.apiService.fifthObservable(9, this.terminal))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }
}
