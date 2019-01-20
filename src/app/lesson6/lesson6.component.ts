import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../common/api/api.service';
import { Terminal } from '../../common/terminal';
import { MessagePopupService } from 'systelab-components/widgets/modal';
import { Observable } from 'rxjs';

@Component({
  selector:    'app-lesson6',
  templateUrl: './lesson6.component.html'
})
export class Lesson6Component {

  public calculatedValue: number;
  public errorMessage = '';

  public terminal = new Terminal();

  constructor(protected apiService: ApiService, protected messagePopupService: MessagePopupService) {
  }

  public run() {
    this.calculatedValue = undefined;
    this.errorMessage = '';
    this.terminal.reset();
    this.apiService.getRestObservable(22, this.terminal)
      .pipe(
        switchMap(n => this.apiService.getRestObservable(n * 2, this.terminal)),
        switchMap(n => this.apiService.getRestObservable(n * 4, this.terminal)),
        switchMap(n => this.confirmToGoAhead('Title', n)),
        switchMap(n => this.apiService.getRestObservable(n / 2, this.terminal)),
        switchMap(n => this.apiService.getRestObservable(n * 5, this.terminal)))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }

  public confirmToGoAhead(title: string, n: number): Observable<number> {
    const entry = this.terminal.log('showMessageChain(' + n + ')', 'Shows a user modal');
    return this.messagePopupService.showYesNoQuestionPopup(title, 'Do you want to proceed with the value ' + n + '?')
      .pipe(map(
        (value) => {
          if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
          }
          if (value) {
            entry.comments += '. Returns ' + n + '.';
            return n;
          } else {
            this.terminal.error('Cancelled by the user', 'Throws an error');
            throw new Error('Cancelled by the user');
          }
        }));
  }
}
