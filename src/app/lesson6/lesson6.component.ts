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
        switchMap(n => this.apiService.getRestObservable(n, this.terminal)),
        switchMap(n => this.apiService.getRestObservable(n, this.terminal)),
        switchMap(n => this.showMessage('Title', n)),
        switchMap(n => this.apiService.getRestObservable(n, this.terminal)),
        switchMap(n => this.apiService.getRestObservable(n, this.terminal)))
      .subscribe(n => this.calculatedValue = n, e => this.errorMessage = e.message);
  }

  public showMessage(title: string, n: number): Observable<number> {
    this.terminal.log('showMessageChain()', 'Shows a user modal');
    return this.messagePopupService.showYesNoQuestionPopup(title, 'For the moment I receive a ' + n)
      .pipe(map(
        (value) => {
          if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
          }
          if (value) {
            return n;
          } else {
            throw new Error('Cancelled by the user');
          }
        }));
  }
}
