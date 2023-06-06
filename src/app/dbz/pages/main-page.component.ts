import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { } // INYECTADO SERVICIO// esto hace la inyeccion de dependencias, me habilita en todo este componente toda la informacion del servicio

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter (id:string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter (character: Character): void{
    this.dbzService.onNewCharacter(character);
  }

}