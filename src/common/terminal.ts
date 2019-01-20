export class LogEntry {

  constructor(public date: Date, public text: string, public comments: string) {
  }

  public getDate() {

    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    const seconds = this.date.getSeconds();

    let shours = '' + hours;
    let sminutes = '' + minutes;
    let sseconds = '' + seconds;

    if (hours < 10) {
      shours = '0' + hours;
    }
    if (minutes < 10) {
      sminutes = '0' + minutes;
    }
    if (seconds < 10) {
      sseconds = '0' + seconds;
    }
    return shours + ':' + sminutes + ':' + sseconds;
  }
}

export class Terminal {

  public logHistory: Array<LogEntry> = [];

  public log(text:string, comments:string) {
    this.logHistory.push(new LogEntry(new Date(), text, comments));
  }

  public getLogHistory(): Array<LogEntry> {
    return this.logHistory;
  }

  public reset() {
    this.logHistory = [];
  }
}
