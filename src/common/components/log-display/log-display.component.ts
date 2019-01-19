import { Component, Input, OnInit } from '@angular/core';
import { Terminal } from '../../terminal';

@Component({
  selector:    'log-display',
  templateUrl: './log-display.component.html',
  styleUrls:   ['./log-display.component.scss']
})
export class LogDisplayComponent implements OnInit {

  @Input() public terminal: Terminal;

  constructor() {
  }

  ngOnInit() {
  }

}
