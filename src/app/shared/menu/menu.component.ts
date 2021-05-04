import { Component, OnInit } from '@angular/core';
interface MenuItem{
  ruta:string;
  texto:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  

  menu:MenuItem[] = [
    {
      ruta:'/graficas/barra',
      texto:'graficas'
    },
    {
      ruta:'/graficas/barra-doble',
      texto:'barra-doble'
    },
    {
      ruta:'/graficas/dona',
      texto:'dona'
    },
    {
      ruta:'/graficas/dona-http',
      texto:'dona http'
    }
  ]

}
