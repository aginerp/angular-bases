import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  changeHeroName(): void{
    this.name = 'Spiderman'
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
