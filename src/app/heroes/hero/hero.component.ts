import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age:  number = 45;
  
  
  public get capitalizedName() : string { // property
    return this.name.toUpperCase()
  }
  
  public getHeroDescription() : string { // metodo
    return `${this.name} -> ${this.age}`
  }

  public changeHero(): void {
    this.name = "spiderman";
  }

  public changeAge(): void {
    this.age = 30;
  }

  public resetForm(): void {
    this.name = "ironman";
    this.age = 45;
  }
  
}
