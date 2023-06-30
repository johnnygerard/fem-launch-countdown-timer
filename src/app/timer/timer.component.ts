import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from '../ticker/ticker.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, TickerComponent],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  protected days = 14;
  protected hours = 0;
  protected minutes = 0;
  protected seconds = 0;

  private timerId = 0;

  ngOnInit(): void {
    this.timerId = window.setInterval(() => this.tick(), 1000);
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

    window.clearInterval(this.timerId);
  }
}
