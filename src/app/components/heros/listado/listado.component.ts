import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=[
    "superman",
    "batman",
    "capitan cabernicola",
    "saitama",
    "volcano"
  ];
  item:string="";
  deleteHero():void {
    this.item =this.heroes.pop() || '';
  }

}
