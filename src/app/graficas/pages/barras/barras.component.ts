import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#BD1A11',hoverBackgroundColor:'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'8A1A1A',hoverBackgroundColor:'red' },
    { data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C',backgroundColor:'#F075F0',hoverBackgroundColor:'red' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),
     Math.round(Math.random()*100),


    ];

    this.barChartData[1].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
 
 
     ];

     this.barChartData[2].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
 
 
     ];
  }
  

}
