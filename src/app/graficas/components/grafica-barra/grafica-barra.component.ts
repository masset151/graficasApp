import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

type NewType = Label;

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {
  @Input()horizontal:boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [
    //'2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#BD1A11',hoverBackgroundColor:'red' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'8A1A1A',hoverBackgroundColor:'red' },
    //{ data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C',backgroundColor:'#F075F0',hoverBackgroundColor:'red' }
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar'
    }
  }

}
