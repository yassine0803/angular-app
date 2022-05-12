import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Chart, registerables, ChartType, ChartData } from 'chart.js';


@Component({
  selector: 'app-chartjs',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() type: ChartType;
  @Input() data: ChartData;
  @Input() custum: boolean;
  @ViewChild('canvas') canvas: ElementRef;
  chart: Chart;

  initChart() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  changeTypeChart(event: any) {

    this.type = event.target.value as ChartType;
    this.chart.destroy();
    this.initChart();
  }


  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.initChart();
  }

}
