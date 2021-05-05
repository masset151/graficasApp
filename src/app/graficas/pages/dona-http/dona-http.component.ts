import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] //= [//'Partido Popular', 'Mas Madrid', 'PSOE','Vox','Podemos'];
  public doughnutChartData: MultiDataSet = [
    //[64, 24, 24,13,10],
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

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    
    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(({labels,values}) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values)
    }
      
      
      
      )
  }

  

}
