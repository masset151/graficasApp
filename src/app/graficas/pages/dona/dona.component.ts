import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Partido Popular', 'Mas Madrid', 'PSOE','Vox','Podemos'];
  public doughnutChartData: MultiDataSet = [
    [64, 24, 24,13,10],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [

    {
      backgroundColor:[
        "#23AFFC",
        "#12F075",
        "#FA0B00",
        "#44FA04",
        "#A420EB"


      ]
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
