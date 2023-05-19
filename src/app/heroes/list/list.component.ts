import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor']; // propiedad de la clase con sus valores
  public deletedHero?: string; //para que exista en toda mi clase, tengo que crearlo como una propiedad de LA CLASE 
  // public deletedHero: string = " "; TAMBIEN SE PUEDE HACER ASI, NO TIENE NIGUN VALOR PERO VA A SER OPCIONAL
  // siempre que haya un valor la funcion de abajo borra el ultimo de la lista

  removeLastHero():void {
    this.deletedHero = this.heroName.pop() //elimina el ultimo elemento de la lista y lo devuelve
    // si hago una variable solo va a existir en este scop
  }


}
