import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from '../ticker/ticker.component';

const enum TimeSpan {
  SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  FOURTEEN_DAYS = 14 * DAY
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, TickerComponent],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {
  protected days: number;
  protected hours: number;
  protected minutes: number;
  protected seconds: number;

  private timerId: number;

  constructor() {
    let remainingTime = TimeSpan.FOURTEEN_DAYS - (Date.now() % TimeSpan.FOURTEEN_DAYS);

    this.days = Math.floor(remainingTime / TimeSpan.DAY);
    remainingTime %= TimeSpan.DAY;
    this.hours = Math.floor(remainingTime / TimeSpan.HOUR);
    remainingTime %= TimeSpan.HOUR;
    this.minutes = Math.floor(remainingTime / TimeSpan.MINUTE);
    remainingTime %= TimeSpan.MINUTE;
    this.seconds = Math.floor(remainingTime / TimeSpan.SECOND);

    this.timerId = window.setInterval(() => this.tick(), TimeSpan.SECOND);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }

  private tick(): void {
    if (this.seconds) {
      this.seconds--;
      return;
    }

    if (this.minutes) {
      this.minutes--;
      this.seconds = 59;
      return;
    }

    if (this.hours) {
      this.hours--;
      this.minutes = 59;
      this.seconds = 59;
      return;
    }

    if (this.days) {
      this.days--;
      this.hours = 23;
      this.minutes = 59;
      this.seconds = 59;
      return;
    }
    
    this.days = 13;
    this.hours = 23;
    this.minutes = 59;
    this.seconds = 59;
  }
}
