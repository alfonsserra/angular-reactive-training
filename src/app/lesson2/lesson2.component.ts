import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../common/api/api.service';
import { Terminal } from '../../common/terminal';

@Component({
  selector:    'app-lesson2',
  templateUrl: './lesson2.component.html'
})
export class Lesson2Component implements OnInit {

  public calculatedValue: number;
  public errorMessage = '';

  public terminal = new Terminal();

  constructor(protected apiService: ApiService) {
  }

  public ngOnInit() {
    this.run();
  }

  public run() {
    forkJoin(this.apiService.firstObservable(this.terminal),
      this.apiService.secondObservable(10, this.terminal),
      this.apiService.thirdObservable(1, this.terminal),
      this.apiService.fourthObservable(6, this.terminal),
      this.apiService.fifthObservable(9, this.terminal))
      .subscribe(values => this.errorMessage = values.join(', '), e => this.errorMessage = e.message);
  }

}
