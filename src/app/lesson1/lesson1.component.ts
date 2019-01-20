import { Component } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { ApiService } from '../../common/api/api.service';
import { Terminal } from '../../common/terminal';

@Component({
  selector:    'app-lesson1',
  templateUrl: './lesson1.component.html'
})
export class Lesson1Component {

  public calculatedValue: number;
  public errorMessage = '';

  public terminal = new Terminal();

  constructor(protected apiService: ApiService) {
  }

  public run() {
    this.calculatedValue = undefined;
    this.errorMessage = '';
    this.terminal.reset();
    this.apiService.firstObservable(this.terminal)
      .pipe(
        flatMap(n => this.apiService.secondObservable(n, this.terminal)),
        flatMap(n => this.apiService.thirdObservable(n, this.terminal)),
        flatMap(n => this.apiService.getRestObservable(n, this.terminal)),
        flatMap(n => this.apiService.fifthObservable(n, this.terminal)))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }
}
